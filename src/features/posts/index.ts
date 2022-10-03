import { ObjectDefinitionBlock } from 'nexus/dist/core';
import { createDraftDefinition } from './createDraft.mutation.api';
import { deletePostDefinition } from './delete.mutation.api';
import { draftsDefinition } from './drafts.query.api';
import { feedDefinition } from './feed.query.api';
import { filterPostsDefinition } from './filterPosts.query.api';
import { postDefinition } from './post.query.api';
import { publishDefinition } from './publish.mutation.api';

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
