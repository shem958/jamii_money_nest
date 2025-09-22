import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) { }

    @Post()
    create(@Body() dto: CreateTransactionDto) {
        return this.transactionsService.create(dto);
    }

    @Get()
    findAll() {
        return this.transactionsService.findAll();
    }

    @Get('user/:userId')
    findByUser(@Param('userId') userId: string) {
        return this.transactionsService.findByUser(userId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.transactionsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateTransactionDto) {
        return this.transactionsService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.transactionsService.remove(id);
    }
}
