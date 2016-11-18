import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://angular.io/docs/ts/latest/guide/template-syntax.html';
  urlImg: string = 'http://lorempixel.com/g/300/150/nature/';
  nome: string = 'Maria José';

  explanation1: string = '<div> {{variable}} or {{1+1}} or {{getA()}} </div>';

  explanation2: string = `
    <span [style.fontWeight]="'bold'">Font Bold</span>
  `;

  constructor() { }

  ngOnInit() {
  }

  getNumber() {
    return 10;
  }
}
