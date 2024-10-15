import { Module } from '@nestjs/common';
import { WhooksService } from './whooks.service';
import { WhooksGateway } from './whooks.gateway';

@Module({
  providers: [WhooksGateway, WhooksService],
})
export class WhooksModule {}
