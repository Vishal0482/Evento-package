import React from "react";

function BottomNavigation() {
  return (
    <div className="prw-next-btn mt-auto">
      <button type="button" className="flex items-center">
        <i className="icon-back-arrow mr-3"></i>
        <h3>Back</h3>
      </button>
      <button type="button" className="flex items-center active">
        <h3>Next</h3>
        <i className="icon-next-arrow ml-3"></i>
      </button>
    </div>
  );
}

export default BottomNavigation;
