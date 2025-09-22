import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';

@Controller('goals')
export class GoalsController {
    constructor(private readonly goalsService: GoalsService) { }

    @Post()
    create(@Body() dto: CreateGoalDto) {
        return this.goalsService.create(dto);
    }

    @Get()
    findAll() {
        return this.goalsService.findAll();
    }

    @Get('user/:userId')
    findByUser(@Param('userId') userId: string) {
        return this.goalsService.findByUser(userId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.goalsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateGoalDto) {
        return this.goalsService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.goalsService.remove(id);
    }
}
