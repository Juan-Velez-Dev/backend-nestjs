import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsBoolean,
  MinLength,
  Matches,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @MinLength(6, { message: 'The name must have a minimum of 6 characters' })
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: 'The email must have a valid format',
  })
  @IsEmail(
    { require_tld: true },
    { message: 'The email must haver a valid format .com' },
  )
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6, { message: 'The password must have a minimum of 6 characters' })
  @IsString()
  password: string;

  @ApiProperty()
  @IsBoolean()
  active: boolean;
}
