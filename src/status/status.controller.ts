import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Status } from 'src/interfaces/status.interface';
import { StatusService } from 'src/status.service';

@Controller('status')
export class StatusController { 
    constructor(
        private readonly statusService: StatusService,
    ) {

    }

    @Get(':date')
    async findAll(@Param() params) {
        return await this.statusService.findAll(params.date);
    }

    @Get(':date/:account_id')
    async findOne(@Param() params) {
        return await this.statusService.findOne(params.date, params.account_id);
    }

    @Post(':date/:account_id')
    async createOne(@Body() createStatusDto, @Param() params) {
        return await this.statusService.create(createStatusDto);
    }

}
