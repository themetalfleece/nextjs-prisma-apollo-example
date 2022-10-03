import { ObjectDefinitionBlock, stringArg } from 'nexus/dist/core';
import prisma from '../../lib/prisma';

export const publishDefinition = (t: ObjectDefinitionBlock<'Mutation'>) => {
  t.nullable.field('publish', {
    type: 'Post',
    args: {
      postId: stringArg(),
    },
    resolve: (_, { postId }) => {
      return prisma.post.update({
        where: { id: Number(postId) },
        data: { published: true },
      });
    },
  });
};
