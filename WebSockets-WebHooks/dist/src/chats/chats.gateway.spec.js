"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const chats_gateway_1 = require("./chats.gateway");
const chats_service_1 = require("./chats.service");
describe('ChatsGateway', () => {
    let gateway;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [chats_gateway_1.ChatsGateway, chats_service_1.ChatsService],
        }).compile();
        gateway = module.get(chats_gateway_1.ChatsGateway);
    });
    it('should be defined', () => {
        expect(gateway).toBeDefined();
    });
});
//# sourceMappingURL=chats.gateway.spec.js.map