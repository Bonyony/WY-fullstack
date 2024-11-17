import React from "react";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="">
      <p className="">{trimmedName}</p>
      <div className="">
        <p className="">{text}</p>
      </div>
    </div>
  ) : (
    <div className="">
      <div className="">
        <p className="">{text}</p>
      </div>
      <p className="">{user}</p>
    </div>
  );
};

export default Message;
