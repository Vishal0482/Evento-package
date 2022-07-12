import React from "react";

function DashboardEventViewOverviewPhoto({ imageUrl }) {
  return (
    <div className="w-full lg:w-2/12 p-2 ov-p">
      <div className="rounded relative overflow-hidden bg-white">
        <img src={imageUrl} alt="upload-1" className="w-full" />
      </div>
    </div>
  );
}

export default DashboardEventViewOverviewPhoto;
