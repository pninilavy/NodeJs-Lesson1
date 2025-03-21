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
  try {
    const data = fs.readFileSync("books.json", "utf8");
    const books = JSON.parse(data);
    for (const index in books) {
      const b = books[index];
      console.log(`${b.code} ${b.name} ${b.type} ${b.taked}\n`);
    }
  } catch (err) {
    console.log("the error is: ", err);
  }
};

const borrowBook = (code) => {
 try {
   const data = fs.readFileSync("books.json", "utf8");
   const books = JSON.parse(data);
   const book = books.find((b) => b.code === c);
   if (book) {
     return book;
   } else {
     throw new Error("This code doesn't exist");
   }
 } catch (err) {
   console.log("The error is:", err);
 }
};

const initBooks = () => {
  try {
    const jsonData = JSON.stringify(arrBook, null, 2);
    fs.writeFileSync("books.json", jsonData, "utf8");
  } catch (err) {
    console.log("the error is: ", err);
  }
    
};

module.exports = { Book, printBooks, borrowBook, initBooks };
