import { Document } from 'mongoose';

export interface Status  extends Document {
    readonly account_id: string;
    readonly date: Date;
    readonly yesterday: string;
    readonly today: string;
    readonly blockers: string;
}