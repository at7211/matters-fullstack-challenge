import type {
  ApolloCache,
  DefaultContext,
  DocumentNode,
  MutationHookOptions,
  OperationVariables,
  TypedDocumentNode,
} from '@apollo/client'
import { useMutation as apolloMutation } from '@apollo/client'
import { useShowError } from './useShowError';

const useMutation = <
  TData = any,
  TVariables = OperationVariables,
  TContext = DefaultContext,
  TCache extends ApolloCache<any> = ApolloCache<any>,
>(
  mutation: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: MutationHookOptions<TData, TVariables, TContext>,
) => {
  const showError = useShowError();

  return apolloMutation(mutation, {
    awaitRefetchQueries: true,
    onError: error => showError(error.message),
    ...options,
  });
}

export default useMutation
