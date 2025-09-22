import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateChamaDto } from './dto/create-chama.dto';
import { AddMemberDto } from './dto/add-member.dto';
import { Chama, ChamaMember } from '@prisma/client';

@Injectable()
export class ChamasService {
    constructor(private prisma: PrismaService) { }

    async createChama(data: CreateChamaDto): Promise<Chama> {
        return this.prisma.chama.create({ data });
    }

    async addMember(chamaId: string, data: AddMemberDto): Promise<ChamaMember> {
        return this.prisma.chamaMember.create({
            data: {
                chamaId,
                userId: data.userId,
                role: data.role,
                amount: data.amount,
            },
        });
    }

    async findAll(): Promise<Chama[]> {
        return this.prisma.chama.findMany();
    }

    async findMembers(chamaId: string): Promise<ChamaMember[]> {
        return this.prisma.chamaMember.findMany({ where: { chamaId } });
    }
}
