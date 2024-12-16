import React from "react";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    // user (you)
    <div className="flex gap-2 justify-end  mb-2 mt-1 mr-2">
      <b className="text-xs text-emerald-500">{name}</b>

      <div className="rounded-xl rounded-br-none px-3 py-1 max-w-[300px] bg-emerald-900 text-white inline-block text-wrap">
        <p className="w-full float-left break-all">{text}</p>
      </div>
    </div>
  ) : (
    // other user
    <div className="flex gap-2 justify-start  mb-2 mt-1 ml-2">
      <div className="rounded-xl rounded-bl-none px-3 py-1 max-w-[300px] bg-slate-700 text-white inline-block text-wrap">
        <p className="w-full float-left break-all">{text}</p>
      </div>
      <b className="text-xs text-yellow-500">{user}</b>
    </div>
  );
};

export default Message;
