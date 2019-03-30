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

    async findAll(date): Promise<Status[]> {
        return await this.statusModel.find({ date: date }).exec();
    }

    async findOne(date, accountId): Promise<Status> {
        return await this.statusModel.findOne({ date: date, account_id: accountId}).exec();
    }
}
