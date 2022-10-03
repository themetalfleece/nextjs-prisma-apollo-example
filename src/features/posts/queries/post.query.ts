import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { UserI } from '../../users/user.sourceType';
import { PostI } from '../post.sourceType';

type _PostI = Pick<PostI, 'id' | 'title' | 'content' | 'published'> & {
  author: Pick<UserI, 'id' | 'name'>;
};

interface QueryI {
  post: _PostI;
}

interface VariablesI {
  postId: string;
}

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

export const usePostQuery = ({ postId }) =>
  useQuery<QueryI, VariablesI>(PostQuery, {
    variables: { postId },
  });
