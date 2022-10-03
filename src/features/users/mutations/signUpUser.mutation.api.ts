import { nonNull, stringArg } from 'nexus';
import { ObjectDefinitionBlock } from 'nexus/dist/core';
import prisma from '../../../lib/prisma';

export const signUpUserDefinition = (t: ObjectDefinitionBlock<'Mutation'>) => {
  t.field('signUpUser', {
    type: 'User',
    args: {
      name: stringArg(),
      email: nonNull(stringArg()),
    },
    resolve: (_, { name, email }) => {
      return prisma.user.create({
        data: {
          name,
          email,
        },
      });
    },
  });
};
