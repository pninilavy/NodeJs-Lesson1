const books = [
  { code: 1, name: "aaa", type: "a", borrowed: false },
  { code: 2, name: "bbb", type: "b", borrowed: true },
  { code: 3, name: "ccc", type: "c", borrowed: false },
];
const fs = require("fs");

class Book {
  constructor(code, name, type, borrowed) {
    this.code = code;
    this.name = name;
    this.type = type;
    this.borrowed = borrowed;
  }
}

const printBooks = () => {
  const myBooks = JSON.parse(fs.readFileSync("books.json", "utf-8"));
  myBooks.forEach((book) => {
    console.log(
      `Code: ${book.code}, Name: ${book.name}, Type: ${book.type}, Borrowed: ${book.borrowed}`
    );
  });
};

const borrowBook = (code) => {
  const myBooks = JSON.parse(fs.readFileSync("books.json", "utf-8"));
  let book = myBooks.find((b) => b.code === code);
  if (!book) throw new Error("The book code is not valid");
  return book;
};

const initBooks = () => {
 if (!fs.existsSync("books.json")) {
   
    const data = JSON.stringify(books, null, 2);
    fs.writeFileSync("books.json", data, "utf-8");}
    
};

module.exports = { Book, printBooks, borrowBook, initBooks };
