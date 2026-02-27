import { OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class ChatsGateway implements OnGatewayConnection {
    server: Server;
    handleConnection(client: Socket, ...args: any[]): void;
    handleJoinRoom(client: Socket, room: string): {
        message: string;
    };
    handleMessage(client: Socket, data: {
        room: string;
        message: string;
    }): void;
}
