import React from "react";
import { IoFilter } from "react-icons/io5";
function Dropdown({ setCurrency }) {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        <IoFilter />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 p-2 shadow"
      >
        <li className="cursor-pointer hover:bg-slate-200 "  onClick={() => setCurrency("usd")} >USD</li>
        <li className="mt-2 cursor-pointer hover:bg-slate-200 " onClick={() => setCurrency("inr")}>INR</li>
      </ul>
    </div>
  );
}

export default Dropdown;
