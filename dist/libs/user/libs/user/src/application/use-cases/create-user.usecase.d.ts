import { User } from "../../domain/entities/user.entity.js";
import type { IUserRepository } from "../../domain/repositories/user.repository.interface.js";
import { CreateUserDto } from "../dto/create-user.dto.js";
export declare class CreateUserUseCase {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    execute(dto: CreateUserDto): Promise<User>;
}
