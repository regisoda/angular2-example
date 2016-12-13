import { Component, OnInit } from '@angular/core';

import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html'
})
export class PipeExampleComponent implements OnInit {

  books: Array<BookModel> = [];

  constructor() {
    this.books.push({ name: 'master angular 2', rating: 4.8768, pages: 345, price: 17.89, releaseDate: new Date(2016, 7, 23) });
    this.books.push({ name: 'ninja C#', rating: 3.981, pages: 210, price: 11.10, releaseDate: new Date(2014, 9, 1) });
    this.books.push({ name: 'microsoft azure cloud service', rating: 4.1347, pages: 189, price: 8.99, releaseDate: new Date(2015, 8, 18) });
  }

  ngOnInit() {
  }

}
