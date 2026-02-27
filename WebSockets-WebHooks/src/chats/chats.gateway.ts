import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { UseGuards, ForbiddenException } from '@nestjs/common';
import { WsJwtGuard } from './ws-jwt.guard'; 

const rooms = ['admin_room', 'student_room', 'general_room'];

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket, ...args: any[]) {
    console.log('Client connected:', client.id);

    if (!client.data.user) {
      client.disconnect();
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() room: string,
  ) {
    const user = client.data.user;

    if (!rooms.includes(room)) {
      throw new ForbiddenException('Room does not exist');
    }

    if (user.role === 'admin' && room === 'student_room') {
      throw new ForbiddenException('Admins cannot join student room');
    }

    if (user.role === 'student' && room === 'admin_room') {
      throw new ForbiddenException('Students cannot join admin room');
    }

    client.join(room);
    return { message: `Joined ${room}` };
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('sendMessage')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { room: string; message: string },
  ) {
    const user = client.data.user;
    const { room, message } = data;

    if (user.role === 'student' && room === 'general_room') {
      throw new ForbiddenException('Students cannot send in general room');
    }

    if (user.role === 'admin' && !['admin_room', 'general_room'].includes(room)) {
      throw new ForbiddenException();
    }

    if (user.role === 'student' && room !== 'student_room') {
      throw new ForbiddenException();
    }

    this.server.to(room).emit('newMessage', {
      user: user.email,
      message,
      room,
    });
  }
}