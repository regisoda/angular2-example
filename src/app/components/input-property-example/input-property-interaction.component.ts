import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-property-example',
  template: `
    <p>Name: <b>{{nameStr}}</b> - Last Name: <b>{{lastNameStr}}</b></p>
  `,
   inputs: ['lastNameStr:lastName']
})
export class InputPropertyInteractionComponent {

  @Input('name') nameStr: string = '';
  lastNameStr: string = '';

  constructor() { }

}
