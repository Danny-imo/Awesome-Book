import { Book } from './book.js';

export class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    this.displayBooks();
    this.saveBooksToLocalStorage();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.displayBooks();
    this.saveBooksToLocalStorage();
  }

  displayBooks() {
    const booksDiv = document.querySelector('.books');
    booksDiv.innerHTML = '';

    this.books.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');

      const titleElement = document.createElement('p');
      titleElement.classList.add('p-title');
      titleElement.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;

      const removeDiv = document.createElement('div');
      removeDiv.classList.add('remove-div');

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => this.removeBook(index));

      removeDiv.appendChild(removeButton);

      bookDiv.appendChild(titleElement);
      bookDiv.appendChild(removeDiv);

      booksDiv.appendChild(bookDiv);
    });
  }

  saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
