// dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");

const connectToDB = require("./config/db");
const port = process.env.PORT || 3000;

// express app and cors setup
const app = express();
let corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
// connect to the database
connectToDB();

// app uses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(logger("dev"));
// cookie sessions
const cookieKey = process.env.COOKIE_SECRET;
app.use(
  cookieSession({
    name: "robotic-session",
    keys: [cookieKey],
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to frank's sample application." });
});
// routes
require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/profileRoutes")(app);

app.get("/user", (req, res) => {
  res.json(users);
});

app.listen(port);
console.log(`Listening on port ${port}`);
