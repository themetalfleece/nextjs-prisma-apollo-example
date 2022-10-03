import { ObjectDefinitionBlock } from 'nexus/dist/core';
import { createDraftPostDefinition } from './createDraftPost.mutation.api';
import { deletePostDefinition } from './deletePost.mutation.api';
import { draftPostsDefinition } from './draftsPosts.query.api';
import { filterPostsDefinition } from './filterPosts.query.api';
import { postDefinition } from './post.query.api';
import { feedDefinition } from './postsFeed.query.api';
import { publishPostDefinition } from './publishPost.mutation.api';

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
