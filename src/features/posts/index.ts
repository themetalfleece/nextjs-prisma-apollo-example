import { ObjectDefinitionBlock } from 'nexus/dist/core';
import { createDraftDefinition } from './createDraft.mutation';
import { deletePostDefinition } from './delete.mutation';
import { draftsDefinition } from './drafts.query';
import { feedDefinition } from './feed.query';
import { filterPostsDefinition } from './filterPosts.query';
import { postDefinition } from './post.query';
import { publishDefinition } from './publish.mutation';

export const postQueryDefinitions = (t: ObjectDefinitionBlock<'Query'>) => {
  draftsDefinition(t);
  feedDefinition(t);
  filterPostsDefinition(t);
  postDefinition(t);
};

export const postMutationDefinitions = (
  t: ObjectDefinitionBlock<'Mutation'>,
) => {
  createDraftDefinition(t);
  deletePostDefinition(t);
  publishDefinition(t);
};
