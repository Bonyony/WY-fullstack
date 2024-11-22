import React from "react";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    // user (you)
    <div className="flex gap-2 justify-end  mt-3 mr-2">
      <b className="text-xs text-emerald-500">{name}</b>

      <div className="rounded-xl rounded-br-none px-3 py-1 bg-emerald-900 text-white inline-block max-w-[4/5]">
        <p className="w-full float-left break-words">{text}</p>
      </div>
    </div>
  ) : (
    // other user
    <div className="flex gap-2 justify-start  mt-3 ml-2">
      <div className="rounded-xl rounded-bl-none px-3 py-1 bg-slate-700 text-white inline-block max-w-[4/5]">
        <p className="w-full float-left break-words">{text}</p>
      </div>
      <b className="text-xs text-yellow-500">{user}</b>
    </div>
  );
};

export default Message;
