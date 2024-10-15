import React from "react";

export default function Navbar() {
  return (
    <div className=" w-full h-[80px] bg-blue-500 flex justify-between items-center px-5">
      <div className="text-white">Niga</div>
      <div className=" w-auto bg-red-700 p-1">
        <input type="text" className="" />
      </div>
      <ul className="flex gap-4">
        <li className="text-xl text-white">Home</li>
        <li className="text-xl text-white">About</li>
      </ul>
    </div>
  );
}
