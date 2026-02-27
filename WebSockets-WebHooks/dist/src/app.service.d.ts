import { HttpService } from "@nestjs/axios";
export declare class WebhookappService {
    private readonly httpservice;
    constructor(httpservice: HttpService);
    welcomediscord(name: string): Promise<void>;
}
