export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  address: Scalars['ID'];
  articles: Array<Article>;
};

export type Article = {
  __typename?: 'Article';
  content: Scalars['String'];
  createdBy: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ArticlePage = {
  __typename?: 'ArticlePage';
  list: Array<Article>;
  total: Scalars['Int'];
};

export type CreateArticleInput = {
  content: Scalars['String'];
  createdBy: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
};


export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};

export type Query = {
  __typename?: 'Query';
  account: Account;
  article: Article;
  articles: ArticlePage;
};


export type QueryAccountArgs = {
  address: Scalars['String'];
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};


export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};
