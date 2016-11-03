import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-directive',
  templateUrl: './ngstyle-directive.component.html',
  styleUrls: ['./ngstyle-directive.component.css']
})
export class NgstyleDirectiveComponent implements OnInit {

  b: boolean = false;
  fontSize: number = 12;

  constructor() { }

  ngOnInit() {
  }

 onClickBtn(){
   this.b = !this.b;
 }
 
}
