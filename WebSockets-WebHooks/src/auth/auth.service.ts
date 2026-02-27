import { Injectable } from '@nestjs/common';
import {User} from './user.entity'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){}
  async login(user:User){
const payload={
    userId:user.id,
    email:user.email,
    role:user.role

};
 return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '24h',
      }),
    };
  }

}
