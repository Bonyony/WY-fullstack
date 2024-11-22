import React, { useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import queryString from "query-string";
import { ProfileContext } from "../../App";
import { useLocation } from "react-router-dom";

import ChatMessages from "./socketIO/ChatMessages";
import UserInfo from "./socketIO/UserInfo";

let socket;

const LiveChat = () => {
  let location = useLocation();

  const { profile } = useContext(ProfileContext);

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  // array of messages
  const [messages, setMessages] = useState([]);
  // current message value
  const [message, setMessage] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    console.log(location.search);
    console.log(name, room);

    socket = io("http://localhost:3000", {
      withCredentials: true,
    });

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) alert(error);
    });

    return () => {
      socket.disconnect(); // Cleanup on unmount
    };
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.off("message"); // Clean up the listener
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
      console.log(message, ...messages);
    } else {
      alert("Empty Input");
    }
  };

  return (
    <div className="flex md:flex-row flex-col h-screen items-center justify-center">
      {/* width needs to be changed, just set at dummy value now */}
      <div
        id="chatbox-container"
        className="flex flex-col justify-between w-full max-w-[600px] p-4 mt-16 bg-slate-800 text-black rounded-sm "
      >
        {/* header for inside the chatbox */}
        <h2 className="px-5 py-1 font-bold bg-slate-700 text-white rounded-sm text-center">
          {profile.username}, you may enter your deep space message below:
        </h2>
        {/* messages */}
        <ChatMessages messages={messages} name={name} />
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
      <UserInfo users={users} />
    </div>
  );
};

export default LiveChat;
