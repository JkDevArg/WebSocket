import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhooksModule } from './whooks/whooks.module';

@Module({
  imports: [WhooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
