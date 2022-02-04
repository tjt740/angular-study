import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  constructor(public ele: ElementRef) {
    console.log(ele);
    this.ele.nativeElement.style.backgroundColor = 'tan';
  }

  // 绑定事件 import { HostListener } from '@angular/core';
  @HostListener('keyup', ['$event.target'])
  keyupFun(evt: { value: string }) {
    if (evt.value) {
      console.log(this.ele);
      this.ele.nativeElement.value = evt.value.trim();
    }
  }
}
