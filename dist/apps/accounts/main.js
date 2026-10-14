import * as __rspack_external__nestjs_common_a04939da from "@nestjs/common";
import * as __rspack_external__nestjs_core_d7b00a1a from "@nestjs/core";
import * as __rspack_external__nestjs_microservices_a8954161 from "@nestjs/microservices";
import * as __rspack_external__nestjs_mongoose_8807637e from "@nestjs/mongoose";
import * as __rspack_external__nestjs_passport_18907953 from "@nestjs/passport";
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
"./apps/accounts/src/accounts.controller.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccountsController: () => (AccountsController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_microservices__rspack_import_1 = __webpack_require__("@nestjs/microservices");
/* import */ var _app_account__rspack_import_2 = __webpack_require__("./libs/account/src/index.ts");
/* import */ var _app_shared__rspack_import_3 = __webpack_require__("./libs/shared/src/index.ts");
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




class AccountsController {
    async handleUserCreated(data) {
        console.log(`[Accounts Microservice] Received user.created event for user ${data.userId}`);
        await this.createAccountUseCase.execute(data.userId);
    }
    constructor(createAccountUseCase){
        _define_property(this, "createAccountUseCase", void 0);
        this.createAccountUseCase = createAccountUseCase;
    }
}
_ts_decorate([
    (0,_nestjs_microservices__rspack_import_1.EventPattern)(_app_shared__rspack_import_3.BrokerEvents.USER_CREATED),
    _ts_param(0, (0,_nestjs_microservices__rspack_import_1.Payload)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], AccountsController.prototype, "handleUserCreated", null);
AccountsController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _app_account__rspack_import_2.CreateAccountUseCase === "undefined" ? Object : _app_account__rspack_import_2.CreateAccountUseCase
    ])
], AccountsController);


},
"./apps/accounts/src/accounts.module.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccountsModule: () => (AccountsModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _accounts_controller_js__rspack_import_1 = __webpack_require__("./apps/accounts/src/accounts.controller.ts");
/* import */ var _app_account__rspack_import_2 = __webpack_require__("./libs/account/src/index.ts");
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



class AccountsModule {
}
AccountsModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [],
        controllers: [
            _accounts_controller_js__rspack_import_1.AccountsController
        ],
        providers: [
            _app_account__rspack_import_2.CreateAccountUseCase,
            {
                provide: _app_account__rspack_import_2.ACCOUNT_REPOSITORY,
                useClass: _app_account__rspack_import_2.PrismaAccountRepository
            }
        ]
    })
], AccountsModule);


},
"./apps/accounts/src/main.ts"(__webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(__webpack_module__, async function (__rspack_load_async_deps, __rspack_async_done) { try {
__webpack_require__.r(__webpack_exports__);
/* import */ var _nestjs_core__rspack_import_0 = __webpack_require__("@nestjs/core");
/* import */ var _accounts_module_js__rspack_import_1 = __webpack_require__("./apps/accounts/src/accounts.module.ts");
/* import */ var _nestjs_microservices__rspack_import_2 = __webpack_require__("@nestjs/microservices");



async function bootstrap() {
    const app = await _nestjs_core__rspack_import_0.NestFactory.createMicroservice(_accounts_module_js__rspack_import_1.AccountsModule, {
        transport: _nestjs_microservices__rspack_import_2.Transport.RMQ,
        options: {
            urls: [
                process.env.RABBITMQ_URL || 'amqp://localhost:5672'
            ],
            queue: 'accounts_queue',
            queueOptions: {
                durable: true
            }
        }
    });
    await app.listen();
    console.log('Accounts Microservice is listening via RabbitMQ...');
}
await bootstrap();

__rspack_async_done();
} catch(e) { __rspack_async_done(e); } }, 1);

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
var __webpack_exports__ = __webpack_require__("./apps/accounts/src/main.ts");
__webpack_exports__ = await __webpack_exports__;

//# sourceMappingURL=main.js.map