import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property-interaction',
  template: `
    <p>Name: <b>{{nameStr}}</b> - Last Name: <b>{{lastNameStr}}</b></p>
  `
  // , inputs: ['lastNameStr:lastName']  -- (A) OUTRO METODO
})
export class InputPropertyInteractionComponent {

  // @Input('name') nameStr: string = '';  -- EH POSSIVEL USAR OUTRA NOME DE VARIAVEL
  @Input() nameStr: string = '';

  // lastNameStr: string = ''; -- (A) OUTRO METODO
  @Input() lastNameStr: string = '';

  constructor() { }

}
