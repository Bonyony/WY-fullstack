import React from "react";

const LiveChat = () => {
  return (
    <div className="h-screen w-full py-8 flex flex-col items-center justify-center align-middle">
      <h1>LiveChat</h1>
      {/* width needs to be changed, just set at dummy value now */}
      <div
        id="chatbox"
        className="min-w-[600px] h-screen bg-gray-100 text-black"
      >
        {/* header for inside the chatbox */}
        <h2 className="p-5 font-bold bg-yellow-300">
          Enter your deep space message:
        </h2>
      </div>
    </div>
  );
};

export default LiveChat;
