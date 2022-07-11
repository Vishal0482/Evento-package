import React from "react";
import ringAdImage from "../assest/images/ring-ad.png";

function Advertisement() {
  return (
    <div className="w-full mt-5">
      <img src={ringAdImage} alt="ring-ad" className="w-full object-cover" />
    </div>
  );
}

export default Advertisement;
