import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AccountDto } from '@@core/account/dto/account';
import { Account } from '@@core/account/models/account';

@ObjectType('Article')
export class ArticleDto {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  content: string;

  @Field(() => AccountDto)
  createdBy: Account;
}
