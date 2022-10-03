import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const CreateDraftPostMutation = gql`
  mutation CreateDraftPost(
    $title: String!
    $content: String
    $authorEmail: String!
  ) {
    createDraftPost(
      title: $title
      content: $content
      authorEmail: $authorEmail
    ) {
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

export const useCreateDraftPostMutation = () =>
  useMutation(CreateDraftPostMutation);
