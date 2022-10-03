import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { UserI } from '../../users/user.sourceType';
import { PostI } from '../post.sourceType';

type _DraftPostI = Pick<PostI, 'id' | 'title' | 'content' | 'published'> & {
  author: Pick<UserI, 'id' | 'name'>;
};

interface QueryI {
  draftPosts: _DraftPostI[];
}

const DraftPostsQuery = gql`
  query DraftPosts {
    draftPosts {
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

export const useDraftPostsQuery = () =>
  useQuery<QueryI>(DraftPostsQuery, {
    fetchPolicy: 'cache-and-network',
  });
