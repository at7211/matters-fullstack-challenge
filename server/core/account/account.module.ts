import { Module } from '@nestjs/common';
import { AccountRepo } from './repositories/account.repo';
import { AccountResolver } from './resolvers/query.account';
import { AccountFactory } from './repositories/account.factory';
import { AccountLoader } from './services/account-loader';

@Module({
  imports: [AccountModule],
  providers: [AccountFactory, AccountRepo, AccountResolver, AccountLoader],
  exports: [AccountRepo, AccountLoader],
})
export class AccountModule {}
