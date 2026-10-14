import * as __rspack_external__nestjs_common_a04939da from "@nestjs/common";
import * as __rspack_external__nestjs_core_d7b00a1a from "@nestjs/core";
import * as __rspack_external__nestjs_jwt_50c0e0ae from "@nestjs/jwt";
import * as __rspack_external__nestjs_microservices_a8954161 from "@nestjs/microservices";
import * as __rspack_external__nestjs_mongoose_8807637e from "@nestjs/mongoose";
import * as __rspack_external__nestjs_passport_18907953 from "@nestjs/passport";
import * as __rspack_external__nestjs_schedule_17036d12 from "@nestjs/schedule";
import * as __rspack_external__nestjs_swagger_7cd450b5 from "@nestjs/swagger";
import * as __rspack_external__prisma_client_accounts_252b4ede from "@prisma/client-accounts";
import * as __rspack_external__prisma_client_users_8235c6f9 from "@prisma/client-users";
import * as __rspack_external_async_hooks from "async_hooks";
import * as __rspack_external_bcryptjs from "bcryptjs";
import * as __rspack_external_crypto from "crypto";
import * as __rspack_external_mongoose from "mongoose";
import * as __rspack_external_net from "net";
import * as __rspack_external_node_crypto_2e7c4b46 from "node:crypto";
import * as __rspack_external_passport_jwt_dfbe26e1 from "passport-jwt";
import * as __rspack_external_rxjs from "rxjs";
import * as __rspack_external_rxjs_operators_2eaa0997 from "rxjs/operators";
var __webpack_modules__ = ({
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/hash.js"(__unused_rspack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sha256 = sha256;
const crypto = __webpack_require__("node:crypto");
function sha256(text) {
    return crypto.createHash('sha256').update(text).digest('hex');
}
//# sourceMappingURL=hash.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/index.js"(__unused_rspack_module, exports, __webpack_require__) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStorageToken = exports.getOptionsToken = void 0;
__exportStar(__webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/ip.js"), exports);
__exportStar(__webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler-module-options.interface.js"), exports);
__exportStar(__webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler-storage.interface.js"), exports);
__exportStar(__webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.decorator.js"), exports);
__exportStar(__webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.exception.js"), exports);
__exportStar(__webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.guard.js"), exports);
__exportStar(__webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.guard.interface.js"), exports);
__exportStar(__webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.module.js"), exports);
var throttler_providers_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.providers.js");
Object.defineProperty(exports, "getOptionsToken", ({ enumerable: true, get: function () { return throttler_providers_1.getOptionsToken; } }));
Object.defineProperty(exports, "getStorageToken", ({ enumerable: true, get: function () { return throttler_providers_1.getStorageToken; } }));
__exportStar(__webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.service.js"), exports);
__exportStar(__webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/utilities.js"), exports);
//# sourceMappingURL=index.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/ip.js"(__unused_rspack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_IPV6_SUBNET_PREFIX = void 0;
exports.normalizeIp = normalizeIp;
const net_1 = __webpack_require__("net");
exports.DEFAULT_IPV6_SUBNET_PREFIX = 64;
function toHextets(address) {
    let head = address;
    const lastColon = head.lastIndexOf(':');
    const tail = head.slice(lastColon + 1);
    if (tail.includes('.')) {
        const octets = tail.split('.').map(Number);
        if (octets.length !== 4 || octets.some((o) => !Number.isInteger(o) || o < 0 || o > 255)) {
            return null;
        }
        const high = ((octets[0] << 8) | octets[1]).toString(16);
        const low = ((octets[2] << 8) | octets[3]).toString(16);
        head = `${head.slice(0, lastColon + 1)}${high}:${low}`;
    }
    const sides = head.split('::');
    if (sides.length > 2) {
        return null;
    }
    const left = sides[0] ? sides[0].split(':') : [];
    const right = sides.length === 2 && sides[1] ? sides[1].split(':') : [];
    const fill = sides.length === 2 ? 8 - left.length - right.length : 0;
    if (fill < 0 || left.length + fill + right.length !== 8) {
        return null;
    }
    const groups = [...left, ...new Array(fill).fill('0'), ...right];
    const hextets = groups.map((group) => parseInt(group, 16));
    if (hextets.some((hextet) => !Number.isInteger(hextet) || hextet < 0 || hextet > 0xffff)) {
        return null;
    }
    return hextets;
}
function maskHextets(hextets, prefix) {
    return hextets.map((hextet, index) => {
        const bitsBefore = index * 16;
        if (prefix >= bitsBefore + 16) {
            return hextet;
        }
        if (prefix <= bitsBefore) {
            return 0;
        }
        const keep = prefix - bitsBefore;
        return hextet & ((0xffff << (16 - keep)) & 0xffff);
    });
}
function formatIpv6(hextets) {
    let bestStart = -1;
    let bestLength = 0;
    let runStart = -1;
    let runLength = 0;
    for (let index = 0; index < hextets.length; index++) {
        if (hextets[index] !== 0) {
            runStart = -1;
            runLength = 0;
            continue;
        }
        if (runStart === -1) {
            runStart = index;
        }
        runLength++;
        if (runLength > bestLength) {
            bestStart = runStart;
            bestLength = runLength;
        }
    }
    const groups = hextets.map((hextet) => hextet.toString(16));
    if (bestLength < 2) {
        return groups.join(':');
    }
    return `${groups.slice(0, bestStart).join(':')}::${groups.slice(bestStart + bestLength).join(':')}`;
}
function normalizeIp(ip, ipv6SubnetPrefix = exports.DEFAULT_IPV6_SUBNET_PREFIX) {
    if (typeof ip !== 'string' || ip.length === 0) {
        return ip;
    }
    const zoneIndex = ip.indexOf('%');
    const bare = zoneIndex === -1 ? ip : ip.slice(0, zoneIndex);
    const version = (0, net_1.isIP)(bare);
    if (version === 4) {
        return bare;
    }
    if (version !== 6) {
        return ip;
    }
    const hextets = toHextets(bare.toLowerCase());
    if (!hextets) {
        return ip;
    }
    const isLoopback = hextets[7] === 1 && hextets.slice(0, 7).every((hextet) => hextet === 0);
    if (isLoopback) {
        return '::1';
    }
    const isIpv4Mapped = hextets[0] === 0 &&
        hextets[1] === 0 &&
        hextets[2] === 0 &&
        hextets[3] === 0 &&
        hextets[4] === 0 &&
        hextets[5] === 0xffff;
    if (isIpv4Mapped) {
        return [hextets[6] >> 8, hextets[6] & 0xff, hextets[7] >> 8, hextets[7] & 0xff].join('.');
    }
    const prefix = Number.isFinite(ipv6SubnetPrefix)
        ? Math.min(Math.max(Math.trunc(ipv6SubnetPrefix), 0), 128)
        : exports.DEFAULT_IPV6_SUBNET_PREFIX;
    return `${formatIpv6(maskHextets(hextets, prefix))}/${prefix}`;
}
//# sourceMappingURL=ip.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler-module-options.interface.js"(__unused_rspack_module, exports) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=throttler-module-options.interface.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler-storage.interface.js"(__unused_rspack_module, exports) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerStorage = void 0;
exports.ThrottlerStorage = Symbol('ThrottlerStorage');
//# sourceMappingURL=throttler-storage.interface.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.constants.js"(__unused_rspack_module, exports) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.THROTTLER_SKIP = exports.THROTTLER_OPTIONS = exports.THROTTLER_KEY_GENERATOR = exports.THROTTLER_BLOCK_DURATION = exports.THROTTLER_TRACKER = exports.THROTTLER_TTL = exports.THROTTLER_LIMIT = void 0;
exports.THROTTLER_LIMIT = 'THROTTLER:LIMIT';
exports.THROTTLER_TTL = 'THROTTLER:TTL';
exports.THROTTLER_TRACKER = 'THROTTLER:TRACKER';
exports.THROTTLER_BLOCK_DURATION = 'THROTTLER:BLOCK_DURATION';
exports.THROTTLER_KEY_GENERATOR = 'THROTTLER:KEY_GENERATOR';
exports.THROTTLER_OPTIONS = 'THROTTLER:MODULE_OPTIONS';
exports.THROTTLER_SKIP = 'THROTTLER:SKIP';
//# sourceMappingURL=throttler.constants.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.decorator.js"(__unused_rspack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InjectThrottlerStorage = exports.InjectThrottlerOptions = exports.SkipThrottle = exports.Throttle = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const throttler_constants_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.constants.js");
const throttler_providers_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.providers.js");
function setThrottlerMetadata(target, options) {
    for (const name in options) {
        Reflect.defineMetadata(throttler_constants_1.THROTTLER_TTL + name, options[name].ttl, target);
        Reflect.defineMetadata(throttler_constants_1.THROTTLER_LIMIT + name, options[name].limit, target);
        Reflect.defineMetadata(throttler_constants_1.THROTTLER_BLOCK_DURATION + name, options[name].blockDuration, target);
        Reflect.defineMetadata(throttler_constants_1.THROTTLER_TRACKER + name, options[name].getTracker, target);
        Reflect.defineMetadata(throttler_constants_1.THROTTLER_KEY_GENERATOR + name, options[name].generateKey, target);
    }
}
const Throttle = (options) => {
    return (target, propertyKey, descriptor) => {
        if (descriptor) {
            setThrottlerMetadata(descriptor.value, options);
            return descriptor;
        }
        setThrottlerMetadata(target, options);
        return target;
    };
};
exports.Throttle = Throttle;
const SkipThrottle = (skip = { default: true }) => {
    return (target, propertyKey, descriptor) => {
        var _a;
        const reflectionTarget = (_a = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value) !== null && _a !== void 0 ? _a : target;
        for (const key in skip) {
            Reflect.defineMetadata(throttler_constants_1.THROTTLER_SKIP + key, skip[key], reflectionTarget);
        }
        return descriptor !== null && descriptor !== void 0 ? descriptor : target;
    };
};
exports.SkipThrottle = SkipThrottle;
const InjectThrottlerOptions = () => (0, common_1.Inject)((0, throttler_providers_1.getOptionsToken)());
exports.InjectThrottlerOptions = InjectThrottlerOptions;
const InjectThrottlerStorage = () => (0, common_1.Inject)((0, throttler_providers_1.getStorageToken)());
exports.InjectThrottlerStorage = InjectThrottlerStorage;
//# sourceMappingURL=throttler.decorator.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.exception.js"(__unused_rspack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerException = exports.throttlerMessage = void 0;
const common_1 = __webpack_require__("@nestjs/common");
exports.throttlerMessage = 'ThrottlerException: Too Many Requests';
class ThrottlerException extends common_1.HttpException {
    constructor(message) {
        super(`${message || exports.throttlerMessage}`, common_1.HttpStatus.TOO_MANY_REQUESTS);
    }
}
exports.ThrottlerException = ThrottlerException;
//# sourceMappingURL=throttler.exception.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.guard.interface.js"(__unused_rspack_module, exports) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=throttler.guard.interface.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.guard.js"(__unused_rspack_module, exports, __webpack_require__) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ThrottlerGuard_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerGuard = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const hash_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/hash.js");
const ip_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/ip.js");
const throttler_storage_interface_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler-storage.interface.js");
const throttler_constants_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.constants.js");
const throttler_decorator_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.decorator.js");
const throttler_exception_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.exception.js");
let ThrottlerGuard = ThrottlerGuard_1 = class ThrottlerGuard {
    constructor(options, storageService, reflector) {
        this.options = options;
        this.storageService = storageService;
        this.reflector = reflector;
        this.headerPrefix = 'X-RateLimit';
        this.logger = new common_1.Logger(ThrottlerGuard_1.name);
        this.errorMessage = throttler_exception_1.throttlerMessage;
        this.ipv6SubnetPrefix = ip_1.DEFAULT_IPV6_SUBNET_PREFIX;
    }
    async onModuleInit() {
        var _a, _b, _c;
        var _d, _e;
        this.throttlers = (Array.isArray(this.options) ? this.options : this.options.throttlers)
            .sort((first, second) => {
            if (typeof first.ttl === 'function') {
                return 1;
            }
            if (typeof second.ttl === 'function') {
                return 0;
            }
            return first.ttl - second.ttl;
        })
            .map((opt) => { var _a; return (Object.assign(Object.assign({}, opt), { name: (_a = opt.name) !== null && _a !== void 0 ? _a : 'default' })); });
        if (!this.throttlers.length) {
            this.logger.warn('No throttlers are configured, so no request is limited. Provide at least one entry to ThrottlerModule.forRoot() or return one from ThrottlerModule.forRootAsync().');
        }
        if (Array.isArray(this.options)) {
            this.commonOptions = {};
        }
        else {
            this.commonOptions = {
                skipIf: this.options.skipIf,
                ignoreUserAgents: this.options.ignoreUserAgents,
                getTracker: this.options.getTracker,
                generateKey: this.options.generateKey,
                setHeaders: this.options.setHeaders,
            };
            this.ipv6SubnetPrefix = (_a = this.options.ipv6SubnetPrefix) !== null && _a !== void 0 ? _a : ip_1.DEFAULT_IPV6_SUBNET_PREFIX;
        }
        (_b = (_d = this.commonOptions).getTracker) !== null && _b !== void 0 ? _b : (_d.getTracker = this.getTracker.bind(this));
        (_c = (_e = this.commonOptions).generateKey) !== null && _c !== void 0 ? _c : (_e.generateKey = this.generateKey.bind(this));
    }
    async canActivate(context) {
        var _a;
        const handler = context.getHandler();
        const classRef = context.getClass();
        if (await this.shouldSkip(context)) {
            return true;
        }
        const continues = [];
        for (const namedThrottler of this.throttlers) {
            const skip = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_SKIP + namedThrottler.name, [
                handler,
                classRef,
            ]);
            const skipIf = namedThrottler.skipIf || this.commonOptions.skipIf;
            if (skip || (skipIf === null || skipIf === void 0 ? void 0 : skipIf(context))) {
                continues.push(true);
                continue;
            }
            const routeOrClassLimit = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_LIMIT + namedThrottler.name, [handler, classRef]);
            const routeOrClassTtl = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_TTL + namedThrottler.name, [handler, classRef]);
            const routeOrClassBlockDuration = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_BLOCK_DURATION + namedThrottler.name, [handler, classRef]);
            const routeOrClassGetTracker = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_TRACKER + namedThrottler.name, [handler, classRef]);
            const routeOrClassGetKeyGenerator = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_KEY_GENERATOR + namedThrottler.name, [handler, classRef]);
            const limit = this.toNumber(await this.resolveValue(context, routeOrClassLimit !== null && routeOrClassLimit !== void 0 ? routeOrClassLimit : namedThrottler.limit), 'limit', namedThrottler.name);
            const ttl = this.toNumber(await this.resolveValue(context, routeOrClassTtl !== null && routeOrClassTtl !== void 0 ? routeOrClassTtl : namedThrottler.ttl), 'ttl', namedThrottler.name);
            const blockDuration = this.toNumber(await this.resolveValue(context, (_a = routeOrClassBlockDuration !== null && routeOrClassBlockDuration !== void 0 ? routeOrClassBlockDuration : namedThrottler.blockDuration) !== null && _a !== void 0 ? _a : ttl), 'blockDuration', namedThrottler.name);
            const getTracker = routeOrClassGetTracker || namedThrottler.getTracker || this.commonOptions.getTracker;
            const generateKey = routeOrClassGetKeyGenerator || namedThrottler.generateKey || this.commonOptions.generateKey;
            continues.push(await this.handleRequest({
                context,
                limit,
                ttl,
                throttler: namedThrottler,
                blockDuration,
                getTracker,
                generateKey,
            }));
        }
        return continues.every((cont) => cont);
    }
    async shouldSkip(_context) {
        return false;
    }
    async handleRequest(requestProps) {
        var _a, _b, _c;
        const { context, limit, ttl, throttler, blockDuration, getTracker, generateKey } = requestProps;
        const { req, res } = this.getRequestResponse(context);
        const ignoreUserAgents = (_a = throttler.ignoreUserAgents) !== null && _a !== void 0 ? _a : this.commonOptions.ignoreUserAgents;
        if (Array.isArray(ignoreUserAgents)) {
            for (const pattern of ignoreUserAgents) {
                if (pattern.test(req.headers['user-agent'])) {
                    return true;
                }
            }
        }
        const tracker = await getTracker(req, context);
        const key = generateKey(context, tracker, throttler.name);
        const { totalHits, timeToExpire, isBlocked, timeToBlockExpire } = await this.storageService.increment(key, ttl, limit, blockDuration, throttler.name);
        const getThrottlerSuffix = (name) => (name === 'default' ? '' : `-${name}`);
        const setHeaders = (_c = (_b = throttler.setHeaders) !== null && _b !== void 0 ? _b : this.commonOptions.setHeaders) !== null && _c !== void 0 ? _c : true;
        if (isBlocked) {
            if (setHeaders) {
                this.setResponseHeader(res, `Retry-After${getThrottlerSuffix(throttler.name)}`, timeToBlockExpire);
            }
            await this.throwThrottlingException(context, {
                limit,
                ttl,
                key,
                tracker,
                totalHits,
                timeToExpire,
                isBlocked,
                timeToBlockExpire,
            });
        }
        if (setHeaders) {
            this.setResponseHeader(res, `${this.headerPrefix}-Limit${getThrottlerSuffix(throttler.name)}`, limit);
            this.setResponseHeader(res, `${this.headerPrefix}-Remaining${getThrottlerSuffix(throttler.name)}`, Math.max(0, limit - totalHits));
            this.setResponseHeader(res, `${this.headerPrefix}-Reset${getThrottlerSuffix(throttler.name)}`, timeToExpire);
        }
        return true;
    }
    async getTracker(req) {
        return (0, ip_1.normalizeIp)(req.ip, this.ipv6SubnetPrefix);
    }
    setResponseHeader(res, name, value) {
        if (typeof res.header === 'function') {
            res.header(name, value);
        }
        else if (typeof res.setHeader === 'function') {
            res.setHeader(name, value);
        }
    }
    getRequestResponse(context) {
        const http = context.switchToHttp();
        return { req: http.getRequest(), res: http.getResponse() };
    }
    generateKey(context, suffix, name) {
        const prefix = `${context.getClass().name}-${context.getHandler().name}-${name}`;
        return (0, hash_1.sha256)(`${prefix}-${suffix}`);
    }
    async throwThrottlingException(context, throttlerLimitDetail) {
        throw new throttler_exception_1.ThrottlerException(await this.getErrorMessage(context, throttlerLimitDetail));
    }
    async getErrorMessage(context, throttlerLimitDetail) {
        if (!Array.isArray(this.options)) {
            if (!this.options.errorMessage)
                return this.errorMessage;
            return typeof this.options.errorMessage === 'function'
                ? this.options.errorMessage(context, throttlerLimitDetail)
                : this.options.errorMessage;
        }
        return this.errorMessage;
    }
    toNumber(value, option, throttlerName) {
        const number = typeof value === 'string' && value.trim() !== '' ? Number(value) : value;
        if (typeof number !== 'number' || Number.isNaN(number)) {
            throw new Error(`Invalid "${option}" for the "${throttlerName}" throttler: expected a number, got ${JSON.stringify(value)}.`);
        }
        return number;
    }
    async resolveValue(context, resolvableValue) {
        return typeof resolvableValue === 'function' ? resolvableValue(context) : resolvableValue;
    }
};
exports.ThrottlerGuard = ThrottlerGuard;
exports.ThrottlerGuard = ThrottlerGuard = ThrottlerGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, throttler_decorator_1.InjectThrottlerOptions)()),
    __param(1, (0, throttler_decorator_1.InjectThrottlerStorage)()),
    __metadata("design:paramtypes", [Object, Object, core_1.Reflector])
], ThrottlerGuard);
//# sourceMappingURL=throttler.guard.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.module.js"(__unused_rspack_module, exports, __webpack_require__) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ThrottlerModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerModule = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const throttler_constants_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.constants.js");
const throttler_providers_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.providers.js");
let ThrottlerModule = ThrottlerModule_1 = class ThrottlerModule {
    static forRoot(options = []) {
        const providers = [...(0, throttler_providers_1.createThrottlerProviders)(options), throttler_providers_1.ThrottlerStorageProvider];
        return {
            module: ThrottlerModule_1,
            providers,
            exports: providers,
        };
    }
    static forRootAsync(options) {
        const providers = [...this.createAsyncProviders(options), throttler_providers_1.ThrottlerStorageProvider];
        return {
            module: ThrottlerModule_1,
            imports: options.imports || [],
            providers,
            exports: providers,
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: throttler_constants_1.THROTTLER_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: throttler_constants_1.THROTTLER_OPTIONS,
            useFactory: async (optionsFactory) => await optionsFactory.createThrottlerOptions(),
            inject: [options.useExisting || options.useClass],
        };
    }
};
exports.ThrottlerModule = ThrottlerModule;
exports.ThrottlerModule = ThrottlerModule = ThrottlerModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], ThrottlerModule);
//# sourceMappingURL=throttler.module.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.providers.js"(__unused_rspack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStorageToken = exports.getOptionsToken = exports.ThrottlerStorageProvider = void 0;
exports.createThrottlerProviders = createThrottlerProviders;
const throttler_storage_interface_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler-storage.interface.js");
const throttler_constants_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.constants.js");
const throttler_service_1 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.service.js");
function createThrottlerProviders(options) {
    return [
        {
            provide: throttler_constants_1.THROTTLER_OPTIONS,
            useValue: options,
        },
    ];
}
exports.ThrottlerStorageProvider = {
    provide: throttler_storage_interface_1.ThrottlerStorage,
    useFactory: (options) => {
        return !Array.isArray(options) && options.storage
            ? options.storage
            : new throttler_service_1.ThrottlerStorageService();
    },
    inject: [throttler_constants_1.THROTTLER_OPTIONS],
};
const getOptionsToken = () => throttler_constants_1.THROTTLER_OPTIONS;
exports.getOptionsToken = getOptionsToken;
const getStorageToken = () => throttler_storage_interface_1.ThrottlerStorage;
exports.getStorageToken = getStorageToken;
//# sourceMappingURL=throttler.providers.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/throttler.service.js"(__unused_rspack_module, exports, __webpack_require__) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerStorageService = exports.DEFAULT_SWEEP_INTERVAL = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const async_hooks_1 = __webpack_require__("async_hooks");
exports.DEFAULT_SWEEP_INTERVAL = 60000;
let ThrottlerStorageService = class ThrottlerStorageService {
    constructor() {
        this._storage = new Map();
        this.hitExpirations = new Map();
        this.sweepIntervalMs = exports.DEFAULT_SWEEP_INTERVAL;
        this.startSweep = async_hooks_1.AsyncResource.bind(() => {
            var _a, _b;
            this.sweepInterval = setInterval(() => this.evictIdleRecords(), this.sweepIntervalMs);
            (_b = (_a = this.sweepInterval).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
    }
    ensureSweep() {
        if (this.sweepInterval) {
            return;
        }
        this.startSweep();
    }
    get storage() {
        return this._storage;
    }
    evictIdleRecords(now = Date.now()) {
        for (const [key, record] of this._storage) {
            if (record.isBlocked && record.blockExpiresAt > now) {
                continue;
            }
            if (record.expiresAt > now) {
                continue;
            }
            if (this.hasLiveHits(key, now)) {
                continue;
            }
            this.hitExpirations.delete(key);
            this._storage.delete(key);
        }
    }
    hasLiveHits(key, now) {
        const expirations = this.hitExpirations.get(key);
        if (!expirations) {
            return false;
        }
        for (const hits of expirations.values()) {
            if (hits.some((expiresAt) => expiresAt > now)) {
                return true;
            }
        }
        return false;
    }
    getHitExpirations(key, throttlerName) {
        let expirations = this.hitExpirations.get(key);
        if (!expirations) {
            expirations = new Map();
            this.hitExpirations.set(key, expirations);
        }
        let hits = expirations.get(throttlerName);
        if (!hits) {
            hits = [];
            expirations.set(throttlerName, hits);
        }
        return hits;
    }
    pruneExpiredHits(key, throttlerName, now = Date.now()) {
        const hits = this.getHitExpirations(key, throttlerName).filter((expiresAt) => expiresAt > now);
        this.hitExpirations.get(key).set(throttlerName, hits);
        this.storage.get(key).totalHits.set(throttlerName, hits.length);
    }
    getExpirationTime(key) {
        return Math.ceil((this.storage.get(key).expiresAt - Date.now()) / 1000);
    }
    getBlockExpirationTime(key) {
        return Math.ceil((this.storage.get(key).blockExpiresAt - Date.now()) / 1000);
    }
    resetBlockedRequest(key, throttlerName) {
        this.storage.get(key).isBlocked = false;
        this.storage.get(key).totalHits.set(throttlerName, 0);
        this.hitExpirations.get(key).set(throttlerName, []);
    }
    fireHitCount(key, throttlerName, ttl) {
        const { totalHits } = this.storage.get(key);
        totalHits.set(throttlerName, totalHits.get(throttlerName) + 1);
        this.getHitExpirations(key, throttlerName).push(Date.now() + ttl);
    }
    incrementWithoutBlock(key, ttlMilliseconds, limit, throttlerName, timeToExpire) {
        const { totalHits } = this.storage.get(key);
        const isBlocked = totalHits.get(throttlerName) >= limit;
        if (!isBlocked) {
            this.fireHitCount(key, throttlerName, ttlMilliseconds);
        }
        const hits = this.getHitExpirations(key, throttlerName);
        const timeToBlockExpire = hits.length
            ? Math.ceil((Math.min(...hits) - Date.now()) / 1000)
            : timeToExpire;
        return {
            totalHits: totalHits.get(throttlerName) + (isBlocked ? 1 : 0),
            timeToExpire,
            isBlocked,
            timeToBlockExpire: isBlocked ? timeToBlockExpire : 0,
        };
    }
    async increment(key, ttl, limit, blockDuration, throttlerName) {
        const ttlMilliseconds = ttl;
        const blockDurationMilliseconds = blockDuration;
        this.ensureSweep();
        if (!this.storage.has(key)) {
            this.storage.set(key, {
                totalHits: new Map([[throttlerName, 0]]),
                expiresAt: Date.now() + ttlMilliseconds,
                blockExpiresAt: 0,
                isBlocked: false,
            });
        }
        this.pruneExpiredHits(key, throttlerName);
        let timeToExpire = this.getExpirationTime(key);
        if (timeToExpire <= 0) {
            this.storage.get(key).expiresAt = Date.now() + ttlMilliseconds;
            timeToExpire = this.getExpirationTime(key);
        }
        if (blockDurationMilliseconds <= 0) {
            return this.incrementWithoutBlock(key, ttlMilliseconds, limit, throttlerName, timeToExpire);
        }
        if (!this.storage.get(key).isBlocked) {
            this.fireHitCount(key, throttlerName, ttlMilliseconds);
        }
        if (this.storage.get(key).totalHits.get(throttlerName) > limit &&
            !this.storage.get(key).isBlocked) {
            this.storage.get(key).isBlocked = true;
            this.storage.get(key).blockExpiresAt = Date.now() + blockDurationMilliseconds;
        }
        const timeToBlockExpire = this.getBlockExpirationTime(key);
        if (timeToBlockExpire <= 0 && this.storage.get(key).isBlocked) {
            this.resetBlockedRequest(key, throttlerName);
            this.fireHitCount(key, throttlerName, ttlMilliseconds);
        }
        return {
            totalHits: this.storage.get(key).totalHits.get(throttlerName),
            timeToExpire,
            isBlocked: this.storage.get(key).isBlocked,
            timeToBlockExpire: timeToBlockExpire,
        };
    }
    onApplicationShutdown() {
        if (this.sweepInterval) {
            clearInterval(this.sweepInterval);
            this.sweepInterval = undefined;
        }
        this.hitExpirations.clear();
        this._storage.clear();
    }
};
exports.ThrottlerStorageService = ThrottlerStorageService;
exports.ThrottlerStorageService = ThrottlerStorageService = __decorate([
    (0, common_1.Injectable)()
], ThrottlerStorageService);
//# sourceMappingURL=throttler.service.js.map

},
"./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/utilities.js"(__unused_rspack_module, exports) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.weeks = exports.days = exports.hours = exports.minutes = exports.seconds = void 0;
const seconds = (howMany) => howMany * 1000;
exports.seconds = seconds;
const minutes = (howMany) => 60 * howMany * (0, exports.seconds)(1);
exports.minutes = minutes;
const hours = (howMany) => 60 * howMany * (0, exports.minutes)(1);
exports.hours = hours;
const days = (howMany) => 24 * howMany * (0, exports.hours)(1);
exports.days = days;
const weeks = (howMany) => 7 * howMany * (0, exports.days)(1);
exports.weeks = weeks;
//# sourceMappingURL=utilities.js.map

},
"@nestjs/common"(module) {

module.exports = __rspack_external__nestjs_common_a04939da;


},
"@nestjs/core"(module) {

module.exports = __rspack_external__nestjs_core_d7b00a1a;


},
"@nestjs/jwt"(module) {

module.exports = __rspack_external__nestjs_jwt_50c0e0ae;


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
"@prisma/client-users"(module) {

module.exports = __rspack_external__prisma_client_users_8235c6f9;


},
"async_hooks"(module) {

module.exports = __rspack_external_async_hooks;


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
"net"(module) {

module.exports = __rspack_external_net;


},
"node:crypto"(module) {

module.exports = __rspack_external_node_crypto_2e7c4b46;


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
"./node_modules/.pnpm/helmet@8.3.0/node_modules/helmet/index.mjs"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  contentSecurityPolicy: () => (contentSecurityPolicy),
  crossOriginEmbedderPolicy: () => (crossOriginEmbedderPolicy),
  crossOriginOpenerPolicy: () => (crossOriginOpenerPolicy),
  crossOriginResourcePolicy: () => (crossOriginResourcePolicy),
  "default": () => (helmet),
  dnsPrefetchControl: () => (xDnsPrefetchControl),
  frameguard: () => (xFrameOptions),
  hidePoweredBy: () => (xPoweredBy),
  hsts: () => (strictTransportSecurity),
  ieNoOpen: () => (xDownloadOptions),
  noSniff: () => (xContentTypeOptions),
  originAgentCluster: () => (originAgentCluster),
  permittedCrossDomainPolicies: () => (xPermittedCrossDomainPolicies),
  referrerPolicy: () => (referrerPolicy),
  strictTransportSecurity: () => (strictTransportSecurity),
  xContentTypeOptions: () => (xContentTypeOptions),
  xDnsPrefetchControl: () => (xDnsPrefetchControl),
  xDownloadOptions: () => (xDownloadOptions),
  xFrameOptions: () => (xFrameOptions),
  xPermittedCrossDomainPolicies: () => (xPermittedCrossDomainPolicies),
  xPoweredBy: () => (xPoweredBy),
  xXssProtection: () => (xXssProtection),
  xssFilter: () => (xXssProtection)
});
const dashify = str => str.replace(/[A-Z]/g, capitalLetter => "-" + capitalLetter.toLowerCase())
const errify = err => (err instanceof Error ? err : new Error(String(err)))
const isString = value => typeof value === "string"
const throwErrorIfExists = err => {
	if (err) throw err
}

const dangerouslyDisableDefaultSrc = Symbol("dangerouslyDisableDefaultSrc")
const SHOULD_BE_QUOTED = new Set(["none", "self", "strict-dynamic", "report-sample", "inline-speculation-rules", "unsafe-inline", "unsafe-eval", "unsafe-hashes", "wasm-unsafe-eval"])
const getDefaultDirectives = () => ({
	"default-src": ["'self'"],
	"base-uri": ["'self'"],
	"font-src": ["'self'", "https:", "data:"],
	"form-action": ["'self'"],
	"frame-ancestors": ["'self'"],
	"img-src": ["'self'", "data:"],
	"object-src": ["'none'"],
	"script-src": ["'self'"],
	"script-src-attr": ["'none'"],
	"style-src": ["'self'", "https:", "'unsafe-inline'"],
	"upgrade-insecure-requests": []
})
const parseDirectiveName = rawDirectiveName => {
	if (rawDirectiveName.length === 0 || !/^[a-z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(rawDirectiveName)) {
		throw new Error(`Content-Security-Policy received an invalid directive name ${JSON.stringify(rawDirectiveName)}`)
	}
	return dashify(rawDirectiveName)
}
const getDirectiveValueValidationError = (directiveName, directiveValue) => (/;|,/.test(directiveValue) ? new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}`) : null)
const getDirectiveValueEntryValidationError = (directiveName, directiveValueEntry) => (SHOULD_BE_QUOTED.has(directiveValueEntry) || directiveValueEntry.startsWith("nonce-") || directiveValueEntry.startsWith("sha256-") || directiveValueEntry.startsWith("sha384-") || directiveValueEntry.startsWith("sha512-") ? new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}. ${JSON.stringify(directiveValueEntry)} should be quoted`) : null)
const stringifyDirectiveValue = directiveValue => {
	if (Array.isArray(directiveValue)) {
		return directiveValue.every(isString) ? directiveValue.join(" ") : null
	}
	if (directiveValue instanceof Set) {
		return stringifyDirectiveValue(Array.from(directiveValue))
	}
	return null
}
const parseDirectives = ({useDefaults = true, directives: rawDirectives = {}}) => {
	const result = new Map(useDefaults ? Object.entries(getDefaultDirectives()) : [])
	let hasDisabledDefaultSrc = false
	const directiveNamesSeen = new Set()
	for (const rawDirectiveName in rawDirectives) {
		if (!Object.hasOwn(rawDirectives, rawDirectiveName)) {
			continue
		}
		const directiveName = parseDirectiveName(rawDirectiveName)
		if (directiveNamesSeen.has(directiveName)) {
			throw new Error(`Content-Security-Policy received a duplicate directive ${JSON.stringify(directiveName)}`)
		}
		directiveNamesSeen.add(directiveName)
		const rawDirectiveValue = rawDirectives[rawDirectiveName]
		let directiveValue
		if (rawDirectiveValue === null) {
			if (directiveName === "default-src") {
				throw new Error("Content-Security-Policy needs a default-src but it was set to `null`. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.")
			}
			result.delete(directiveName)
			continue
		} else if (typeof rawDirectiveValue === "string") {
			directiveValue = [rawDirectiveValue]
		} else if (rawDirectiveValue === dangerouslyDisableDefaultSrc) {
			if (directiveName === "default-src") {
				hasDisabledDefaultSrc = true
				result.delete(directiveName)
				continue
			} else {
				throw new Error(`Content-Security-Policy: tried to disable ${JSON.stringify(directiveName)} as if it were default-src; simply omit the key`)
			}
		} else if (rawDirectiveValue) {
			directiveValue = rawDirectiveValue
		} else {
			throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}`)
		}
		for (const element of directiveValue) {
			if (typeof element !== "string") continue
			throwErrorIfExists(getDirectiveValueValidationError(directiveName, element) ?? getDirectiveValueEntryValidationError(directiveName, element))
		}
		result.set(directiveName, directiveValue)
	}
	if (!result.size) {
		throw new Error("Content-Security-Policy has no directives. Either set some or disable the header")
	}
	if (!result.has("default-src") && !hasDisabledDefaultSrc) {
		throw new Error("Content-Security-Policy needs a default-src but none was provided. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.")
	}
	let stringResult = ""
	let shouldUseStringResult = true
	for (const [directiveName, directiveValue] of result) {
		const directiveValueString = stringifyDirectiveValue(directiveValue)
		if (directiveValueString === null) {
			shouldUseStringResult = false
			break
		} else {
			if (stringResult) stringResult += ";"
			stringResult += directiveValueString ? `${directiveName} ${directiveValueString}` : directiveName
		}
	}
	return shouldUseStringResult ? stringResult : result
}
function getHeaderValue(req, res, normalizedDirectives) {
	const result = []
	for (const [directiveName, rawDirectiveValue] of normalizedDirectives) {
		let directiveValue = ""
		for (const element of rawDirectiveValue) {
			if (typeof element === "function") {
				let newElement
				try {
					newElement = element(req, res)
				} catch (err) {
					return errify(err)
				}
				const err = getDirectiveValueEntryValidationError(directiveName, newElement)
				if (err) return err
				directiveValue += " " + newElement
			} else {
				directiveValue += " " + element
			}
		}
		if (directiveValue) {
			const err = getDirectiveValueValidationError(directiveName, directiveValue)
			if (err) return err
			result.push(`${directiveName}${directiveValue}`)
		} else {
			result.push(directiveName)
		}
	}
	return result.join(";")
}
const contentSecurityPolicy = function contentSecurityPolicy(options = {}) {
	const headerName = options.reportOnly ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy"
	const parsedDirectives = parseDirectives(options)
	// A special case for performance.
	if (typeof parsedDirectives === "string") {
		return function contentSecurityPolicyMiddleware(_req, res, next) {
			res.setHeader(headerName, parsedDirectives)
			next()
		}
	}
	return function contentSecurityPolicyMiddleware(req, res, next) {
		const result = getHeaderValue(req, res, parsedDirectives)
		if (result instanceof Error) {
			next(result)
		} else {
			res.setHeader(headerName, result)
			next()
		}
	}
}
contentSecurityPolicy.getDefaultDirectives = getDefaultDirectives
contentSecurityPolicy.dangerouslyDisableDefaultSrc = dangerouslyDisableDefaultSrc

const ALLOWED_POLICIES$2 = new Set(["require-corp", "credentialless", "unsafe-none"])
function getHeaderValueFromOptions$6({policy = "require-corp"}) {
	if (ALLOWED_POLICIES$2.has(policy)) {
		return policy
	} else {
		throw new Error(`Cross-Origin-Embedder-Policy does not support the ${JSON.stringify(policy)} policy`)
	}
}
function crossOriginEmbedderPolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$6(options)
	return function crossOriginEmbedderPolicyMiddleware(_req, res, next) {
		res.setHeader("Cross-Origin-Embedder-Policy", headerValue)
		next()
	}
}

const ALLOWED_POLICIES$1 = new Set(["same-origin", "same-origin-allow-popups", "noopener-allow-popups", "unsafe-none"])
function getHeaderValueFromOptions$5({policy = "same-origin"}) {
	if (ALLOWED_POLICIES$1.has(policy)) {
		return policy
	} else {
		throw new Error(`Cross-Origin-Opener-Policy does not support the ${JSON.stringify(policy)} policy`)
	}
}
function crossOriginOpenerPolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$5(options)
	return function crossOriginOpenerPolicyMiddleware(_req, res, next) {
		res.setHeader("Cross-Origin-Opener-Policy", headerValue)
		next()
	}
}

const ALLOWED_POLICIES = new Set(["same-origin", "same-site", "cross-origin"])
function getHeaderValueFromOptions$4({policy = "same-origin"}) {
	if (ALLOWED_POLICIES.has(policy)) {
		return policy
	} else {
		throw new Error(`Cross-Origin-Resource-Policy does not support the ${JSON.stringify(policy)} policy`)
	}
}
function crossOriginResourcePolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$4(options)
	return function crossOriginResourcePolicyMiddleware(_req, res, next) {
		res.setHeader("Cross-Origin-Resource-Policy", headerValue)
		next()
	}
}

function originAgentCluster() {
	return function originAgentClusterMiddleware(_req, res, next) {
		res.setHeader("Origin-Agent-Cluster", "?1")
		next()
	}
}

const ALLOWED_TOKENS = new Set(["no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url", ""])
function getHeaderValueFromOptions$3({policy = ["no-referrer"]}) {
	const tokens = typeof policy === "string" ? [policy] : policy
	if (tokens.length === 0) {
		throw new Error("Referrer-Policy received no policy tokens")
	}
	const tokensSeen = new Set()
	tokens.forEach(token => {
		if (!ALLOWED_TOKENS.has(token)) {
			throw new Error(`Referrer-Policy received an unexpected policy token ${JSON.stringify(token)}`)
		} else if (tokensSeen.has(token)) {
			throw new Error(`Referrer-Policy received a duplicate policy token ${JSON.stringify(token)}`)
		}
		tokensSeen.add(token)
	})
	return tokens.join(",")
}
function referrerPolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$3(options)
	return function referrerPolicyMiddleware(_req, res, next) {
		res.setHeader("Referrer-Policy", headerValue)
		next()
	}
}

const DEFAULT_MAX_AGE = 365 * 24 * 60 * 60
function parseMaxAge(value = DEFAULT_MAX_AGE) {
	if (value >= 0 && Number.isFinite(value)) {
		return Math.floor(value)
	} else {
		throw new Error(`Strict-Transport-Security: ${JSON.stringify(value)} is not a valid value for maxAge. Please choose a positive integer.`)
	}
}
function getHeaderValueFromOptions$2(options) {
	if ("maxage" in options) {
		throw new Error("Strict-Transport-Security received an unsupported property, `maxage`. Did you mean to pass `maxAge`?")
	}
	if ("includeSubdomains" in options) {
		throw new Error('Strict-Transport-Security middleware should use `includeSubDomains` instead of `includeSubdomains`. (The correct one has an uppercase "D".)')
	}
	const directives = [`max-age=${parseMaxAge(options.maxAge)}`]
	if (options.includeSubDomains === undefined || options.includeSubDomains) {
		directives.push("includeSubDomains")
	}
	if (options.preload) {
		directives.push("preload")
	}
	return directives.join("; ")
}
function strictTransportSecurity(options = {}) {
	const headerValue = getHeaderValueFromOptions$2(options)
	return function strictTransportSecurityMiddleware(_req, res, next) {
		res.setHeader("Strict-Transport-Security", headerValue)
		next()
	}
}

function xContentTypeOptions() {
	return function xContentTypeOptionsMiddleware(_req, res, next) {
		res.setHeader("X-Content-Type-Options", "nosniff")
		next()
	}
}

function xDnsPrefetchControl(options = {}) {
	const headerValue = options.allow ? "on" : "off"
	return function xDnsPrefetchControlMiddleware(_req, res, next) {
		res.setHeader("X-DNS-Prefetch-Control", headerValue)
		next()
	}
}

function xDownloadOptions() {
	return function xDownloadOptionsMiddleware(_req, res, next) {
		res.setHeader("X-Download-Options", "noopen")
		next()
	}
}

function getHeaderValueFromOptions$1({action = "sameorigin"}) {
	const normalizedAction = typeof action === "string" ? action.toUpperCase() : action
	switch (normalizedAction) {
		case "SAME-ORIGIN":
			return "SAMEORIGIN"
		case "DENY":
		case "SAMEORIGIN":
			return normalizedAction
		default:
			throw new Error(`X-Frame-Options received an invalid action ${JSON.stringify(action)}`)
	}
}
function xFrameOptions(options = {}) {
	const headerValue = getHeaderValueFromOptions$1(options)
	return function xFrameOptionsMiddleware(_req, res, next) {
		res.setHeader("X-Frame-Options", headerValue)
		next()
	}
}

const ALLOWED_PERMITTED_POLICIES = new Set(["none", "master-only", "by-content-type", "all"])
function getHeaderValueFromOptions({permittedPolicies = "none"}) {
	if (ALLOWED_PERMITTED_POLICIES.has(permittedPolicies)) {
		return permittedPolicies
	} else {
		throw new Error(`X-Permitted-Cross-Domain-Policies does not support ${JSON.stringify(permittedPolicies)}`)
	}
}
function xPermittedCrossDomainPolicies(options = {}) {
	const headerValue = getHeaderValueFromOptions(options)
	return function xPermittedCrossDomainPoliciesMiddleware(_req, res, next) {
		res.setHeader("X-Permitted-Cross-Domain-Policies", headerValue)
		next()
	}
}

function xPoweredBy() {
	return function xPoweredByMiddleware(_req, res, next) {
		res.removeHeader("X-Powered-By")
		next()
	}
}

function xXssProtection() {
	return function xXssProtectionMiddleware(_req, res, next) {
		res.setHeader("X-XSS-Protection", "0")
		next()
	}
}

function getMiddlewareFunctionsFromOptions(options) {
	const result = []
	switch (options.contentSecurityPolicy) {
		case undefined:
		case true:
			result.push(contentSecurityPolicy())
			break
		case false:
			break
		default:
			result.push(contentSecurityPolicy(options.contentSecurityPolicy))
			break
	}
	switch (options.crossOriginEmbedderPolicy) {
		case undefined:
		case false:
			break
		case true:
			result.push(crossOriginEmbedderPolicy())
			break
		default:
			result.push(crossOriginEmbedderPolicy(options.crossOriginEmbedderPolicy))
			break
	}
	switch (options.crossOriginOpenerPolicy) {
		case undefined:
		case true:
			result.push(crossOriginOpenerPolicy())
			break
		case false:
			break
		default:
			result.push(crossOriginOpenerPolicy(options.crossOriginOpenerPolicy))
			break
	}
	switch (options.crossOriginResourcePolicy) {
		case undefined:
		case true:
			result.push(crossOriginResourcePolicy())
			break
		case false:
			break
		default:
			result.push(crossOriginResourcePolicy(options.crossOriginResourcePolicy))
			break
	}
	switch (options.originAgentCluster) {
		case undefined:
		case true:
			result.push(originAgentCluster())
			break
		case false:
			break
		default:
			console.warn("Origin-Agent-Cluster does not take options. Remove the property to silence this warning.")
			result.push(originAgentCluster())
			break
	}
	switch (options.referrerPolicy) {
		case undefined:
		case true:
			result.push(referrerPolicy())
			break
		case false:
			break
		default:
			result.push(referrerPolicy(options.referrerPolicy))
			break
	}
	if ("strictTransportSecurity" in options && "hsts" in options) {
		throw new Error("Strict-Transport-Security option was specified twice. Remove the `hsts` option to fix this error.")
	}
	const strictTransportSecurityOption = options.strictTransportSecurity ?? options.hsts
	switch (strictTransportSecurityOption) {
		case undefined:
		case true:
			result.push(strictTransportSecurity())
			break
		case false:
			break
		default:
			result.push(strictTransportSecurity(strictTransportSecurityOption))
			break
	}
	if ("xContentTypeOptions" in options && "noSniff" in options) {
		throw new Error("X-Content-Type-Options option was specified twice. Remove the `noSniff` option to fix this error.")
	}
	const xContentTypeOptionsOption = options.xContentTypeOptions ?? options.noSniff
	switch (xContentTypeOptionsOption) {
		case undefined:
		case true:
			result.push(xContentTypeOptions())
			break
		case false:
			break
		default:
			console.warn("X-Content-Type-Options does not take options. Remove the property to silence this warning.")
			result.push(xContentTypeOptions())
			break
	}
	if ("xDnsPrefetchControl" in options && "dnsPrefetchControl" in options) {
		throw new Error("X-DNS-Prefetch-Control option was specified twice. Remove the `dnsPrefetchControl` option to fix this error.")
	}
	const xDnsPrefetchControlOption = options.xDnsPrefetchControl ?? options.dnsPrefetchControl
	switch (xDnsPrefetchControlOption) {
		case undefined:
		case true:
			result.push(xDnsPrefetchControl())
			break
		case false:
			break
		default:
			result.push(xDnsPrefetchControl(xDnsPrefetchControlOption))
			break
	}
	if ("xDownloadOptions" in options && "ieNoOpen" in options) {
		throw new Error("X-Download-Options option was specified twice. Remove the `ieNoOpen` option to fix this error.")
	}
	const xDownloadOptionsOption = options.xDownloadOptions ?? options.ieNoOpen
	switch (xDownloadOptionsOption) {
		case undefined:
		case true:
			result.push(xDownloadOptions())
			break
		case false:
			break
		default:
			console.warn("X-Download-Options does not take options. Remove the property to silence this warning.")
			result.push(xDownloadOptions())
			break
	}
	if ("xFrameOptions" in options && "frameguard" in options) {
		throw new Error("X-Frame-Options option was specified twice. Remove the `frameguard` option to fix this error.")
	}
	const xFrameOptionsOption = options.xFrameOptions ?? options.frameguard
	switch (xFrameOptionsOption) {
		case undefined:
		case true:
			result.push(xFrameOptions())
			break
		case false:
			break
		default:
			result.push(xFrameOptions(xFrameOptionsOption))
			break
	}
	if ("xPermittedCrossDomainPolicies" in options && "permittedCrossDomainPolicies" in options) {
		throw new Error("X-Permitted-Cross-Domain-Policies option was specified twice. Remove the `permittedCrossDomainPolicies` option to fix this error.")
	}
	const xPermittedCrossDomainPoliciesOption = options.xPermittedCrossDomainPolicies ?? options.permittedCrossDomainPolicies
	switch (xPermittedCrossDomainPoliciesOption) {
		case undefined:
		case true:
			result.push(xPermittedCrossDomainPolicies())
			break
		case false:
			break
		default:
			result.push(xPermittedCrossDomainPolicies(xPermittedCrossDomainPoliciesOption))
			break
	}
	if ("xPoweredBy" in options && "hidePoweredBy" in options) {
		throw new Error("X-Powered-By option was specified twice. Remove the `hidePoweredBy` option to fix this error.")
	}
	const xPoweredByOption = options.xPoweredBy ?? options.hidePoweredBy
	switch (xPoweredByOption) {
		case undefined:
		case true:
			result.push(xPoweredBy())
			break
		case false:
			break
		default:
			console.warn("X-Powered-By does not take options. Remove the property to silence this warning.")
			result.push(xPoweredBy())
			break
	}
	if ("xXssProtection" in options && "xssFilter" in options) {
		throw new Error("X-XSS-Protection option was specified twice. Remove the `xssFilter` option to fix this error.")
	}
	const xXssProtectionOption = options.xXssProtection ?? options.xssFilter
	switch (xXssProtectionOption) {
		case undefined:
		case true:
			result.push(xXssProtection())
			break
		case false:
			break
		default:
			console.warn("X-XSS-Protection does not take options. Remove the property to silence this warning.")
			result.push(xXssProtection())
			break
	}
	return result
}
const helmet = Object.assign(
	function helmet(options = {}) {
		// People should be able to pass an options object with no prototype,
		// so we want this optional chaining.
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (options.constructor?.name === "IncomingMessage") {
			throw new Error("It appears you have done something like `app.use(helmet)`, but it should be `app.use(helmet())`.")
		}
		const middlewareFunctions = getMiddlewareFunctionsFromOptions(options)
		return function helmetMiddleware(req, res, next) {
			let middlewareIndex = 0
			;(function internalNext(err) {
				if (err) {
					next(err)
					return
				}
				const middlewareFunction = middlewareFunctions[middlewareIndex]
				if (middlewareFunction) {
					middlewareIndex++
					middlewareFunction(req, res, internalNext)
				} else {
					next()
				}
			})()
		}
	},
	{
		contentSecurityPolicy,
		crossOriginEmbedderPolicy,
		crossOriginOpenerPolicy,
		crossOriginResourcePolicy,
		originAgentCluster,
		referrerPolicy,
		strictTransportSecurity,
		xContentTypeOptions,
		xDnsPrefetchControl,
		xDownloadOptions,
		xFrameOptions,
		xPermittedCrossDomainPolicies,
		xPoweredBy,
		xXssProtection,
		// Legacy aliases
		dnsPrefetchControl: xDnsPrefetchControl,
		xssFilter: xXssProtection,
		permittedCrossDomainPolicies: xPermittedCrossDomainPolicies,
		ieNoOpen: xDownloadOptions,
		noSniff: xContentTypeOptions,
		frameguard: xFrameOptions,
		hidePoweredBy: xPoweredBy,
		hsts: strictTransportSecurity
	}
)




},
"./apps/api-gateway/src/api-gateway.module.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ApiGatewayModule: () => (ApiGatewayModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _modules_users_users_module_js__rspack_import_1 = __webpack_require__("./apps/api-gateway/src/modules/users/users.module.ts");
/* import */ var _modules_transactions_transactions_module_js__rspack_import_2 = __webpack_require__("./apps/api-gateway/src/modules/transactions/transactions.module.ts");
/* import */ var _modules_auth_auth_module_js__rspack_import_3 = __webpack_require__("./apps/api-gateway/src/modules/auth/auth.module.ts");
/* import */ var _app_shared__rspack_import_4 = __webpack_require__("./libs/shared/src/index.ts");
/* import */ var _nestjs_mongoose__rspack_import_5 = __webpack_require__("@nestjs/mongoose");
/* import */ var _nestjs_core__rspack_import_6 = __webpack_require__("@nestjs/core");
/* import */ var _nestjs_throttler__rspack_import_7 = __webpack_require__("./node_modules/.pnpm/@nestjs+throttler@6.7.1_@nestjs+common@12.1.2_reflect-metadata@0.2.2_rxjs@7.8.2__@nestj_e7389d926acbca2df1563c50b50a4fab/node_modules/@nestjs/throttler/dist/index.js");
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








class ApiGatewayModule {
}
ApiGatewayModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            // Límite de 10 peticiones cada 60 segundos por IP
            _nestjs_throttler__rspack_import_7.ThrottlerModule.forRoot([
                {
                    ttl: 60000,
                    limit: 10
                }
            ]),
            _nestjs_mongoose__rspack_import_5.MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/finwallet_logs'),
            _app_shared__rspack_import_4.ObservabilityModule,
            _app_shared__rspack_import_4.IdempotencyModule,
            _modules_users_users_module_js__rspack_import_1.UsersGatewayModule,
            _modules_transactions_transactions_module_js__rspack_import_2.TransactionsModule,
            _modules_auth_auth_module_js__rspack_import_3.AuthGatewayModule
        ],
        controllers: [],
        providers: [
            {
                provide: _nestjs_core__rspack_import_6.APP_GUARD,
                useClass: _nestjs_throttler__rspack_import_7.ThrottlerGuard
            },
            {
                provide: _nestjs_core__rspack_import_6.APP_INTERCEPTOR,
                useClass: _app_shared__rspack_import_4.AuditInterceptor
            }
        ]
    })
], ApiGatewayModule);


},
"./apps/api-gateway/src/main.ts"(__webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(__webpack_module__, async function (__rspack_load_async_deps, __rspack_async_done) { try {
__webpack_require__.r(__webpack_exports__);
/* import */ var _nestjs_core__rspack_import_0 = __webpack_require__("@nestjs/core");
/* import */ var _api_gateway_module_js__rspack_import_1 = __webpack_require__("./apps/api-gateway/src/api-gateway.module.ts");
/* import */ var _nestjs_swagger__rspack_import_2 = __webpack_require__("@nestjs/swagger");
/* import */ var _app_shared__rspack_import_3 = __webpack_require__("./libs/shared/src/index.ts");
/* import */ var helmet__rspack_import_4 = __webpack_require__("./node_modules/.pnpm/helmet@8.3.0/node_modules/helmet/index.mjs");






async function bootstrap() {
    const app = await _nestjs_core__rspack_import_0.NestFactory.create(_api_gateway_module_js__rspack_import_1.ApiGatewayModule);
    // Estandariza todas las respuestas de la API
    app.useGlobalInterceptors(new _app_shared__rspack_import_3.TransformInterceptor());
    // Centraliza todos los errores
    const httpAdapter = app.get(_nestjs_core__rspack_import_0.HttpAdapterHost);
    app.useGlobalFilters(new _app_shared__rspack_import_3.AllExceptionsFilter(httpAdapter));
    // 1. Seguridad HTTP: Agregar cabeceras para prevenir ataques XSS, Clickjacking, etc.
    app.use((0,helmet__rspack_import_4["default"])());
    // 2. Seguridad CORS: Solo permitir peticiones desde orígenes confiables
    app.enableCors({
        origin: process.env.FRONTEND_URL || '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
    });
    const config = new _nestjs_swagger__rspack_import_2.DocumentBuilder().setTitle('FinWallet API').setDescription('The FinWallet API description').setVersion('1.0').addTag('Users').addTag('Transactions').addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header'
    }, 'JWT-auth').build();
    const document = _nestjs_swagger__rspack_import_2.SwaggerModule.createDocument(app, config);
    _nestjs_swagger__rspack_import_2.SwaggerModule.setup('api/docs', app, document);
    await app.listen(process.env.port ?? 3000);
}
await bootstrap();

__rspack_async_done();
} catch(e) { __rspack_async_done(e); } }, 1);

},
"./apps/api-gateway/src/modules/auth/auth.controller.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthController: () => (AuthController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_swagger__rspack_import_1 = __webpack_require__("@nestjs/swagger");
/* import */ var _app_auth__rspack_import_2 = __webpack_require__("./libs/auth/src/index.ts");
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



class AuthController {
    async login(dto) {
        return this.loginUseCase.execute(dto);
    }
    constructor(loginUseCase){
        _define_property(this, "loginUseCase", void 0);
        this.loginUseCase = loginUseCase;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)('login'),
    (0,_nestjs_swagger__rspack_import_1.ApiOperation)({
        summary: 'Login to get an access token'
    }),
    (0,_nestjs_swagger__rspack_import_1.ApiResponse)({
        status: 201,
        description: 'Successfully logged in.'
    }),
    (0,_nestjs_swagger__rspack_import_1.ApiResponse)({
        status: 401,
        description: 'Invalid credentials.'
    }),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _app_auth__rspack_import_2.LoginDto === "undefined" ? Object : _app_auth__rspack_import_2.LoginDto
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = _ts_decorate([
    (0,_nestjs_swagger__rspack_import_1.ApiTags)('Auth'),
    (0,_nestjs_common__rspack_import_0.Controller)('api/v1/auth'),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Inject)(_app_auth__rspack_import_2.LoginUseCase)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _app_auth__rspack_import_2.LoginUseCase === "undefined" ? Object : _app_auth__rspack_import_2.LoginUseCase
    ])
], AuthController);


},
"./apps/api-gateway/src/modules/auth/auth.module.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthGatewayModule: () => (AuthGatewayModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _auth_controller_js__rspack_import_1 = __webpack_require__("./apps/api-gateway/src/modules/auth/auth.controller.ts");
/* import */ var _app_auth__rspack_import_2 = __webpack_require__("./libs/auth/src/index.ts");
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



class AuthGatewayModule {
}
AuthGatewayModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _app_auth__rspack_import_2.AuthLibModule
        ],
        controllers: [
            _auth_controller_js__rspack_import_1.AuthController
        ]
    })
], AuthGatewayModule);


},
"./apps/api-gateway/src/modules/transactions/transactions.controller.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TransactionsController: () => (TransactionsController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _app_transaction__rspack_import_1 = __webpack_require__("./libs/transaction/src/index.ts");
/* import */ var _nestjs_swagger__rspack_import_2 = __webpack_require__("@nestjs/swagger");
/* import */ var _nestjs_microservices__rspack_import_3 = __webpack_require__("@nestjs/microservices");
/* import */ var _app_shared__rspack_import_4 = __webpack_require__("./libs/shared/src/index.ts");
/* import */ var crypto__rspack_import_5 = __webpack_require__("crypto");
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
    async transferFunds(dto) {
        try {
            const transaction = await this.transferFundsUseCase.execute(dto);
            return {
                message: "Transfer successful",
                data: {
                    id: transaction.toAccountId,
                    amount: transaction.amount,
                    status: transaction.status
                }
            };
        } catch (error) {
            return {
                message: "Transfer failed",
                error: error.message
            };
        }
    }
    async requestDeposit(dto) {
        const depositId = (0,crypto__rspack_import_5.randomUUID)();
        // Emitimos el evento asíncrono hacia RabbitMQ
        this.rabbitClient.emit(_app_shared__rspack_import_4.BrokerEvents.DEPOSIT_REQUESTED, {
            depositId,
            accountId: dto.accountId,
            amount: dto.amount,
            cardToken: dto.cardToken
        });
        // Respondemos inmediatamente sin esperar al banco
        return {
            message: "Tu depósito está siendo procesado por el banco. Te notificaremos cuando se complete.",
            depositId,
            status: "PENDING"
        };
    }
    async getTransfersByUser(req) {
        try {
            const userId = req.user.id; // Extraído de forma segura desde el JWT
            const transactions = await this.getTransfersByUserUseCase.execute(userId);
            return {
                data: transactions
            };
        } catch (error) {
            return {
                data: [],
                error: error.message
            };
        }
    }
    constructor(transferFundsUseCase, getTransfersByUserUseCase, rabbitClient){
        _define_property(this, "transferFundsUseCase", void 0);
        _define_property(this, "getTransfersByUserUseCase", void 0);
        _define_property(this, "rabbitClient", void 0);
        this.transferFundsUseCase = transferFundsUseCase;
        this.getTransfersByUserUseCase = getTransfersByUserUseCase;
        this.rabbitClient = rabbitClient;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)("transfer"),
    (0,_nestjs_common__rspack_import_0.UseInterceptors)(_app_shared__rspack_import_4.IdempotencyInterceptor),
    (0,_nestjs_swagger__rspack_import_2.ApiHeader)({
        name: 'x-idempotency-key',
        description: 'Unique UUID to prevent duplicate transfers',
        required: true
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiOperation)({
        summary: "Transfer funds between two accounts (P2P)"
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiResponse)({
        status: 201,
        description: "The transfer was successful and is pending clearing."
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiResponse)({
        status: 400,
        description: "Insufficient funds or inactive accounts."
    }),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _app_transaction__rspack_import_1.TransferFundsDto === "undefined" ? Object : _app_transaction__rspack_import_1.TransferFundsDto
    ]),
    _ts_metadata("design:returntype", Promise)
], TransactionsController.prototype, "transferFunds", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)("deposit"),
    (0,_nestjs_common__rspack_import_0.UseInterceptors)(_app_shared__rspack_import_4.IdempotencyInterceptor),
    (0,_nestjs_swagger__rspack_import_2.ApiHeader)({
        name: 'x-idempotency-key',
        description: 'Unique UUID to prevent duplicate deposits',
        required: true
    }),
    (0,_nestjs_common__rspack_import_0.HttpCode)(_nestjs_common__rspack_import_0.HttpStatus.ACCEPTED),
    (0,_nestjs_swagger__rspack_import_2.ApiOperation)({
        summary: "Request a deposit using an external Bank API"
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiResponse)({
        status: 202,
        description: "Deposit request accepted and is being processed in background."
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiResponse)({
        status: 400,
        description: "Bad Request."
    }),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _app_transaction__rspack_import_1.RequestDepositDto === "undefined" ? Object : _app_transaction__rspack_import_1.RequestDepositDto
    ]),
    _ts_metadata("design:returntype", Promise)
], TransactionsController.prototype, "requestDeposit", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)("transfers-by-user"),
    (0,_nestjs_swagger__rspack_import_2.ApiOperation)({
        summary: "Get transfers by user"
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiResponse)({
        status: 200,
        description: "List of transfers"
    }),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], TransactionsController.prototype, "getTransfersByUser", null);
TransactionsController = _ts_decorate([
    (0,_nestjs_swagger__rspack_import_2.ApiTags)("Transactions"),
    (0,_nestjs_swagger__rspack_import_2.ApiBearerAuth)('JWT-auth'),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_app_shared__rspack_import_4.JwtAuthGuard),
    (0,_nestjs_common__rspack_import_0.Controller)("api/v1/transactions"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Inject)(_app_transaction__rspack_import_1.TransferFundsUseCase)),
    _ts_param(2, (0,_nestjs_common__rspack_import_0.Inject)("RABBITMQ_SERVICE")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _app_transaction__rspack_import_1.TransferFundsUseCase === "undefined" ? Object : _app_transaction__rspack_import_1.TransferFundsUseCase,
        typeof _app_transaction__rspack_import_1.GetTransferByUserUseCase === "undefined" ? Object : _app_transaction__rspack_import_1.GetTransferByUserUseCase,
        typeof _nestjs_microservices__rspack_import_3.ClientProxy === "undefined" ? Object : _nestjs_microservices__rspack_import_3.ClientProxy
    ])
], TransactionsController);


},
"./apps/api-gateway/src/modules/transactions/transactions.module.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TransactionsModule: () => (TransactionsModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _transactions_controller_js__rspack_import_1 = __webpack_require__("./apps/api-gateway/src/modules/transactions/transactions.controller.ts");
/* import */ var _app_transaction__rspack_import_2 = __webpack_require__("./libs/transaction/src/index.ts");
/* import */ var _nestjs_microservices__rspack_import_3 = __webpack_require__("@nestjs/microservices");
/* import */ var _nestjs_schedule__rspack_import_4 = __webpack_require__("@nestjs/schedule");
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
            _nestjs_schedule__rspack_import_4.ScheduleModule.forRoot(),
            _nestjs_microservices__rspack_import_3.ClientsModule.register([
                {
                    name: 'RABBITMQ_SERVICE',
                    transport: _nestjs_microservices__rspack_import_3.Transport.RMQ,
                    options: {
                        urls: [
                            process.env.RABBITMQ_URL || 'amqp://localhost:5672'
                        ],
                        queue: 'transactions_queue',
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
            {
                provide: _app_transaction__rspack_import_2.TransferFundsUseCase,
                useClass: _app_transaction__rspack_import_2.TransferFundsUseCase
            },
            {
                provide: _app_transaction__rspack_import_2.GetTransferByUserUseCase,
                useClass: _app_transaction__rspack_import_2.GetTransferByUserUseCase
            },
            {
                provide: _app_transaction__rspack_import_2.TRANSACTION_REPOSITORY,
                useClass: _app_transaction__rspack_import_2.PrismaTransactionRepository
            },
            {
                provide: _app_transaction__rspack_import_2.EVENT_BUS_PORT,
                useClass: _app_transaction__rspack_import_2.RabbitMQEventBusAdapter
            },
            _app_transaction__rspack_import_2.OutboxProcessor
        ]
    })
], TransactionsModule);


},
"./apps/api-gateway/src/modules/users/users.controller.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersController: () => (UsersController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _app_user__rspack_import_1 = __webpack_require__("./libs/user/src/index.ts");
/* import */ var _nestjs_swagger__rspack_import_2 = __webpack_require__("@nestjs/swagger");
/* import */ var _nestjs_microservices__rspack_import_3 = __webpack_require__("@nestjs/microservices");
/* import */ var _app_shared__rspack_import_4 = __webpack_require__("./libs/shared/src/index.ts");
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






class UsersController {
    async createUser(dto) {
        const user = await this.createUserUseCase.execute(dto);
        // Dispara el evento asíncrono para que el microservicio de cuentas lo atrape
        this.rabbitClient.emit(_app_shared__rspack_import_4.BrokerEvents.USER_CREATED, {
            userId: user.id,
            email: user.email,
            name: user.name
        });
        return user;
    }
    constructor(// Como el usuario no requiere un microservicio distribuido por ahora (puede ser local),
    // Inyectamos directamente el caso de uso.
    createUserUseCase, rabbitClient){
        _define_property(this, "createUserUseCase", void 0);
        _define_property(this, "rabbitClient", void 0);
        this.createUserUseCase = createUserUseCase;
        this.rabbitClient = rabbitClient;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)(),
    (0,_nestjs_swagger__rspack_import_2.ApiOperation)({
        summary: "Create a new user"
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiResponse)({
        status: 201,
        description: "The user has been successfully created."
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiResponse)({
        status: 400,
        description: "Bad Request."
    }),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _app_user__rspack_import_1.CreateUserDto === "undefined" ? Object : _app_user__rspack_import_1.CreateUserDto
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
UsersController = _ts_decorate([
    (0,_nestjs_swagger__rspack_import_2.ApiTags)("Users"),
    (0,_nestjs_common__rspack_import_0.Controller)("api/v1/users"),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Inject)("RABBITMQ_SERVICE")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _app_user__rspack_import_1.CreateUserUseCase === "undefined" ? Object : _app_user__rspack_import_1.CreateUserUseCase,
        typeof _nestjs_microservices__rspack_import_3.ClientProxy === "undefined" ? Object : _nestjs_microservices__rspack_import_3.ClientProxy
    ])
], UsersController);


},
"./apps/api-gateway/src/modules/users/users.module.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersGatewayModule: () => (UsersGatewayModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _users_controller_js__rspack_import_1 = __webpack_require__("./apps/api-gateway/src/modules/users/users.controller.ts");
/* import */ var _app_user__rspack_import_2 = __webpack_require__("./libs/user/src/index.ts");
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




class UsersGatewayModule {
}
UsersGatewayModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_microservices__rspack_import_3.ClientsModule.register([
                {
                    name: 'RABBITMQ_SERVICE',
                    transport: _nestjs_microservices__rspack_import_3.Transport.RMQ,
                    options: {
                        urls: [
                            process.env.RABBITMQ_URL || 'amqp://localhost:5672'
                        ],
                        queue: 'accounts_queue',
                        queueOptions: {
                            durable: true
                        }
                    }
                }
            ])
        ],
        controllers: [
            _users_controller_js__rspack_import_1.UsersController
        ],
        providers: [
            _app_user__rspack_import_2.CreateUserUseCase,
            {
                provide: _app_user__rspack_import_2.USER_REPOSITORY,
                useClass: _app_user__rspack_import_2.PrismaUserRepository
            }
        ]
    })
], UsersGatewayModule);


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
"./libs/auth/src/application/dto/login.dto.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LoginDto: () => (LoginDto)
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

class LoginDto {
    constructor(){
        _define_property(this, "email", void 0);
        _define_property(this, "password", void 0);
    }
}
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 'miguel@test.com',
        description: 'User email'
    }),
    _ts_metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 'password123',
        description: 'User password'
    }),
    _ts_metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


},
"./libs/auth/src/application/use-cases/login.usecase.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LoginUseCase: () => (LoginUseCase)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_jwt__rspack_import_1 = __webpack_require__("@nestjs/jwt");
/* import */ var _app_user__rspack_import_2 = __webpack_require__("./libs/user/src/index.ts");
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




class LoginUseCase {
    async execute(dto) {
        // 1. Find User by Email
        const user = await this.userRepository.findByEmail(dto.email);
        if (!user) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException("Invalid credentials");
        }
        // 2. Verify Password
        const isPasswordValid = await _app_shared__rspack_import_3.HashUtil.compare(dto.password, user.getPassword());
        if (!isPasswordValid) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException("Invalid credentials");
        }
        // 3. Generate JWT Token
        const payload = {
            sub: user.getId(),
            email: user.getEmail(),
            role: "USER"
        }; // Hardcoded role for PoC, ideally it comes from the DB
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.getId(),
                email: user.getEmail(),
                name: user.getName()
            }
        };
    }
    constructor(userRepository, jwtService){
        _define_property(this, "userRepository", void 0);
        _define_property(this, "jwtService", void 0);
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
}
LoginUseCase = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Inject)(_app_user__rspack_import_2.USER_REPOSITORY)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof IUserRepository === "undefined" ? Object : IUserRepository,
        typeof _nestjs_jwt__rspack_import_1.JwtService === "undefined" ? Object : _nestjs_jwt__rspack_import_1.JwtService
    ])
], LoginUseCase);


},
"./libs/auth/src/auth.module.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthLibModule: () => (AuthLibModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_jwt__rspack_import_1 = __webpack_require__("@nestjs/jwt");
/* import */ var _nestjs_passport__rspack_import_2 = __webpack_require__("@nestjs/passport");
/* import */ var _application_use_cases_login_usecase_js__rspack_import_3 = __webpack_require__("./libs/auth/src/application/use-cases/login.usecase.ts");
/* import */ var _app_user__rspack_import_4 = __webpack_require__("./libs/user/src/index.ts");
/* import */ var _app_shared__rspack_import_5 = __webpack_require__("./libs/shared/src/index.ts");
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






class AuthLibModule {
}
AuthLibModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_passport__rspack_import_2.PassportModule,
            _nestjs_jwt__rspack_import_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'default-secret',
                signOptions: {
                    expiresIn: '1h'
                }
            })
        ],
        providers: [
            {
                provide: _app_user__rspack_import_4.USER_REPOSITORY,
                useClass: _app_user__rspack_import_4.PrismaUserRepository
            },
            _application_use_cases_login_usecase_js__rspack_import_3.LoginUseCase,
            _app_shared__rspack_import_5.JwtStrategy
        ],
        exports: [
            _application_use_cases_login_usecase_js__rspack_import_3.LoginUseCase
        ]
    })
], AuthLibModule);


},
"./libs/auth/src/index.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthLibModule: () => (/* reexport safe */ _auth_module_js__rspack_import_2.AuthLibModule),
  LoginDto: () => (/* reexport safe */ _application_dto_login_dto_js__rspack_import_1.LoginDto),
  LoginUseCase: () => (/* reexport safe */ _application_use_cases_login_usecase_js__rspack_import_0.LoginUseCase)
});
/* import */ var _application_use_cases_login_usecase_js__rspack_import_0 = __webpack_require__("./libs/auth/src/application/use-cases/login.usecase.ts");
/* import */ var _application_dto_login_dto_js__rspack_import_1 = __webpack_require__("./libs/auth/src/application/dto/login.dto.ts");
/* import */ var _auth_module_js__rspack_import_2 = __webpack_require__("./libs/auth/src/auth.module.ts");





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
"./libs/user/src/application/dto/create-user.dto.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateUserDto: () => (CreateUserDto)
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

class CreateUserDto {
    constructor(){
        _define_property(this, "email", void 0);
        _define_property(this, "name", void 0);
        _define_property(this, "password", void 0);
        _define_property(this, "role", void 0);
    }
}
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 'miguel@test.com',
        description: 'User email address'
    }),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 'Miguel Contreras',
        description: 'User full name'
    }),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 'password123',
        description: 'User secure password'
    }),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        example: 'USER',
        description: 'Role of the user',
        required: false,
        enum: [
            'USER',
            'ADMIN'
        ]
    }),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);


},
"./libs/user/src/application/dto/user.response.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);



},
"./libs/user/src/application/use-cases/create-user.usecase.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateUserUseCase: () => (CreateUserUseCase)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _domain_entities_user_entity_js__rspack_import_1 = __webpack_require__("./libs/user/src/domain/entities/user.entity.ts");
/* import */ var _domain_repositories_user_repository_interface_js__rspack_import_2 = __webpack_require__("./libs/user/src/domain/repositories/user.repository.interface.ts");
/* import */ var crypto__rspack_import_3 = __webpack_require__("crypto");
/* import */ var _app_shared__rspack_import_4 = __webpack_require__("./libs/shared/src/index.ts");
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






class CreateUserUseCase {
    async execute(dto) {
        // 1. Validar si el usuario ya existe
        const existingUser = await this.userRepository.findByEmail(dto.email);
        if (existingUser) {
            throw new _nestjs_common__rspack_import_0.ConflictException("User already exists with this email");
        }
        // 2. Usar la entidad de dominio para crear el objeto y validar reglas
        const id = (0,crypto__rspack_import_3.randomUUID)();
        const hashedPassword = await _app_shared__rspack_import_4.HashUtil.hash(dto.password);
        const newUser = _domain_entities_user_entity_js__rspack_import_1.User.create(id, dto.email, dto.name, hashedPassword);
        // 3. Persistir en la base de datos
        await this.userRepository.save(newUser);
        return {
            id: newUser.getId(),
            email: newUser.getEmail(),
            name: newUser.getName()
        };
    }
    constructor(userRepository){
        _define_property(this, "userRepository", void 0);
        this.userRepository = userRepository;
    }
}
CreateUserUseCase = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Inject)(_domain_repositories_user_repository_interface_js__rspack_import_2.USER_REPOSITORY)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof IUserRepository === "undefined" ? Object : IUserRepository
    ])
], CreateUserUseCase);


},
"./libs/user/src/domain/entities/user.entity.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  User: () => (User)
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
class User {
    // Factory method to create a new User, here you can enforce business rules
    static create(id, email, name, password) {
        if (!email.includes("@")) {
            throw new Error("Invalid email format"); // Domain exception
        }
        return new User(id, email, name, password);
    }
    // Getters
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    getPassword() {
        return this.password;
    }
    constructor(id, email, name, password){
        _define_property(this, "id", void 0);
        _define_property(this, "email", void 0);
        _define_property(this, "name", void 0);
        _define_property(this, "password", void 0);
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
}


},
"./libs/user/src/domain/repositories/user.repository.interface.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  USER_REPOSITORY: () => (USER_REPOSITORY)
});
const USER_REPOSITORY = Symbol('USER_REPOSITORY');


},
"./libs/user/src/index.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateUserDto: () => (/* reexport safe */ _application_dto_create_user_dto_js__rspack_import_2.CreateUserDto),
  CreateUserUseCase: () => (/* reexport safe */ _application_use_cases_create_user_usecase_js__rspack_import_4.CreateUserUseCase),
  PrismaUserRepository: () => (/* reexport safe */ _infrastructure_persistence_prisma_user_repository_js__rspack_import_5.PrismaUserRepository),
  USER_REPOSITORY: () => (/* reexport safe */ _domain_repositories_user_repository_interface_js__rspack_import_1.USER_REPOSITORY),
  User: () => (/* reexport safe */ _domain_entities_user_entity_js__rspack_import_0.User)
});
/* import */ var _domain_entities_user_entity_js__rspack_import_0 = __webpack_require__("./libs/user/src/domain/entities/user.entity.ts");
/* import */ var _domain_repositories_user_repository_interface_js__rspack_import_1 = __webpack_require__("./libs/user/src/domain/repositories/user.repository.interface.ts");
/* import */ var _application_dto_create_user_dto_js__rspack_import_2 = __webpack_require__("./libs/user/src/application/dto/create-user.dto.ts");
/* import */ var _application_dto_user_response_js__rspack_import_3 = __webpack_require__("./libs/user/src/application/dto/user.response.ts");
/* import */ var _application_use_cases_create_user_usecase_js__rspack_import_4 = __webpack_require__("./libs/user/src/application/use-cases/create-user.usecase.ts");
/* import */ var _infrastructure_persistence_prisma_user_repository_js__rspack_import_5 = __webpack_require__("./libs/user/src/infrastructure/persistence/prisma-user.repository.ts");








},
"./libs/user/src/infrastructure/persistence/prisma-user.repository.ts"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrismaUserRepository: () => (PrismaUserRepository)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _prisma_client_users__rspack_import_1 = __webpack_require__("@prisma/client-users");
/* import */ var _domain_entities_user_entity_js__rspack_import_2 = __webpack_require__("./libs/user/src/domain/entities/user.entity.ts");
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



class PrismaUserRepository {
    async save(user) {
        await this.prisma.user.upsert({
            where: {
                id: user.getId()
            },
            update: {
                email: user.getEmail(),
                name: user.getName(),
                password: user.getPassword()
            },
            create: {
                id: user.getId(),
                email: user.getEmail(),
                name: user.getName(),
                password: user.getPassword()
            }
        });
    }
    async findById(id) {
        const data = await this.prisma.user.findUnique({
            where: {
                id
            }
        });
        if (!data) return null;
        // Aquí el factory debería permitir hidratar desde la BD sin validar reglas de creación
        // Pero por simplicidad del PoC usamos create
        return _domain_entities_user_entity_js__rspack_import_2.User.create(data.id, data.email, data.name, data.password);
    }
    async findByEmail(email) {
        const data = await this.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!data) return null;
        return _domain_entities_user_entity_js__rspack_import_2.User.create(data.id, data.email, data.name, data.password);
    }
    constructor(){
        _define_property(this, "prisma", new _prisma_client_users__rspack_import_1.PrismaClient()); // En un proyecto real inyectamos un PrismaService global
    }
}
PrismaUserRepository = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], PrismaUserRepository);


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
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

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
var __webpack_exports__ = __webpack_require__("./apps/api-gateway/src/main.ts");
__webpack_exports__ = await __webpack_exports__;

//# sourceMappingURL=main.js.map