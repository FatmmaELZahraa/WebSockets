import { WebhookappService } from './app.service';
export declare class WebhookappController {
    private readonly webhookappService;
    constructor(webhookappService: WebhookappService);
    welcomediscord(name: string): Promise<string>;
}
