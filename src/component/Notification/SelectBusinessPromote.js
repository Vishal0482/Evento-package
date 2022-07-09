import React from "react";

function SelectBusinessPromote() {
  return (
    <div className="flex items-end justify-between">
      <div className="w-1/2">
        <h3 className="pb-3">Select User</h3>
        <select className="bg-white rounded-md flex space-x-3 outline-0 px-6 py-[18px] relative arrow option">
          <option>Select All</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div className="bg-white p-[18px] rounded-md">
        <span className="text-base font-bold text-japaneseIndigo">
          Total User : 10000
        </span>
      </div>
    </div>
  );
}

export default SelectBusinessPromote;
