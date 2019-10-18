import {BreweryViewModel} from '../shared/brewery.view.model';
import {Beer} from '../../api/model/beer';
import {CommentViewModel} from '../shared/comment.view.model';
import {ElementViewModel} from '../shared/element.view.model';
import {BeerViewModel as BaseBeerViewModel} from '../shared/beer.view.model';

export class BeerViewModel extends BaseBeerViewModel {
  brewery: BreweryViewModel;
  comments: CommentViewModel[];
  elements: ElementViewModel[];

  constructor(
    protected apiModel: Beer,
  ) {
    super(apiModel);
  }

  toApiModel(): Beer {
    return Object.assign(this.apiModel, {
      breweryId: this.brewery.id,
      name: this.name,
      alcohol: this.alcohol,
      pasteurized: this.pasteurized,
      description: this.description,
      commentsId: this.comments.map(comment => comment.id),
      elementsId: this.elements.map(element => element.id)
    });
  }

  applyFormValue(value: object): BeerViewModel {
    return Object.assign(this, value);
  }
}
