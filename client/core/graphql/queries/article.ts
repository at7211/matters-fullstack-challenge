import { gql } from '@apollo/client'
import { ARTICLE_FIELDS } from '../fragment/articleFields'

export const ARTICLE = gql`
  ${ARTICLE_FIELDS}
  query Articles {
    articles {
      ...articleFields
    }
  }
`
