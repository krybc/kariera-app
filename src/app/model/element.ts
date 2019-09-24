import {Exclude, Expose} from 'class-transformer';

@Exclude()
export class Element {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
