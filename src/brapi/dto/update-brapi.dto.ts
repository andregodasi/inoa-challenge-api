import { PartialType } from '@nestjs/mapped-types';
import { CreateBrapiDto } from './create-brapi.dto';

export class UpdateBrapiDto extends PartialType(CreateBrapiDto) {}
