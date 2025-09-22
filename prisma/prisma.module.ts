import { Module } from '@nestjs/common';
import { PrismaService } from '../src/common/prisma.service';

@Module({
    providers: [PrismaService],
    exports: [PrismaService], // 👈 Export so other modules can use it
})
export class PrismaModule { }
