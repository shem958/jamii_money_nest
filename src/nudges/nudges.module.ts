import { Module } from '@nestjs/common';
import { NudgesService } from './nudges.service';
import { NudgesController } from './nudges.controller';
import { PrismaService } from '../common/prisma.service';
@Module({
  providers: [NudgesService, PrismaService],
  controllers: [NudgesController],
})
export class NudgesModule { }
