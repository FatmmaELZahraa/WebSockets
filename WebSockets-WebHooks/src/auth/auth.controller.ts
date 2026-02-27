import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UnauthorizedException } from '@nestjs/common';
import {User} from './user.entity'
import {UserRole} from './user.entity'

@Controller('auth')
export class AuthController {
constructor(private authService: AuthService) {}
@Post('/login')
async login(@Body()dto:LoginDto){
const user = await this.validateUser(dto);
return this.authService.login(user);
}
async validateUser(dto:LoginDto){
    if(dto.email==="admin@gmail.com" && dto.password==="1234"){
  return {
        id: '1',
        email: dto.email,
        role: UserRole.ADMIN,
       
      };
    }

     if(dto.email==="student@gmail.com" && dto.password==="4567"){
  return {
        id: '2',
        email: dto.email,
        role: UserRole.STUDENT
      
      };
    }
throw new UnauthorizedException('Invalid credentials');
}
}