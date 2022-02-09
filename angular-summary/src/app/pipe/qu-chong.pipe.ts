import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quChong',
})
export class QuChongPipe implements PipeTransform {
  transform(value: any, ...args: any): Array<string | number> {
    return Array.from(new Set([].concat(value, ...args)));
  }
}
