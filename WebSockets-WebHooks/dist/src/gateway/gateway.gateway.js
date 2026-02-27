"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let GatewayGateway = class GatewayGateway {
    server;
    onModuleInit() {
        this.server.on("connection", (Client) => {
            console.log(`connected to socket succefully, welcome ${Client.id}`);
        });
    }
    groupmessaging(msg) {
        this.server.emit("broadcast", msg);
        console.log("group chatting brodcast");
    }
    privatemessaging(data) {
        this.server.to(data.targetclientid).emit("privatechannel", data.msg);
    }
    handleJoinRoom(client, data) {
        client.join(data.roomName);
        client.emit("join_room", `You joined ${data.roomName}`);
    }
    handleSendToRoom(client, data) {
        this.server.to(data.roomName).emit("receive_message", {
            sender: client.id,
            message: data.message,
        });
    }
};
exports.GatewayGateway = GatewayGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], GatewayGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)("broadcast"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "groupmessaging", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("privatechannel"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "privatemessaging", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("join_room"),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("send_to_room"),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleSendToRoom", null);
exports.GatewayGateway = GatewayGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: {
            origin: "*",
        }, })
], GatewayGateway);
//# sourceMappingURL=gateway.gateway.js.map