import {BeerStrengthEnum} from '../enum/beer-strength.enum';

export class Beer {
  id: number;
  name: string;
  breweryId: number;
  categoryId: number;
  alcohol: number;
  elementsId: number[];
  imageUrl: string;

  public get strength(): string {
    return this.alcohol >= 10 ? BeerStrengthEnum.strong : this.alcohol >= 5 ? BeerStrengthEnum.medium : BeerStrengthEnum.soft;
  }
}
