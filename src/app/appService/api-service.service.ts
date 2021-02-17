import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpclient:HttpClient) { }

   getData(){
     return this.httpclient.get("https://jsonplaceholder.typicode.com/posts");
   }
 }
