import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property-interaction',
  template: `
    <div>
      <button type="button" class="btn btn-primary" (click)="dec()">-</button>
      <input type="text" [value]="vlr"  readonly>
      <button type="button" class="btn btn-primary" (click)="inc()">+</button>
    </div>
  `
})
export class OutputPropertyInteractionComponent {

  @Input('initialValue') vlr: number = 0;
  @Output('onChangeValue') changeVlr = new EventEmitter();

  constructor() { }

  dec() {
    this.vlr--;
    this.changeVlr.emit({ value: this.vlr });
  }

  inc() {
    this.vlr++;
    this.changeVlr.emit({ value: this.vlr });
  }
}
