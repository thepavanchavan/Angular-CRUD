import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-param-routing',
  templateUrl: './param-routing.component.html',
  styleUrls: ['./param-routing.component.css']
})
export class ParamRoutingComponent implements OnInit {
  id!:string
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.url.subscribe(url =>{
      this.id = this.route.snapshot.params.id;
     console.log(this.id)
  });
  }

}
