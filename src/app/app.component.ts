import { Component, OnInit } from '@angular/core';
import {StudentDataService} from "src/app/appService/student-data.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  teacher:any
  constructor(public service: StudentDataService) {}
  ngOnInit() {
     this.teacher = this.service.teacher
  }
  title = 'angular-crud';
}
