// src/users/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, IsString, IsNumber, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsNumber()
    payday: number;
}
