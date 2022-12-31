import { DocumentNode, MutationHookOptions, useMutation } from '@apollo/client';
import { MutationArguments, MutationFieldTypes } from './mutations.type';

/**
 * Returns a hook for the mutation
 * @param mutation - The mutation gql
 * "Field" generic - The field name as defined in the mutation
 */
export const getUseMutation = <Field extends keyof MutationFieldTypes>(
  mutation: DocumentNode,
) => {
  type MutationI = Record<Field, MutationFieldTypes[Field] | undefined>;

  type ArgumentsI = Field extends keyof MutationArguments
    ? MutationArguments[Field]
    : Record<never, never>;

  return (options?: MutationHookOptions<MutationI, ArgumentsI>) =>
    useMutation<MutationI, ArgumentsI>(mutation, options);
};
