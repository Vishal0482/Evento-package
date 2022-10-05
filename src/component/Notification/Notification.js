import React from "react";
import { Link, useNavigate } from "react-router-dom";

import notificationSvg1 from "../../assest/svg/notification-1.svg";
import notificationSvg2 from "../../assest/svg/notification-2.svg";

import NotificationLIstItem from "./NotificationLIstItem";
import Advertisement from "../Advertisement";
import BottomNavigation from "../BottomNavigation";

function Notification() {
  const navigate = useNavigate();
  return (
    <div className="wrapper min-h-full">
      <div className="space-y-8 h-full">
        {/* <!-- title-holder  --> */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1>Notification</h1>
          </Link>
          <div className="flex items-center  space-x-5">
            <button className="btn-primary" onClick={() => navigate("/dashboard/notification/history")}>
              <i className="icon-time mr-3"></i>
              <span>history</span>
            </button>
            <button className="btn-primary" onClick={() => navigate("/dashboard/notification/details")} >
              <i className="icon-plus mr-3"></i>
              <span>Create new</span>
            </button>
          </div>
        </div>
        {/* <!-- main-content  --> */}
        <div className="space-y-5">
          <div className="bg-white p-7 rounded-md">
            <div className="flex justify-between items-center">
              <div className="w-2/12">
                <img
                  src={ notificationSvg1 }
                  alt=""
                  className="h-full object-cover"
                />
              </div>
              <div className="w-10/12">
                <div className="flex justify-between">
                  <h2>Create an notification as you want!</h2>
                </div>
                <p className="text-gray-400 text-base pt-3 font-medium">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, Simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the{" "}
                </p>
              </div>
            </div>
          </div>
          <NotificationLIstItem imageUrl={notificationSvg2} />
          <NotificationLIstItem imageUrl={notificationSvg2} />

          {/* <!-- advisement --> */}
          <Advertisement />
          
          <NotificationLIstItem imageUrl={notificationSvg2} />
          {/* <!-- next preview button  --> */}
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
}

export default Notification;
