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
exports.ChatsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
const ws_jwt_guard_1 = require("./ws-jwt.guard");
const rooms = ['admin_room', 'student_room', 'general_room'];
let ChatsGateway = class ChatsGateway {
    server;
    handleConnection(client, ...args) {
        console.log('Client connected:', client.id);
        if (!client.data.user) {
            client.disconnect();
        }
    }
    handleJoinRoom(client, room) {
        const user = client.data.user;
        if (!rooms.includes(room)) {
            throw new common_1.ForbiddenException('Room does not exist');
        }
        if (user.role === 'admin' && room === 'student_room') {
            throw new common_1.ForbiddenException('Admins cannot join student room');
        }
        if (user.role === 'student' && room === 'admin_room') {
            throw new common_1.ForbiddenException('Students cannot join admin room');
        }
        client.join(room);
        return { message: `Joined ${room}` };
    }
    handleMessage(client, data) {
        const user = client.data.user;
        const { room, message } = data;
        if (user.role === 'student' && room === 'general_room') {
            throw new common_1.ForbiddenException('Students cannot send in general room');
        }
        if (user.role === 'admin' && !['admin_room', 'general_room'].includes(room)) {
            throw new common_1.ForbiddenException();
        }
        if (user.role === 'student' && room !== 'student_room') {
            throw new common_1.ForbiddenException();
        }
        this.server.to(room).emit('newMessage', {
            user: user.email,
            message,
            room,
        });
    }
};
exports.ChatsGateway = ChatsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatsGateway.prototype, "server", void 0);
__decorate([
    (0, common_1.UseGuards)(ws_jwt_guard_1.WsJwtGuard),
    (0, websockets_1.SubscribeMessage)('joinRoom'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], ChatsGateway.prototype, "handleJoinRoom", null);
__decorate([
    (0, common_1.UseGuards)(ws_jwt_guard_1.WsJwtGuard),
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ChatsGateway.prototype, "handleMessage", null);
exports.ChatsGateway = ChatsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true })
], ChatsGateway);
//# sourceMappingURL=chats.gateway.js.map