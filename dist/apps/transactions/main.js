import * as __rspack_external__nestjs_common_a04939da from "@nestjs/common";
import * as __rspack_external__nestjs_core_d7b00a1a from "@nestjs/core";
import * as __rspack_external__nestjs_microservices_a8954161 from "@nestjs/microservices";
import * as __rspack_external__nestjs_mongoose_8807637e from "@nestjs/mongoose";
import * as __rspack_external__nestjs_passport_18907953 from "@nestjs/passport";
import * as __rspack_external__nestjs_schedule_17036d12 from "@nestjs/schedule";
import * as __rspack_external__nestjs_swagger_7cd450b5 from "@nestjs/swagger";
import * as __rspack_external__prisma_client_accounts_252b4ede from "@prisma/client-accounts";
import * as __rspack_external_bcryptjs from "bcryptjs";
import * as __rspack_external_crypto from "crypto";
import * as __rspack_external_mongoose from "mongoose";
import * as __rspack_external_passport_jwt_dfbe26e1 from "passport-jwt";
import * as __rspack_external_rxjs from "rxjs";
import * as __rspack_external_rxjs_operators_2eaa0997 from "rxjs/operators";
var __webpack_modules__ = ({
"@nestjs/common"(module) {

module.exports = __rspack_external__nestjs_common_a04939da;


},
"@nestjs/core"(module) {

module.exports = __rspack_external__nestjs_core_d7b00a1a;


},
"@nestjs/microservices"(module) {

module.exports = __rspack_external__nestjs_microservices_a8954161;


},
"@nestjs/mongoose"(module) {

module.exports = __rspack_external__nestjs_mongoose_8807637e;


},
"@nestjs/passport"(module) {

module.exports = __rspack_external__nestjs_passport_18907953;


},
"@nestjs/schedule"(module) {

module.exports = __rspack_external__nestjs_schedule_17036d12;


},
"@nestjs/swagger"(module) {

module.exports = __rspack_external__nestjs_swagger_7cd450b5;


},
"@prisma/client-accounts"(module) {

module.exports = __rspack_external__prisma_client_accounts_252b4ede;


},
"bcryptjs"(module) {

module.exports = __rspack_external_bcryptjs;


},
"crypto"(module) {

module.exports = __rspack_external_crypto;


},
"mongoose"(module) {

module.exports = __rspack_external_mongoose;


},
"passport-jwt"(module) {

module.exports = __rspack_external_passport_jwt_dfbe26e1;


},
"rxjs"(module) {

module.exports = __rspack_external_rxjs;


},
"rxjs/operators"(module) {

module.exports = __rspack_external_rxjs_operators_2eaa0997;


},
"./apps/transactions/src/main.ts"(__webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(__webpack_module__, async function (__rspack_load_async_deps, __rspack_async_done) { try {
__webpack_require__.r(__webpack_exports__);
/* import */ var _nestjs_core__rspack_import_0 = __webpack_require__("@nestjs/core");
/* import */ var _transactions_module_js__rspack_import_1 = __webpack_require__("./apps/transactions/src/transactions.module.ts");
/* import */ var _nestjs_microservices__rspack_import_2 = __webpack_require__("@nestjs/microservices");



async function bootstrap() {
    const app = await _nestjs_core__rspack_import_0.NestFactory.createMicroservice(_transactions_module_js__rspack_import_1.TransactionsModule, {
        transport: _nestjs_microservices__rspack_import_2.Transport.RMQ,
        options: {
            urls: [
                process.env.RABBITMQ_URL || 'amqp://localhost:5672'
            ],
            queue: 'transactions_queue',
            queueOptions: {
                durable: true
            }
        }
    });
    await app.listen();
    console.log('Transactions Microservice is listening via RabbitMQ...');
}
await bootstrap();

__rspack_async_done();
} catch(e) { __rspack_async_done(e); } }, 1);

},
"./apps/transactions/src/transactions.controller.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TransactionsController: () => (TransactionsController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_microservices__rspack_import_1 = __webpack_require__("@nestjs/microservices");
/* import */ var _app_shared__rspack_import_2 = __webpack_require__("./libs/shared/src/index.ts");
/* import */ var _app_transaction__rspack_import_3 = __webpack_require__("./libs/transaction/src/index.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}




class TransactionsController {
    async handleDepositRequested(data) {
        this.logger.log(`📥 Recibido evento de RabbitMQ para depósito: ${data.depositId}`);
        // RabbitMQ esperará a que esta promesa se resuelva para marcar el mensaje como entregado
        await this.processDepositUseCase.execute(data.depositId, data.accountId, data.amount, data.cardToken);
    }
    async handleTransferCompleted(data) {
        this.logger.log(`📚 [CQRS Historial] Recibido evento de transferencia exitosa en el Microservicio de Transacciones.`);
        this.logger.log(`Registrando en base de datos de solo lectura: ${JSON.stringify(data, null, 2)}`);
        // Disparamos un Evento de Integración hacia Notificaciones
        this.logger.log(`📤 Enviando evento 'notify.transfer.completed' al microservicio de Notificaciones...`);
        this.notificationsClient.emit('notify.transfer.completed', data);
    }
    constructor(processDepositUseCase, notificationsClient){
        _define_property(this, "processDepositUseCase", void 0);
        _define_property(this, "notificationsClient", void 0);
        _define_property(this, "logger", void 0);
        this.processDepositUseCase = processDepositUseCase;
        this.notificationsClient = notificationsClient;
        this.logger = new _nestjs_common__rspack_import_0.Logger(TransactionsController.name);
    }
}
_ts_decorate([
    (0,_nestjs_microservices__rspack_import_1.EventPattern)(_app_shared__rspack_import_2.BrokerEvents.DEPOSIT_REQUESTED),
    _ts_param(0, (0,_nestjs_microservices__rspack_import_1.Payload)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], TransactionsController.prototype, "handleDepositRequested", null);
_ts_decorate([
    (0,_nestjs_microservices__rspack_import_1.EventPattern)('FUNDS_TRANSFERRED'),
    _ts_param(0, (0,_nestjs_microservices__rspack_import_1.Payload)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], TransactionsController.prototype, "handleTransferCompleted", null);
TransactionsController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)(),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Inject)('RABBITMQ_SERVICE')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _app_transaction__rspack_import_3.ProcessDepositUseCase === "undefined" ? Object : _app_transaction__rspack_import_3.ProcessDepositUseCase,
        typeof _nestjs_microservices__rspack_import_1.ClientProxy === "undefined" ? Object : _nestjs_microservices__rspack_import_1.ClientProxy
    ])
], TransactionsController);


},
"./apps/transactions/src/transactions.module.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TransactionsModule: () => (TransactionsModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _transactions_controller_js__rspack_import_1 = __webpack_require__("./apps/transactions/src/transactions.controller.ts");
/* import */ var _app_transaction__rspack_import_2 = __webpack_require__("./libs/transaction/src/index.ts");
/* import */ var _nestjs_microservices__rspack_import_3 = __webpack_require__("@nestjs/microservices");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class TransactionsModule {
}
TransactionsModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_microservices__rspack_import_3.ClientsModule.register([
                {
                    name: 'RABBITMQ_SERVICE',
                    transport: _nestjs_microservices__rspack_import_3.Transport.RMQ,
                    options: {
                        urls: [
                            process.env.RABBITMQ_URL || 'amqp://user:password@localhost:5672'
                        ],
                        queue: 'notifications_queue',
                        queueOptions: {
                            durable: true
                        }
                    }
                }
            ])
        ],
        controllers: [
            _transactions_controller_js__rspack_import_1.TransactionsController
        ],
        providers: [
            _app_transaction__rspack_import_2.ProcessDepositUseCase,
            _app_transaction__rspack_import_2.BankApiService,
            {
                provide: _app_transaction__rspack_import_2.EVENT_BUS_PORT,
                useClass: _app_transaction__rspack_import_2.RabbitMQEventBusAdapter
            },
            {
                provide: _app_transaction__rspack_import_2.TRANSACTION_REPOSITORY,
                useClass: _app_transaction__rspack_import_2.PrismaTransactionRepository
            }
        ]
    })
], TransactionsModule);


},
"./libs/account/src/application/use-cases/create-account.usecase.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateAccountUseCase: () => (CreateAccountUseCase)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var crypto__rspack_import_1 = __webpack_require__("crypto");
/* import */ var _domain_entities_account_entity_js__rspack_import_2 = __webpack_require__("./libs/account/src/domain/entities/account.entity.ts");
/* import */ var _domain_repositories_account_repository_interface_js__rspack_import_3 = __webpack_require__("./libs/account/src/domain/repositories/account.repository.interface.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}




class CreateAccountUseCase {
    async execute(userId) {
        const id = (0,crypto__rspack_import_1.randomUUID)();
        const accountNumber = (0,crypto__rspack_import_1.randomInt)(1000000000, 9999999999).toString();
        // 1. Usar la Entidad de Dominio (Factory method)
        const newAccount = _domain_entities_account_entity_js__rspack_import_2.Account.create(id, accountNumber, userId);
        // 2. Persistir a través del Puerto (Repositorio)
        await this.accountRepository.save(newAccount);
        console.log(`[Account Microservice] Created account ${newAccount.getAccountNumber()} for user ${newAccount.getUserId()}`);
    }
    constructor(accountRepository){
        _define_property(this, "accountRepository", void 0);
        this.accountRepository = accountRepository;
    }
}
CreateAccountUseCase = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Inject)(_domain_repositories_account_repository_interface_js__rspack_import_3.ACCOUNT_REPOSITORY)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof IAccountRepository === "undefined" ? Object : IAccountRepository
    ])
], CreateAccountUseCase);


},
"./libs/account/src/domain/entities/account.entity.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Account: () => (Account)
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
class Account {
    static create(id, accountNumber, userId, bank = 'FinWallet', type = 'SAVINGS') {
        // Aquí puedes meter lógicas internas. Por ejemplo, validar que accountNumber tenga 10 dígitos.
        if (accountNumber.length !== 10) {
            throw new Error('Account number must be exactly 10 digits');
        }
        return new Account(id, accountNumber, bank, userId, 0, 'ACTIVE', type, new Date(), 0);
    }
    // Hydrate an existing account from the database
    static load(id, accountNumber, bank, userId, balance, status, type, createdAt, version) {
        return new Account(id, accountNumber, bank, userId, balance, status, type, createdAt, version);
    }
    // Business Rule: Withdraw money ensuring we don't go below 0 and status is ACTIVE
    withdraw(amount) {
        if (this.status !== 'ACTIVE') {
            throw new Error('Cannot withdraw from an inactive account');
        }
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be greater than zero');
        }
        if (this.balance < amount) {
            throw new Error('Insufficient funds'); // Rule A & B implementation
        }
        this.balance -= amount;
    }
    // Business Rule: Deposit money
    deposit(amount) {
        if (this.status !== 'ACTIVE') {
            throw new Error('Cannot deposit to an inactive account');
        }
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than zero');
        }
        this.balance += amount;
    }
    // Getters
    getId() {
        return this.id;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getBank() {
        return this.bank;
    }
    getUserId() {
        return this.userId;
    }
    getBalance() {
        return this.balance;
    }
    getStatus() {
        return this.status;
    }
    getType() {
        return this.type;
    }
    getVersion() {
        return this.version;
    }
    constructor(id, accountNumber, bank, userId, balance, status, type, createdAt, version){
        _define_property(this, "id", void 0);
        _define_property(this, "accountNumber", void 0);
        _define_property(this, "bank", void 0);
        _define_property(this, "userId", void 0);
        _define_property(this, "balance", void 0);
        _define_property(this, "status", void 0);
        _define_property(this, "type", void 0);
        _define_property(this, "createdAt", void 0);
        _define_property(this, "version", void 0);
        this.id = id;
        this.accountNumber = accountNumber;
        this.bank = bank;
        this.userId = userId;
        this.balance = balance;
        this.status = status;
        this.type = type;
        this.createdAt = createdAt;
        this.version = version;
    }
}


},
"./libs/account/src/domain/repositories/account.repository.interface.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ACCOUNT_REPOSITORY: () => (ACCOUNT_REPOSITORY)
});
const ACCOUNT_REPOSITORY = 'ACCOUNT_REPOSITORY';


},
"./libs/account/src/index.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ACCOUNT_REPOSITORY: () => (/* reexport safe */ _domain_repositories_account_repository_interface_js__rspack_import_1.ACCOUNT_REPOSITORY),
  Account: () => (/* reexport safe */ _domain_entities_account_entity_js__rspack_import_0.Account),
  CreateAccountUseCase: () => (/* reexport safe */ _application_use_cases_create_account_usecase_js__rspack_import_2.CreateAccountUseCase),
  PrismaAccountRepository: () => (/* reexport safe */ _infrastructure_persistence_prisma_account_repository_js__rspack_import_3.PrismaAccountRepository)
});
/* import */ var _domain_entities_account_entity_js__rspack_import_0 = __webpack_require__("./libs/account/src/domain/entities/account.entity.ts");
/* import */ var _domain_repositories_account_repository_interface_js__rspack_import_1 = __webpack_require__("./libs/account/src/domain/repositories/account.repository.interface.ts");
/* import */ var _application_use_cases_create_account_usecase_js__rspack_import_2 = __webpack_require__("./libs/account/src/application/use-cases/create-account.usecase.ts");
/* import */ var _infrastructure_persistence_prisma_account_repository_js__rspack_import_3 = __webpack_require__("./libs/account/src/infrastructure/persistence/prisma-account.repository.ts");






},
"./libs/account/src/infrastructure/persistence/prisma-account.repository.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrismaAccountRepository: () => (PrismaAccountRepository)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _prisma_client_accounts__rspack_import_1 = __webpack_require__("@prisma/client-accounts");
/* import */ var _domain_entities_account_entity_js__rspack_import_2 = __webpack_require__("./libs/account/src/domain/entities/account.entity.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



class PrismaAccountRepository {
    async save(account) {
        await this.prisma.account.upsert({
            where: {
                id: account.getId()
            },
            update: {
                balance: account.getBalance(),
                status: account.getStatus(),
                version: account.getVersion()
            },
            create: {
                id: account.getId(),
                accountNumber: account.getAccountNumber(),
                bank: account.getBank(),
                userId: account.getUserId(),
                balance: account.getBalance(),
                status: account.getStatus(),
                type: account.getType(),
                version: account.getVersion()
            }
        });
    }
    async findById(id) {
        const data = await this.prisma.account.findUnique({
            where: {
                id
            }
        });
        if (!data) return null;
        return this.mapToDomain(data);
    }
    async findByUserId(userId) {
        const records = await this.prisma.account.findMany({
            where: {
                userId
            }
        });
        return records.map(this.mapToDomain);
    }
    mapToDomain(data) {
        return _domain_entities_account_entity_js__rspack_import_2.Account.load(data.id, data.accountNumber, data.bank, data.userId, data.balance, data.status, data.type, data.createdAt, data.version);
    }
    constructor(){
        _define_property(this, "prisma", new _prisma_client_accounts__rspack_import_1.PrismaClient()); // En producción usaríamos un PrismaService inyectable
    }
}
PrismaAccountRepository = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], PrismaAccountRepository);


},
"./libs/shared/src/auth/jwt-auth.guard.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JwtAuthGuard: () => (JwtAuthGuard)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_passport__rspack_import_1 = __webpack_require__("@nestjs/passport");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


class JwtAuthGuard extends (0,_nestjs_passport__rspack_import_1.AuthGuard)('jwt') {
}
JwtAuthGuard = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], JwtAuthGuard);


},
"./libs/shared/src/auth/jwt.strategy.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JwtStrategy: () => (JwtStrategy)
});
/* import */ var passport_jwt__rspack_import_0 = __webpack_require__("passport-jwt");
/* import */ var _nestjs_passport__rspack_import_1 = __webpack_require__("@nestjs/passport");
/* import */ var _nestjs_common__rspack_import_2 = __webpack_require__("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class JwtStrategy extends (0,_nestjs_passport__rspack_import_1.PassportStrategy)(passport_jwt__rspack_import_0.Strategy) {
    async validate(payload) {
        // This payload is the decoded JWT. What we return here gets attached to request.user
        return {
            id: payload.sub,
            email: payload.email,
            role: payload.role
        };
    }
    constructor(){
        super({
            jwtFromRequest: passport_jwt__rspack_import_0.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'default-secret'
        });
    }
}
JwtStrategy = _ts_decorate([
    (0,_nestjs_common__rspack_import_2.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], JwtStrategy);


},
"./libs/shared/src/auth/roles.decorator.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ROLES_KEY: () => (ROLES_KEY),
  Roles: () => (Roles)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");

const ROLES_KEY = 'roles';
const Roles = (...roles)=>(0,_nestjs_common__rspack_import_0.SetMetadata)(ROLES_KEY, roles);


},
"./libs/shared/src/auth/roles.guard.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RolesGuard: () => (RolesGuard)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_core__rspack_import_1 = __webpack_require__("@nestjs/core");
/* import */ var _roles_decorator_js__rspack_import_2 = __webpack_require__("./libs/shared/src/auth/roles.decorator.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class RolesGuard {
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(_roles_decorator_js__rspack_import_2.ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (!requiredRoles) {
            return true; // No roles required, access granted
        }
        const { user } = context.switchToHttp().getRequest();
        // Assuming user object injected by Passport JWT has a 'role' property
        return requiredRoles.includes(user?.role);
    }
    constructor(reflector){
        _define_property(this, "reflector", void 0);
        this.reflector = reflector;
    }
}
RolesGuard = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_core__rspack_import_1.Reflector === "undefined" ? Object : _nestjs_core__rspack_import_1.Reflector
    ])
], RolesGuard);


},
"./libs/shared/src/events/broker-events.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BrokerEvents: () => (BrokerEvents)
});
const BrokerEvents = {
    USER_CREATED: 'user.created',
    DEPOSIT_REQUESTED: 'deposit.requested',
    DEPOSIT_COMPLETED: 'deposit.completed'
};


},
"./libs/shared/src/filters/all-exceptions.filter.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AllExceptionsFilter: () => (AllExceptionsFilter)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_core__rspack_import_1 = __webpack_require__("@nestjs/core");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class AllExceptionsFilter {
    catch(exception, host) {
        // En ciertos contextos (ej. microservicios TCP/RabbitMQ), HttpAdapterHost puede no estar disponible
        const { httpAdapter } = this.httpAdapterHost || {};
        const ctx = host.switchToHttp();
        // Si no estamos en contexto HTTP (ej. estamos en RabbitMQ), solo logueamos
        if (!httpAdapter) {
            console.error('Non-HTTP Exception:', exception);
            return;
        }
        const httpStatus = exception instanceof _nestjs_common__rspack_import_0.HttpException ? exception.getStatus() : _nestjs_common__rspack_import_0.HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionResponse = exception instanceof _nestjs_common__rspack_import_0.HttpException ? exception.getResponse() : {
            message: 'Internal server error'
        };
        const responseBody = {
            statusCode: httpStatus,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
            message: exceptionResponse.message || exceptionResponse || 'Something went wrong'
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
    constructor(httpAdapterHost){
        _define_property(this, "httpAdapterHost", void 0);
        this.httpAdapterHost = httpAdapterHost;
    }
}
AllExceptionsFilter = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Catch)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_core__rspack_import_1.HttpAdapterHost === "undefined" ? Object : _nestjs_core__rspack_import_1.HttpAdapterHost
    ])
], AllExceptionsFilter);


},
"./libs/shared/src/idempotency/idempotency.interceptor.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IdempotencyInterceptor: () => (IdempotencyInterceptor)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var rxjs__rspack_import_1 = __webpack_require__("rxjs");
/* import */ var rxjs_operators__rspack_import_2 = __webpack_require__("rxjs/operators");
/* import */ var _nestjs_mongoose__rspack_import_3 = __webpack_require__("@nestjs/mongoose");
/* import */ var mongoose__rspack_import_4 = __webpack_require__("mongoose");
/* import */ var _idempotency_schema_js__rspack_import_5 = __webpack_require__("./libs/shared/src/idempotency/idempotency.schema.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}






class IdempotencyInterceptor {
    async intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const idempotencyKey = request.headers['x-idempotency-key'];
        // Si es un método seguro (GET), no aplicamos idempotencia
        if (request.method === 'GET') {
            return next.handle();
        }
        if (!idempotencyKey) {
            throw new _nestjs_common__rspack_import_0.BadRequestException('El header x-idempotency-key es obligatorio para esta operación.');
        }
        try {
            // 1. Buscamos si ya procesamos esta llave
            const existingRecord = await this.idempotencyModel.findOne({
                key: idempotencyKey
            });
            if (existingRecord) {
                this.logger.log(`[Idempotency] Petición duplicada interceptada. Devolviendo respuesta en caché para llave: ${idempotencyKey}`);
                return (0,rxjs__rspack_import_1.of)(existingRecord.response);
            }
        } catch (error) {
            this.logger.error(`Error consultando MongoDB para idempotencia: ${error}`);
        }
        // 2. Si no existe, dejamos que el controlador procese la petición
        return next.handle().pipe((0,rxjs_operators__rspack_import_2.tap)(async (response)=>{
            try {
                // 3. Guardamos la respuesta exitosa para futuras peticiones repetidas
                await this.idempotencyModel.create({
                    key: idempotencyKey,
                    response
                });
                this.logger.log(`[Idempotency] Respuesta guardada exitosamente para llave: ${idempotencyKey}`);
            } catch (error) {
                // Ignoramos errores de llave duplicada (ej. concurrencia en milisegundos)
                if (error.code !== 11000) {
                    this.logger.error(`Error guardando llave de idempotencia: ${error}`);
                }
            }
        }));
    }
    constructor(idempotencyModel){
        _define_property(this, "idempotencyModel", void 0);
        _define_property(this, "logger", void 0);
        this.idempotencyModel = idempotencyModel;
        this.logger = new _nestjs_common__rspack_import_0.Logger(IdempotencyInterceptor.name);
    }
}
IdempotencyInterceptor = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_mongoose__rspack_import_3.InjectModel)(_idempotency_schema_js__rspack_import_5.IdempotencyRecord.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof mongoose__rspack_import_4.Model === "undefined" ? Object : mongoose__rspack_import_4.Model
    ])
], IdempotencyInterceptor);


},
"./libs/shared/src/idempotency/idempotency.module.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IdempotencyModule: () => (IdempotencyModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__("@nestjs/mongoose");
/* import */ var _idempotency_schema_js__rspack_import_2 = __webpack_require__("./libs/shared/src/idempotency/idempotency.schema.ts");
/* import */ var _idempotency_interceptor_js__rspack_import_3 = __webpack_require__("./libs/shared/src/idempotency/idempotency.interceptor.ts");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class IdempotencyModule {
}
IdempotencyModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_mongoose__rspack_import_1.MongooseModule.forFeature([
                {
                    name: _idempotency_schema_js__rspack_import_2.IdempotencyRecord.name,
                    schema: _idempotency_schema_js__rspack_import_2.IdempotencyRecordSchema
                }
            ])
        ],
        providers: [
            _idempotency_interceptor_js__rspack_import_3.IdempotencyInterceptor
        ],
        exports: [
            _idempotency_interceptor_js__rspack_import_3.IdempotencyInterceptor,
            _nestjs_mongoose__rspack_import_1.MongooseModule
        ]
    })
], IdempotencyModule);


},
"./libs/shared/src/idempotency/idempotency.schema.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IdempotencyRecord: () => (IdempotencyRecord),
  IdempotencyRecordSchema: () => (IdempotencyRecordSchema)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__("@nestjs/mongoose");
/* import */ var mongoose__rspack_import_1 = __webpack_require__("mongoose");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class IdempotencyRecord extends mongoose__rspack_import_1.Document {
    constructor(...args){
        super(...args), _define_property(this, "key", void 0), _define_property(this, "response", void 0), // TTL index: MongoDB borrará este registro automáticamente después de 24 horas
        _define_property(this, "createdAt", void 0);
    }
}
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        unique: true,
        index: true
    }),
    _ts_metadata("design:type", String)
], IdempotencyRecord.prototype, "key", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        type: Object,
        required: true
    }),
    _ts_metadata("design:type", Object)
], IdempotencyRecord.prototype, "response", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        type: Date,
        default: Date.now,
        expires: 86400
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], IdempotencyRecord.prototype, "createdAt", void 0);
IdempotencyRecord = _ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Schema)({
        timestamps: true
    })
], IdempotencyRecord);
const IdempotencyRecordSchema = _nestjs_mongoose__rspack_import_0.SchemaFactory.createForClass(IdempotencyRecord);


},
"./libs/shared/src/index.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AllExceptionsFilter: () => (/* reexport safe */ _filters_all_exceptions_filter_js__rspack_import_7.AllExceptionsFilter),
  AuditInterceptor: () => (/* reexport safe */ _observability_audit_interceptor_js__rspack_import_9.AuditInterceptor),
  AuditLog: () => (/* reexport safe */ _observability_audit_log_schema_js__rspack_import_8.AuditLog),
  AuditLogSchema: () => (/* reexport safe */ _observability_audit_log_schema_js__rspack_import_8.AuditLogSchema),
  BrokerEvents: () => (/* reexport safe */ _events_broker_events_js__rspack_import_6.BrokerEvents),
  HashUtil: () => (/* reexport safe */ _utils_hash_util_js__rspack_import_0.HashUtil),
  IdempotencyInterceptor: () => (/* reexport safe */ _idempotency_idempotency_interceptor_js__rspack_import_12.IdempotencyInterceptor),
  IdempotencyModule: () => (/* reexport safe */ _idempotency_idempotency_module_js__rspack_import_13.IdempotencyModule),
  IdempotencyRecord: () => (/* reexport safe */ _idempotency_idempotency_schema_js__rspack_import_11.IdempotencyRecord),
  IdempotencyRecordSchema: () => (/* reexport safe */ _idempotency_idempotency_schema_js__rspack_import_11.IdempotencyRecordSchema),
  JwtAuthGuard: () => (/* reexport safe */ _auth_jwt_auth_guard_js__rspack_import_3.JwtAuthGuard),
  JwtStrategy: () => (/* reexport safe */ _auth_jwt_strategy_js__rspack_import_4.JwtStrategy),
  ObservabilityModule: () => (/* reexport safe */ _observability_observability_module_js__rspack_import_10.ObservabilityModule),
  ROLES_KEY: () => (/* reexport safe */ _auth_roles_decorator_js__rspack_import_1.ROLES_KEY),
  Roles: () => (/* reexport safe */ _auth_roles_decorator_js__rspack_import_1.Roles),
  RolesGuard: () => (/* reexport safe */ _auth_roles_guard_js__rspack_import_2.RolesGuard),
  TransformInterceptor: () => (/* reexport safe */ _interceptors_transform_interceptor_js__rspack_import_5.TransformInterceptor)
});
/* import */ var _utils_hash_util_js__rspack_import_0 = __webpack_require__("./libs/shared/src/utils/hash.util.ts");
/* import */ var _auth_roles_decorator_js__rspack_import_1 = __webpack_require__("./libs/shared/src/auth/roles.decorator.ts");
/* import */ var _auth_roles_guard_js__rspack_import_2 = __webpack_require__("./libs/shared/src/auth/roles.guard.ts");
/* import */ var _auth_jwt_auth_guard_js__rspack_import_3 = __webpack_require__("./libs/shared/src/auth/jwt-auth.guard.ts");
/* import */ var _auth_jwt_strategy_js__rspack_import_4 = __webpack_require__("./libs/shared/src/auth/jwt.strategy.ts");
/* import */ var _interceptors_transform_interceptor_js__rspack_import_5 = __webpack_require__("./libs/shared/src/interceptors/transform.interceptor.ts");
/* import */ var _events_broker_events_js__rspack_import_6 = __webpack_require__("./libs/shared/src/events/broker-events.ts");
/* import */ var _filters_all_exceptions_filter_js__rspack_import_7 = __webpack_require__("./libs/shared/src/filters/all-exceptions.filter.ts");
/* import */ var _observability_audit_log_schema_js__rspack_import_8 = __webpack_require__("./libs/shared/src/observability/audit-log.schema.ts");
/* import */ var _observability_audit_interceptor_js__rspack_import_9 = __webpack_require__("./libs/shared/src/observability/audit.interceptor.ts");
/* import */ var _observability_observability_module_js__rspack_import_10 = __webpack_require__("./libs/shared/src/observability/observability.module.ts");
/* import */ var _idempotency_idempotency_schema_js__rspack_import_11 = __webpack_require__("./libs/shared/src/idempotency/idempotency.schema.ts");
/* import */ var _idempotency_idempotency_interceptor_js__rspack_import_12 = __webpack_require__("./libs/shared/src/idempotency/idempotency.interceptor.ts");
/* import */ var _idempotency_idempotency_module_js__rspack_import_13 = __webpack_require__("./libs/shared/src/idempotency/idempotency.module.ts");












// Idempotency





},
"./libs/shared/src/interceptors/transform.interceptor.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TransformInterceptor: () => (TransformInterceptor)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var rxjs_operators__rspack_import_1 = __webpack_require__("rxjs/operators");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


class TransformInterceptor {
    intercept(context, next) {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const statusCode = response.statusCode;
        return next.handle().pipe((0,rxjs_operators__rspack_import_1.map)((data)=>({
                statusCode,
                message: statusCode >= 400 ? 'Error' : 'Success',
                data: data || null
            })));
    }
}
TransformInterceptor = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], TransformInterceptor);


},
"./libs/shared/src/observability/audit-log.schema.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuditLog: () => (AuditLog),
  AuditLogSchema: () => (AuditLogSchema)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__("@nestjs/mongoose");
/* import */ var mongoose__rspack_import_1 = __webpack_require__("mongoose");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class AuditLog extends mongoose__rspack_import_1.Document {
    constructor(...args){
        super(...args), _define_property(this, "method", void 0), _define_property(this, "url", void 0), _define_property(this, "userId", void 0), _define_property(this, "body", void 0), _define_property(this, "statusCode", void 0), _define_property(this, "durationMs", void 0), _define_property(this, "responseBody", void 0);
    }
}
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true
    }),
    _ts_metadata("design:type", String)
], AuditLog.prototype, "method", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true
    }),
    _ts_metadata("design:type", String)
], AuditLog.prototype, "url", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)(),
    _ts_metadata("design:type", String)
], AuditLog.prototype, "userId", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        type: Object
    }),
    _ts_metadata("design:type", Object)
], AuditLog.prototype, "body", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)(),
    _ts_metadata("design:type", Number)
], AuditLog.prototype, "statusCode", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)(),
    _ts_metadata("design:type", Number)
], AuditLog.prototype, "durationMs", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        type: Object
    }),
    _ts_metadata("design:type", Object)
], AuditLog.prototype, "responseBody", void 0);
AuditLog = _ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Schema)({
        timestamps: true
    })
], AuditLog);
const AuditLogSchema = _nestjs_mongoose__rspack_import_0.SchemaFactory.createForClass(AuditLog);


},
"./libs/shared/src/observability/audit.interceptor.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuditInterceptor: () => (AuditInterceptor)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var rxjs_operators__rspack_import_1 = __webpack_require__("rxjs/operators");
/* import */ var _nestjs_mongoose__rspack_import_2 = __webpack_require__("@nestjs/mongoose");
/* import */ var mongoose__rspack_import_3 = __webpack_require__("mongoose");
/* import */ var _audit_log_schema_js__rspack_import_4 = __webpack_require__("./libs/shared/src/observability/audit-log.schema.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}





class AuditInterceptor {
    /**
   * Enmascara información PII (Personally Identifiable Information)
   * de acuerdo con normativas PCI-DSS y GDPR antes de ir a los logs.
   */ maskSensitiveData(data) {
        if (!data || typeof data !== 'object') {
            return data;
        }
        if (Array.isArray(data)) {
            return data.map((item)=>this.maskSensitiveData(item));
        }
        const maskedObj = {
            ...data
        };
        for (const key of Object.keys(maskedObj)){
            if (typeof maskedObj[key] === 'object') {
                maskedObj[key] = this.maskSensitiveData(maskedObj[key]);
            } else if (typeof maskedObj[key] === 'string') {
                const lowerKey = key.toLowerCase();
                // 1. Ocultar contraseñas y tokens por completo
                if (lowerKey.includes('password') || lowerKey.includes('token') || lowerKey === 'cvv') {
                    maskedObj[key] = '********';
                } else if (lowerKey.includes('email')) {
                    const [user, domain] = maskedObj[key].split('@');
                    if (domain) {
                        maskedObj[key] = `${user.charAt(0)}***@${domain}`;
                    } else {
                        maskedObj[key] = '***@***';
                    }
                }
            }
        }
        return maskedObj;
    }
    intercept(context, next) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const { method, url, body, user } = request;
        const startTime = Date.now();
        return next.handle().pipe((0,rxjs_operators__rspack_import_1.tap)(async (data)=>{
            const durationMs = Date.now() - startTime;
            try {
                // Guardar en MongoDB sin bloquear la respuesta
                await this.auditLogModel.create({
                    method,
                    url,
                    userId: user?.id,
                    body: this.maskSensitiveData(body),
                    statusCode: response.statusCode,
                    durationMs,
                    responseBody: this.maskSensitiveData(data)
                });
                this.logger.log(`[Audit] ${method} ${url} - ${durationMs}ms - Guardado en MongoDB`);
            } catch (error) {
                this.logger.error(`Error guardando auditoría: ${error.message}`);
            }
        }), (0,rxjs_operators__rspack_import_1.catchError)(async (error)=>{
            const durationMs = Date.now() - startTime;
            try {
                await this.auditLogModel.create({
                    method,
                    url,
                    userId: user?.id,
                    body: this.maskSensitiveData(body),
                    statusCode: error.status || 500,
                    durationMs,
                    responseBody: {
                        error: error.message
                    }
                });
            } catch (auditError) {}
            throw error;
        }));
    }
    constructor(auditLogModel){
        _define_property(this, "auditLogModel", void 0);
        _define_property(this, "logger", void 0);
        this.auditLogModel = auditLogModel;
        this.logger = new _nestjs_common__rspack_import_0.Logger(AuditInterceptor.name);
    }
}
AuditInterceptor = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_mongoose__rspack_import_2.InjectModel)(_audit_log_schema_js__rspack_import_4.AuditLog.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof mongoose__rspack_import_3.Model === "undefined" ? Object : mongoose__rspack_import_3.Model
    ])
], AuditInterceptor);


},
"./libs/shared/src/observability/observability.module.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ObservabilityModule: () => (ObservabilityModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__("@nestjs/mongoose");
/* import */ var _audit_log_schema_js__rspack_import_2 = __webpack_require__("./libs/shared/src/observability/audit-log.schema.ts");
/* import */ var _audit_interceptor_js__rspack_import_3 = __webpack_require__("./libs/shared/src/observability/audit.interceptor.ts");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class ObservabilityModule {
}
ObservabilityModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Global)(),
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_mongoose__rspack_import_1.MongooseModule.forFeature([
                {
                    name: _audit_log_schema_js__rspack_import_2.AuditLog.name,
                    schema: _audit_log_schema_js__rspack_import_2.AuditLogSchema
                }
            ])
        ],
        providers: [
            _audit_interceptor_js__rspack_import_3.AuditInterceptor
        ],
        exports: [
            _audit_interceptor_js__rspack_import_3.AuditInterceptor,
            _nestjs_mongoose__rspack_import_1.MongooseModule
        ]
    })
], ObservabilityModule);


},
"./libs/shared/src/utils/hash.util.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HashUtil: () => (HashUtil)
});
/* import */ var bcryptjs__rspack_import_0 = __webpack_require__("bcryptjs");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}

class HashUtil {
    static async hash(plainText) {
        const salt = await bcryptjs__rspack_import_0.genSalt(this.SALT_ROUNDS);
        return bcryptjs__rspack_import_0.hash(plainText, salt);
    }
    static async compare(plainText, hash) {
        return bcryptjs__rspack_import_0.compare(plainText, hash);
    }
}
_define_property(HashUtil, "SALT_ROUNDS", 10);


},
"./libs/transaction/src/application/dto/deposit.dto.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RequestDepositDto: () => (RequestDepositDto)
});
/* import */ var _nestjs_swagger__rspack_import_0 = __webpack_require__("@nestjs/swagger");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class RequestDepositDto {
    constructor(){
        _define_property(this, "accountId", void 0);
        _define_property(this, "amount", void 0);
        _define_property(this, "cardToken", void 0);
    }
}
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 'acc-uuid-123',
        description: 'Account ID to deposit into'
    }),
    _ts_metadata("design:type", String)
], RequestDepositDto.prototype, "accountId", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 500.0,
        description: 'Amount to deposit'
    }),
    _ts_metadata("design:type", Number)
], RequestDepositDto.prototype, "amount", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 'tok_visa_123',
        description: 'Card token from frontend stripe/bank'
    }),
    _ts_metadata("design:type", String)
], RequestDepositDto.prototype, "cardToken", void 0);


},
"./libs/transaction/src/application/dto/transfer-funds.dto.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TransferFundsDto: () => (TransferFundsDto)
});
/* import */ var _nestjs_swagger__rspack_import_0 = __webpack_require__("@nestjs/swagger");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class TransferFundsDto {
    constructor(){
        _define_property(this, "fromAccountId", void 0);
        _define_property(this, "toAccountId", void 0);
        _define_property(this, "amount", void 0);
    }
}
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 'acc-uuid-123',
        description: 'Sender account ID'
    }),
    _ts_metadata("design:type", String)
], TransferFundsDto.prototype, "fromAccountId", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 'acc-uuid-456',
        description: 'Receiver account ID'
    }),
    _ts_metadata("design:type", String)
], TransferFundsDto.prototype, "toAccountId", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 1500.50,
        description: 'Amount to transfer'
    }),
    _ts_metadata("design:type", Number)
], TransferFundsDto.prototype, "amount", void 0);


},
"./libs/transaction/src/application/dto/transfer.dto.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);



},
"./libs/transaction/src/application/use-cases/get-transfer-by-user.usecase.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GetTransferByUserUseCase: () => (GetTransferByUserUseCase)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _domain_repositories_transaction_repository_interface_js__rspack_import_1 = __webpack_require__("./libs/transaction/src/domain/repositories/transaction.repository.interface.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}


class GetTransferByUserUseCase {
    async execute(userId) {
        if (!userId) {
            throw new _nestjs_common__rspack_import_0.BadRequestException("El userId es requerido para obtener las transferencias.");
        }
        this.logger.log(`Procesando obtener transferencias del usuario ${userId}...`);
        try {
            const transactions = await this.transactionRepository.getTransfersByUser(userId);
            this.logger.log(`[EXITO] Transferencias del usuario ${userId} obtenidas correctamente.`);
            return transactions.map((t)=>({
                    transactionId: t.getId(),
                    fromAccountId: t.getFromAccountId(),
                    toAccountId: t.getToAccountId(),
                    amount: t.getAmount(),
                    status: t.getStatus()
                }));
        } catch (error) {
            this.logger.error(`[FALLO] No se pudo obtener las transferencias del usuario ${userId}: ${error.message}`);
            // En un sistema real aquí se marca el depósito como FAILED en la base de datos o
            // se lanza una excepción para que RabbitMQ lo vuelva a encolar y reintentar si es 503.
            throw error;
        }
    }
    constructor(transactionRepository){
        _define_property(this, "transactionRepository", void 0);
        _define_property(this, "logger", void 0);
        this.transactionRepository = transactionRepository;
        this.logger = new _nestjs_common__rspack_import_0.Logger(GetTransferByUserUseCase.name);
    }
}
GetTransferByUserUseCase = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Inject)(_domain_repositories_transaction_repository_interface_js__rspack_import_1.TRANSACTION_REPOSITORY)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof ITransactionRepository === "undefined" ? Object : ITransactionRepository
    ])
], GetTransferByUserUseCase);


},
"./libs/transaction/src/application/use-cases/process-deposit.usecase.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProcessDepositUseCase: () => (ProcessDepositUseCase)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _infrastructure_external_bank_api_service_js__rspack_import_1 = __webpack_require__("./libs/transaction/src/infrastructure/external/bank-api.service.ts");
/* import */ var _domain_repositories_transaction_repository_interface_js__rspack_import_2 = __webpack_require__("./libs/transaction/src/domain/repositories/transaction.repository.interface.ts");
/* import */ var _app_shared__rspack_import_3 = __webpack_require__("./libs/shared/src/index.ts");
/* import */ var _domain_interfaces_event_bus_interface_js__rspack_import_4 = __webpack_require__("./libs/transaction/src/domain/interfaces/event-bus.interface.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}





class ProcessDepositUseCase {
    async execute(depositId, accountId, amount, cardToken) {
        this.logger.log(`Procesando depósito ${depositId} para la cuenta ${accountId}...`);
        try {
            // 1. Llamar al API externa inestable (Esto tomará 5-15 segundos)
            await this.bankApiService.processDeposit(amount, cardToken);
            // 2. Si llegamos hasta aquí, el banco cobró con éxito la tarjeta.
            // Ahora debemos acreditar el saldo en la base de datos de manera atómica.
            await this.transactionRepository.processDeposit(depositId, accountId, amount);
            this.logger.log(`[EXITO] Depósito ${depositId} completado. Saldo acreditado a ${accountId}.`);
            // Emitir evento asíncrono para notificaciones
            await this.eventBus.emitEvent(_app_shared__rspack_import_3.BrokerEvents.DEPOSIT_COMPLETED, {
                depositId,
                accountId,
                amount
            });
        } catch (error) {
            this.logger.error(`[FALLO] No se pudo completar el depósito ${depositId}: ${error.message}`);
            // En un sistema real aquí se marca el depósito como FAILED en la base de datos o
            // se lanza una excepción para que RabbitMQ lo vuelva a encolar y reintentar si es 503.
            throw error;
        }
    }
    constructor(bankApiService, eventBus, transactionRepository){
        _define_property(this, "bankApiService", void 0);
        _define_property(this, "eventBus", void 0);
        _define_property(this, "transactionRepository", void 0);
        _define_property(this, "logger", void 0);
        this.bankApiService = bankApiService;
        this.eventBus = eventBus;
        this.transactionRepository = transactionRepository;
        this.logger = new _nestjs_common__rspack_import_0.Logger(ProcessDepositUseCase.name);
    }
}
ProcessDepositUseCase = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Inject)(_infrastructure_external_bank_api_service_js__rspack_import_1.BankApiService)),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Inject)(_domain_interfaces_event_bus_interface_js__rspack_import_4.EVENT_BUS_PORT)),
    _ts_param(2, (0,_nestjs_common__rspack_import_0.Inject)(_domain_repositories_transaction_repository_interface_js__rspack_import_2.TRANSACTION_REPOSITORY)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _infrastructure_external_bank_api_service_js__rspack_import_1.BankApiService === "undefined" ? Object : _infrastructure_external_bank_api_service_js__rspack_import_1.BankApiService,
        typeof IEventBus === "undefined" ? Object : IEventBus,
        typeof ITransactionRepository === "undefined" ? Object : ITransactionRepository
    ])
], ProcessDepositUseCase);


},
"./libs/transaction/src/application/use-cases/transfer-funds.usecase.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TransferFundsUseCase: () => (TransferFundsUseCase)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _domain_repositories_transaction_repository_interface_js__rspack_import_1 = __webpack_require__("./libs/transaction/src/domain/repositories/transaction.repository.interface.ts");
/* import */ var _domain_entities_transaction_entity_js__rspack_import_2 = __webpack_require__("./libs/transaction/src/domain/entities/transaction.entity.ts");
/* import */ var crypto__rspack_import_3 = __webpack_require__("crypto");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}




class TransferFundsUseCase {
    async execute(dto) {
        this.logger.log(`Iniciando transferencia desde ${dto.fromAccountId} hacia ${dto.toAccountId} por monto $${dto.amount}...`);
        // 1. Crear la entidad de dominio (Valida reglas puras como monto > 0 y cuentas distintas)
        const transactionId = (0,crypto__rspack_import_3.randomUUID)();
        const transaction = _domain_entities_transaction_entity_js__rspack_import_2.Transaction.create(transactionId, dto.fromAccountId, dto.toAccountId, dto.amount);
        try {
            // 2. Ejecutar lógica de base de datos a través del repositorio (UoW, Outbox pattern y Optimistic Locking abstraídos)
            await this.transactionRepository.processTransfer(transaction);
            transaction.markAsCompleted();
            this.logger.log(`[EXITO] Transferencia ${transactionId} procesada y guardada con patrón Outbox.`);
        } catch (error) {
            this.logger.error(`[FALLO] No se pudo procesar la transferencia ${transactionId}: ${error.message}`);
            throw error;
        }
        return {
            transactionId: transaction.getId(),
            fromAccountId: transaction.getFromAccountId(),
            toAccountId: transaction.getToAccountId(),
            amount: transaction.getAmount(),
            status: transaction.getStatus()
        };
    }
    constructor(transactionRepository){
        _define_property(this, "transactionRepository", void 0);
        _define_property(this, "logger", void 0);
        this.transactionRepository = transactionRepository;
        this.logger = new _nestjs_common__rspack_import_0.Logger(TransferFundsUseCase.name);
    }
}
TransferFundsUseCase = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Inject)(_domain_repositories_transaction_repository_interface_js__rspack_import_1.TRANSACTION_REPOSITORY)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof ITransactionRepository === "undefined" ? Object : ITransactionRepository
    ])
], TransferFundsUseCase);


},
"./libs/transaction/src/application/workers/outbox.processor.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OutboxProcessor: () => (OutboxProcessor)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_schedule__rspack_import_1 = __webpack_require__("@nestjs/schedule");
/* import */ var _domain_repositories_transaction_repository_interface_js__rspack_import_2 = __webpack_require__("./libs/transaction/src/domain/repositories/transaction.repository.interface.ts");
/* import */ var _domain_interfaces_event_bus_interface_js__rspack_import_3 = __webpack_require__("./libs/transaction/src/domain/interfaces/event-bus.interface.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}




class OutboxProcessor {
    /**
   * Se ejecuta cada 10 segundos buscando eventos PENDING en el Outbox.
   */ async processOutboxEvents() {
        // Prevenir ejecuciones superpuestas si el procesamiento toma mucho tiempo
        if (this.isProcessing) return;
        this.isProcessing = true;
        try {
            const pendingEvents = await this.transactionRepository.getPendingOutboxEvents();
            if (pendingEvents.length > 0) {
                this.logger.log(`Encontrados ${pendingEvents.length} eventos en el Outbox para procesar...`);
            }
            for (const event of pendingEvents){
                try {
                    // 1. Emitimos el evento a RabbitMQ usando el EventBus (nuestra interfaz limpia)
                    await this.eventBus.emitEvent(event.type, event.payload);
                    // 2. Si se envió con éxito, lo marcamos como PUBLISHED en la base de datos
                    await this.transactionRepository.markOutboxEventAsPublished(event.id);
                    this.logger.log(`Evento ${event.id} de tipo ${event.type} publicado correctamente.`);
                } catch (error) {
                    this.logger.error(`Error procesando evento Outbox ${event.id}: ${error.message}`);
                // No lanzamos el error para que el for-loop continúe con el siguiente evento
                }
            }
        } catch (error) {
            this.logger.error(`Fallo crítico al consultar el Outbox: ${error.message}`);
        } finally{
            this.isProcessing = false;
        }
    }
    constructor(transactionRepository, eventBus){
        _define_property(this, "transactionRepository", void 0);
        _define_property(this, "eventBus", void 0);
        _define_property(this, "logger", void 0);
        _define_property(this, "isProcessing", void 0);
        this.transactionRepository = transactionRepository;
        this.eventBus = eventBus;
        this.logger = new _nestjs_common__rspack_import_0.Logger(OutboxProcessor.name);
        this.isProcessing = false;
    }
}
_ts_decorate([
    (0,_nestjs_schedule__rspack_import_1.Cron)(_nestjs_schedule__rspack_import_1.CronExpression.EVERY_10_SECONDS),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], OutboxProcessor.prototype, "processOutboxEvents", null);
OutboxProcessor = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Inject)(_domain_repositories_transaction_repository_interface_js__rspack_import_2.TRANSACTION_REPOSITORY)),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Inject)(_domain_interfaces_event_bus_interface_js__rspack_import_3.EVENT_BUS_PORT)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof ITransactionRepository === "undefined" ? Object : ITransactionRepository,
        typeof IEventBus === "undefined" ? Object : IEventBus
    ])
], OutboxProcessor);


},
"./libs/transaction/src/domain/entities/deposit.entity.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Deposit: () => (Deposit)
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
class Deposit {
    static create(id, accountId, amount, idempotencyKey) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be strictly positive');
        }
        if (!idempotencyKey) {
            throw new Error('Idempotency key is required to prevent double charging');
        }
        return new Deposit(id, accountId, amount, idempotencyKey, 'PENDING', new Date(), new Date());
    }
    approve() {
        if (this.status !== 'PENDING') {
            throw new Error('Can only approve pending deposits');
        }
        this.status = 'APPROVED';
        this.updatedAt = new Date();
    }
    reject() {
        if (this.status !== 'PENDING') {
            throw new Error('Can only reject pending deposits');
        }
        this.status = 'REJECTED';
        this.updatedAt = new Date();
    }
    // Getters
    getId() {
        return this.id;
    }
    getAccountId() {
        return this.accountId;
    }
    getAmount() {
        return this.amount;
    }
    getIdempotencyKey() {
        return this.idempotencyKey;
    }
    getStatus() {
        return this.status;
    }
    constructor(id, accountId, amount, idempotencyKey, status, createdAt, updatedAt){
        _define_property(this, "id", void 0);
        _define_property(this, "accountId", void 0);
        _define_property(this, "amount", void 0);
        _define_property(this, "idempotencyKey", void 0);
        _define_property(this, "status", void 0);
        _define_property(this, "createdAt", void 0);
        _define_property(this, "updatedAt", void 0);
        this.id = id;
        this.accountId = accountId;
        this.amount = amount;
        this.idempotencyKey = idempotencyKey;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}


},
"./libs/transaction/src/domain/entities/transaction.entity.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Transaction: () => (Transaction)
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
class Transaction {
    static create(id, fromAccountId, toAccountId, amount) {
        if (amount <= 0) {
            throw new Error('Transaction amount must be strictly positive');
        }
        if (fromAccountId === toAccountId) {
            throw new Error('Cannot transfer to the same account');
        }
        return new Transaction(id, fromAccountId, toAccountId, amount, 'PENDING', new Date(), new Date());
    }
    markAsCompleted() {
        if (this.status !== 'PENDING') {
            throw new Error('Only pending transactions can be completed');
        }
        this.status = 'COMPLETED';
        this.updatedAt = new Date();
    }
    markAsFailed() {
        if (this.status !== 'PENDING') {
            throw new Error('Only pending transactions can be failed');
        }
        this.status = 'FAILED';
        this.updatedAt = new Date();
    }
    // Getters
    getId() {
        return this.id;
    }
    getFromAccountId() {
        return this.fromAccountId;
    }
    getToAccountId() {
        return this.toAccountId;
    }
    getAmount() {
        return this.amount;
    }
    getStatus() {
        return this.status;
    }
    constructor(id, fromAccountId, toAccountId, amount, status, createdAt, updatedAt){
        _define_property(this, "id", void 0);
        _define_property(this, "fromAccountId", void 0);
        _define_property(this, "toAccountId", void 0);
        _define_property(this, "amount", void 0);
        _define_property(this, "status", void 0);
        _define_property(this, "createdAt", void 0);
        _define_property(this, "updatedAt", void 0);
        this.id = id;
        this.fromAccountId = fromAccountId;
        this.toAccountId = toAccountId;
        this.amount = amount;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}


},
"./libs/transaction/src/domain/interfaces/event-bus.interface.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EVENT_BUS_PORT: () => (EVENT_BUS_PORT)
});
const EVENT_BUS_PORT = Symbol('EVENT_BUS_PORT');


},
"./libs/transaction/src/domain/repositories/transaction.repository.interface.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TRANSACTION_REPOSITORY: () => (TRANSACTION_REPOSITORY)
});
const TRANSACTION_REPOSITORY = Symbol("TRANSACTION_REPOSITORY");


},
"./libs/transaction/src/index.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BankApiService: () => (/* reexport safe */ _infrastructure_external_bank_api_service_js__rspack_import_10.BankApiService),
  Deposit: () => (/* reexport safe */ _domain_entities_deposit_entity_js__rspack_import_1.Deposit),
  EVENT_BUS_PORT: () => (/* reexport safe */ _domain_interfaces_event_bus_interface_js__rspack_import_8.EVENT_BUS_PORT),
  GetTransferByUserUseCase: () => (/* reexport safe */ _application_use_cases_get_transfer_by_user_usecase_js__rspack_import_7.GetTransferByUserUseCase),
  OutboxProcessor: () => (/* reexport safe */ _application_workers_outbox_processor_js__rspack_import_13.OutboxProcessor),
  PrismaTransactionRepository: () => (/* reexport safe */ _infrastructure_database_prisma_transaction_repository_js__rspack_import_12.PrismaTransactionRepository),
  ProcessDepositUseCase: () => (/* reexport safe */ _application_use_cases_process_deposit_usecase_js__rspack_import_6.ProcessDepositUseCase),
  RabbitMQEventBusAdapter: () => (/* reexport safe */ _infrastructure_messaging_rabbitmq_event_bus_adapter_js__rspack_import_9.RabbitMQEventBusAdapter),
  RequestDepositDto: () => (/* reexport safe */ _application_dto_deposit_dto_js__rspack_import_4.RequestDepositDto),
  TRANSACTION_REPOSITORY: () => (/* reexport safe */ _domain_repositories_transaction_repository_interface_js__rspack_import_11.TRANSACTION_REPOSITORY),
  Transaction: () => (/* reexport safe */ _domain_entities_transaction_entity_js__rspack_import_0.Transaction),
  TransferFundsDto: () => (/* reexport safe */ _application_dto_transfer_funds_dto_js__rspack_import_2.TransferFundsDto),
  TransferFundsUseCase: () => (/* reexport safe */ _application_use_cases_transfer_funds_usecase_js__rspack_import_5.TransferFundsUseCase)
});
/* import */ var _domain_entities_transaction_entity_js__rspack_import_0 = __webpack_require__("./libs/transaction/src/domain/entities/transaction.entity.ts");
/* import */ var _domain_entities_deposit_entity_js__rspack_import_1 = __webpack_require__("./libs/transaction/src/domain/entities/deposit.entity.ts");
/* import */ var _application_dto_transfer_funds_dto_js__rspack_import_2 = __webpack_require__("./libs/transaction/src/application/dto/transfer-funds.dto.ts");
/* import */ var _application_dto_transfer_dto_js__rspack_import_3 = __webpack_require__("./libs/transaction/src/application/dto/transfer.dto.ts");
/* import */ var _application_dto_deposit_dto_js__rspack_import_4 = __webpack_require__("./libs/transaction/src/application/dto/deposit.dto.ts");
/* import */ var _application_use_cases_transfer_funds_usecase_js__rspack_import_5 = __webpack_require__("./libs/transaction/src/application/use-cases/transfer-funds.usecase.ts");
/* import */ var _application_use_cases_process_deposit_usecase_js__rspack_import_6 = __webpack_require__("./libs/transaction/src/application/use-cases/process-deposit.usecase.ts");
/* import */ var _application_use_cases_get_transfer_by_user_usecase_js__rspack_import_7 = __webpack_require__("./libs/transaction/src/application/use-cases/get-transfer-by-user.usecase.ts");
/* import */ var _domain_interfaces_event_bus_interface_js__rspack_import_8 = __webpack_require__("./libs/transaction/src/domain/interfaces/event-bus.interface.ts");
/* import */ var _infrastructure_messaging_rabbitmq_event_bus_adapter_js__rspack_import_9 = __webpack_require__("./libs/transaction/src/infrastructure/messaging/rabbitmq-event-bus.adapter.ts");
/* import */ var _infrastructure_external_bank_api_service_js__rspack_import_10 = __webpack_require__("./libs/transaction/src/infrastructure/external/bank-api.service.ts");
/* import */ var _domain_repositories_transaction_repository_interface_js__rspack_import_11 = __webpack_require__("./libs/transaction/src/domain/repositories/transaction.repository.interface.ts");
/* import */ var _infrastructure_database_prisma_transaction_repository_js__rspack_import_12 = __webpack_require__("./libs/transaction/src/infrastructure/database/prisma-transaction.repository.ts");
/* import */ var _application_workers_outbox_processor_js__rspack_import_13 = __webpack_require__("./libs/transaction/src/application/workers/outbox.processor.ts");

















},
"./libs/transaction/src/infrastructure/database/prisma-transaction.repository.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrismaTransactionRepository: () => (PrismaTransactionRepository)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _prisma_client_accounts__rspack_import_1 = __webpack_require__("@prisma/client-accounts");
/* import */ var _domain_entities_transaction_entity_js__rspack_import_2 = __webpack_require__("./libs/transaction/src/domain/entities/transaction.entity.ts");
/* import */ var _app_account__rspack_import_3 = __webpack_require__("./libs/account/src/index.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class PrismaTransactionRepository {
    async processDeposit(depositId, accountId, amount) {
        await this.prisma.$transaction(async (tx)=>{
            const accountRecord = await tx.account.findUniqueOrThrow({
                where: {
                    id: accountId
                }
            });
            const account = _app_account__rspack_import_3.Account.load(accountRecord.id, accountRecord.accountNumber, accountRecord.bank, accountRecord.userId, accountRecord.balance, accountRecord.status, accountRecord.type, accountRecord.createdAt, accountRecord.version);
            account.deposit(amount);
            const updated = await tx.account.updateMany({
                where: {
                    id: account.getId(),
                    version: accountRecord.version
                },
                data: {
                    balance: account.getBalance(),
                    version: {
                        increment: 1
                    }
                }
            });
            if (updated.count === 0) {
                throw new Error("Concurrency Error during deposit");
            }
        });
    }
    async processTransfer(transaction) {
        await this.prisma.$transaction(async (tx)=>{
            const fromAccountRecord = await tx.account.findUniqueOrThrow({
                where: {
                    id: transaction.getFromAccountId()
                }
            });
            const toAccountRecord = await tx.account.findUniqueOrThrow({
                where: {
                    id: transaction.getToAccountId()
                }
            });
            const fromAccount = _app_account__rspack_import_3.Account.load(fromAccountRecord.id, fromAccountRecord.accountNumber, fromAccountRecord.bank, fromAccountRecord.userId, fromAccountRecord.balance, fromAccountRecord.status, fromAccountRecord.type, fromAccountRecord.createdAt, fromAccountRecord.version);
            const toAccount = _app_account__rspack_import_3.Account.load(toAccountRecord.id, toAccountRecord.accountNumber, toAccountRecord.bank, toAccountRecord.userId, toAccountRecord.balance, toAccountRecord.status, toAccountRecord.type, toAccountRecord.createdAt, toAccountRecord.version);
            fromAccount.withdraw(transaction.getAmount());
            toAccount.deposit(transaction.getAmount());
            const updatedFrom = await tx.account.updateMany({
                where: {
                    id: fromAccount.getId(),
                    version: fromAccountRecord.version
                },
                data: {
                    balance: fromAccount.getBalance(),
                    version: {
                        increment: 1
                    }
                }
            });
            if (updatedFrom.count === 0) {
                throw new Error('Concurrency Error: Account balance was modified by another process. Please retry.');
            }
            await tx.account.update({
                where: {
                    id: toAccount.getId()
                },
                data: {
                    balance: toAccount.getBalance(),
                    version: {
                        increment: 1
                    }
                }
            });
            await tx.outboxEvent.create({
                data: {
                    aggregateId: transaction.getId(),
                    type: 'FUNDS_TRANSFERRED',
                    payload: {
                        fromAccountId: transaction.getFromAccountId(),
                        toAccountId: transaction.getToAccountId(),
                        amount: transaction.getAmount()
                    }
                }
            });
        });
    }
    async getTransfersByUser(userId) {
        // 1. Obtener todas las cuentas del usuario
        const userAccounts = await this.prisma.account.findMany({
            where: {
                userId
            },
            select: {
                id: true
            }
        });
        if (userAccounts.length === 0) {
            return [];
        }
        const accountIds = userAccounts.map((a)=>a.id);
        // 2. Dado que no tenemos una tabla 'TransactionHistory' per se, usamos OutboxEvent 
        // como nuestro "Source of Truth" de auditoría de transacciones para el PoC.
        // En PostgreSQL podemos consultar el JSON directamente, pero para simplicidad filtramos en memoria 
        // si el set de datos es pequeño (o usamos RAW queries en Prisma).
        const events = await this.prisma.outboxEvent.findMany({
            where: {
                type: 'FUNDS_TRANSFERRED'
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        const userEvents = events.filter((e)=>{
            const payload = e.payload;
            return accountIds.includes(payload.fromAccountId) || accountIds.includes(payload.toAccountId);
        });
        return userEvents.map((e)=>{
            const payload = e.payload;
            const t = _domain_entities_transaction_entity_js__rspack_import_2.Transaction.create(e.aggregateId, payload.fromAccountId, payload.toAccountId, payload.amount);
            t.markAsCompleted();
            return t;
        });
    }
    async getPendingOutboxEvents() {
        return this.prisma.outboxEvent.findMany({
            where: {
                status: 'PENDING'
            },
            take: 50,
            orderBy: {
                createdAt: 'asc'
            }
        });
    }
    async markOutboxEventAsPublished(eventId) {
        await this.prisma.outboxEvent.update({
            where: {
                id: eventId
            },
            data: {
                status: 'PUBLISHED'
            }
        });
    }
    constructor(){
        _define_property(this, "prisma", new _prisma_client_accounts__rspack_import_1.PrismaClient());
    }
}
PrismaTransactionRepository = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], PrismaTransactionRepository);


},
"./libs/transaction/src/infrastructure/external/bank-api.service.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BankApiService: () => (BankApiService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

class BankApiService {
    /**
   * Simula el cobro a una tarjeta de débito en un sistema legacy bancario.
   * @param amount Monto a cobrar
   * @param cardToken Token de la tarjeta
   * @returns Un booleano indicando éxito, o lanza un error si falla la conexión.
   */ async processDeposit(amount, cardToken) {
        this.logger.log(`Iniciando conexión con el Banco Externo para debitar $${amount}...`);
        // 1. Simular Latencia Alta (Entre 5 y 15 segundos para no esperar tanto en Dev)
        // En la prueba técnica decía "hasta 25s", lo ajustamos un poco para agilizar nuestras pruebas.
        const delayMs = Math.floor(Math.random() * 10000) + 5000;
        await new Promise((resolve)=>setTimeout(resolve, delayMs));
        // 2. Simular un 20% de probabilidad de error de conexión (Error 503)
        const isError = Math.random() < 0.2; // 0.0 a 0.99...
        if (isError) {
            this.logger.error(`[BankAPI Error] Se perdió la conexión con el servidor bancario tras ${delayMs}ms.`);
            throw new Error('BANK_CONNECTION_TIMEOUT');
        }
        // 3. Simular un 5% de probabilidad de fondos insuficientes (Error 400 lógico)
        const isInsufficientFunds = Math.random() < 0.05;
        if (isInsufficientFunds) {
            this.logger.warn(`[BankAPI Refused] Tarjeta ${cardToken} denegada por fondos insuficientes.`);
            throw new Error('INSUFFICIENT_FUNDS_IN_CARD');
        }
        this.logger.log(`[BankAPI Success] Depósito de $${amount} procesado correctamente en ${delayMs}ms.`);
        return true;
    }
    constructor(){
        _define_property(this, "logger", new _nestjs_common__rspack_import_0.Logger(BankApiService.name));
    }
}
BankApiService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], BankApiService);


},
"./libs/transaction/src/infrastructure/messaging/rabbitmq-event-bus.adapter.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RabbitMQEventBusAdapter: () => (RabbitMQEventBusAdapter)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_microservices__rspack_import_1 = __webpack_require__("@nestjs/microservices");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}


class RabbitMQEventBusAdapter {
    async emitEvent(eventName, payload) {
        this.rabbitClient.emit(eventName, payload);
    }
    constructor(rabbitClient){
        _define_property(this, "rabbitClient", void 0);
        this.rabbitClient = rabbitClient;
    }
}
RabbitMQEventBusAdapter = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Inject)('RABBITMQ_SERVICE')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_microservices__rspack_import_1.ClientProxy === "undefined" ? Object : _nestjs_microservices__rspack_import_1.ClientProxy
    ])
], RabbitMQEventBusAdapter);


},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// webpack/runtime/async_module
(() => {
var hasSymbol = typeof Symbol === "function";
var rspackQueues = hasSymbol ? Symbol("rspack queues") : "__rspack_queues";
var rspackExports = __webpack_require__.aE = hasSymbol ? Symbol("rspack exports") : "__webpack_exports__";
var rspackError = hasSymbol ? Symbol("rspack error") : "__rspack_error";
var rspackDone = hasSymbol ? Symbol("rspack done") : "__rspack_done";
var rspackDefer = __webpack_require__.zS = hasSymbol ? Symbol("rspack defer") : "__rspack_defer";
__webpack_require__.zT = (asyncDeps) => {
	var hasUnresolvedAsyncSubgraph = asyncDeps.some((id) => {
		var cache = __webpack_module_cache__[id];
		return !cache || cache[rspackDone] === false;
	});
	if (hasUnresolvedAsyncSubgraph) {
		return ({ then(onFulfilled, onRejected) { return Promise.all(asyncDeps.map(__webpack_require__)).then(onFulfilled, onRejected) } });
	}
}
var resolveQueue = (queue) => {
	if (queue && queue.d < 1) {
		queue.d = 1;
    	queue.forEach((fn) => (fn.r--));
		queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
	}
}
var wrapDeps = (deps) => {
	return deps.map((dep) => {
		if (dep !== null && typeof dep === "object") {
			if(!dep[rspackQueues] && dep[rspackDefer]) {
				var asyncDeps = __webpack_require__.zT(dep[rspackDefer]);
				if (asyncDeps) {
					var d = dep;
					dep = {
						then(onFulfilled, onRejected) {
							asyncDeps.then(() => (onFulfilled(d)), onRejected);
						}
					};
				} else return dep;
			}
			if (dep[rspackQueues]) return dep;
			if (dep.then) {
				var queue = [];
				queue.d = 0;
				dep.then((r) => {
					obj[rspackExports] = r;
					resolveQueue(queue);
				},(e) => {
					obj[rspackError] = e;
					resolveQueue(queue);
				});
				var obj = {};
				obj[rspackDefer] = false;
				obj[rspackQueues] = (fn) => (fn(queue));
				return obj;
			}
		}
		var ret = {};
		ret[rspackQueues] = () => {};
		ret[rspackExports] = dep;
		return ret;
	});
};
__webpack_require__.a = (module, body, hasAwait, useModuleExports) => {
	var queue;
	hasAwait && ((queue = []).d = -1);
	var depQueues = new Set();
	var exports = module.exports;
	var currentDeps;
	var outerResolve;
	var reject;
	var promise = new Promise((resolve, rej) => {
		reject = rej;
		outerResolve = resolve;
	});
	promise[rspackExports] = exports;
	promise[rspackQueues] = (fn) => { queue && fn(queue), depQueues.forEach(fn), promise["catch"](() => {}); };
	module.exports = promise;
	var asyncModule = module;
	if (useModuleExports) {
		asyncModule = Object.create(module);
		asyncModule.exports = exports;
	}
	var handle = (deps) => {
		currentDeps = wrapDeps(deps);
		var fn;
		var getResult = () => {
			return currentDeps.map((d) => {
				if(d[rspackDefer]) return d;
				if (d[rspackError]) throw d[rspackError];
				return d[rspackExports];
			});
		}
		var promise = new Promise((resolve) => {
			fn = () => (resolve(getResult));
			fn.r = 0;
			var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
			currentDeps.map((dep) => (dep[rspackDefer] || dep[rspackQueues](fnQueue)));
		});
		return fn.r ? promise : getResult();
	};
	var done = (err) => ((err ? reject(promise[rspackError] = err) : (useModuleExports && (exports = promise[rspackExports] = asyncModule.exports), outerResolve(exports))), resolveQueue(queue), promise[rspackDone] = true);
	body(handle, done, asyncModule);
	queue && queue.d < 0 && (queue.d = 0);
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, getters, values) => {
	var define = (defs, kind) => {
		for(var key in defs) {
			if(__webpack_require__.o(defs, key) && !__webpack_require__.o(exports, key)) {
				Object.defineProperty(exports, key, { enumerable: true, [kind]: defs[key] });
			}
		}
	};
	define(getters, "get");
	define(values, "value");
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
var __webpack_exports__ = __webpack_require__("./apps/transactions/src/main.ts");
__webpack_exports__ = await __webpack_exports__;

//# sourceMappingURL=main.js.map