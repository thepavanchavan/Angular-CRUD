import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService} from 'src/app/appService/api-service.service'
@Component({
  selector: 'app-api-intergration',
  templateUrl: './api-intergration.component.html',
  styleUrls: ['./api-intergration.component.css']
})
export class ApiIntergrationComponent implements OnInit {
  

  constructor(private apiService : ApiServiceService) { }

   post:any;
   comments:any;
   finalPost:any;
   finalComment: any;
   flag2:boolean=false;

  postHead:any=["Completed", "Title"]
  commentHead:any=["Name", "Email","Body" ];

  ngOnInit() {
     this.apiService.getTodos().subscribe(data=> {
       this.post = data
       console.log(this.post);
       const newArrayTodo = this.post.map((item: any)=>{
         return{
          //  id:item.id,
           city:item.completed,
           gender:item.title
         }
       });
       this.finalPost = newArrayTodo;
       console.log(newArrayTodo)
      });
     this,this.apiService.getComments().subscribe(data=>{
       this.comments=data;
       const newArrayComment = this.comments.map((item:any)=>{
         return{
           name:item.name,
           city:item.email,
           gender:item.body
         }
       });
       this.finalComment = newArrayComment;
       console.log(newArrayComment)
      });
  }

}
