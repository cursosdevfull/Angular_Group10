import { BookItem } from './domain/book';
import { Title } from './domain/vo/title';

describe('BookComponent', () => {
  it('Validate title', () => {
    const title = new Title('The Hobbit');
    const author = 'J.R.R. Tolkien';

    try {
      const book = new BookItem(title, author);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
