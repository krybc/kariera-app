import {BeerViewModel} from '../shared/beer.view.model';
import {Brewery} from '../../api/model/brewery';
import {BreweryViewModel as BaseBreweryViewModel} from '../shared/brewery.view.model';

export class BreweryViewModel extends BaseBreweryViewModel {
  public id: number;
  public name: string;
  public beers: BeerViewModel[];

  constructor(
    protected apiModel: Brewery,
  ) {
    super(apiModel);
  }

  toApiModel(): Brewery {
    return Object.assign(this.apiModel);
  }
}
