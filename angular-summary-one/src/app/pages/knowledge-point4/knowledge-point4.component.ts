import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-knowledge-point4',
  templateUrl: './knowledge-point4.component.html',
  styleUrls: ['./knowledge-point4.component.less'],
})
export class KnowledgePoint4Component implements OnInit {
  info = {
    name: '',
    sex: '男',
    cityList: ['北京', '上海', '曹县', '杭州', '纽约'],
    city: '纽约',
    hobby: [
      { value: 'a', label: '学习', flag: true },
      { value: 'b', label: '跑步', flag: false },
      { value: 'c', label: '游戏', flag: false },
    ],

    mark: '这是条备注',
  };

  // xxxFormControl = new FormControl('初始值',)
  nameFormControl = new FormControl('谭金涛');
  ageFormControl = new FormControl('22');
  emailFormControl = new FormControl('123@qq.com');
  resetForm() {
    this.nameFormControl.setValue('谭金涛');
    this.ageFormControl.reset();
    this.emailFormControl.patchValue('2771289317@qq.com');
  }

  validateForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(23, [Validators.required]),
    email: new FormControl('123@qq.com', [Validators.required]),
  });

  validateNestedForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    address: new FormGroup({
      area: new FormControl('杭州', [Validators.required]),
      street: new FormControl('余杭塘路', [Validators.required]),
    }),
  });
  resetNestedFormGroup() {
    // 重置表单
    this.validateNestedForm.reset();
  }

  resetFormGroup() {
    this.validateForm.reset(); // 重置表单
  }
  submit() {
    console.log('提交表单:', this.validateForm.value);
  }

  // 监听form的值的变化;
  validateMonitorForm = new FormGroup({
    name: new FormControl('谭金涛'), //设置默认值;
    sex: new FormControl('男'),
    address: new FormGroup({
      nation: new FormControl('中国'),
      province: new FormControl(null),
    }),
  });
  // todo: 还没做笔记；
  validateFormArray = new FormGroup({
    phone: new FormArray([
      new FormControl(15751666937),
      new FormControl(13706877876),
    ]),
  });

  get phoneArray() {
    return this.validateFormArray.get('phone') as FormArray;
  }

  addPhoneNum() {
    (this.validateFormArray.get('phone') as FormArray).push(new FormControl(110));
    //  this.phoneArray.push(new FormControl(110))
  }
  deletePhoneNum(index: any) {
    ( this.validateFormArray.get('phone') as FormArray ).removeAt(index)
    // this.phoneArray.removeAt(index);
  }

  patchPhoneNum1() {
    this.phoneArray.patchValue([740, 750]); // 会把原先的表单清空
    //( this.validateFormArray.get('phone') as FormArray).patchValue([value1,value2])
  }
  patchPhoneNum2() {
    const newArray = [740, 750];
    newArray.forEach(i => {
      this.phoneArray.push(new FormControl(i))
    })
  }

  constructor() {
    // 获取FormGroup中某个值得变化
    this.validateMonitorForm.get('name')?.valueChanges.subscribe({
      next: (formChange) => {
        console.log('form值变化:', formChange);
      },
    });
    // 获取嵌套中FormGroup中值得变化
    this.validateMonitorForm
      .get('address')
      ?.get('nation')
      ?.valueChanges.subscribe({
        next: (formChange) => {
          console.log('第一种获取嵌套中FormGroup中值得变化:', formChange);
        },
      });

    this.addressForm.get('province')?.valueChanges.subscribe((formChange) => {
      console.log('第二种获取嵌套中FormGroup中值得变化:', formChange);
    });

    // 获取整个form的变化
    this.addressForm.valueChanges.subscribe((formValue) => {
      console.log('获取整个form的变化:', formValue);
    });
  }

  get addressForm() {
    return this.validateMonitorForm.get('address') as FormGroup;
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.nameFormControl.patchValue('戚思宁')
    // },3000)
  }

  setValue() {
    this.validateMonitorForm.setValue({
      name: '戚思宁',

      address: {
        nation: '瑞士',
        province: '沃',
      },
    });
  }

  patchValue() {
    this.validateMonitorForm.patchValue({
      name: '张三',

      address: {
        nation: '中国',
        province: '江苏',
      },
    });
  }

  //对FormGroup中某一个实例进行赋值
  getSomeoneChange() {
    this.validateMonitorForm.get('name')?.setValue('tjt');
    this.validateMonitorForm.get('sex')?.patchValue('女');
  }

  // 对二级FormGroup整个赋值
  changeFormGroupName() {
    this.validateMonitorForm.get('address')?.setValue({
      nation: '江苏',
      province: '扬州',
    });

    this.validateMonitorForm.get('address')?.patchValue({
      province: '苏州',
    });
  }

  // 对第二层中的 FormGroup 中的某一个实例 赋值
  changeFormGroupNameControl() {
    this.validateMonitorForm.get('address')?.get('nation')?.setValue('上海');

    this.validateMonitorForm.get('address')?.get('nation')?.patchValue('深圳');
  }
}
