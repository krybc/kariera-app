import {Exclude, Expose} from 'class-transformer';

@Exclude()
export class Comment {
  @Expose()
  id: number;

  @Expose()
  beerId: number;

  @Expose()
  author: string;

  @Expose()
  content: string;
}
