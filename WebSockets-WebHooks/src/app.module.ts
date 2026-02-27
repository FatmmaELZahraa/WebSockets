import { Module } from '@nestjs/common';
import { GatewayGateway } from './gateway/gateway.gateway';
import { WebhookappController } from './app.controller';
import { WebhookappService } from './app.service';

import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ChatsModule } from './chats/chats.module';
@Module({
  imports: [HttpModule,AuthModule, ChatsModule],
  controllers: [WebhookappController],
  providers: [GatewayGateway, WebhookappService],
})
export class AppModule {}


