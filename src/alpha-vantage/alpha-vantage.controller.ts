import { Controller, Get, Param } from '@nestjs/common';
import { AlphaVantageService } from './alpha-vantage.service';

@Controller('alpha-vantage')
export class AlphaVantageController {
  constructor(private readonly alphaVantageService: AlphaVantageService) {}

  @Get('/time-series-daily/:symbol')
  async findTimeSeriesDailyBySymbol(@Param('symbol') symbol: string) {
    return this.alphaVantageService.findTimeSeriesDailyBySymbol(symbol);
  }
}
