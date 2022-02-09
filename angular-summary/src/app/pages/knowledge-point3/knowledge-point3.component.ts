import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-point3',
  templateUrl: './knowledge-point3.component.html',
  styleUrls: ['./knowledge-point3.component.less']
})
export class KnowledgePoint3Component implements OnInit {

  currentTime = new Date();
  strUppercase = 'abcdefg';
  strLowercase = 'TJTQSN';
  list = [1, 3, 4, 2, 5, 6, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
