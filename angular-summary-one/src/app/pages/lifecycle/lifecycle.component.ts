import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.less']
})
export class LifecycleComponent implements OnInit {

  name = '甲乙丙丁';

  constructor() { }


  ngOnInit() {
    console.log('这是 ngOnInit 生命周期');
  }

  ngDoCheck(): void {
    console.log('这是 ngDoCheck 生命周期');
  }

  ngAfterContentInit(): void {
    console.log('这是 ngAfterContentInit 生命周期');
  }

  ngAfterContentChecked(): void {
    console.log('这是 ngAfterContentChecked 生命周期');
  }

  ngAfterViewInit(): void {
    console.log('这是 ngAfterViewInit 生命周期');
  }

  ngAfterViewChecked(): void {
    console.log('这是 ngAfterViewChecked 生命周期');
  }

  ngOnDestroy(): void {
    console.log('这是 ngOnDestroy 生命周期');
  }

}
