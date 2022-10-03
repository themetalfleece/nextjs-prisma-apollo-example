import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { ObjectDefinitionBlock } from 'nexus/dist/core';
import prisma from '../../lib/prisma';

export const feedDefinition = (t: ObjectDefinitionBlock<'Query'>) => {
  t.list.field('feed', {
    type: 'Post',
    resolve: (_parent, _args) => {
      return prisma.post.findMany({
        where: { published: true },
      });
    },
  });
};

const FeedQuery = gql`
  query FeedQuery {
    feed {
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

export const useFeedQuery = () =>
  useQuery(FeedQuery, {
    fetchPolicy: 'cache-and-network',
  });
