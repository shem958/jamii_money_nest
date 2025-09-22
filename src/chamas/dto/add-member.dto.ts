import { IsString, IsNumber } from 'class-validator';

export class AddMemberDto {
    @IsString()
    userId: string;

    @IsString()
    role: string; // 'admin' or 'member'

    @IsNumber()
    amount: number;
}
