import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StatusService } from 'src/status.service';
import { statusProviders } from 'src/status.providers';
import { StatusController } from './status.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [StatusController],
  providers: [
    StatusService,
    ...statusProviders,
  ],
})
export class StatusModule {}