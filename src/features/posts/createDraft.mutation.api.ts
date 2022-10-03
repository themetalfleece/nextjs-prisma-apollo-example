import { nonNull, ObjectDefinitionBlock, stringArg } from 'nexus/dist/core';
import prisma from '../../lib/prisma';

export const createDraftDefinition = (t: ObjectDefinitionBlock<'Mutation'>) => {
  t.field('createDraft', {
    type: 'Post',
    args: {
      title: nonNull(stringArg()),
      content: stringArg(),
      authorEmail: stringArg(),
    },
    resolve: (_, { title, content, authorEmail }) => {
      return prisma.post.create({
        data: {
          title,
          content,
          published: false,
          author: {
            connect: { email: authorEmail },
          },
        },
      });
    },
  });
};
