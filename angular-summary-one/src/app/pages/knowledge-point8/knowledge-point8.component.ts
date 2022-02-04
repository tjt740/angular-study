import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-knowledge-point8',
  templateUrl: './knowledge-point8.component.html',
  styleUrls: ['./knowledge-point8.component.less'],
})
export class KnowledgePoint8Component implements OnInit {
  demoForm = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) {
    this.demoForm = this.fb.group({
      name: this.fb.control('谭金涛', [Validators.required]),
      sex: new FormControl('男'),
      age: [22,Validators.required]
    })
  }
  name = null;
  ngOnInit(): void {

  }
}
