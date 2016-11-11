import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "https://angular.io/docs/ts/latest/guide/template-syntax.html";
  urlImg: string = "http://lorempixel.com/g/300/150/nature/";
  nome: string = "Maria José";
  explanation: string = '<p>One-way from data source to view target:</p><ul><li><b>{{expression}}</b></li><li><b>[target] ="expression"</li></b></ul>'; 


  constructor() { }

  ngOnInit() {
  }

  getNumber() {
    return 10;
  }
}
