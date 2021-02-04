import { Component, Input, OnInit } from '@angular/core';
import { StudentDataService } from '../appService/student-data.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  constructor(public service:StudentDataService) { }
  ngOnInit() {
  }
  @Input() info: any;  
}