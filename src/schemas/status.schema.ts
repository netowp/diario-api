import * as mongoose from 'mongoose';

export const StatusSchema = new mongoose.Schema({
    account_id: { type: mongoose.Types.ObjectId, required: true },
    date: { type: Date, required: true },
    yesterday: { type: String, required: true },
    today: { type: String, required: true },
    blockers: { type: String, required: false },
});
