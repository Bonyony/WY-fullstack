const socket = is("http://localhost:5000");

socket.on("chat-message", (data) => {
  console.log(data);
});
