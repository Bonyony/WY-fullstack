import React from "react";
import network from "/icons8-networking-100.png";

const Footer = () => {
  return (
    <>
      <div className="px-2 py-4 text-yellow-200 flex flex-col items-center justify-evenly gap-5">
        <img
          src={network}
          alt="Structures of Data"
          className="bg-yellow-300 p-2 max-h-[36px] max-w-[36px] rounded-full hover:bg-yellow-200 transition-all duration-500"
        />
        <p className="">
          Co-operation is non-negotiable. Thank you for understanding.
        </p>
      </div>
    </>
  );
};

export default Footer;
