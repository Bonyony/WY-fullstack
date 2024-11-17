import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const ChatMessages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      <div className="bg-gray-50 mt-2 w-full min-h-full max-h-full rounded-sm">
        {messages.map((val, i) => (
          <p key={i}>
            <Message message={val} name={name} />
          </p>
        ))}
      </div>
    </ScrollToBottom>
  );
};

export default ChatMessages;
