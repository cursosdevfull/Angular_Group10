import { Title } from './vo/title';
/* interface Book {
  title: string;
  author: string;
}
 */
//type Books = Book[];

export class BookItem {
  title: Title;
  author: string;

  constructor(title: Title, author: string) {
    this.title = title;
    this.author = author;
  }
}
