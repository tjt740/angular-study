import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import dayjs from 'dayjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
})
export class IndexComponent implements OnInit, AfterContentChecked {
  isIndex: string | boolean = '';
  time = dayjs().format('HH:mm')
  constructor(private route: Router) {}

  ngOnInit(): void {}
  ngAfterContentChecked(): void {
    this.isIndex = window.location.pathname === '/index' || false;
  }

  goBack() {
    this.route.navigateByUrl('/index');
  }
}
