import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-param-routing',
  templateUrl: './param-routing.component.html',
  styleUrls: ['./param-routing.component.css']
})
export class ParamRoutingComponent implements OnInit {
  id: any;
  name:any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
     this.route.url.subscribe(url =>{
      this.id = this.route.snapshot.params.id;
      this.name = this.route.snapshot.params.name;
     console.log(this.id);
     console.log(this.name);
  });
  }

}
