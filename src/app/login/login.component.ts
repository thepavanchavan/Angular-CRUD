import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public username:any;
public password:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data: {username:any;password:any}){
   if(data.username == "admin" && data.password == "admin"){
      this.router.navigate(['Home/Assignment-1']);
      console.log(data.username)
      console.log(data.password)
    }
  }

}
