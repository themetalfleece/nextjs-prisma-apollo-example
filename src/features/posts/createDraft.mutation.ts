import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
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

const CreateDraftMutation = gql`
  mutation CreateDraftMutation(
    $title: String!
    $content: String
    $authorEmail: String!
  ) {
    createDraft(title: $title, content: $content, authorEmail: $authorEmail) {
      id
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`;

export const useCreateDraftMutation = () => useMutation(CreateDraftMutation);
