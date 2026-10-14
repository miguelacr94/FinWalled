# 💳 FinWallet — High-Throughput & Fault-Tolerant Transactional Engine

[![Node.js](https://img.shields.io/badge/Node.js-v20+-green.svg)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-v10-red.svg)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue.svg)](https://www.postgresql.org/)
[![RabbitMQ](https://img.shields.io/badge/RabbitMQ-3.12-orange.svg)](https://www.rabbitmq.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-forestgreen.svg)](https://www.mongodb.com/)
[![Architecture](https://img.shields.io/badge/Architecture-EDA%20%7C%20Hexagonal%20%7C%20CQRS-purple.svg)](#arquitectura-y-patrones-clave)

FinWallet es el motor transaccional de nueva generación diseñado para procesar transferencias financieras de alta concurrencia (**10,000+ tx/min**), depósitos bancarios asíncronos y consultas de historial ultrarrápidas (**< 50ms**) garantizando estricta consistencia contable, cero dinero fantasma e idempotencia de extremo a extremo.

---

## 📌 Tabla de Contenidos

1. [Contexto y Problemática de Negocio](#-contexto-y-problemática-de-negocio)
2. [Arquitectura y Patrones Clave](#-arquitectura-y-patrones-clave)
3. [Casos de Uso Principales](#-casos-de-uso-principales)
4. [Stack Tecnológico](#-stack-tecnológico)
5. [Estructura del Proyecto](#-estructura-del-proyecto)
6. [Puesta en Marcha (Local / Docker)](#-puesta-en-marcha-local--docker)
7. [Endpoints Principales (API Gateway)](#-endpoints-principales-api-gateway)
8. [Estrategias de Concurrencia y Resiliencia](#-estrategias-de-concurrencia-y-resiliencia)

---

## 🏢 Contexto y Problemática de Negocio

En una fase de hipercrecimiento con más de **10,000 transacciones por minuto en picos**, los sistemas monolíticos tradicionales fallan típicamente en tres frentes críticos:

| Problema Crítico                      | Impacto en el Negocio                                                                                           | Solución en FinWallet                                                                                           |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **Doble Clic & Concurrencia Extrema** | Clientes haciendo clic 50 veces simultáneas generan balances negativos o dinero duplicado ("dinero fantasma").  | **Doble partida contable (Ledger)** + **Transacciones ACID con Locks** + **Validación de Balance No Negativo**. |
| **Terceros Lentos e Inestables**      | La pasarela bancaria ("BankAPI") tarda hasta 25s y falla en el 20% de peticiones, agotando los hilos HTTP.      | **Desacoplamiento asíncrono (`202 Accepted`)** + **RabbitMQ** + **Circuit Breaker** + **Idempotencia**.         |
| **Saturación en Lecturas (Feed)**     | El 90% del tráfico busca el historial de movimientos esperando tiempos menores a 50ms, saturando el motor OLTP. | **Paginación eficiente por cursor opaco** indexado ($O(1)$) preparada para separación CQRS.                     |

---

## 🏛 Arquitectura y Patrones Clave

FinWallet está diseñado con principios de **Clean / Hexagonal Architecture** y **Event-Driven Architecture (EDA)**:

```mermaid
flowchart TD
    Client([Cliente / Web / Mobile]) -->|HTTP / REST + JWT| Gateway[API Gateway / Throttler / Helmet]
    Gateway -->|HTTP / RPC| TransactService[Transactions Core]

    subgraph "Escritura Transaccional (ACID)"
        TransactService -->|Doble Partida / Locks| Postgres[(PostgreSQL OLTP)]
        TransactService -->|Guarda Evento| Outbox[(Outbox Table)]
    end

    subgraph "Procesamiento Asíncrono Resiliente"
        OutboxProcessor[Outbox Worker / SKIP LOCKED] -->|Lee Lotes| Outbox
        OutboxProcessor -->|Publica| RabbitMQ{{RabbitMQ Broker}}
        RabbitMQ -->|Consume Evento| DepositWorker[Deposit Worker]
        DepositWorker -->|Circuit Breaker / Retries| BankAPI[(BankAPI Legacy)]
    end

    subgraph "Auditoría e Idempotencia"
        Gateway -->|Idempotency Key & Audit| Mongo[(MongoDB)]
    end
```

### Patrones de Diseño Implementados:

1. **Double-Entry Ledger (Libro Mayor de Doble Partida):**
   - El dinero nunca se incrementa ni se reduce arbitrariamente. Toda operación crea al menos dos asientos contables balanceados (`DEBIT` y `CREDIT`) donde $\sum \text{Débitos} = \sum \text{Créditos}$.
2. **Transactional Outbox Pattern (`SKIP LOCKED`):**
   - Asegura entrega garantizada de eventos hacia RabbitMQ sin inconsistencias dual-write entre la base de datos y el broker de mensajería.
3. **Circuit Breaker (Disyuntor):**
   - Protege los recursos locales abriéndose ante fallos reiterados del banco externo, evitando agotar hilos y permitiendo degradación elegante.
4. **Idempotency Keys:**
   - Evita duplicar recargas o transferencias ante desconexiones de red, reintentos de cliente o refrescos de pantalla.
5. **Cursor-based Pagination:**
   - Paginación basada en cursores opacos (`keyset pagination`), eliminando el costo $O(N)$ del clásico `OFFSET/LIMIT`.

---

## 🎯 Casos de Uso Principales

### 1. Transferencias Peer-to-Peer (P2P) Inmediatas

- **Flujo:** Envío de fondos entre usuarios vía email o identificador de cuenta.
- **Garantías:**
  - Verificación estricta de fondos disponibles.
  - Bloqueo pesimista/optimista a nivel de registro para evitar saldo negativo ante ráfagas de solicitudes simultáneas.
  - Generación de asientos de libro mayor inmutables.

### 2. Recargas Asíncronas (Depósitos Bancarios)

- **Flujo:** Solicitud de depósito contra banco externo legacy.
- **Garantías:**
  - El Gateway responde de inmediato con `202 Accepted` y el identificador de la operación.
  - Un worker especializado procesa la transacción en background consumiendo desde RabbitMQ.
  - En caso de latencia extrema o fallos de red (20%), el Circuit Breaker y los reintentos exponenciales gestionan la resiliencia sin bloquear la API.

### 3. Consulta de Historial / Feed en Alta Concurrencia

- **Flujo:** Consulta paginada de todos los débitos y créditos del usuario.
- **Garantías:**
  - Tiempo de respuesta constante ($< 50\text{ms}$) sin degradación por volumen de registros históricos.
  - Cursor codificado en base64 con sellado temporal.

---

## 💻 Stack Tecnológico

| Componente                      | Tecnología             | Razón de Elección                                                                             |
| :------------------------------ | :--------------------- | :-------------------------------------------------------------------------------------------- |
| **Framework**                   | NestJS 10 (TypeScript) | Arquitectura modular, inyección de dependencias robusta y soporte nativo para microservicios. |
| **Base de Datos Transaccional** | PostgreSQL 15          | Soporte ACID estricto, row-level locks, restricciones `CHECK` y aislamiento transaccional.    |
| **ORM / Query Builder**         | Prisma ORM             | Tipado estricto end-to-end, migraciones versionadas y control transaccional `$transaction`.   |
| **Message Broker**              | RabbitMQ               | Enrutamiento AMQP flexible, confiabilidad en colas, reintentos y soporte de DLQ.              |
| **Auditoría e Idempotencia**    | MongoDB                | Esquema flexible para payload de auditoría, enmascaramiento de datos y TTL indexes.           |
| **Seguridad Perimetral**        | Helmet & Rate Limiting | Protección contra ataques de fuerza bruta, DoS y cabeceras HTTP inseguras.                    |

---

## 📂 Estructura del Proyecto

```text
FinWallet/
├── apps/
│   ├── api-gateway/       # Punto de entrada HTTP perimetral, auth, throttler, idempotencia
│   ├── accounts/          # Gestión de cuentas y balances
│   ├── transactions/      # Motor transaccional, ledger, outbox y depósito
│   └── notifications/     # Consumidor de eventos de notificación
├── libs/
│   ├── account/           # Dominio y casos de uso de cuentas
│   ├── auth/              # JWT, estrategias Passport y guardas de seguridad
│   ├── transaction/       # Entidades contables, outbox processor, circuit breaker
│   └── shared/            # Interceptores, auditoría MongoDB, utilidades de cursor y logging
├── docker-compose.yml     # Orquestación de PostgreSQL, RabbitMQ y MongoDB
└── technical_assessment.md # Especificación y requerimientos técnicos del reto
```

---

## 🚀 Puesta en Marcha (Local / Docker)

### 1. Clonar el repositorio

```bash
git clone https://github.com/miguelacr94/FinWalled.git
cd FinWalled
```

### 2. Configurar Variables de Entorno

Copia o verifica tu archivo `.env`:

```env
PORT=3000
DATABASE_URL="postgresql://postgres:password@localhost:5433/finwallet?schema=public"
RABBITMQ_URL="amqp://user:password@localhost:5672"
MONGO_URI="mongodb://localhost:27017/finwallet"
JWT_SECRET="super-secret-jwt-key"
```

### 3. Levantar Infraestructura con Docker

```bash
docker compose up -d
```

Esto inicializará:

- **PostgreSQL:** Puerto `5433` (mapeado a `5432` interno)
- **RabbitMQ:** Puerto `5672` (AMQP) y `15672` (Management Dashboard: user `user`, pass `password`)
- **MongoDB:** Puerto `27017`

### 4. Instalar Dependencias y Generar Prisma Client

```bash
pnpm install
npx prisma generate
npx prisma db push
```

### 5. Iniciar la Aplicación

```bash
# Iniciar todos los servicios concurrentemente
npm run start:all

# O iniciar individualmente en modo desarrollo
npm run start:dev api-gateway
npm run start:dev transactions
npm run start:dev accounts
```

---

## 📡 Endpoints Principales (API Gateway)

Documentación interactiva disponible en Swagger: `http://localhost:3000/docs`

| Método | Ruta                     | Descripción                                     | Cabeceras Clave                                            |
| :----- | :----------------------- | :---------------------------------------------- | :--------------------------------------------------------- |
| `POST` | `/auth/login`            | Autenticación y obtención de JWT Bearer token   | `Content-Type: application/json`                           |
| `POST` | `/transactions/transfer` | Transferencia P2P inmediata                     | `Authorization: Bearer <token>`, `Idempotency-Key: <uuid>` |
| `POST` | `/transactions/deposit`  | Solicitud de depósito bancario asíncrono        | `Authorization: Bearer <token>`, `Idempotency-Key: <uuid>` |
| `GET`  | `/transactions/history`  | Historial paginado por cursor ($< 50\text{ms}$) | `Authorization: Bearer <token>` (`?limit=20&cursor=...`)   |

---

## 🛡️ Estrategias de Concurrencia y Resiliencia

### 1. Prevención de Saldo Negativo

```sql
-- Ejecutado dentro de transacciones atómicas de Prisma con bloqueo de fila:
SELECT balance FROM "Account" WHERE id = :accountId FOR UPDATE;
-- El motor SQL serializa accesos simultáneos y rechaza la transacción si balance < amount.
```

### 2. Procesamiento Outbox Concurrente Seguro

```typescript
// Workers concurrentes consumiendo sin pisarse mediante SKIP LOCKED:
SELECT * FROM "OutboxEvent"
WHERE status = 'PENDING'
ORDER BY "createdAt" ASC
LIMIT 50
FOR UPDATE SKIP LOCKED;
```

---

## 👨‍💻 Autor

- **Miguel Contreras** — _Backend-Developer_
- GitHub: [@miguelacr94](https://github.com/miguelacr94)
- Repositorio: [https://github.com/miguelacr94/FinWalled](https://github.com/miguelacr94/FinWalled)
