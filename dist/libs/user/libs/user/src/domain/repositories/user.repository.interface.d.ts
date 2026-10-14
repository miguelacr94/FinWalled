import { User } from '../entities/user.entity.js';
export declare const USER_REPOSITORY: unique symbol;
export interface IUserRepository {
    save(user: User): Promise<void>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}
