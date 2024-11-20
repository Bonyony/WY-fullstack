import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const ChatMessages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="bg-gray-50 mt-2 w-full h-[500px] overflow-auto rounded-sm">
      {messages.map((val, i) => (
        <p key={i}>
          <Message message={val} name={name} />
        </p>
      ))}
    </ScrollToBottom>
  );
};

export default ChatMessages;
