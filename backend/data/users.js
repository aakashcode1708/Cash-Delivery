import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin",
    email: "admin@cashdelivery.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Aakash",
    email: "aakash@cashdelivery.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Shivani",
    email: "shivani@cashdelivery.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
