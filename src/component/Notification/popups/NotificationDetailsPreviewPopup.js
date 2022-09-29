import React from "react";
import { Link } from "react-router-dom";
import notificationSvg2 from "../../../assest/svg/notification-2.svg";
import NotificationLIstItem from "../NotificationLIstItem";

function NotificationDetailsPreviewPopup({ handleClose }) {
  return (
    <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="wrapper popin w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto">
          <div className="bg-brightGray p-7 space-y-7">
            <div className="flex justify-between items-center">
              <h1 className="h1">Notification</h1>
              <div className="flex items-center space-x-6" onClick={() => handleClose(false)}>
                <Link to="/" className="text-xl">
                  <i className="icon-close"></i>
                </Link>
              </div>
            </div>
            <NotificationLIstItem imageUrl={notificationSvg2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationDetailsPreviewPopup;
