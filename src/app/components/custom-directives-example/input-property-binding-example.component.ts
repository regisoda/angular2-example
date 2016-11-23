import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property-binding-example',
  templateUrl: './input-property-binding-example.component.html'
})
export class InputPropertyBindingExampleComponent implements OnInit {

  explanation: string = `
    <p [highlight]="'red'" [defaultColor]="'gray'"> 
      This tag P uses a custom directive with input property binding that sets a custom background color when mouse over/leave. 
    </p>
  `;

  constructor() { }

  ngOnInit() {
  }

}
