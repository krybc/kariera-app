import { Pipe, PipeTransform } from '@angular/core';
import {BooleanEnum} from '../enum/boolean.enum';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value: boolean): any {
    return (value === true) ? BooleanEnum.true : BooleanEnum.false;
  }

}
