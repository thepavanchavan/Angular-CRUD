import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
studentCity = [
  {id:1, value:'Pune'},
  {id:2, value:'Delhi'},
  {id:3, value:'Mumbai'},
  {id:4, value:'Hydrabad'}
];
}
