export class Title {
  private title: string;

  constructor(title: string) {
    this.validateTitle(title);
    this.title = title;
  }

  validateTitle(title: string) {
    if (title.length < 15) {
      throw new Error('Title must be at least 15 characters long');
    }
  }

  get value() {
    return this.title;
  }
}
