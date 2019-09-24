import {BeerStrengthEnum} from '../enum/beer-strength.enum';
import {Exclude, Expose, Transform, Type} from 'class-transformer';
import {Brewery} from './brewery';
import {Category} from './category';
import {Element} from './element';

@Exclude()
export class Beer {
  @Expose()
  id: number;

  @Expose()
  @Transform((value) => Date.parse(value), { toClassOnly: true })
  @Transform((value: Date) => value.toISOString(), { toPlainOnly: true })
  createdAt: Date;

  @Expose({ name: 'title' })
  name: string;

  @Expose({ groups: ['simple'] })
  breweryId: number;

  @Expose({ groups: ['composed'] })
  @Type(() => Brewery)
  brewery: Brewery;

  @Expose({ groups: ['simple'] })
  categoryId: number;

  @Expose({ groups: ['composed'] })
  @Type(() => Category)
  category: Category;

  @Expose()
  alcohol: number;

  @Expose()
  pasteurized: boolean;

  @Expose({ groups: ['simple'] })
  elementsId: number[];

  @Expose({ groups: ['composed'] })
  @Type(() => Element)
  elements: Element[];

  @Expose()
  imageUrl: string;

  public get strength(): string {
    return this.alcohol >= 10 ? BeerStrengthEnum.strong : this.alcohol >= 5 ? BeerStrengthEnum.medium : BeerStrengthEnum.soft;
  }
}
