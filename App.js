document.addEventListener('DOMContentLoaded', function () {
    let booksCollection = JSON.parse(localStorage.getItem('books')) || [];
  
    function addBook() {
      const titleInput = document.querySelector('.title');
      const authorInput = document.querySelector('.author');
  
      const title = titleInput.value;
      const author = authorInput.value;
  
      if (title && author) {
        const book = { title, author };
        booksCollection.push(book);
        displayBooks();
  
        titleInput.value = '';
        authorInput.value = '';
  
        saveBooksToLocalStorage();
      }
    }
  
    function removeBook(index) {
      booksCollection = booksCollection.filter((book, i) => i !== index);
      displayBooks();
  
      saveBooksToLocalStorage();
    }
  
    function displayBooks() {
      const booksDiv = document.querySelector('.books');
      booksDiv.innerHTML = '';
  
      booksCollection.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = `Title: ${book.title}`;
  
        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${book.author}`;
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeBook(index));
  
        bookDiv.appendChild(titleElement);
        bookDiv.appendChild(authorElement);
        bookDiv.appendChild(removeButton);
  
        booksDiv.appendChild(bookDiv);
      });
    }
  
    const addButton = document.querySelector('.btn');
    addButton.addEventListener('click', (event) => {
      event.preventDefault();
      addBook();
    });
  
    function saveBooksToLocalStorage() {
      localStorage.setItem('books', JSON.stringify(booksCollection));
    }
  
    displayBooks();
  });
  