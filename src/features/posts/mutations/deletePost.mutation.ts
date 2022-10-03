import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DeletePostMutation = gql`
  mutation DeletePost($postId: String!) {
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

export const useDeletePostMutation = () => useMutation(DeletePostMutation);
