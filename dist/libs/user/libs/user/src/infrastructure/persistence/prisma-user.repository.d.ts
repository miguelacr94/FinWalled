import { User } from '../../domain/entities/user.entity.js';
import type { IUserRepository } from '../../domain/repositories/user.repository.interface.js';
export declare class PrismaUserRepository implements IUserRepository {
    private prisma;
    save(user: User): Promise<void>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}
