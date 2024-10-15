import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { WhooksService } from './whooks.service';
import { CreateWhookDto } from './dto/create-whook.dto';

@WebSocketGateway({ cors: '*', namespace: '/' })
export class WhooksGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly whooksService: WhooksService) {}

  @SubscribeMessage('createWhook')
  create(@MessageBody() createWhookDto: CreateWhookDto) {
    console.log('createWhookDto', createWhookDto);
    const response = this.whooksService.create(createWhookDto);
    this.server.emit('newWhookNotification', { message: 'Nuevo whook creado', data: response });
    return response;
  }

  @SubscribeMessage('findAllWhooks')
  findAll() {
    return this.whooksService.findAll();
  }
}
