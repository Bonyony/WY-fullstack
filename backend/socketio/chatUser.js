let chatUsers = new Map();
const MAX_USERS_PER_ROOM = 20;
const AVAILABLE_ROOMS = [
  "Raxstation 1",
  "Hyrax Hell",
  "Funroom",
  "Possum-ship",
  "Ice Castle",
];

exports.addChatUser = ({ id, name, room }) => {
  console.log("Adding chat user:", { id, name, room });
  name = name.trim();
  room = room.trim();

  if (!name || !room) {
    console.error("Error: Name and room required.");
    return { error: "name and room required." };
  }

  if (!AVAILABLE_ROOMS.some((availableRoom) => availableRoom === room)) {
    console.error("Error: Invalid room.");
    return { error: "Invalid room. Please select a valid room." };
  }

  const usersInRoom = [...chatUsers.values()].filter(
    (user) => user.room === room
  );

  console.log(usersInRoom);

  if (usersInRoom.length > MAX_USERS_PER_ROOM) {
    console.error("Error: Room is full.");
    return { error: "Room is full. Please choose another room." };
  }

  // need to refactor this conditional
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

exports.getAvailableRooms = () => AVAILABLE_ROOMS;
