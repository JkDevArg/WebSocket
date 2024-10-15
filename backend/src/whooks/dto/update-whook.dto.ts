import { PartialType } from '@nestjs/mapped-types';
import { CreateWhookDto } from './create-whook.dto';

export class UpdateWhookDto extends PartialType(CreateWhookDto) {
  id: number;
}
