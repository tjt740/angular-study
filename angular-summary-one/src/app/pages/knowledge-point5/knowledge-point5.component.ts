import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';
import { validatorsStatus } from '../../interface/validator';

@Component({
  selector: 'app-knowledge-point5',
  templateUrl: './knowledge-point5.component.html',
  styleUrls: ['./knowledge-point5.component.less'],
})
export class KnowledgePoint5Component implements OnInit {
  // 原表单FormGroup
  // validateForm = new FormGroup({
  //   name: new FormControl('谭金涛'),
  //   phone: new FormArray([new FormControl(110), new FormControl(120)]),
  //   address: new FormGroup({
  //     nation: new FormControl('中国'),
  //     province: new FormControl('浙江'),
  //   }),
  // });

  get validateFormPhoneArray() {
    return this.validateForm.get('phone') as FormArray;
  }

  // 使用FormBuilder重新构建表单
  validateForm = this.fb.group({
    name: new FormControl('谭金涛', [
      Validators.required,
      Validators.maxLength(3),
    ]),
    phone: new FormArray([
      new FormControl(110, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5),
      Validators.pattern(/^\d+$/),
      ]),
      new FormControl(120)
    ]),

    address: new FormGroup({
      nation: new FormControl('中国'),
      province: new FormControl('浙江'),
    }),
  });

  constructor(private fb: FormBuilder) {
    // 查 监听表单值的变化
    this.validateForm.valueChanges.subscribe({
      next: (valueChange) => {
        console.log('表单值变化:', valueChange);
      },
    });
  }

  // 增
  add() {
    this.validateForm.patchValue({
      sex:'男'
    })
  }

  // 删
  remove(index: any) {
    this.validateFormPhoneArray.removeAt(index);
  }


  ngOnInit(): void { }

  status = '';
  validator() {
    this.status = validatorsStatus[this.validateForm.status];
    // Validators.required:非空值验证器;
    // Validators.maxLength(max):最大长度为max的验证器;
    // Validators.minLength(min):最小长度为min的验证器;
    // Validators.max(max):最大值为max的验证器;
    // Validators.min(min):最小值为max的验证器;
    // Validators.pattern(/^\d+$/)]:符合某些正则表达式的验证器;

  }
}
