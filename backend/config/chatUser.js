let chatUsers = [];

exports.addChatUser = ({ id, name, room }) => {
  console.log("Adding chat user:", { id, name, room });
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingChatUser = chatUsers.find(
    (user) => user.room === room && user.name === name
  );

  if (!name || !room) {
    console.error("Error: Name and room required.");
    return { error: "name and room required." };
  }
  if (existingChatUser) {
    console.error("Error: Chat name already taken.");
    return { error: "Chat name already taken." };
  }

  const chatUser = { id, name, room };
  chatUsers.push(chatUser);

  console.log("Chat user added successfully:", chatUser);
  return { chatUser };
};
exports.removeChatUser = (id) => {
  const index = chatUsers.findIndex((user) => user.id === id);
  if (index !== -1) {
    return chatUsers.splice(index, 1)[0];
  }
  return null;
};
exports.getChatUser = (id) => chatUsers.find((user) => user.id === id);
exports.getChatUsersInRoom = (room) =>
  chatUsers.filter((user) => user.room === room);
