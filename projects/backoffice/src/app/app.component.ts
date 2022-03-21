import { Component } from '@angular/core';
import { BookItem } from './book/domain/book';
import { Title } from './book/domain/vo/title';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openSideNav = true;
  currentDate = new Date();

  /*  title = 'backoffice';
  books: BookItem[] = [
    new BookItem(new Title('The Lord of the Rings'), 'J.R.R. Tolkien'),
    new BookItem(
      new Title('The Hobbit: Desolation of Smaug'),
      'J.R.R. Tolkien'
    ),
    new BookItem(new Title('The Catcher in the Rye'), 'J.D. Salinger'),
    new BookItem(new Title('The Grapes of Wrath'), 'John Steinbeck'),
  ];*/

  //deleteBook(idBook: number /* book: BookItem */) {
  // alert('Book deleted: ' + book.title.value);
  //this.books.splice(idBook, 1);
  //}
}
