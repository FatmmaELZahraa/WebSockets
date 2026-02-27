"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const gateway_gateway_1 = require("./gateway/gateway.gateway");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const axios_1 = require("@nestjs/axios");
const auth_module_1 = require("./auth/auth.module");
const chats_module_1 = require("./chats/chats.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, auth_module_1.AuthModule, chats_module_1.ChatsModule],
        controllers: [app_controller_1.WebhookappController],
        providers: [gateway_gateway_1.GatewayGateway, app_service_1.WebhookappService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map