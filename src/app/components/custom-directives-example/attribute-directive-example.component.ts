import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives-example',
  templateUrl: './attribute-directive-example.component.html'
})
export class AttributeDirectiveExampleComponent {

  explanation: string = `
    <p appCustomAttribute> This tag P uses a custom attribute directive that sets a yellow background color. </p>
  `;

  constructor() { }
}
