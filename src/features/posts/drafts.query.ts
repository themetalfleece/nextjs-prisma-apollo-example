import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { ObjectDefinitionBlock } from 'nexus/dist/core';
import prisma from '../../lib/prisma';

export const draftsDefinition = (t: ObjectDefinitionBlock<'Query'>) => {
  t.list.field('drafts', {
    type: 'Post',
    resolve: (_parent, _args) => {
      return prisma.post.findMany({
        where: { published: false },
      });
    },
  });
};

const DraftsQuery = gql`
  query DraftsQuery {
    drafts {
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

export const useDraftsQuery = () =>
  useQuery(DraftsQuery, {
    fetchPolicy: 'cache-and-network',
  });
