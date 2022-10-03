import { ObjectDefinitionBlock } from 'nexus/dist/core';
import prisma from '../../../lib/prisma';

export const draftPostsDefinition = (t: ObjectDefinitionBlock<'Query'>) => {
  t.list.field('draftPosts', {
    type: 'Post',
    resolve: (_parent, _args) => {
      return prisma.post.findMany({
        where: { published: false },
      });
    },
  });
};
