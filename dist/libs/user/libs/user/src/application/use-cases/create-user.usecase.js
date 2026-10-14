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
import { Inject, Injectable } from "@nestjs/common";
import { User } from "../../domain/entities/user.entity.js";
import { USER_REPOSITORY } from "../../domain/repositories/user.repository.interface.js";
import { randomUUID } from "crypto";
import { HashUtil } from "@app/shared";
let CreateUserUseCase = class CreateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(dto) {
        const existingUser = await this.userRepository.findByEmail(dto.email);
        if (existingUser) {
            throw new Error("User already exists with this email");
        }
        const id = randomUUID();
        const hashedPassword = await HashUtil.hash(dto.password);
        const newUser = User.create(id, dto.email, dto.name, hashedPassword);
        await this.userRepository.save(newUser);
        return newUser;
    }
};
CreateUserUseCase = __decorate([
    Injectable(),
    __param(0, Inject(USER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], CreateUserUseCase);
export { CreateUserUseCase };
//# sourceMappingURL=create-user.usecase.js.map