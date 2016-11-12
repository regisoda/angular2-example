import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class EventBindingComponent implements OnInit {

  current: string = '';
  saved: string = '';

  explanation: string = '<button (click)="onClick()">Click me!</button>';


  isMouseOver = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('Botão clicado!');
  }

  onKeyup(event: KeyboardEvent) {
    console.log(event);
    this.current = (<HTMLInputElement>event.target).value;
  }

  onSave(valor: string) {
    this.saved = valor;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }

}
