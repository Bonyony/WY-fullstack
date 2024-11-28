import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../App";

const ChatSelection = () => {
  const { profile } = useContext(ProfileContext);

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  // setName(profile.username);
  useEffect(() => {
    setName(profile.username);
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

          <input
            className="w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 text-sm sm:leading-6"
            placeholder="Room"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
            required
          />
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
