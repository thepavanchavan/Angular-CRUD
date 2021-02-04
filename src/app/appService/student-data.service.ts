import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  
  information: any = [] //Object

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    city: new FormControl(0),
    gender: new FormControl('Male'),
    isSelected: new FormControl(false)
  });

initializeFormGroup() {
  this.form.setValue({
    $key: null,
    name: '',
    city: 0,
    gender: 'Male',
    isSelected: false
  });
}
}
