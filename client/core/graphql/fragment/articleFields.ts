import { gql } from '@apollo/client'

export const ARTICLE_FIELDS = gql`
  fragment articleFields on Article {
    id
    title
    description
    content
    createdBy
  }
`
