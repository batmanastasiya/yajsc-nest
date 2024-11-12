import {
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  ValidateIf,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @Length(6, 50)
  username: string;

  @ApiProperty({
    type: 'string',
    format: 'uuid',
    description: 'Role ID either admin mentor or student',
    example: '946a3850-0dfb-4fe8-8660-cb1eceaeb41c',
    default: '946a3850-0dfb-4fe8-8660-cb1eceaeb41c',
  })
  @IsString()
  @IsUUID()
  roleId: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  phoneNumber: string;

  @ApiPropertyOptional({
    type: 'string',
    format: 'email',
    example: 'example@example.com',
  })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  telegram: string;

  //
  // @IsString()
  // @Length(4, 20)
  // @Matches(/^[a-zA-Z0-9]*$/)
  // password: string;
}
