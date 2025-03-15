const users = [
  { id: 101, name: "aaa", favoriteType: "a", borrowed: false },
  { id: 102, name: "bbb", favoriteType: "b", borrowed: true },
  { id: 103, name: "ccc", favoriteType: "c", borrowed: false },
];
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
  try {
    const users = await readUsers(); 
    users.forEach((user) => {
      console.log(
        `ID: ${user.id}, Name: ${user.name}, Favorite Type: ${user.favoriteType}, Borrowed: ${user.borrowed}`
      );
    });
  } catch (error) {
    console.error("Error printing users:", error);
  }
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

const initUsers = () => {
 fs.exists("users.json", (exists) => {
  if (!exists) {
  
    const data = JSON.stringify(users, null, 2);
    fs.writeFile("users.json", data, "utf-8", () => {});}
 })}
    



module.exports = { User, printUsers, borrowUser ,initUsers};
