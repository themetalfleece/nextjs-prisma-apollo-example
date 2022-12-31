import { objectType } from 'nexus';
import prisma from '../../prisma/prisma';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('title');
    t.nullable.string('content');
    t.nonNull.boolean('published');
    t.nullable.field('author', {
      type: 'User',
      resolve: parent =>
        prisma.post
          .findUnique({
            where: { id: parent.id },
          })
          .author(),
    });
  },
});
