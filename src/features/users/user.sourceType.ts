import { PostI } from '../posts/post.sourceType';

export interface UserI {
  id: number;
  name: string;
  email: string;
  posts?: PostI[];
}
