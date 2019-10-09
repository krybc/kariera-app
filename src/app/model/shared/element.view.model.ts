import {ViewModel} from '../view.model';
import {Element} from '../../api/model/element';

export class ElementViewModel extends ViewModel<Element> {
  public id: number;
  public name: string;

  constructor(
    protected apiModel: Element,
  ) {
    super(apiModel);
    this.id = this.apiModel.id;
    this.name = this.apiModel.name;
  }

  toApiModel(): Element {
    return Object.assign(this.apiModel, {
      name: this.name
    });
  }
}
