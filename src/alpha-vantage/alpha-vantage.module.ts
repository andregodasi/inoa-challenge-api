import { Module } from '@nestjs/common';
import { AlphaVantageService } from './alpha-vantage.service';
import { AlphaVantageController } from './alpha-vantage.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AlphaVantageController],
  providers: [AlphaVantageService],
})
export class AlphaVantageModule {}
