import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "longnguyen2431@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    phone: "0345638522",
    isAdmin: true,
  },
  {
    name: "user",
    email: "user@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    phone: "0345638555",
    isAdmin: false,
  },
];

export default users;
