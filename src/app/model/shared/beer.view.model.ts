import {ViewModel} from '../view.model';
import {Beer} from '../../api/model/beer';

export class BeerViewModel extends ViewModel<Beer> {
  id: number;
  name: string;
  description: string;
  pasteurized: boolean;
  elementsCount: number;
  alcohol: number;
  imageUrl: string;

  constructor(
    protected apiModel: Beer,
  ) {
    super(apiModel);
    this.id = this.apiModel.id;
    this.name = this.apiModel.name;
    this.description = this.apiModel.description;
    this.pasteurized = this.apiModel.pasteurized;
    this.elementsCount = this.apiModel.elementsId.length;
    this.alcohol = this.apiModel.alcohol;
    this.imageUrl = this.apiModel.imageUrl;
  }

  toApiModel(): Beer {
    return Object.assign(this.apiModel, {
      name: this.name
    });
  }
}
