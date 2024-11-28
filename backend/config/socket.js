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
          text: `Welcome to ${chatUser.room.toUpperCase()}`,
        });

        socket.broadcast.to(chatUser.room).emit("message", {
          user: "The Raxmaster",
          text: `${chatUser.name.toUpperCase()} has joined!`,
        });

        io.to(chatUser.room).emit("roomData", {
          room: chatUser.room,
          users: getChatUsersInRoom(chatUser.room),
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

    socket.on("disconnect", () => {
      const user = getChatUser(socket.id);

      if (user) {
        removeChatUser(socket.id);

        io.to(user.room).emit("message", {
          user: "The Raxmaster",
          text: `${user.name.toUpperCase()} has left ${user.room.toUpperCase()}`,
        });

        io.to(user.room).emit("roomData", {
          room: user.room,
          users: getChatUsersInRoom(user.room),
        });

        console.log(getChatUsersInRoom(user.room));
      }

      console.log("A disconnection has been made");
    });
  });
};
