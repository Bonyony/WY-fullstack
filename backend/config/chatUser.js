let chatUsers = [];

exports.addChatUser = ({ id, name, room }) => {
  if (!name || !room) return { error: "name and room required." };
  const chatUser = { id, name, room };

  chatUsers.push(chatUser);

  return { chatUser };
};
