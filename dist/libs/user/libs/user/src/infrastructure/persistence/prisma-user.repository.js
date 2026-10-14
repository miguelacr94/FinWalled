var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client-users';
import { User } from '../../domain/entities/user.entity.js';
let PrismaUserRepository = class PrismaUserRepository {
    prisma = new PrismaClient();
    async save(user) {
        await this.prisma.user.upsert({
            where: { id: user.getId() },
            update: {
                email: user.getEmail(),
                name: user.getName(),
                password: user.getPassword(),
            },
            create: {
                id: user.getId(),
                email: user.getEmail(),
                name: user.getName(),
                password: user.getPassword(),
            },
        });
    }
    async findById(id) {
        const data = await this.prisma.user.findUnique({ where: { id } });
        if (!data)
            return null;
        return User.create(data.id, data.email, data.name, data.password);
    }
    async findByEmail(email) {
        const data = await this.prisma.user.findUnique({ where: { email } });
        if (!data)
            return null;
        return User.create(data.id, data.email, data.name, data.password);
    }
};
PrismaUserRepository = __decorate([
    Injectable()
], PrismaUserRepository);
export { PrismaUserRepository };
//# sourceMappingURL=prisma-user.repository.js.map