import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directives-example',
  templateUrl: './custom-directives-example.component.html'
})
export class CustomDirectivesExampleComponent {

  explanation: string = `
    <p customAttribute> This tag P uses a custom attribute directive that sets a yellow background color. </p>
  `;
  constructor() { }


}
