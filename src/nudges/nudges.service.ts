import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateNudgeDto } from './dto/create-nudge.dto';
import { UpdateNudgeDto } from './dto/update-nudge.dto';

@Injectable()
export class NudgesService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateNudgeDto) {
        return this.prisma.nudge.create({ data });
    }

    async findAllByUser(userId: string) {
        return this.prisma.nudge.findMany({
            where: { userId },
            orderBy: { scheduledAt: 'asc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.nudge.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: UpdateNudgeDto) {
        return this.prisma.nudge.update({
            where: { id },
            data,
        });
    }

    async markAsRead(id: string) {
        return this.prisma.nudge.update({
            where: { id },
            data: { read: true },
        });
    }

    async remove(id: string) {
        return this.prisma.nudge.delete({
            where: { id },
        });
    }
}
