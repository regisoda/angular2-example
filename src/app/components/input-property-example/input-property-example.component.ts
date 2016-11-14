import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property-example',
  templateUrl: './input-property-example.component.html'
})
export class InputPropertyExampleComponent implements OnInit {

  personName : string = "Rodrigo";
  personLastName : string = "Santos";

  constructor() { }

  ngOnInit() {
  }

}
