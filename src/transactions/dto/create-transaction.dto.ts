import { IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';

export enum TransactionType {
    INCOME = 'income',
    EXPENSE = 'expense',
}

export class CreateTransactionDto {
    @IsString()
    userId: string;

    @IsString()
    walletId: string;

    @IsNumber()
    amount: number;

    @IsString()
    category: string; // food, rent, etc.

    @IsEnum(TransactionType)
    type: TransactionType;

    @IsOptional()
    @IsString()
    date?: string; // Optional custom date
}
