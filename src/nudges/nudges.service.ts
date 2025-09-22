import { Injectable } from '@nestjs/common';
import { Prisma, Nudge } from '@prisma/client';
import { PrismaService } from '../common/prisma.service'; // ✅ Correct path

@Injectable()
export class NudgesService {
    constructor(private prisma: PrismaService) { }

    create(data: Prisma.NudgeCreateInput) {
        return this.prisma.nudge.create({ data });
    }

    findAllByUser(userId: string) {
        return this.prisma.nudge.findMany({
            where: { userId },
            orderBy: { scheduledAt: 'asc' },
        });
    }

    markAsRead(id: string) {
        return this.prisma.nudge.update({
            where: { id },
            data: { read: true },
        });
    }
}
