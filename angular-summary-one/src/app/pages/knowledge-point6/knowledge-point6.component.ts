import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-knowledge-point6',
  templateUrl: './knowledge-point6.component.html',
  styleUrls: ['./knowledge-point6.component.less'],
})
export class KnowledgePoint6Component implements OnInit {
  validatorForm = this.fb.group({
    name: [null, [Validators.required, Validators.maxLength(3)]],
    age: [0, [Validators.required, Validators.max(100)]],
    address: this.fb.group({
      province: this.fb.control('浙江', [Validators.required]),
      city: this.fb.control('杭州', [Validators.required]),
    }),
    phone: this.fb.array([
      this.fb.control(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      this.fb.control(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    ]),
  });

  get validatorFormPhone() {
    return this.validatorForm.get('phone') as FormArray;
  }

  constructor(private fb: FormBuilder) { }
  remove(index:any) { };
  ngOnInit(): void {}
}
