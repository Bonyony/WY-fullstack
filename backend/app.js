// dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");
// chat dependencies
const http = require("http");
const { Server } = require("socket.io");

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
// chat logic call
require("./config/socket")(io);
// routes
require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/profileRoutes")(app);

server.listen(port);
console.log(`Listening on port ${port}`);
