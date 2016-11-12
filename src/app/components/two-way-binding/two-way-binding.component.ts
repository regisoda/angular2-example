import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  name: string = 'abc';

  person = { name: '', age: 38 };

  explanation: string = '<input type="text" [(ngModel)]="person.name"/>';    

  constructor() { }

  ngOnInit() {
  }

}
