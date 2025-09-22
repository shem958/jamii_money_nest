import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateGoalDto {
    @IsString()
    userId: string;

    @IsString()
    title: string;

    @IsNumber()
    target: number;        // ✅ matches schema

    @IsNumber()
    saved: number;         // optional if you want to allow starting amount

    @IsDateString()
    deadline: string;
}
