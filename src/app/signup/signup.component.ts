import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public email:any;
  public username:any;
  public password:any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(data: {email:any;username:any;password:any}){
       localStorage.setItem('email',data.email);
       localStorage.setItem('username',data.username);
       localStorage.setItem('password',data.password);
       this.router.navigate(['/login']);
}
}
