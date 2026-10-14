import { Inject, Injectable } from "@nestjs/common";
import { User } from "../../domain/entities/user.entity.js";
import { USER_REPOSITORY } from "../../domain/repositories/user.repository.interface.js";
import type { IUserRepository } from "../../domain/repositories/user.repository.interface.js";
import { CreateUserDto } from "../dto/create-user.dto.js";
import { randomUUID } from "crypto";
import { HashUtil } from "@app/shared";
import { ConflictException } from "@nestjs/common";
import { UserResponse } from "../dto/user.response.js";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(dto: CreateUserDto): Promise<UserResponse> {
    // 1. Validar si el usuario ya existe
    const existingUser = await this.userRepository.findByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException("User already exists with this email");
    }

    // 2. Usar la entidad de dominio para crear el objeto y validar reglas
    const id = randomUUID();
    const hashedPassword = await HashUtil.hash(dto.password);
    const newUser = User.create(id, dto.email, dto.name, hashedPassword);

    // 3. Persistir en la base de datos
    await this.userRepository.save(newUser);

    return {
      id: newUser.getId(),
      email: newUser.getEmail(),
      name: newUser.getName(),
    };
  }
}
