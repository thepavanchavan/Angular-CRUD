import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  information: any = [
    { id: 1, name: 'John', city: 'Pune', gender: 'Male' },
    { id: 2, name: 'Julie', city: 'Delhi',  gender: 'Female' },
    { id: 3, name: 'Vivian', city: 'Mumbai', gender: 'Male' },
  ]; //Object

  constructor() {}
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    city: new FormControl(0),
    gender: new FormControl('Male'),
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
