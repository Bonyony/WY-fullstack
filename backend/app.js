const express = require("express");
// express app
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

// User auth below should be broken into middleware

// this should be a MySQL database, the array is for testing
const users = [];

// GET user(s)
app.get("/users", (req, res) => {
  res.json(users);
});

// POST a new user
app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);
    const user = { name: req.body.name, password: req.body.password };
    users.push(user);
    res.status(201).send();
  } catch (error) {
    res.status(500).send();
    console.log(error);
  }
});

// POST to login a user
app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Sucess");
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);
