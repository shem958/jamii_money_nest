import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) throw new UnauthorizedException('Invalid credentials');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new UnauthorizedException('Invalid credentials');

        // remove password before returning
        const { password: _, ...result } = user;
        return result;
    }

    async login(user: any) {
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }

    async register(data: {
        name: string;
        email: string;
        phone: string;
        password: string;
        payday: number;
    }) {
        // Check if email already exists
        const existing = await this.usersService.findByEmail(data.email);
        if (existing) throw new UnauthorizedException('Email already in use');

        const newUser = await this.usersService.createUser(data);
        const { password: _, ...user } = newUser;

        return this.login(user);
    }
}
