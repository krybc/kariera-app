import {Exclude, Expose} from 'class-transformer';

@Exclude()
export class Brewery {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose({ groups: ['simple'] })
  beersId: number[];
}
