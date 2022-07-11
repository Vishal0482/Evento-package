import React from "react";
import notificationSvg2 from "../../assest/svg/notification-2.svg";
import ringAdImage from "../../assest/images/ring-ad.png";
import Advisement from "../Advisement";
import NotificationLIstItem from "./NotificationLIstItem";
import BottomNavigation from "../BottomNavigation";

function NotificationHistory() {
  return (
    <div className="wrapper min-h-full">
      <div className="space-y-8 h-full">
        {/* <!-- title-holder  --> */}
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <h1>Notification</h1>
          </a>
          <div className="flex items-center  space-x-5">
            <button className="btn-primary">
              <i className="icon-time mr-3"></i>
              <span>Sending</span>
            </button>
          </div>
        </div>
        {/* <!-- main-content  --> */}
        <div className="space-y-5">
        <NotificationLIstItem imageUrl={notificationSvg2} />
        <NotificationLIstItem imageUrl={notificationSvg2} />
        <NotificationLIstItem imageUrl={notificationSvg2} />
        <NotificationLIstItem imageUrl={notificationSvg2} />
        
        {/* <!-- advisement --> */}
        <Advisement />

        <NotificationLIstItem imageUrl={notificationSvg2} />

        {/* <!-- next preview button  --> */}
        <BottomNavigation />
        </div>
      </div>
    </div>
  );
}

export default NotificationHistory;
