import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AlphaVantageService {
  constructor(private readonly httpService: HttpService) {}

  async findTimeSeriesDailyBySymbol(symbol: string) {
    const resp = await firstValueFrom(
      this.httpService.get(
        `${process.env.ALPHA_VANTAGE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}.SA&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`,
      ),
    );
    return resp.data;
  }
}
