import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'miguel@test.com', description: 'User email address' })
  email!: string;

  @ApiProperty({ example: 'Miguel Contreras', description: 'User full name' })
  name!: string;

  @ApiProperty({ example: 'password123', description: 'User secure password' })
  password!: string;

  @ApiProperty({ example: 'USER', description: 'Role of the user', required: false, enum: ['USER', 'ADMIN'] })
  role?: "USER" | "ADMIN";
}
