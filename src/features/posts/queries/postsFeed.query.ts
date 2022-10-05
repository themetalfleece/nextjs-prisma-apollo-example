import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { UserI } from '../../users/user.sourceType';
import { PostI } from '../post.sourceType';

type _FeedI = Pick<PostI, 'id' | 'title' | 'content' | 'published'> & {
  author: Pick<UserI, 'id' | 'name'>;
};

interface QueryI {
  feed: _FeedI[];
}

const PostsFeedQuery = gql`
  query PostsFeed {
    feed {
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

export const usePostsFeedQuery = () =>
  useQuery<QueryI>(PostsFeedQuery, {
    fetchPolicy: 'cache-and-network',
  });
