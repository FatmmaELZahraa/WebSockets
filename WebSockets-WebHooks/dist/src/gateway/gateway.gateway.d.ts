import { OnModuleInit } from "@nestjs/common";
import { Server, Socket } from "socket.io";
export declare class GatewayGateway implements OnModuleInit {
    server: Server;
    onModuleInit(): void;
    groupmessaging(msg: string): void;
    privatemessaging(data: {
        targetclientid: string;
        msg: string;
    }): void;
    handleJoinRoom(client: Socket, data: {
        roomName: string;
    }): void;
    handleSendToRoom(client: Socket, data: {
        roomName: string;
        message: string;
    }): void;
}
