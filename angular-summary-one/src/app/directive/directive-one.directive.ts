import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveOne]',
  host: {
    '(keyup)': 'fn1($event.target)',
    'placeholder': 'hello world'
  },
})
export class DirectiveOneDirective {
  constructor(public elementRef: ElementRef) {}
  fn1(e: any) {
    console.log('fn1', e);
  }
  fn2() {
    console.log('fn2');
  }
}
