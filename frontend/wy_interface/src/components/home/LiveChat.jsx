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
          Hello Username. You may enter your deep space message:
        </h2>
      </div>
    </div>
  );
};

export default LiveChat;
