import gql from 'graphql-tag';
import { getUseQuery } from '../../../graphql/queries/getUseQuery.util';
import { PostI } from '../post.sourceType';

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

export const usePostQuery = getUseQuery<'post', PostI>(PostQuery);
