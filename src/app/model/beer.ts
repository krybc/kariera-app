import {BeerStrengthEnum} from '../enum/beer-strength.enum';

export class Beer {
  id: number;
  name: string;
  description: string;
  breweryId: number;
  categoryId: number;
  alcohol: number;
  pasteurized: boolean;
  elementsId: number[];
  commentsId: number[];
  imageUrl: string;

  public get strength(): string {
    return this.alcohol >= 10 ? BeerStrengthEnum.strong : this.alcohol >= 5 ? BeerStrengthEnum.medium : BeerStrengthEnum.soft;
  }
}
