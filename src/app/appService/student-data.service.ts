import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  information: any = [
    { id: 1, name: 'John', city: 'Pune', gender: 'Male' },
    { id: 2, name: 'Julie', city: 'Delhi',  gender: 'Female' },
    { id: 3, name: 'Vivian', city: 'Mumbai', gender: 'Male' },
  ]; //Object

  teacher: any = [
    { id: 1, name: 'Prof. Sharma', city: 'Mumbai', gender: 'Male' },
    { id: 2, name: 'Prof. Jadhav', city: 'Delhi', gender: 'Male' },
    { id: 3, name: 'Prof. Varma', city: 'Pune', gender: 'Male' },
  ]

  constructor() {}
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    city: new FormControl(0, Validators.required),
    gender: new FormControl('Male', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      city: 0,
      gender: '',
    });
  }
}
