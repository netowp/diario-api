import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Status } from './interfaces/status.interface';

@Injectable()
export class StatusService {
    constructor(
        @Inject('STATUS_MODEL')
        private readonly statusModel: Model<Status>,
    ) { }

    async create(createStatusDto): Promise<Status> {
        const createdStatus = new this.statusModel(createStatusDto);
        return await createdStatus.save();
    }

    async findAll(): Promise<Status[]> {
        return await this.statusModel.find().exec();
    }

    async findOne(id): Promise<Status> {
        return await this.statusModel.findById(id).exec();
    }
}
