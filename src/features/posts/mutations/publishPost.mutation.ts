import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

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

export const usePublishPostMutation = () => useMutation(PublishPostMutation);
