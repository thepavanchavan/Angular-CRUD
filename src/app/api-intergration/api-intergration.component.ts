import { Component, OnInit } from '@angular/core';
import { ApiServiceService} from 'src/app/appService/api-service.service'

@Component({
  selector: 'app-api-intergration',
  templateUrl: './api-intergration.component.html',
  styleUrls: ['./api-intergration.component.css']
})
export class ApiIntergrationComponent implements OnInit {

  constructor(private apiService : ApiServiceService) { }

  post:any;

  ngOnInit() {
  //   this.apiService.getComments().subscribe(data=>{
  //     this.post = data;
  //   })
  }

}
