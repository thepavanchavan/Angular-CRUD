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
  isLogin:any= sessionStorage.getItem('isLogin');
  onSubmit(data: {username:any;password:any}){
   if(data.username == localStorage.getItem('username') && data.password == localStorage.getItem('password')){
      this.router.navigate(['Home/Assignment-1']);
      console.log(data.username)
      console.log(data.password)
      sessionStorage.setItem('isLogin','true');
      console.log(this.isLogin)
    }
    else{
      alert("username or password is incorrect");
    }
  }

}
