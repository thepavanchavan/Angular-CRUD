import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {StudentDataService} from "src/app/appService/student-data.service"

@Component({
  selector: 'app-assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.css']
})
export class AssignmentOneComponent implements OnInit {
  teacher:any
  subjects:any=[{value:"IT"},{value:"CSE"},{value:"Civil"},{value:"Mechanical"},{value:"Electrical"}];
  names:any=[{value:"Pavan"},{value:"Ram"},{value:"John"},{value:"Jeetu"},{value:"Naveed"}];
  cities:any=[{value:"Pune"},{value:"Mumbai"},{value:"Delhi"},{value:"Hydrabad"},{value:"Benguluru"}];
  defaultSubject:any = "IT";
  defaultName:any = "Pavan";
  defaultCity:any = "Pune";
  constructor(public service: StudentDataService) { }

  ngOnInit(){
    this.teacher = this.service.teacher;
  }
}
