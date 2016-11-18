import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html'
})
export class NgifDirectiveComponent {

  b: boolean = true;

  constructor() {
  }

  onClickBtn() {
    this.b = !this.b;
  }
}
