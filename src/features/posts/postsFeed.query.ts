import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const PostsFeedQuery = gql`
  query PostsFeed {
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

export const usePostsFeedQuery = () =>
  useQuery(PostsFeedQuery, {
    fetchPolicy: 'cache-and-network',
  });
