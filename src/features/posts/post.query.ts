import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { nonNull, ObjectDefinitionBlock, stringArg } from 'nexus/dist/core';
import prisma from '../../lib/prisma';

export const postDefinition = (t: ObjectDefinitionBlock<'Query'>) => {
  t.field('post', {
    type: 'Post',
    args: {
      postId: nonNull(stringArg()),
    },
    resolve: (_, args) => {
      return prisma.post.findUnique({
        where: { id: Number(args.postId) },
      });
    },
  });
};

const PostQuery = gql`
  query PostQuery($postId: String!) {
    post(postId: $postId) {
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

export interface PostQueryVariablesI {
  postId: string;
}

export const usePostQuery = ({ postId }) =>
  useQuery(PostQuery, {
    variables: { postId },
  });
