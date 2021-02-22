import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  constructor() { }
  @Input() options: any = [];
  @Input() formName:any="None";
  @Input() selected = "Domain"
  ngOnInit(): void {
  }

}
