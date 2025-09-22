import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { Goal } from '@prisma/client';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';

@Injectable()
export class GoalsService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateGoalDto): Promise<Goal> {
        return this.prisma.goal.create({ data });
    }

    async findAll(): Promise<Goal[]> {
        return this.prisma.goal.findMany({
            include: { user: true },
            orderBy: { deadline: 'asc' },
        });
    }

    async findByUser(userId: string): Promise<Goal[]> {
        return this.prisma.goal.findMany({
            where: { userId },
            orderBy: { deadline: 'asc' },
        });
    }

    async findOne(id: string): Promise<Goal | null> {
        return this.prisma.goal.findUnique({ where: { id } });
    }

    async update(id: string, data: UpdateGoalDto): Promise<Goal> {
        return this.prisma.goal.update({ where: { id }, data });
    }

    async remove(id: string): Promise<Goal> {
        return this.prisma.goal.delete({ where: { id } });
    }
}
