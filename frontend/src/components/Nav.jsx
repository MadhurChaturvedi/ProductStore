import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeSharpIcon from "@mui/icons-material/BedtimeSharp";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div className="w-full max-w-7xl mx-auto flex justify-center items-center p-3 border-2">
      <div className="w-[70%] flex justify-between px-5 p-3 items-center ">
        <div className="text-xl  md:text-2xl flex items-center hover:scale-110 transition-all">
          <Link to={"/"} className="uppercase font-bold">
            Store 🛒
          </Link>
        </div>
        <div className="flex gap-9 items-center">
          <Link to={"/create"} className=" p-2 bg-slate-500 rounded-md">
            <AddCircleIcon
              fontSize={"medium"}
              className="cursor-pointer text-white"
            />
          </Link>
          <div className="p-2 bg-slate-500 rounded-md">
            <LightModeIcon
              fontSize={"medium"}
              className="cursor-pointer text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
