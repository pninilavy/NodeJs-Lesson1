const {
  printBooks,
  borrowBook,
  initBooks,
  writeBooksToExcel,
  readBooksToExcel,
  getBookById,
} = require("./Books");
const {
  printUsers,
  borrowUser,
  initUsers,
  writeUsersToExcel,
  readUsersToExcel,
  getUserById
} = require("./Users");



// writeBooksToExcel();
// writeUsersToExcel();
const args = process.argv.slice(2);
getBookById(args[0]);
getUserById(args[1]);

  // initBooks();
  // try {
  //     initUser()
  // } catch (error) {
  //     console.log(error);
  // }
  // console.log("Books:");
  // printBooks();
  // console.log("\nRegistered Users:");
  // printUsers();
  // try {
  //   const args = process.argv.slice(2);
  //   const book = borrowBook(Number(args[0]));
  //   const user = await borrowUser(Number(args[1]));

  //   console.log("\nBorrow Request:");
  //   console.log(
  //     `User: ${user.name}, Favorite Type: ${user.favoriteType}, Already Borrowed: ${user.borrowed}`
  //   );
  //   console.log(
  //     `Book: ${book.name}, Type: ${book.type}, Borrowed: ${book.borrowed}`
  //   );

  //   if (book.borrowed) {
  //     console.log("The book is already borrowed.");
  //   } else if (user.borrowed) {
  //     console.log("The user already has a borrowed book.");
  //   } else if (book.type !== user.favoriteType) {
  //     console.log("The book type does not match the user's preference.");
  //   } else {
  //     console.log("The book is successfully borrowed!");
  //     book.borrowed = true;
  //     user.borrowed = true;
  //   }
  // } catch (error) {
  //   console.error("Error:", error.message);
  // }

  // console.log("\nTesting invalid inputs:");
  // try {
  //   borrowBook(999);
  // } catch (error) {
  //   console.error(error.message);
  // }

  // try {
  //   borrowUser(999);
  // } catch (error) {
  //   console.error(error.message);
  // }
