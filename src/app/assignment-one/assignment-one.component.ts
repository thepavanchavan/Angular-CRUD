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
  subjects:any=["IT","CSE","Civil","Mechanical","Electrical"];
  names:any=["Pavan","John","Viavian","Jagjeet","Rakesh"];
  cities:any=["Pune","Mumbai","Nashik","Delhi","Solapur"];
  defaultSubject:any = "IT";
  defaultName:any = "Pavan";
  defaultCity:any = "Pune";
  constructor(public service: StudentDataService) { }

  ngOnInit(){
    this.teacher = this.service.teacher;
  }
}
