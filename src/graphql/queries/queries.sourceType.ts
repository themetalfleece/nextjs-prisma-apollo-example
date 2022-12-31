import { ObjectDefinitionBlock } from 'nexus/dist/core';
import { draftPostsDefinition } from '../../features/posts/queries/draftPosts.query.api';
import { filterPostsDefinition } from '../../features/posts/queries/filterPosts.query.api';
import { postDefinition } from '../../features/posts/queries/post.query.api';
import { feedDefinition } from '../../features/posts/queries/postsFeed.query.api';

export const queryDefinitions = (t: ObjectDefinitionBlock<'Query'>) => {
  draftPostsDefinition(t);
  filterPostsDefinition(t);
  postDefinition(t);
  feedDefinition(t);
};
