import { ObjectDefinitionBlock } from 'nexus/dist/core';
import { createDraftPostDefinition } from '../../features/posts/mutations/createDraftPost.mutation.api';
import { deletePostDefinition } from '../../features/posts/mutations/deletePost.mutation.api';
import { publishPostDefinition } from '../../features/posts/mutations/publishPost.mutation.api';

export const mutationDefinitions = (t: ObjectDefinitionBlock<'Mutation'>) => {
  createDraftPostDefinition(t);
  deletePostDefinition(t);
  publishPostDefinition(t);
};
