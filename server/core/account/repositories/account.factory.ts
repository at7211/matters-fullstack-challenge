import { Inject, Injectable } from '@nestjs/common';
import { plainToModel } from '@@common/misc/plain-to-instance';
import { AccountDb } from '@@docstore/entities/account';
import { ArticleFactory } from '@@core/article/repositories/article.factory';
import { Account } from '../models/account';

@Injectable()
export class AccountFactory {
  @Inject(ArticleFactory)
  private articleFactory: ArticleFactory;

  createAccount(accountDb: AccountDb) {
    const article = plainToModel(Account, {
      address: accountDb.address,
      articles: (accountDb.articles ?? []).map((articleDb) =>
        this.articleFactory.createArticle(articleDb),
      ),
      signedMessage: accountDb.signedMessage,
      nonce: accountDb.nonce,
    });

    return article;
  }
}
