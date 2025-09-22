import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateWalletDto {
    @IsString()
    userId: string;

    @IsString()
    provider: string; // e.g., M-Pesa, Airtel, T-Kash

    @IsNumber()
    @IsOptional()
    balance?: number;
}
