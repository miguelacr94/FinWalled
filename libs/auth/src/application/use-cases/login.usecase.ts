import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { USER_REPOSITORY } from "@app/user";
import type { IUserRepository, User } from "@app/user";
import { HashUtil } from "@app/shared";
import { LoginDto, LoginResponse } from "../dto/login.dto.js";

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(dto: LoginDto): Promise<LoginResponse> {
    // 1. Find User by Email
    const user = await this.userRepository.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    // 2. Verify Password
    const isPasswordValid = await HashUtil.compare(
      dto.password,
      user.getPassword(),
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    // 3. Generate JWT Token
    const payload = { sub: user.getId(), email: user.getEmail(), role: "USER" }; // Hardcoded role for PoC, ideally it comes from the DB
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.getId(),
        email: user.getEmail(),
        name: user.getName(),
      },
    };
  }
}
