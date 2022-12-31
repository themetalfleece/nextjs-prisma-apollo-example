import gql from 'graphql-tag';
import { getUseMutation } from '../../../graphql/mutations/getUseMutation.util';

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

export const useCreateDraftPostMutation = getUseMutation<'createDraftPost'>(
  CreateDraftPostMutation,
);
