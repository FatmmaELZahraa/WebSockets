"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const chats_service_1 = require("./chats.service");
describe('ChatsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [chats_service_1.ChatsService],
        }).compile();
        service = module.get(chats_service_1.ChatsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=chats.service.spec.js.map