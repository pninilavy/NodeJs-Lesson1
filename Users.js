const users = [
  { id: 101, name: "aaa", favoriteType: "a", borrowed: false },
  { id: 102, name: "bbb", favoriteType: "b", borrowed: true },
  { id: 103, name: "ccc", favoriteType: "c", borrowed: false },
];
const xlsx = require("xlsx");

const fs = require("fs");
class User {
  constructor(id, name, favoriteType, borrowed) {
    this.id = id;
    this.name = name;
    this.favoriteType = favoriteType;
    this.borrowed = borrowed;
  }
}

const readUsers = () => {
  return new Promise((res, rej) => {
    fs.readFile("users.json", "utf-8", (err, data) => {
      if (err) {
        rej("Error reading users file: " + err);
      } else {
        res(JSON.parse(data));
      }
    });
  });
};
const printUsers = async () => {
  fs.readFile("user.json", "utf8", (err, data) => {
    if (err) {
      console.log("The error is:", err);
      return;
    }
    const users = JSON.parse(data);
    users.forEach((user) => {
      console.log(
        `ID: ${user.id}, Name: ${user.name}, Favorite Type: ${user.favoriteType}, Borrowed: ${user.borrowed}`
      );
    });
  });
};

const borrowUser = async (id) => {
  try {
    const myUsers = await readUsers();
    let user = myUsers.find((u) => u.id === id);
    if (!user) throw new Error("The user ID is not valid");
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
  }
};

const initUsers = async () => {
  try {
    const jsonData = JSON.stringify(arrUser, null, 2);
    await fs.promises.writeFile("user.json", jsonData, "utf8");
  } catch (err) {
    console.log("The error is:", err);
  }
};
const writeUsersToExcel=()=>{
const worksheet = xlsx.utils.json_to_sheet(users);
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "users");
const filePath = "Users.xlsx";
xlsx.writeFile(workbook, filePath);
}
const readUsersToExcel=()=>{
  const filePath = "Users.xlsx";
  const workbook = xlsx.readFile(filePath);

  const sheetName = workbook.SheetNames[0]; 
  const worksheet = workbook.Sheets[sheetName];

  return xlsx.utils.sheet_to_json(worksheet);
}
const getUserById=(id)=>{
  const myUsers = readUsersToExcel();
  const user= myUsers.find((user) => user.id == id);
  console.log(user)
  return user;
}

module.exports = {
  User,
  printUsers,
  borrowUser,
  initUsers,
  writeUsersToExcel,
  readUsersToExcel,
  getUserById,
};
