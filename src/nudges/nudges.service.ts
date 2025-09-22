import { Injectable } from '@nestjs/common';
import { Nudge } from '@prisma/client';
import { PrismaService } from '../common/prisma.service'; // ✅ Correct path
import { CreateNudgeDto } from './dto/create-nudge.dto';
import { UpdateNudgeDto } from './dto/update-nudge.dto';

@Injectable()
export class NudgesService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateNudgeDto): Promise<Nudge> {
        return this.prisma.nudge.create({ data });
    }

    async findAllByUser(userId: string): Promise<Nudge[]> {
        return this.prisma.nudge.findMany({
            where: { userId },
            orderBy: { scheduledAt: 'asc' },
        });
    }

    async findOne(id: string): Promise<Nudge | null> {
        return this.prisma.nudge.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: UpdateNudgeDto): Promise<Nudge> {
        return this.prisma.nudge.update({
            where: { id },
            data,
        });
    }

    async markAsRead(id: string): Promise<Nudge> {
        return this.prisma.nudge.update({
            where: { id },
            data: { read: true },
        });
    }

    async remove(id: string): Promise<Nudge> {
        return this.prisma.nudge.delete({
            where: { id },
        });
    }
}
