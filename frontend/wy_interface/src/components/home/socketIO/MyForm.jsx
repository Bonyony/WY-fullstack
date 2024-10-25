import React, { useState } from "react";
import { socket } from "./socket";

export function MyForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form id="message-form" className="w-full flex flex-row mt-2">
      <input
        type="text"
        placeholder="Hyraxes are very cool..."
        id="message-input"
        className="w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 text-sm sm:leading-6"
      />
      <button
        type="submit"
        onSubmit={sendMessage}
        id="send-button"
        className="text-nowrap py-1 px-2 ml-1 rounded bg-gray-500 hover:bg-emerald-600 text-sm text-white"
      >
        Send Message
      </button>
    </form>
  );
}
