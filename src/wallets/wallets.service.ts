import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { Wallet } from '@prisma/client';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletsService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateWalletDto): Promise<Wallet> {
        return this.prisma.wallet.create({ data });
    }

    async findAll(): Promise<Wallet[]> {
        return this.prisma.wallet.findMany({
            include: { user: true },
        });
    }

    async findOne(id: string): Promise<Wallet | null> {
        return this.prisma.wallet.findUnique({
            where: { id },
            include: { user: true },
        });
    }

    async update(id: string, data: UpdateWalletDto): Promise<Wallet> {
        return this.prisma.wallet.update({
            where: { id },
            data,
        });
    }

    async remove(id: string): Promise<Wallet> {
        return this.prisma.wallet.delete({
            where: { id },
        });
    }
}
