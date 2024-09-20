// dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
// http and server.listen, may have to be used for chat room portion?
const http = require("http");
// express app
const app = express();
// encryption
const bcrypt = require("bcrypt");

const connectToDB = require("./config/db");
const port = process.env.PORT || 3000;

// connect to the database
connectToDB();

// app uses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(logger("dev"));

// User auth below should be broken into middleware

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

app.listen(port);
console.log(`Listening on port ${port}`);
