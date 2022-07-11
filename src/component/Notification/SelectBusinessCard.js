import React from "react";

function SelectBusinessCard({imageUrl, title}) {
  return (
    <div className="w-1/2 lg:w-1/3 xl:w-1/5 px-2 xl:px-2.5 pb-4 xl:pb-0 group">
      <a
        href="#"
        className="text-center bg-white rounded flex flex-col justify-between items-center h-full px-5 py-7 border-2 border-transparent group-hover:border-2 group-hover:border-spiroDiscoBall"
      >
        <div className="w-32 h-32">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-base font-bold group-hover:text-spiroDiscoBall pt-8 whitespace-nowrap">
          {title}
        </p>
      </a>
    </div>
  );
}

export default SelectBusinessCard;
