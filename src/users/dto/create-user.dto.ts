import { IsEmail, IsNotEmpty, IsString, IsPhoneNumber, IsNumber, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsPhoneNumber() // Adjust region if needed, e.g. @IsPhoneNumber('KE')
    phone: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNumber()
    payday: number;
}
