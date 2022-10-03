import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { ObjectDefinitionBlock, stringArg } from 'nexus/dist/core';
import prisma from '../../lib/prisma';

export const deletePostDefinition = (t: ObjectDefinitionBlock<'Mutation'>) => {
  t.nullable.field('deletePost', {
    type: 'Post',
    args: {
      postId: stringArg(),
    },
    resolve: (_, { postId }) => {
      return prisma.post.delete({
        where: { id: Number(postId) },
      });
    },
  });
};

const DeleteMutation = gql`
  mutation DeleteMutation($postId: String!) {
    deletePost(postId: $postId) {
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

export const useDeleteMutation = () => useMutation(DeleteMutation);
