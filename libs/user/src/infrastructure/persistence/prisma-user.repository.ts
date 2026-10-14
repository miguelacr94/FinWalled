import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client-users';
import { User } from '../../domain/entities/user.entity.js';
import type { IUserRepository } from '../../domain/repositories/user.repository.interface.js';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  private prisma = new PrismaClient(); // En un proyecto real inyectamos un PrismaService global

  async save(user: User): Promise<void> {
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

  async findById(id: string): Promise<User | null> {
    const data = await this.prisma.user.findUnique({ where: { id } });
    if (!data) return null;
    
    // Aquí el factory debería permitir hidratar desde la BD sin validar reglas de creación
    // Pero por simplicidad del PoC usamos create
    return User.create(data.id, data.email, data.name, data.password);
  }

  async findByEmail(email: string): Promise<User | null> {
    const data = await this.prisma.user.findUnique({ where: { email } });
    if (!data) return null;
    return User.create(data.id, data.email, data.name, data.password);
  }
}
