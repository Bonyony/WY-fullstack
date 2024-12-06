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
      <div className="flex flex-col items-center gap-2  outline outline-primary p-8 card">
        <h1 className="font-bold text-2xl">Select a Chat Room...</h1>
        <div className="relative">
          <select
            className="w-full min-w-[150px] select select-primary"
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
          {/* <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
            </div> */}
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/home/chat?name=${name}&room=${room}`}
        >
          <button className="btn btn-sm btn-primary mt-2" type="submit">
            Enter
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ChatSelection;
