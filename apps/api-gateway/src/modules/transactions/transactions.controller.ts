import {
  Controller,
  Post,
  Body,
  Inject,
  HttpCode,
  HttpStatus,
  Get,
  Param,
  Query,
  Headers,
  ParseUUIDPipe,
  UseGuards,
  Req,
} from "@nestjs/common";
import {
  TransferFundsDto,
  RequestDepositDto,
  DepositRequestedResponse,
  GetTransferByUserUseCase,
  CreateTransferIntentUseCase,
  ConfirmTransferIntentUseCase,
  GetTransferIntentUseCase,
  RequestDepositUseCase,
  GetDepositUseCase,
} from "@app/transaction";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiHeader, ApiQuery } from "@nestjs/swagger";
import { JwtAuthGuard } from "@app/shared";

@ApiTags("Transactions")
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
@Controller("api/v1/transactions")
export class TransactionsController {
  constructor(
    @Inject(CreateTransferIntentUseCase)
    private readonly createTransferIntentUseCase: CreateTransferIntentUseCase,
    @Inject(ConfirmTransferIntentUseCase)
    private readonly confirmTransferIntentUseCase: ConfirmTransferIntentUseCase,
    @Inject(GetTransferIntentUseCase)
    private readonly getTransferIntentUseCase: GetTransferIntentUseCase,
    @Inject(RequestDepositUseCase)
    private readonly requestDepositUseCase: RequestDepositUseCase,
    @Inject(GetDepositUseCase)
    private readonly getDepositUseCase: GetDepositUseCase,
    private readonly getTransfersByUserUseCase: GetTransferByUserUseCase,
  ) {}

  // ===========================================================================
  // FLUJO 1: TRANSFERENCIAS P2P EN 2 PASOS (Patrón Two-Phase Intent)
  //
  // ¿POR QUÉ EN 2 PASOS EN LUGAR DE UN SOLO POST /transfer?
  // Para NO depender de que el frontend gestione bien una "idempotency key".
  // Si el usuario hace doble clic o el front manda keys distintas, el backend
  // toma el control emitiendo su propio identificador único (intentId) y
  // bloqueando temporalmente la cuenta origen para que no salgan dos débitos a la vez.
  // ===========================================================================

  /**
   * PASO 1 DE TRANSFERENCIA: Crear la intención de transferir.
   *
   * ¿Para qué sirve?:
   * - El usuario en la app llena el formulario (cuenta origen, cuenta destino, monto) y le da "Continuar/Siguiente".
   * - El backend valida que la cuenta origen sea tuya, que el monto tenga formato válido y crea la intención.
   * - Al crearse, la base de datos bloquea la cuenta origen mediante un índice parcial: NO se puede crear otra intención
   *   activa al mismo tiempo para esa cuenta origen (evita que un usuario mande 2 transferencias simultáneas por error).
   * - Retorna un `intentId` generado por el servidor y un tiempo de expiración (2 minutos).
   */
  @Post("transfer-intents")
  @ApiOperation({
    summary: "Paso 1: Crear intención de transferencia (bloquea la cuenta origen contra transferencias simultáneas)",
  })
  @ApiResponse({ status: 201, description: "Intención creada exitosamente con estado CREATED." })
  @ApiResponse({ status: 409, description: "Conflicto: la cuenta origen ya tiene una transferencia en curso." })
  async createTransferIntent(@Body() dto: TransferFundsDto, @Req() req: any) {
    const intent = await this.createTransferIntentUseCase.execute(req.user.id, dto);
    return { message: "Transfer intent created. Confirm it to execute.", data: intent };
  }

  /**
   * PASO 2 DE TRANSFERENCIA: Confirmar y ejecutar la transferencia.
   *
   * ¿Para qué sirve?:
   * - Cuando el usuario ve el modal de "¿Estás seguro de enviar $X a Y?" y presiona "Confirmar / Pagar".
   * - El backend cambia el estado de forma atómica de CREATED a PROCESSING.
   *   -> Si el usuario presiona el botón 50 veces seguidas por desesperación, SOLO LA PRIMERA petición
   *      logra hacer el cambio de estado y mover el dinero. Las otras 49 simplemente devuelven el estado
   *      actual sin mover un solo centavo adicional.
   * - Ejecuta la transacción en Postgres: debita origen, acredita destino, crea los asientos en el libro mayor
   *   y marca la intención como COMPLETED.
   */
  @Post("transfer-intents/:id/confirm")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: "Paso 2: Confirmar y ejecutar la intención (idempotente: clics repetidos devuelven el estado sin cobrar doble)",
  })
  @ApiResponse({ status: 200, description: "Estado actual de la intención (COMPLETED, FAILED, etc.)." })
  async confirmTransferIntent(@Param("id", ParseUUIDPipe) id: string, @Req() req: any) {
    const intent = await this.confirmTransferIntentUseCase.execute(req.user.id, id);
    return { data: intent };
  }

  /**
   * CONSULTA DE ESTADO DE TRANSFERENCIA: Polling / Verificación.
   *
   * ¿Para qué sirve?:
   * - Permite al frontend consultar cómo va la intención si la pantalla se cerró o se refrescó
   *   durante el proceso.
   * - Retorna si está en CREATED, PROCESSING, COMPLETED o FAILED.
   */
  @Get("transfer-intents/:id")
  @ApiOperation({ summary: "Consultar estado de una intención de transferencia (para polling o reconexión)" })
  async getTransferIntent(@Param("id", ParseUUIDPipe) id: string, @Req() req: any) {
    const intent = await this.getTransferIntentUseCase.execute(req.user.id, id);
    return { data: intent };
  }

  // ===========================================================================
  // FLUJO 2: RECARGAS DESDE BANCO EXTERNO (Asíncrono y Resiliente)
  //
  // ¿POR QUÉ ASÍNCRONO?
  // El banco externo es lento (tarda hasta 25 segundos) y suele fallar por conexión (20%).
  // Si dejáramos la petición HTTP esperando al banco, los hilos de la API colapsarían.
  // ===========================================================================

  /**
   * SOLICITAR RECARGA CON TARJETA DE DÉBITO.
   *
   * ¿Para qué sirve?:
   * - El usuario ingresa cuánto dinero quiere ingresar a su cuenta desde su tarjeta externa.
   * - El endpoint responde inmediatamente con 202 ACCEPTED (estado PENDING). La API queda libre en menos de 20ms.
   * - Se guarda en la base de datos la recarga para que un worker en background se encargue de hablar con el banco.
   * - Regla anti-doble cobro: La base de datos tiene una restricción que impide que existan dos recargas activas
   *   idénticas (misma cuenta + monto + tarjeta). Si el usuario refresca la página o reintenta, se le devuelve
   *   la misma recarga ya registrada sin duplicar cobros bancarios.
   */
  @Post("deposit")
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiHeader({
    name: 'x-idempotency-key',
    description: 'Llave opcional del frontend para deduplicar peticiones',
    required: false,
  })
  @ApiOperation({ summary: "Solicitar recarga externa (responde 202 Accepted de inmediato y procesa en background)" })
  @ApiResponse({
    status: 202,
    description: "Recarga aceptada y en proceso en segundo plano.",
  })
  @ApiResponse({ status: 400, description: "Datos inválidos o cuenta no encontrada." })
  @ApiResponse({ status: 409, description: "Conflicto: la misma llave de idempotencia se usó con datos diferentes." })
  async requestDeposit(
    @Body() dto: RequestDepositDto,
    @Req() req: any,
    @Headers('x-idempotency-key') idempotencyKey?: string,
  ): Promise<DepositRequestedResponse> {
    return this.requestDepositUseCase.execute(req.user.id, dto, idempotencyKey);
  }

  /**
   * CONSULTAR ESTADO DE LA RECARGA (Polling de Depósito).
   *
   * ¿Para qué sirve?:
   * - Como la recarga se procesa en segundo plano (toma entre 5 y 25 segundos con el banco),
   *   la app del usuario consulta este endpoint cada 2-3 segundos para saber si el estado ya cambió
   *   de PENDING -> COMPLETED o FAILED para mostrarle el check verde en pantalla.
   */
  @Get("deposits/:id")
  @ApiOperation({ summary: "Consultar el estado del depósito bancario (para polling en la pantalla de espera)" })
  async getDeposit(@Param("id", ParseUUIDPipe) id: string, @Req() req: any) {
    const deposit = await this.getDepositUseCase.execute(req.user.id, id);
    return { data: deposit };
  }

  // ===========================================================================
  // FLUJO 3: HISTORIAL DE TRANSACCIONES (CQRS / Feed de lectura ultra rápido)
  //
  // ¿POR QUÉ KEYSET / CURSOR PAGINATION?
  // Es la pantalla más visitada (90% del tráfico). La paginación por OFFSET (página 1, 2, 3...)
  // se vuelve lentísima en millones de registros. Con cursores indexados (`createdAt, id`),
  // las consultas responden siempre en < 15ms.
  // ===========================================================================

  /**
   * OBTENER HISTORIAL DE MOVIMIENTOS PAGINADO.
   *
   * ¿Para qué sirve?:
   * - Trae la lista de todos los movimientos del usuario (tanto transferencias enviadas/recibidas como recargas).
   * - Lee directamente del Libro Mayor (`LedgerEntry`), garantizando datos consistentes.
   * - Retorna los ítems y un `nextCursor` para que el frontend pueda hacer "scroll infinito" de forma rápida.
   */
  @Get("history")
  @ApiOperation({ summary: "Obtener historial de transacciones del usuario con paginación basada en cursor (< 50ms)" })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 20 })
  @ApiQuery({ name: 'cursor', required: false, type: String, description: 'Cursor opaco recibido en la página anterior' })
  @ApiResponse({ status: 200, description: "Lista de movimientos contables del usuario" })
  async getHistory(
    @Req() req: any,
    @Query('limit') limit?: string,
    @Query('cursor') cursor?: string,
  ) {
    const parsedLimit = limit ? parseInt(limit, 10) : undefined;
    const history = await this.getTransfersByUserUseCase.execute(req.user.id, {
      limit: parsedLimit,
      cursor,
    });
    return { data: history };
  }

  /**
   * ALIAS DE HISTORIAL (Compatibilidad).
   *
   * ¿Para qué sirve?:
   * - Mantiene retrocompatibilidad con la ruta anterior `transfers-by-user` para que no se rompan
   *   clientes que ya la estén consumiendo.
   */
  @Get("transfers-by-user")
  @ApiOperation({ summary: "Alias para obtener historial (mantenido por compatibilidad hacia atrás)" })
  @ApiResponse({ status: 200, description: "Lista de transferencias" })
  async getTransfersByUser(
    @Req() req: any,
    @Query('limit') limit?: string,
    @Query('cursor') cursor?: string,
  ) {
    return this.getHistory(req, limit, cursor);
  }
}
