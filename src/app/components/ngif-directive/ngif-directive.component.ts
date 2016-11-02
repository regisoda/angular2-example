import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.css']
})
export class NgifDirectiveComponent implements OnInit {

  b : boolean = true;

  constructor() { }
 
  ngOnInit() {
  }

  onClickBtn(){
    this.b = !this.b;
  }
}
