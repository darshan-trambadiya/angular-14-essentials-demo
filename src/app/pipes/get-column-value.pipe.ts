// external
import { Pipe, PipeTransform } from '@angular/core';
import { get } from 'lodash';

@Pipe({
  name: 'getColumnValue',
})
export class GetColumnValuePipe implements PipeTransform {
  transform(value: any, columnConfig: any): any {
    return get(value, columnConfig.value);
  }
}
