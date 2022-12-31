import gql from 'graphql-tag';
import { getUseQuery } from '../../../graphql/queries/getUseQuery.util';
import { PostI } from '../post.sourceType';

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

export const usePostsFeedQuery = getUseQuery<'feed', PostI[]>(PostsFeedQuery);
