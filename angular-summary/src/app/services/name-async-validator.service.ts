import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameAsyncValidatorService {

  constructor() { }

  validatorName() {
    console.log(1111111);
  }
}
