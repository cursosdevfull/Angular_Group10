import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookItem } from './domain/book';
import { Title } from './domain/vo/title';

@Component({
  selector: 'amb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input('titleBook') title!: string;
  @Input('authorBook') author!: string;

  @Output() onDeleteBook = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delete() {
    console.log('method deleted called from BookComponent');
    const title = new Title(this.title);
    this.onDeleteBook.emit(new BookItem(title, this.author));
  }
}
