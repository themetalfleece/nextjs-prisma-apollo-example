import { ObjectDefinitionBlock } from 'nexus/dist/core';
import { signUpUserDefinition } from './signUpUser.mutation.api';

export const userQueryDefinitions = (_t: ObjectDefinitionBlock<'Query'>) => {
  return null;
};

export const userMutationDefinitions = (
  t: ObjectDefinitionBlock<'Mutation'>,
) => {
  signUpUserDefinition(t);
};
