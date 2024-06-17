import { Module } from '@nestjs/common';
import { BrapiService } from './brapi.service';
import { BrapiController } from './brapi.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [BrapiController],
  providers: [BrapiService],
})
export class BrapiModule {}
