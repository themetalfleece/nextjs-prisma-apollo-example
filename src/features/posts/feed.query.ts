import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

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
