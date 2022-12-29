import { Article } from '@@core/article/models/article';

export class Account {
  address: string;
  articles: Article[];
  signedMessage: string | null;
  nonce: string | null;
}
