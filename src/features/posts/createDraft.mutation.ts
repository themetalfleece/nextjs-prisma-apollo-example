import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const CreateDraftMutation = gql`
  mutation CreateDraftMutation(
    $title: String!
    $content: String
    $authorEmail: String!
  ) {
    createDraft(title: $title, content: $content, authorEmail: $authorEmail) {
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

export const useCreateDraftMutation = () => useMutation(CreateDraftMutation);
