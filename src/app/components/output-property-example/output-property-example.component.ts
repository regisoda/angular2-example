import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-property-example',
  templateUrl: './output-property-example.component.html'
})
export class OutputPropertyExampleComponent implements OnInit {

  initialInputValue: number = 50;
  inputValue: number = this.initialInputValue;

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    // console.log(event.value);
    this.inputValue = event.value;
  }
}
