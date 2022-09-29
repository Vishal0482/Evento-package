import React from "react";
import { Link } from "react-router-dom";

function NotificationLIstItem({ imageUrl }) {
  return (
    <div className="bg-white p-5 rounded-md">
      <div className="flex justify-between items-center">
        <div className="w-2/12">
          <img src={imageUrl} alt="" className="h-full object-cover" />
        </div>
        <div className="w-10/12">
          <div className="flex justify-between">
            <h2>Lorem Ipsum is simply dummy text of the</h2>
            <Link to="/">
              <i className="icon-more font-bold text-base"></i>
            </Link>
          </div>
          <p className="text-gray-400 text-base pt-3 font-medium">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the{" "}
          </p>
          <div className="flex justify-end">
            <button className="btn-primary small flex items-center">
              <i className="icon-fill-megaphone mr-2"></i>
              <span>Promote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationLIstItem;
