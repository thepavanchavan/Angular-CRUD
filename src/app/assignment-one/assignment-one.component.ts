import { Component, OnInit } from '@angular/core';
import {StudentDataService} from "src/app/appService/student-data.service"

@Component({
  selector: 'app-assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.css']
})
export class AssignmentOneComponent implements OnInit {
  teacher:any
  constructor(public service: StudentDataService) { }

  ngOnInit(){
    this.teacher = this.service.teacher
  }

}
