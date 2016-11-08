import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css']
})
export class NgforDirectiveComponent implements OnInit {

  nomes : string[] = ["João", "Maria", "Pedro", "Antonio"];
  idades: number[] = [];

  constructor() { }

  ngOnInit() {
    for (let i=0; i<this.nomes.length; i++){
       this.idades[i] = (i+1) * 20;
    }
  }


}
