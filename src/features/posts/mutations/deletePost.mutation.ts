import gql from 'graphql-tag';
import { getUseMutation } from '../../../graphql/mutations/getUseMutation.util';

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

export const useDeletePostMutation =
  getUseMutation<'deletePost'>(DeletePostMutation);
