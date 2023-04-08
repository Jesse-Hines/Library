let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const bookContainer = document.getElementById("book-container");
  bookContainer.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "Author: " + book.author;
    const bookPages = document.createElement("p");
    bookPages.textContent = "Number of pages: " + book.pages;
    const bookRead = document.createElement("p");
    bookRead.textContent = book
    if (book.read) {
        bookRead.textContent = "Read ✓";
      } else {
        bookRead.textContent = "Not read ❌";
      }
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        removeBook(index);
      });
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.appendChild(bookRead);
      bookCard.appendChild(removeBtn);
      bookContainer.appendChild(bookCard);
    });
  }
  
  function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
  
  const addBookBtn = document.getElementById("add-book-btn");
  // The popup form for some reason kept displaying automatically, and modifying the html and CSS didn't work, but this did https://stackoverflow.com/questions/11226489/show-hide-forms-using-buttons-and-javascript
  
  const addBookForm = document.getElementById("book-form").style.display="none";
  addBookBtn.addEventListener("click", () => {
    document.getElementById("book-form").style.display="flex";
    document.getElementById("asd").style.display="block";
  });
  
  const submitBtn = document.querySelector("form button");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    document.getElementById("book-form").style.display="none";
    document.querySelector("form").reset();
  });

  displayBooks();
