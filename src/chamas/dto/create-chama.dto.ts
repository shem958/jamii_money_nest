import { IsString } from 'class-validator';

export class CreateChamaDto {
    @IsString()
    name: string;
}
