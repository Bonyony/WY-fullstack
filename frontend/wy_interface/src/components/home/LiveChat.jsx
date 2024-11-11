import React, { useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import queryString from "query-string";
import { ProfileContext } from "../../App";
import { useLocation } from "react-router-dom";

let socket;

const LiveChat = () => {
  let location = useLocation();

  const { profile, setProfile } = useContext(ProfileContext);

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    console.log(location.search);
    console.log(name, room);

    socket = io.connect("http://localhost:3000");
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) alert(error);
    });
  }, ["http://localhost:3000", location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", { message });
      console.log(message);
      setMessage("");
    } else {
      alert("empty input");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle">
      {/* width needs to be changed, just set at dummy value now */}
      <div
        id="chatbox-container"
        className="flex flex-col justify-between w-full max-w-[900px] h-screen p-4 mt-16 bg-gray-300 text-black rounded-sm "
      >
        {/* header for inside the chatbox */}
        <h2 className="px-5 py-1 font-bold bg-emerald-800 text-white rounded-sm text-center">
          {profile.username}, you may enter your deep space message below:
        </h2>
        {/* messages */}
        <div className="bg-gray-50 mt-2 w-full h-full rounded-sm">
          {messages.map((val, i) => {
            <p key={i}>
              {val.text}
              <br />
              <b>{val.user}</b>
            </p>;
          })}
        </div>
        {/* user message input */}
        <form
          id="message-form"
          onSubmit={handleSubmit}
          className="w-full flex flex-row mt-2"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hyraxes are very cool..."
            id="message-input"
            className="w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 text-sm sm:leading-6"
          />
          <button
            type="submit"
            id="send-button"
            className="text-nowrap py-1 px-2 ml-1 rounded bg-gray-500 hover:bg-emerald-600 text-sm text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
