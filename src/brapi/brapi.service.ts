import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BrapiService {
  constructor(private readonly httpService: HttpService) {}

  private configGetBrapi(url: string) {
    return this.httpService.get(`${url}`, {
      headers: {
        Authorization: `Bearer ${process.env.BRAPI_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async findQuoteAll() {
    const resp = await firstValueFrom(
      this.configGetBrapi(`${process.env.BRAPI_URL}/quote/list`),
    );
    return resp.data;
  }

  async findQuoteByTicker(ticker: string) {
    const resp = await firstValueFrom(
      this.configGetBrapi(
        `${process.env.BRAPI_URL}/quote/${ticker}?range=3mo&interval=1d`,
      ),
    );

    return resp.data;
  }
}
