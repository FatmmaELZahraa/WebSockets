import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UserRole } from './user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    validateUser(dto: LoginDto): Promise<{
        id: string;
        email: string;
        role: UserRole;
    }>;
}
