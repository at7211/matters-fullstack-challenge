import { ApolloClient, InMemoryCache } from '@apollo/client'
import possibleTypesResult from './possibleTypes'

const url = process.env.NEXT_PUBLIC_API_BASE_URL || ''

const client = new ApolloClient({
  uri: `${url}/graphql`,
  cache: new InMemoryCache({ possibleTypes: possibleTypesResult.possibleTypes }),
  credentials: 'include',
})

export default client
