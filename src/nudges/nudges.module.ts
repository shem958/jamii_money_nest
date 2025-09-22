import { Module } from '@nestjs/common';
import { NudgesService } from './nudges.service';
import { NudgesController } from './nudges.controller';
import { PrismaModule } from '../../prisma/prisma.module'; // 👈 import path may differ

@Module({
  imports: [PrismaModule],   // 👈 Add this
  providers: [NudgesService],
  controllers: [NudgesController],
})
export class NudgesModule { }
