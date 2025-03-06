const books = [
  { code: 1, name: "aaa", type: "a", borrowed: false },
  { code: 2, name: "bbb", type: "b", borrowed: true },
  { code: 3, name: "ccc", type: "c", borrowed: false },
];

class Book {
  constructor(code, name, type, borrowed) {
    this.code = code;
    this.name = name;
    this.type = type;
    this.borrowed = borrowed;
  }
}

const printBooks = () => {
  books.forEach((book) => {
    console.log(
      `Code: ${book.code}, Name: ${book.name}, Type: ${book.type}, Borrowed: ${book.borrowed}`
    );
  });
};

const borrowBook = (code) => {
  let book = books.find((b) => b.code === code);
  if (!book) throw new Error("The book code is not valid");
  return book;
};

module.exports = { Book, printBooks, borrowBook };
