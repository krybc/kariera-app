import {Exclude, Expose} from 'class-transformer';

@Exclude()
export class Category {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
