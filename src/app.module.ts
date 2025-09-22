import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [UsersModule, AuthModule, WalletsModule],
})
export class AppModule {}
