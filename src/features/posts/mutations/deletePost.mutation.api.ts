import { ObjectDefinitionBlock, stringArg } from 'nexus/dist/core';
import prisma from '../../../lib/prisma';

export const deletePostDefinition = (t: ObjectDefinitionBlock<'Mutation'>) => {
  t.nullable.field('deletePost', {
    type: 'Post',
    args: {
      postId: stringArg(),
    },
    resolve: (_, { postId }) => {
      return prisma.post.delete({
        where: { id: Number(postId) },
      });
    },
  });
};
