import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class BrapiService {
  constructor(private readonly httpService: HttpService) {}

  async findQuoteAll() {
    const resp = await firstValueFrom(
      this.httpService
        .get(`${process.env.BRAPI_URL}/quote/list`, {
          headers: {
            Authorization: `Bearer ${process.env.BRAPI_TOKEN}`,
            'Content-Type': 'application/json',
          },
        })
        .pipe(map((httpData) => httpData.data)),
    );

    return resp.data;
  }

  async findQuoteByTicker(ticker: string) {
    const resp = await firstValueFrom(
      this.httpService
        .get(`${process.env.BRAPI_URL}/quote/${ticker}?range=3mo&interval=1d`, {
          headers: {
            Authorization: `Bearer ${process.env.BRAPI_TOKEN}`,
            'Content-Type': 'application/json',
          },
        })
        .pipe(map((httpData) => httpData.data)),
    );

    return resp.data;
  }
}
