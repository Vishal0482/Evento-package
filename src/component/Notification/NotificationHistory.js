import React from "react";
import notificationSvg2 from "../../assest/svg/notification-2.svg";
import ringAdImage from "../../assest/images/ring-ad.png";
import Advisement from "../Advisement";
import NotificationLIstItem from "./NotificationLIstItem";

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
        <NotificationLIstItem imageUrl={notificationSvg2} altText={"random text"} />
        <NotificationLIstItem imageUrl={notificationSvg2} altText={"random text"} />
        <NotificationLIstItem imageUrl={notificationSvg2} altText={"random text"} />
        <NotificationLIstItem imageUrl={notificationSvg2} altText={"random text"} />
        
          {/* <!-- advisement --> */}
          <Advisement />

        <NotificationLIstItem imageUrl={notificationSvg2} altText={"random text"} />
         
          {/* <!-- next preview button  --> */}
          {/* <!-- next preview button  --> */}
          <div className="prw-next-btn">
            <button type="button" className="flex items-center">
              <i className="icon-back-arrow mr-3"></i>
              <h3>Back</h3>
            </button>
            <button type="button" className="flex items-center active">
              <h3>Next</h3>
              <i className="icon-next-arrow ml-3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationHistory;
