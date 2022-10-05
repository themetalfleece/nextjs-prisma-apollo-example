import { nullable, ObjectDefinitionBlock, stringArg } from 'nexus/dist/core';
import prisma from '../../../prisma/prisma';

export const filterPostsDefinition = (t: ObjectDefinitionBlock<'Query'>) => {
  t.list.field('filterPosts', {
    type: 'Post',
    args: {
      searchString: nullable(stringArg()),
    },
    resolve: (_, { searchString }) => {
      return prisma.post.findMany({
        where: {
          OR: [
            { title: { contains: searchString } },
            { content: { contains: searchString } },
          ],
        },
      });
    },
  });
};
