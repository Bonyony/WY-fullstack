let chatUsers = [];

exports.addChatUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingChatUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (!name || !room) return { error: "name and room required." };
  if (existingChatUser) return { error: "Chat name already taken." };

  const chatUser = { id, name, room };

  chatUsers.push(chatUser);

  return { chatUser };
};
exports.removeChatUser = (id) => {
  const index = chatUsers.findIndex((user) => user.id === id);
  if (index !== -1) return chatUsers.splice(index, 1)[0];
};
exports.getChatUser = (id) => chatUsers.find((user) => user.id === id);
exports.getChatUsersInRoom = (room) =>
  chatUsers.filter((user) => user.room === room);
