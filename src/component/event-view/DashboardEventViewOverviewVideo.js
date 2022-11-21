import React from "react";
import videoPreview from "../../assest/images/video-preview.png";

function DashboardEventViewOverviewVideo({ videoUrl }) {
  return (
    <div className="w-full lg:w-1/5 p-2 ov-p ">
      <div className="rounded relative overflow-hidden border-2">
        <img src={videoPreview} alt="upload-1" className="w-full bg-white" />
      </div>
    </div>
  );
}

export default DashboardEventViewOverviewVideo;
