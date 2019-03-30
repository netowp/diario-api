import * as mongoose from 'mongoose';

export const StatusSchema = new mongoose.Schema({
    account_id: { type: mongoose.Types.ObjectId, required: true },
    date: { type: String, required: true },
    yesterday: { type: String, required: true },
    today: { type: String, required: true },
    accomplished_yesterday: { type: Boolean, required: false },
    blockers: { type: String, required: false },
});
