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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookappService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let WebhookappService = class WebhookappService {
    httpservice;
    constructor(httpservice) {
        this.httpservice = httpservice;
    }
    async welcomediscord(name) {
        const url = "https://discord.com/api/webhooks/1471994279454052466/iJ3DnQ067Cd-XTQcNiDhTxY1Gwaw4NeJPS84rat995DFaTfJnl5C7JfxCwEG8knaHbF4";
        await (0, rxjs_1.firstValueFrom)(this.httpservice.post(url, { content: `welcom ${name}` }));
    }
};
exports.WebhookappService = WebhookappService;
exports.WebhookappService = WebhookappService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], WebhookappService);
//# sourceMappingURL=app.service.js.map