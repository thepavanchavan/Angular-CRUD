import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpclient:HttpClient) { }

   getTodos(): Observable<any>{
     return this.httpclient.get<any>("https://jsonplaceholder.typicode.com/todos");
   }

  //  getComments(): Observable<any>{
  //   return this.httpclient.get<any>("https://jsonplaceholder.typicode.com/comments");
  // }
 }
