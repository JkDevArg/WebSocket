import { Injectable } from '@nestjs/common';
import { CreateWhookDto } from './dto/create-whook.dto';
import { UpdateWhookDto } from './dto/update-whook.dto';

@Injectable()
export class WhooksService {
  create(createWhookDto: CreateWhookDto) {
    return 'This action adds a new whook';
  }

  findAll() {
    return `This action returns all whooks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whook`;
  }

  update(id: number, updateWhookDto: UpdateWhookDto) {
    return `This action updates a #${id} whook`;
  }

  remove(id: number) {
    return `This action removes a #${id} whook`;
  }
}
