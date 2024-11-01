import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ChatSelection = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle">
      <h1>Select a Chat Room...</h1>
      <div className="flex flex-col gap-2">
        <input
          className="w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 text-sm sm:leading-6"
          placeholder="Name"
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          className="w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 text-sm sm:leading-6"
          placeholder="Room"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
          required
        />
      </div>
      <NavLink
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`chat`}
      >
        <button
          className="text-nowrap py-1 px-2 mt-2 rounded bg-gray-500 hover:bg-emerald-600 text-sm text-white"
          type="submit"
        >
          Sign In
        </button>
      </NavLink>
    </div>
  );
};

export default ChatSelection;
