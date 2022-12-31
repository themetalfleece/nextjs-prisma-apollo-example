import gql from 'graphql-tag';
import { getUseMutation } from '../../../graphql/mutations/getUseMutation.util';

const PublishPostMutation = gql`
  mutation PublishPost($postId: String!) {
    publishPost(postId: $postId) {
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

export const usePublishPostMutation =
  getUseMutation<'publishPost'>(PublishPostMutation);
