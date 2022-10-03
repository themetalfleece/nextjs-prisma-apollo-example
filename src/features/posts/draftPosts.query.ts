import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const DraftPostsQuery = gql`
  query DraftPosts {
    draftPosts {
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

export const useDraftPostsQuery = () =>
  useQuery(DraftPostsQuery, {
    fetchPolicy: 'cache-and-network',
  });
