import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostlistener-hostbinding-example',
  templateUrl: './hostlistener-hostbinding-example.component.html'
})
export class HostlistenerHostbindingExampleComponent implements OnInit {

  explanation: string = `
    <p hostlistenerHostbindingDirective> 
      This tag P uses a custom directive (Hostlistener / Hostbinding) that sets a yellow background color when mouse over/leave. 
    </p>
  `;

  constructor() { }

  ngOnInit() {
  }

}
