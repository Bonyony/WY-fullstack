// dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");
// chat depen
const http = require("http");
// const { Server } = require("socket.io");
const { Server } = require("socket.io");
const {
  addChatUser,
  removeChatUser,
  getChatUser,
  getChatUsersInRoom,
} = require("./config/chatUser");

const connectToDB = require("./config/db");
const port = process.env.PORT || 3000;
const allowedOrigins = process.env.FRONTEND_URL || "http://localhost:5173";
// express app and cors setup
const app = express();
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
// chat server
const server = http.createServer(app);
// const io = socketIO(server);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.options("*", cors());

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
io.on("connect", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join", ({ name, room }, callBack) => {
    const { chatUser, error } = addChatUser({ id: socket.id, name, room });

    if (error) return callBack(error);
    if (chatUser) {
      socket.join(chatUser.room);
      socket.emit("message", {
        user: "Admin",
        text: `Welcome to ${chatUser.room}`,
      });

      socket.broadcast.to(chatUser.room).emit("message", {
        user: "Admin",
        text: `${chatUser.name} has joined!`,
      });
      callBack(null);
    } else {
      callBack("Failed to join room");
    }
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getChatUser(socket.id);

    if (!user) {
      console.error(`User not found for socket ID: ${socket.id}`);
      return callback("User not found");
    }

    io.to(user.room).emit("message", {
      user: user.name,
      text: message,
    });

    callback();
  });

  socket.on("disconnect", (socket) => {
    const user = removeChatUser(socket.id);
    console.log(user);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} just left the room`,
      });
    }

    console.log("A disconnection has been made");
  });
});

// routes
require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/profileRoutes")(app);

server.listen(port);
console.log(`Listening on port ${port}`);
