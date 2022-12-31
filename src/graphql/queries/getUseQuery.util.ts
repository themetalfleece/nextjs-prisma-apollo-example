import { DocumentNode, QueryHookOptions, useQuery } from '@apollo/client';
import { QueryArguments, QueryFieldTypes } from './queries.type';

/**
 * Returns a hook for the query
 * @param query - The query gql
 * "Field" generic - The field name as defined in the query
 * "ReturnType" generic - The return type is an object with the "Field" as the key and this type as the value
 */
export const getUseQuery = <
  Field extends keyof QueryFieldTypes,
  ReturnType extends Record<string, any>,
>(
  query: DocumentNode,
) => {
  type QueryI = Record<Field, QueryFieldTypes[Field] | undefined>;

  type ReturnI = Record<Field, ReturnType | undefined>;

  type ArgumentsI = Field extends keyof QueryArguments
    ? QueryArguments[Field]
    : Record<never, never>;

  return (options?: QueryHookOptions<QueryI, ArgumentsI>) =>
    useQuery<ReturnI, ArgumentsI>(
      query,
      options as unknown as QueryHookOptions<ReturnI, ArgumentsI>,
    );
};
