import { nonNull, ObjectDefinitionBlock, stringArg } from 'nexus/dist/core';
import prisma from '../../../prisma/prisma';

export const postDefinition = (t: ObjectDefinitionBlock<'Query'>) => {
  t.field('post', {
    type: 'Post',
    args: {
      postId: nonNull(stringArg()),
    },
    resolve: (_, args) => {
      return prisma.post.findUnique({
        where: { id: args.postId },
      });
    },
  });
};
