import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WalletsModule } from './wallets/wallets.module';
import { TransactionsModule } from './transactions/transactions.module';
import { GoalsModule } from './goals/goals.module';
import { ChamasModule } from './chamas/chamas.module';
import { NudgesModule } from './nudges/nudges.module';

@Module({
  imports: [UsersModule, AuthModule, WalletsModule, TransactionsModule, GoalsModule, ChamasModule, NudgesModule],
})
export class AppModule {}
