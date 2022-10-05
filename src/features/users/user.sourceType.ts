import { PostI } from '../posts/post.sourceType';

export interface UserI {
  id: string;
  name: string;
  email: string;
  posts?: PostI[];
}
