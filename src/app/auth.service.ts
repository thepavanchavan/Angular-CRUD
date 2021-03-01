import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

loggedIn(){
  return !!sessionStorage.getItem('isLogin')
}
}
