import React from "react";

const LiveChat = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle">
      {/* width needs to be changed, just set at dummy value now */}
      <div
        id="chatbox"
        className="min-w-[600px] h-screen p-4 mt-20 bg-gray-200 text-black rounded-sm "
      >
        {/* header for inside the chatbox */}
        <h2 className="p-5 font-bold bg-emerald-900 text-white rounded-sm text-center">
          Hello
          {/* this will be profile.username once fully implemented */}
          Username. You may enter your deep space message:
        </h2>
        <form id="meesage-form">
          <input type="text" id="message-input" />
          <button type="submit" id="send-button">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
