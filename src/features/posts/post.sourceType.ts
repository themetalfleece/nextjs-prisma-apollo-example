import { UserI } from '../users/user.sourceType';

export interface PostI {
  id: number;
  title: string;
  content: string;
  published: boolean;
  author?: UserI;
}
