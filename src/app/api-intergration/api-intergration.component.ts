import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService} from 'src/app/appService/api-service.service'
@Component({
  selector: 'app-api-intergration',
  templateUrl: './api-intergration.component.html',
  styleUrls: ['./api-intergration.component.css']
})
export class ApiIntergrationComponent implements OnInit {

  constructor(private apiService : ApiServiceService) { }

  public post:any;
  public comments:any;

  postHead:any=["id", "Completed", "Title"]
  commentHead:any=["id", "name", "email","body" ];

  ngOnInit() {
     this.apiService.getTodos().subscribe(data=> this.post = data)

    //  this,this.apiService.getComments().subscribe(data=>this.comments=data);
  }

}
