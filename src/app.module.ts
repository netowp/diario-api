import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { statusProviders } from './status.providers';
import { StatusModule } from './status/status.module';

@Module({
  imports: [DatabaseModule, StatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
