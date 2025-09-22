import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { Transaction } from '@prisma/client';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateTransactionDto): Promise<Transaction> {
        return this.prisma.transaction.create({ data });
    }

    async findAll(): Promise<Transaction[]> {
        return this.prisma.transaction.findMany({
            include: { user: true },
            orderBy: { date: 'desc' },
        });
    }

    async findByUser(userId: string): Promise<Transaction[]> {
        return this.prisma.transaction.findMany({
            where: { userId },
            orderBy: { date: 'desc' },
        });
    }

    async findOne(id: string): Promise<Transaction | null> {
        return this.prisma.transaction.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: UpdateTransactionDto): Promise<Transaction> {
        return this.prisma.transaction.update({
            where: { id },
            data,
        });
    }

    async remove(id: string): Promise<Transaction> {
        return this.prisma.transaction.delete({
            where: { id },
        });
    }
}
