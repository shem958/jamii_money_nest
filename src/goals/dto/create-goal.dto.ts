import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateGoalDto {
    @IsString()
    userId: string;

    @IsString()
    title: string;

    @IsNumber()
    targetAmount: number;

    @IsNumber()
    currentAmount: number;

    @IsDateString()
    deadline: string; // ISO date string
}
