import { Controller, Get, Param } from '@nestjs/common';
import { BrapiService } from './brapi.service';

@Controller('brapi')
export class BrapiController {
  constructor(private readonly brapiService: BrapiService) {}

  @Get('/quote/list')
  async findQuoteAll() {
    return this.brapiService.findQuoteAll();
  }

  @Get('/quote/:ticker')
  async findQuoteByTicker(@Param('ticker') ticker: string) {
    return this.brapiService.findQuoteByTicker(ticker);
  }
}
