import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-directive',
  templateUrl: './ngclass-directive.component.html',
  styleUrls: ['./ngclass-directive.component.css']
})
export class NgclassDirectiveComponent implements OnInit {

  meuFavorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }

}
