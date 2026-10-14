import { Controller, Post, Body, Inject } from "@nestjs/common";
import { CreateUserDto } from "@app/user";
import { CreateUserUseCase } from "@app/user";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ClientProxy } from "@nestjs/microservices";
import { BrokerEvents } from "@app/shared";

@ApiTags("Users")
@Controller("api/v1/users")
export class UsersController {
  constructor(
    // Como el usuario no requiere un microservicio distribuido por ahora (puede ser local),
    // Inyectamos directamente el caso de uso.
    private readonly createUserUseCase: CreateUserUseCase,
    @Inject("RABBITMQ_SERVICE") private readonly rabbitClient: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: "Create a new user" })
  @ApiResponse({
    status: 201,
    description: "The user has been successfully created.",
  })
  @ApiResponse({ status: 400, description: "Bad Request." })
  async createUser(@Body() dto: CreateUserDto) {
    const user = await this.createUserUseCase.execute(dto);
    // Dispara el evento asíncrono para que el microservicio de cuentas lo atrape
    this.rabbitClient.emit(BrokerEvents.USER_CREATED, {
      userId: user.id,
      email: user.email,
      name: user.name,
    });

    return user;
  }
}
