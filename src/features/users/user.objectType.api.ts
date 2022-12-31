import { objectType } from 'nexus';
import prisma from '../../prisma/prisma';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('name');
    t.nonNull.string('email');
    t.list.field('posts', {
      type: 'Post',
      resolve: parent =>
        prisma.user
          .findUnique({
            where: { id: parent.id },
          })
          .posts(),
    });
  },
});
