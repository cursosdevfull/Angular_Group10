import { Component } from '@angular/core';
import { BookItem } from './book/domain/book';
import { Title } from './book/domain/vo/title';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'backoffice';
  books: BookItem[] = [
    new BookItem(new Title('The Lord of the Rings'), 'J.R.R. Tolkien'),
    new BookItem(
      new Title('The Hobbit: Desolation of Smaug'),
      'J.R.R. Tolkien'
    ),
    new BookItem(new Title('The Catcher in the Rye'), 'J.D. Salinger'),
    new BookItem(new Title('The Grapes of Wrath'), 'John Steinbeck'),
    /*  { title: 'El Perfume', author: 'Patrick Suskind' },
    { title: 'La Ciudad y Los Perros', author: 'Mario Vargas Llosa' },
    {
      title: 'El Amor en los tiempos del Cólera',
      author: 'Gabriel García Márquez',
    },
    { title: 'El Caballero Carmelo', author: 'Abraham Valdelomar' }, */
  ];
  /*   title = 'El Perfume';
  author = 'Patrick Suskind';
  title2 = 'La Ciudad y Los Perros';
  author2 = 'Mario Vargas Llosa'; */

  /*  getTitle() {
    return this.title;
  } */

  deleteBook(book: BookItem) {
    alert('Book deleted: ' + book.title.value);
  }
}
