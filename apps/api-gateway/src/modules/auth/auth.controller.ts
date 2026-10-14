import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginDto, LoginUseCase } from '@app/auth';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(
    @Inject(LoginUseCase)
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Login to get an access token' })
  @ApiResponse({ status: 201, description: 'Successfully logged in.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  async login(@Body() dto: LoginDto) {
    return this.loginUseCase.execute(dto);
  }
}
