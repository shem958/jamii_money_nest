import { IsString, IsDateString, IsEnum } from 'class-validator';

export enum NudgeType {
    REMINDER = 'reminder',
    TIP = 'tip',
    ALERT = 'alert',
}

export class CreateNudgeDto {
    @IsString()
    userId: string;

    @IsString()
    message: string;

    @IsEnum(NudgeType)
    type: NudgeType;

    @IsDateString()
    scheduledAt: string;
}