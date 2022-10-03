import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const PostQuery = gql`
  query Post($postId: String!) {
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
