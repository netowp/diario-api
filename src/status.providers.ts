import { Connection } from 'mongoose';
import { StatusSchema } from './schemas/status.schema';

export const statusProviders = [
    {
        provide: 'STATUS_MODEL',
        useFactory: (connection: Connection) => connection.model('Status', StatusSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];


