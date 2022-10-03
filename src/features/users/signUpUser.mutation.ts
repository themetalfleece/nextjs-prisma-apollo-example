import { ObjectDefinitionBlock } from 'nexus/dist/core';
import { nonNull, stringArg } from 'nexus';
import prisma from '../../lib/prisma';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

export const signUpUserDefinition = (t: ObjectDefinitionBlock<'Mutation'>) => {
  t.field('signupUser', {
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

const SignupMutation = gql`
  mutation SignupMutation($name: String, $email: String!) {
    signupUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const useSignUpMutation = () => useMutation(SignupMutation);
