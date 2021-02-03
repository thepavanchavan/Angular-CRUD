import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
    city: new FormControl(0),
    gender: new FormControl('1'),
    isSelected: new FormControl(false)
  });

initializeFormGroup() {
  this.form.setValue({
    $key: null,
    name: '',
    city: 0,
    gender: '1',
    isSelected: false
  });
}
givenStudentData(_givenName: any, _givenCity: any, _givenGender: any){
  console.log(_givenCity, _givenGender, _givenName);
}
}
