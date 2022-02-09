import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-point1',
  templateUrl: './knowledge-point1.component.html',
  styleUrls: ['./knowledge-point1.component.less'],
})
export class KnowledgePoint1Component implements OnInit {
  title = '标题';

  dynamic = '我是动态属性';

  imgSrc = 'https://img.wenhairu.com/images/2021/12/17/5DgS6.png';

  inputValue: string = '初始文案';

  innerInfo = '<b>我是innerHTML</b>';

  dynamicClassName: string = 'dynamic-className';

  judgmentClassName: boolean = true;

  booleanTrue: boolean = true;

  classNameS1: string = 'name1 name2';

  classNameS2: Array<string> = ['name1', 'name2'];

  classNameS3: object = { name1: true, name2: true, name: false };

  dynamicStyle1 = 'red';

  dynamicStyle2 = {
    color: 'blue',
  };

  hidden = true;

  ngModelText = '';

  constructor() {}
  changeInput(e: any) {
    console.log(e);
  }

  changeInputValue(e: any) {
    console.log('input参数:', e.target.value);
    this.inputValue = e.target.value + '123';
  }

  btnClick(e: any) {
    console.log('事件参数:', e);
  }

  fn(): string {
    return '你好';
  }

  ngOnInit(): void {}
}
