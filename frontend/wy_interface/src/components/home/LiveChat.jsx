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

    socket.on("roomUsersUpdated", (updatedUsers) => {
      setUsers(updatedUsers);
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
      console.log(users);
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
    <div className="flex md:flex-row flex-col items-center justify-center gap-3 mx-2">
      {/* width needs to be changed, just set at dummy value now */}
      <div
        id="chatbox-container"
        className="flex flex-col justify-between w-full max-w-[600px] p-4 my-2 card outline outline-primary"
      >
        {/* header for inside the chatbox */}
        <h2 className="px-5 py-1 font-bold text-center">
          {profile.username}, enter your deep space messages below
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
            className="block w-full  input input-bordered"
          />
          <button
            type="submit"
            id="send-button"
            className=" ml-1 btn btn-circle btn-primary"
          >
            <svg
              width="25px"
              height="25px"
              viewBox="-0.5 0 25 25"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16109 12.9424L2.91109 12.4324C2.42109 12.3124 2.35109 11.6724 2.80109 11.4624L20.7111 3.55243C21.1811 3.34243 21.6711 3.81243 21.4411 4.25243L13.0111 21.2124C12.7811 21.6424 12.1211 21.5724 12.0011 21.1124L11.1711 13.2124L18.4411 6.41243"
                stroke="#0F0F0F"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
      <UserInfo users={users} room={room} />
    </div>
  );
};

export default LiveChat;
