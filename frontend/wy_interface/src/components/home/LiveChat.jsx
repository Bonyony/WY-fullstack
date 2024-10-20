import React, { useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3000");

const LiveChat = () => {
  const sendMessage = () => {
    socket.emit();
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle">
      {/* width needs to be changed, just set at dummy value now */}
      <div
        id="chatbox"
        className="min-w-[600px] h-screen p-4 mt-20 bg-gray-200 text-black rounded-sm "
      >
        {/* header for inside the chatbox */}
        <h2 className="p-5 font-bold bg-emerald-800 text-white rounded-sm text-center">
          Hello
          {/* this will be profile.username once fully implemented */}
          Username. You may enter your deep space message:
        </h2>
        <form id="message-form" className="w-full flex flex-row my-2">
          <input
            type="text"
            placeholder="Hyraxes are very cool..."
            id="message-input"
            className="w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            onSubmit={sendMessage}
            id="send-button"
            className="text-nowrap py-1 px-2 mx-1 rounded bg-emerald-800 hover:bg-emerald-700 text-sm text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
