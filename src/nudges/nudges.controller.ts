import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { NudgesService } from './nudges.service';
import { CreateNudgeDto } from './dto/create-nudge.dto';
import { UpdateNudgeDto } from './dto/update-nudge.dto';

@Controller('nudges')
export class NudgesController {
    constructor(private readonly nudgesService: NudgesService) {}

    @Post()
    create(@Body() createNudgeDto: CreateNudgeDto) {
        return this.nudgesService.create(createNudgeDto);
    }

    @Get('user/:userId')
    findAllByUser(@Param('userId') userId: string) {
        return this.nudgesService.findAllByUser(userId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.nudgesService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateNudgeDto: UpdateNudgeDto) {
        return this.nudgesService.update(id, updateNudgeDto);
    }

    @Patch(':id/read')
    markAsRead(@Param('id') id: string) {
        return this.nudgesService.markAsRead(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.nudgesService.remove(id);
    }
}
