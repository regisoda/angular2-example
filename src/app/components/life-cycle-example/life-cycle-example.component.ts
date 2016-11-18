import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-example',
  templateUrl: './life-cycle-example.component.html'
})
export class LifeCycleExampleComponent {

  vlr = 15;
  remove = false;

  url : string = "https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html";

  constructor() { }
}
