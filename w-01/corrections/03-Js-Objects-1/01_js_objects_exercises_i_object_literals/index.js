// You can work here or download the template!
// 1. Create an object called book using object literal syntax.
const book = {
  title: 'LotR',
  author: 'J.R.R. Tolkien',
  pages: 3000,
  isRead: true,
};

book.summary = function () {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read:${this.isRead ? "Yes" : "No"}`;
};


// 2. The book object should have the following properties:
// 2.1. title: a string representing the title of the book.
// 2.2. author: a string representing the author of the book.
// 2.3. pages: a number representing the total pages in the book.
// 2.4. isRead: a boolean indicating if the book has been read or not.

// 3. Add a method named summary to the book object. This method should return a string summarizing the book details in the format:
// 3.1. "Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]".
console.log(book.summary())