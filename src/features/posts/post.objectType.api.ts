import { objectType } from 'nexus';
import prisma from '../../prisma/prisma';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.string('id');
    t.string('title');
    t.nullable.string('content');
    t.boolean('published');
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
