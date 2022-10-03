import { ObjectDefinitionBlock } from 'nexus/dist/core';
import prisma from '../../../lib/prisma';

export const feedDefinition = (t: ObjectDefinitionBlock<'Query'>) => {
  t.list.field('feed', {
    type: 'Post',
    resolve: (_parent, _args) => {
      return prisma.post.findMany({
        where: { published: true },
      });
    },
  });
};
