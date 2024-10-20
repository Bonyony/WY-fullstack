// dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");
// chat depen
const http = require("http");
const { Server } = require("socket.io");

const connectToDB = require("./config/db");
const port = process.env.PORT || 3000;

// express app and cors setup
const app = express();
app.use(cors());
// chat server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

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

// chat
// need to correct cors problems
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.emit("chat-message", "Hello Me!");
});

// routes
require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/profileRoutes")(app);

app.get("/user", (req, res) => {
  res.json(users);
});

server.listen(port);
console.log(`Listening on port ${port}`);
