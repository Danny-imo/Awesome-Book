import { BookCollection } from './modules/bookCollection.js';

document.addEventListener('DOMContentLoaded', () => {
  const bookCollection = new BookCollection();

  const addButton = document.querySelector('.btn');
  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const titleInput = document.querySelector('.title');
    const authorInput = document.querySelector('.author');
    const title = titleInput.value;
    const author = authorInput.value;
    if (title && author) {
      bookCollection.addBook(title, author);
      titleInput.value = '';
      authorInput.value = '';
    }
  });

  bookCollection.displayBooks();

  const navLinks = document.querySelectorAll('.nav-link');
  const contentSections = document.querySelectorAll('.content-section');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetSection = link.dataset.section;

      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
      });
      link.classList.add('active');

      contentSections.forEach((section) => {
        section.style.display = 'none';
      });

      const targetContentSection = document.getElementById(targetSection);
      targetContentSection.style.display = 'block';
    });
  });

  const getCurrentDate = () => luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_FULL);
  const currentDateElement = document.getElementById('current-date');
  const currentDate = getCurrentDate();
  currentDateElement.textContent = currentDate;
});
