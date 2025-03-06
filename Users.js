const users = [
  { id: 101, name: "aaa", favoriteType: "a", borrowed: false },
  { id: 102, name: "bbb", favoriteType: "b", borrowed: true },
  { id: 103, name: "ccc", favoriteType: "c", borrowed: false },
];

class User {
  constructor(id, name, favoriteType, borrowed) {
    this.id = id;
    this.name = name;
    this.favoriteType = favoriteType;
    this.borrowed = borrowed;
  }
}

const printUsers = () => {
  users.forEach((user) => {
    console.log(
      `ID: ${user.id}, Name: ${user.name}, Favorite Type: ${user.favoriteType}, Borrowed: ${user.borrowed}`
    );
  });
};

const borrowUser = (id) => {
  let user = users.find((u) => u.id === id);
  if (!user) throw new Error("The user ID is not valid");
  return user;
};

module.exports = { User, printUsers, borrowUser };
