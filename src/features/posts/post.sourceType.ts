import { UserI } from '../users/user.sourceType';

export interface PostI {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author?: UserI;
}
