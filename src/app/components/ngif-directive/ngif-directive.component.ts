import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngif-directive',
  templateUrl: './ngif-directive.component.html'
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
