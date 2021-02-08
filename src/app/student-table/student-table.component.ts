import { Component, Input, OnInit } from '@angular/core';
import { StudentDataService } from '../appService/student-data.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit {
  constructor(public service: StudentDataService) {}
  ngOnInit() {}
  searchText: any;
  @Input() info: any;

  deleteRow(data: any){
    //for(var i=0;i<this.info.length();i++){
      //if(this.info[i].id = ){
        this.info.splice(data.id,1); 
     // }
   // }
           
}
}
