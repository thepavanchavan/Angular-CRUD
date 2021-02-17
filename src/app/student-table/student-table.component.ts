import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentDataService } from '../appService/student-data.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit {
  constructor(public service: StudentDataService) {}
  ngOnInit() {}
  searchText1!: string;
  searchText2!: string;
  searchText3!: string;

  @Input() tableHead:any[]=['Name','City','Gender'];
  way:any = 'searchText1'
  @Input() info: any;
  @Output() deleteInfo = new EventEmitter<any>();
  @Output() editInfo = new EventEmitter<any>();

   deleteRow(data: any){ 
        this.deleteInfo.emit(data);       
 }
 editRow(data: any){
   this.editInfo.emit(data);
 }
 onKey(value: any){
   console.log(value);
   this.info = this.info.filter(value == this.info.name)[0];
 }
}
