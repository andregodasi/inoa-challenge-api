import { PartialType } from '@nestjs/mapped-types';
import { CreateAlphaVantageDto } from './create-alpha-vantage.dto';

export class UpdateAlphaVantageDto extends PartialType(CreateAlphaVantageDto) {}
