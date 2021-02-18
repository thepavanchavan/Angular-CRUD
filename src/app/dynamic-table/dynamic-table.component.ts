import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  constructor() { }
@Input() userHead:any=["id", "name", "city","gender"]
@Input() info:any=[{id:1,name:"john",city:"Pune",gender:"Male"}]
  ngOnInit() {}

}
