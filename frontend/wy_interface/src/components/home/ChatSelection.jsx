import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../App";
import { io } from "socket.io-client";

let socket = io("http://localhost:3000", { withCredentials: true });

const ChatSelection = () => {
  const { profile } = useContext(ProfileContext);

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    setName(profile.username);
  }, [profile]);

  useEffect(() => {
    socket.emit("getAvailableRooms"); // Request rooms from the server on mount

    socket.on("availableRooms", (rooms) => {
      console.log("Rooms received:", rooms);
      setAvailableRooms(rooms);
    });

    return () => {
      socket.off("availableRooms");
    };
  }, []);

  return (
    <section className="min-h-[500px] w-full flex flex-col items-center justify-center align-middle">
      <div className="flex flex-col items-center gap-2 bg-slate-800 p-8 rounded-lg outline outline-gray-300">
        <h1 className="font-bold">Select a Chat Room...</h1>
        <div className="flex flex-col gap-3 min-w-fit">
          {/* <input
            className="w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 text-sm sm:leading-6"
            placeholder="Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
            required
          /> */}

          {/* <input
            className="w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 text-sm sm:leading-6"
            placeholder="Room"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
            required
          /> */}
          <div className="relative">
            <select
              className="w-full min-w-[150px] appearance-none px-4 py-2 rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-emerald-600 bg-gray-100 text-sm sm:leading-6 cursor-pointer"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a room
              </option>
              {availableRooms.map((room) => (
                <option key={room} value={room}>
                  {room.toUpperCase()}
                </option>
              ))}
            </select>
            {/* Dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 011.414 0c.78.781-.314 1.314-.707 1.707l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 01-.293-.707z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/home/chat?name=${name}&room=${room}`}
        >
          <button
            className="text-nowrap py-1 px-2 mt-2 rounded bg-gray-500 hover:bg-slate-600 text-sm text-white "
            type="submit"
          >
            Enter
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ChatSelection;
