// dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");
// chat depen
const http = require("http");
const { Server } = require("socket.io");
const { addChatUser } = require("./config/chatUser");

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
    allowedHeaders: ["my-custom-header"],
    credentials: true,
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
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("disconnect", (socket) => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

// routes
require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/profileRoutes")(app);

server.listen(port);
console.log(`Listening on port ${port}`);
