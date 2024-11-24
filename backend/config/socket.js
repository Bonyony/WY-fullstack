const {
  addChatUser,
  removeChatUser,
  getChatUser,
  getChatUsersInRoom,
} = require("./chatUser");

module.exports = (io) => {
  // chat
  io.on("connect", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join", ({ name, room }, callBack) => {
      const { chatUser, error } = addChatUser({ id: socket.id, name, room });

      if (error) return callBack(error);
      if (chatUser) {
        socket.join(chatUser.room);
        socket.emit("message", {
          user: "The Raxmaster",
          text: `Welcome to ${chatUser.room}`,
        });

        socket.broadcast.to(chatUser.room).emit("message", {
          user: "The Raxmaster",
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

    socket.on("getUsers", (room, callBack) => {
      const roomData = getChatUsersInRoom(room);
      console.log(roomData);
      callBack(roomData);
    });

    socket.on("disconnect", (socket) => {
      const user = removeChatUser(socket.id);
      console.log(user);

      if (user) {
        io.to(user.room).emit("message", {
          user: "The Raxmaster",
          text: `${user.name} just left the room`,
        });
      }

      console.log("A disconnection has been made");
    });
  });
};
