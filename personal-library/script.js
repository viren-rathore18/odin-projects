const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  renderLibrary();
}

function renderLibrary() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = ''; // Clear existing

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
    `;
    libraryDiv.appendChild(bookDiv);
  });
}

document.getElementById('addBookBtn').addEventListener('click', () => {
  const title = prompt('Book title?');
  const author = prompt('Author?');
  const pages = prompt('Number of pages?');
  const read = confirm('Have you read it?');

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
});
