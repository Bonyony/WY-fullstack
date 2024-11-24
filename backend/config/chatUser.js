let chatUsers = new Map();
const MAX_USERS_PER_ROOM = 20;

exports.addChatUser = ({ id, name, room }) => {
  console.log("Adding chat user:", { id, name, room });
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!name || !room) {
    console.error("Error: Name and room required.");
    return { error: "name and room required." };
  }

  const usersInRoom = [...chatUsers.values()].filter(
    (user) => user.room === room
  );
  console.log(usersInRoom);
  if (usersInRoom.length >= MAX_USERS_PER_ROOM) {
    console.error("Error: Room is full.");
    return { error: "Room is full. Please choose another room." };
  }

  if (
    [...chatUsers.values()].some(
      (user) => user.name === name && user.room === room
    )
  ) {
    console.error("Error: Chat name already taken.");
    return { error: "Chat name already taken." };
  }

  const chatUser = { id, name, room };
  chatUsers.set(id, chatUser);

  console.log("Chat user added successfully:", chatUser);
  console.log(chatUsers);
  return { chatUser };
};
exports.removeChatUser = (id) => chatUsers.delete(id);
exports.getChatUser = (id) => chatUsers.get(id);
exports.getChatUsersInRoom = (room) =>
  [...chatUsers.values()]
    .filter((user) => user.room === room)
    .map((user) => user.name);
