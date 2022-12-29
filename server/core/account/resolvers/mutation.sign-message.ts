import { Inject } from '@nestjs/common';
import {
  Args,
  Field,
  ID,
  Mutation,
  ObjectType,
  Resolver,
} from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-express';
import { customAlphabet } from 'nanoid';
import { AccountRepo } from '../repositories/account.repo';

const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 12);

@ObjectType('SignMessageResponse')
export class SignMessageResponse {
  @Field(() => ID)
  address: string;

  @Field(() => ID)
  signingMessage: string;

  @Field(() => ID)
  nonce: string;
}

@Resolver()
export class SignMessage {
  @Inject(AccountRepo)
  private accountRepo: AccountRepo;

  @Mutation(() => SignMessageResponse)
  async signMessage(@Args('address') address: string) {
    const account = await this.accountRepo.findByAddress(address);

    if (!account) {
      throw new ApolloError('Account not found');
    }
    // e.g. 'ek4j3nbum7ql'
    const nonce = nanoid();

    // create the message to be sign'ed
    const signingMessage = `Matters wants you to sign in with your Ethereum account:
        ${address}

        Version: 1
        Chain ID: 1
        Nonce: ${nonce}
    `;

    await this.accountRepo.updateByAddress({
      address,
      signedMessage: signingMessage,
      nonce,
      ...account,
    });

    return {
      address,
      nonce,
      signingMessage,
    };
  }
}
