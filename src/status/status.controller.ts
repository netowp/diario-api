import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Status } from 'src/interfaces/status.interface';
import { StatusService } from 'src/status.service';

@Controller('status')
export class StatusController { 
    constructor(
        private readonly statusService: StatusService,
    ) {

    }

    @Get()
    async findAll() {
        return await this.statusService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params) {
        return await this.statusService.findOne(params.id);
    }

    @Post()
    async createOne(@Body() createStatusDto) {
        return await this.statusService.create(createStatusDto);
    }

}
