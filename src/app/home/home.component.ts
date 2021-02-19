import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  class1:any="button";
  class2:any="button";
  class3:any="button";
  goAssignOne() {
    this.router.navigate(['Home/Assignment-1']);
    this.class1 = "router-link-active"
    this.class2 = "button"
    this.class3 = "button"
  }
  goAssignTwo() {
    this.router.navigate(['Home/Assignment-2']);
    this.class2 = "router-link-active"
    this.class1 = "button"
    this.class3 = "button"
  }
  goAssignThree(id:any,name:any) {
    this.router.navigate(['Home/Assignment-3',id,name]);
    this.class3 = "router-link-active"
    this.class1 = "button"
    this.class2 = "button"
  }
  ngOnInit(){
  }
}