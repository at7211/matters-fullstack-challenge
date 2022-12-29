import { Loader } from '@@common/misc/loader';
import { Inject, Injectable } from '@nestjs/common';
import { Account } from '../models/account';
import { AccountRepo } from '../repositories/account.repo';

@Injectable()
export class AccountLoader extends Loader<string, Account | undefined> {
  @Inject(AccountRepo)
  private accountRepo: AccountRepo;

  loadMethod = (keys: string[]) => this.accountRepo.findByAddresses(keys);
}
