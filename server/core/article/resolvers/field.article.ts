import { Context, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { FieldResolverType } from '@@common/misc/field-resolver-type';
import { ArticleDto } from '../dto/article';
import { Article } from '../models/article';
import { Inject } from '@nestjs/common';
import { AccountLoader } from '@@core/account/services/account-loader';
import { Account } from '@@core/account/models/account';

@Resolver(() => ArticleDto)
export class ArticleFieldResolver implements FieldResolverType<ArticleDto> {
  @Inject(AccountLoader)
  accountLoader: AccountLoader;

  @ResolveField()
  id(@Parent() parent: Article) {
    return parent.id;
  }

  @ResolveField()
  title(@Parent() parent: Article) {
    return parent.title;
  }

  @ResolveField()
  description(@Parent() parent: Article) {
    return parent.description;
  }

  @ResolveField()
  content(@Parent() parent: Article) {
    return parent.content;
  }

  /** @TODO implement cacheMap */
  @ResolveField()
  createdBy(@Parent() parent: Article, @Context() { cacheMap }: Ctx) {
    return this.accountLoader.load(
      parent.createdBy,
      cacheMap,
    ) as Promise<Account>;
  }
}
