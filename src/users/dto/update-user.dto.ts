import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// Makes every field from CreateUserDto optional for updates
export class UpdateUserDto extends PartialType(CreateUserDto) { }
