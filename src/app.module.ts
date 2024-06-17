import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrapiModule } from './brapi/brapi.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AlphaVantageModule } from './alpha-vantage/alpha-vantage.module';

@Module({
  imports: [
    BrapiModule,
    HttpModule,
    ConfigModule.forRoot(),
    AlphaVantageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
