import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsGateway } from './chats.gateway';
import {WsJwtGuard} from'./ws-jwt.guard'
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [ChatsGateway, WsJwtGuard],
  imports:[AuthModule]
})
export class ChatsModule {}
