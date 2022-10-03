import { ObjectDefinitionBlock } from 'nexus/dist/core';
import { createDraftPostDefinition } from './mutations/createDraftPost.mutation.api';
import { deletePostDefinition } from './mutations/deletePost.mutation.api';
import { publishPostDefinition } from './mutations/publishPost.mutation.api';
import { draftPostsDefinition } from './queries/draftPosts.query.api';
import { filterPostsDefinition } from './queries/filterPosts.query.api';
import { postDefinition } from './queries/post.query.api';
import { feedDefinition } from './queries/postsFeed.query.api';

export const postQueryDefinitions = (t: ObjectDefinitionBlock<'Query'>) => {
  draftPostsDefinition(t);
  feedDefinition(t);
  filterPostsDefinition(t);
  postDefinition(t);
};

export const postMutationDefinitions = (
  t: ObjectDefinitionBlock<'Mutation'>,
) => {
  createDraftPostDefinition(t);
  deletePostDefinition(t);
  publishPostDefinition(t);
};
