import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../appService/student-data.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {


  constructor(public service:StudentDataService) { }

  ngOnInit(){
  }
studentCity = [
  {id:1, value:'Pune'},
  {id:2, value:'Delhi'},
  {id:3, value:'Mumbai'},
  {id:4, value:'Hydrabad'}
];

onClear() {
  this.service.form.reset();
  this.service.initializeFormGroup();
}

onSubmit(data: { name: any; city: any; gender: any; }){
  this.service.givenStudentData(data.name, data.city, data.gender)
}
}
