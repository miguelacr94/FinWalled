import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'miguel@test.com', description: 'User email' })
  email!: string;

  @ApiProperty({ example: 'password123', description: 'User password' })
  password!: string;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
}

export interface LoginResponse {
  access_token: string;
  user: UserResponse;
}
