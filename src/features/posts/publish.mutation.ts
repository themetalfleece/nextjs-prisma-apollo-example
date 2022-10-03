import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const PublishMutation = gql`
  mutation PublishMutation($postId: String!) {
    publish(postId: $postId) {
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

export const usePublishMutation = () => useMutation(PublishMutation);
