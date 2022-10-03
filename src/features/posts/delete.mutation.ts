import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

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
