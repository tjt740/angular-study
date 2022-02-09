import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchanges-lifecycle',
  templateUrl: './ng-onchanges-lifecycle.component.html',
  styleUrls: ['./ng-onchanges-lifecycle.component.less']
})
export class NgOnchangesLifecycleComponent implements OnInit {

  constructor() { }
  @Input() sb: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('这是 ngOnChanges 生命周期');
    console.log('changes:', changes);
    const { sb } = changes;
    console.log(sb);
  }
  ngOnInit(): void {
  }

}
