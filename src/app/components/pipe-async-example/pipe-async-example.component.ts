import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-pipe-async-example',
  templateUrl: './pipe-async-example.component.html'
})
export class PipeAsyncExampleComponent implements OnInit {

  valueAsync1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Async 1 using promise'), 2000);
  });

  valueAsync2 = Observable.interval(2000)
    .map(valor => 'Async 2 using observable');

  constructor() { }

  ngOnInit() {
  }

}
