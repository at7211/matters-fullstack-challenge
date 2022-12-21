import type {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  TypedDocumentNode,
} from '@apollo/client'
import { useQuery as apolloQuery } from '@apollo/client'
import { useShowError } from './useShowError'


const useQuery = <TData = any, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<TData, TVariables>,
): QueryResult<TData, TVariables> => {
  const showError = useShowError();

  return apolloQuery(query, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onError: error => showError(error.message),
    ...options,
  })
}

export default useQuery
