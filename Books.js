const books = [
  { code: 1, name: "aaa", type: "a", borrowed: false },
  { code: 2, name: "bbb", type: "b", borrowed: true },
  { code: 3, name: "ccc", type: "c", borrowed: false },
];
const xlsx = require("xlsx");
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
const writeBooksToExcel=()=>{
const worksheet = xlsx.utils.json_to_sheet(books);
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "books");
const filePath = "Books.xlsx";
xlsx.writeFile(workbook, filePath);
}
const readBooksToExcel=()=>{
  const filePath = "Books.xlsx";
  const workbook = xlsx.readFile(filePath);

  const sheetName = workbook.SheetNames[0]; 
  const worksheet = workbook.Sheets[sheetName];

  return xlsx.utils.sheet_to_json(worksheet);
}
const getBookById=(id)=>{
  const myBooks = readBooksToExcel();
  const book=myBooks.find((book) => book.code == id);
  console.log(book);
  return book;
}

module.exports = {
  Book,
  printBooks,
  borrowBook,
  initBooks,
  writeBooksToExcel,
  readBooksToExcel,
  getBookById,
};
