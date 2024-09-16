// dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// express app
const app = express();
const bcrypt = require("bcrypt");
// app uses
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// mogodb
const dbURI =
  "mongodb+srv://frankiefrancione:Mynodeserver@node-server-cluster.teyfw.mongodb.net/WY_server?retryWrites=true&w=majority&appName=node-server-cluster";
// connect to DB
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to DB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

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
