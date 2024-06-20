import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { stocksHistory } from './fallback';

@Injectable()
export class AlphaVantageService {
  constructor(private readonly httpService: HttpService) {}

  async findTimeSeriesDailyBySymbol(symbol: string) {
    const resp = await firstValueFrom(
      this.httpService.get(
        `${process.env.ALPHA_VANTAGE_URL}?function=TIME_SERIES_MONTHLY&symbol=${symbol}.SA&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`,
      ),
    );

    if (resp.data['Information']) {
      return stocksHistory;
    }

    return resp.data;
  }
}
