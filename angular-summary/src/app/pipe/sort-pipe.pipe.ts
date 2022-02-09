import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe',
})
export class SortPipePipe implements PipeTransform {
  transform(value: Array<number>): Array<number> {
    value.sort((a, b) => a - b); // 正序 从小到大排序
    return value;
  }
}
