import React from "react";
import network from "/icons8-networking-100.png";

const Footer = () => {
  return (
    <>
      <div className="bg-white text-black p-2 flex flex-row justify-between align-middle">
        <img
          src={network}
          alt="Structures of Data"
          className="bg-emerald-400 p-2 max-h-[36px] max-w-[36px] rounded-full  hover:bg-emerald-300 transition-all duration-500"
        />
        <p>Co-operation is non-negotiable. Thank you for understanding.</p>
      </div>
    </>
  );
};

export default Footer;
