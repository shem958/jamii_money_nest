import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChamasService } from './chamas.service';
import { CreateChamaDto } from './dto/create-chama.dto';
import { AddMemberDto } from './dto/add-member.dto';
import { Chama, ChamaMember } from '@prisma/client';

@Controller('chamas')
export class ChamasController {
    constructor(private readonly chamasService: ChamasService) { }

    @Post()
    async create(@Body() createChamaDto: CreateChamaDto): Promise<Chama> {
        return this.chamasService.createChama(createChamaDto);
    }

    @Post(':chamaId/members')
    async addMember(
        @Param('chamaId') chamaId: string,
        @Body() addMemberDto: AddMemberDto,
    ): Promise<ChamaMember> {
        return this.chamasService.addMember(chamaId, addMemberDto);
    }

    @Get()
    async findAll(): Promise<Chama[]> {
        return this.chamasService.findAll();
    }

    @Get(':chamaId/members')
    async findMembers(@Param('chamaId') chamaId: string): Promise<ChamaMember[]> {
        return this.chamasService.findMembers(chamaId);
    }
}
