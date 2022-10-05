import { ObjectDefinitionBlock, stringArg } from 'nexus/dist/core';
import prisma from '../../../prisma/prisma';

export const publishPostDefinition = (t: ObjectDefinitionBlock<'Mutation'>) => {
  t.nullable.field('publishPost', {
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
