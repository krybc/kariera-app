import {ViewModel} from '../view.model';
import {Brewery} from '../../api/model/brewery';

export class BreweryViewModel extends ViewModel<Brewery> {
  public id: number;
  public name: string;
  public beersCount: number;

  constructor(
    protected apiModel: Brewery,
  ) {
    super(apiModel);
    this.id = this.apiModel.id;
    this.name = this.apiModel.name;
    this.beersCount = this.apiModel.beersId.length;
  }

  public toApiModel(): Brewery {
    return Object.assign(this.apiModel, {
      name: this.name
    });
  }
}
