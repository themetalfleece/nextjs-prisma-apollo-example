import { objectType } from 'nexus';
import prisma from '../../lib/prisma';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id');
    t.string('name');
    t.string('email');
    t.list.field('posts', {
      type: 'Post',
      resolve: parent =>
        prisma.user
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .posts(),
    });
  },
});
