import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

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
