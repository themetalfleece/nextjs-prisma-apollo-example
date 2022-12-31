import gql from 'graphql-tag';
import { getUseQuery } from '../../../graphql/queries/getUseQuery.util';
import { PostI } from '../post.sourceType';

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

export const useDraftPostsQuery = getUseQuery<'draftPosts', PostI[]>(
  DraftPostsQuery,
);
