import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { validatorsStatus } from '../../interface/validator';

@Component({
  selector: 'app-knowledge-point7',
  templateUrl: './knowledge-point7.component.html',
  styleUrls: ['./knowledge-point7.component.less'],
})
export class KnowledgePoint7Component implements OnInit {
  categoryList = [
    {
      label: '只校验姓名',
      value: 'name',
    },
    {
      label: '只校验年龄',
      value: 'age',
    },
    {
      label: '只校验地址',
      value: 'address',
    },
  ];
  formStatus = '';
  category = '';

  validatorsForm = this.fb.group({
    category: [null, [Validators.required]],
    name: this.fb.control(null, [Validators.required, Validators.maxLength(5)]),
    age: new FormControl(null, [Validators.required, Validators.min(1)]),
    address: this.fb.group({
      province: this.fb.control(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
    }),
  });

  constructor(private fb: FormBuilder) {
    this.validatorsForm.valueChanges.subscribe((changes) => {
      const { category } = changes;
      this.category = category;
    });
    // 在constructor中增加validatorsForm的状态变更的订阅事件。
    // this.validatorsForm.statusChanges.subscribe((status) => {
    //   console.log('表单的状态:', status);
    // });
  }

  get addressForm() {
    return this.validatorsForm.get('address') as FormGroup;
  }

  // 处理校验器
  validator(condition = '') {
    console.log('condition:', condition);
    switch (condition) {
      case 'name':
        this.validatorsForm
          .get('name')
          ?.setValidators([Validators.required, Validators.maxLength(5)]);
        this.validatorsForm.get('age')?.clearValidators();
        this.addressForm.get('province')?.clearValidators();
        this.addressForm.get('city')?.clearValidators();
        break;
      case 'age':
        this.validatorsForm
          .get('age')
          ?.setValidators([Validators.required, Validators.min(1)]);
        this.validatorsForm.get('name')?.clearValidators();
        this.addressForm.get('province')?.clearValidators();
        this.addressForm.get('city')?.clearValidators();
        break;
      case 'address':
        this.addressForm.get('province')?.setValidators([Validators.required]);
        this.addressForm.get('city')?.setValidators([Validators.required]);
        this.validatorsForm.get('name')?.clearValidators();
        this.validatorsForm.get('age')?.clearValidators();
        break;
    }
    // 刷新表单校验;
    this.validatorsForm.updateValueAndValidity();
    this.validatorsForm.enable(); // 通过enable()方法，根据值和校验器重新计算状态。从而达到了更新状态的目的。
    this.formStatus = validatorsStatus[this.validatorsForm.status];
  }
  // 重置表单
  reset() {
    this.validatorsForm.reset();
    this.formStatus = '';
  }

  ngOnInit(): void {}
}
