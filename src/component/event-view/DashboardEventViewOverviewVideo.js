import React from "react";

function DashboardEventViewOverviewVideo({ videoUrl }) {
  return (
    <div className="w-full lg:w-1/5 p-2 ov-p">
      <div className="rounded relative overflow-hidden">
        <img src={videoUrl} alt="upload-1" className="w-full bg-white" />
      </div>
    </div>
  );
}

export default DashboardEventViewOverviewVideo;
