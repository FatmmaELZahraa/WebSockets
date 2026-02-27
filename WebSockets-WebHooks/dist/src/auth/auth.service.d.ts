import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(user: User): Promise<{
        access_token: string;
    }>;
}
