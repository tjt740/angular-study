import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-point2',
  templateUrl: './knowledge-point2.component.html',
  styleUrls: ['./knowledge-point2.component.less']
})
export class KnowledgePoint2Component implements OnInit {

  str = '谭金涛';

  Vif = true;

  list = [
    { name: '谭金涛', age: 22, id: 1 },
    { name: '戚思宁', age: 21, id: 2 },
    { name: '张三', age: 21, id: 3 },
  ];



  constructor() { }

  trackFn(idx: any, item: any) {
    console.log(idx, item);
    return item.id;
  }

  btnClick1() {
    console.log('不携参事件')
  }

  btnClick2(val: string, e: any) {
    console.log('携参事件:',val, e);
  }

  ngOnInit(): void {
  }

}
