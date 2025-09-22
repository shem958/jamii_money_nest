import { Module } from '@nestjs/common';
import { ChamasService } from './chamas.service';
import { ChamasController } from './chamas.controller';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [ChamasController],
  providers: [ChamasService, PrismaService],
})
export class ChamasModule { }
