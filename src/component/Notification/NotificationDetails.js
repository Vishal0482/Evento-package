import React, { useState } from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "../BottomNavigation";
import Modal from "../modal/Modal";
import NotificationDetailsPreviewPopup from "./popups/NotificationDetailsPreviewPopup";

function NotificationDetails() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [isNotificationDetailPreviewPopupOpen, setIsNotificationDetailPreviewPopupOpen] = useState(false);

  return (
    <div className="wrapper min-h-full">
      <div className="space-y-8 h-full">
        {/* <!-- title-holder  --> */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <i className="icon-back-arrow mr-4 text-2xl"></i>
            <h1>Create New Notification</h1>
          </Link>
        </div>
        {/* <!-- main-content  --> */}
        <div className="space-y-5">
          <div className="w-full flex items-end flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 inputHolder">
              <span className="input-titel text-lg text-japaneseIndigo font-bold">
                {" "}
                Notification Title
              </span>
              <input
                type="text"
                className="input"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 inputHolder">
              <span className="input-titel text-lg text-japaneseIndigo font-bold">
                Link
              </span>
              <input
                type="text"
                className="input"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>
          <div className="upload-holder">
            <h3>
              {" "}
              <span className="flex items-end">Photo</span>
            </h3>
            <label htmlFor="upload2" className="upload">
              <input
                type="file"
                name="images"
                id="upload2"
                className="appearance-none hidden"
              />
              <div className="mt-1 flex items-baseline justify-center">
                <i className="icon-image text-base mr-2"></i>
                <span className="input-titel pt-1">Upload Images</span>
              </div>
            </label>
          </div>
          <div className="w-full space-y-2.5">
            <h3>Description</h3>
            <div className="w-full bg-white rounded">
              <div className="p-8 w-full border-b-2 border-brightGray flex items-center space-x-6">
                <div className="flex space-x-2.5">
                  <button type="button">
                    <i className="icon-bold"></i>
                  </button>
                  <button type="button">
                    <i className="icon-capitals"></i>
                  </button>
                  <button type="button">
                    <i className="icon-underline"></i>
                  </button>
                  <button type="button">
                    <i className="icon-italic"></i>
                  </button>
                </div>
                <div className="flex space-x-2.5">
                  <button type="button">
                    <i className="icon-left-alignment"></i>
                  </button>
                  <button type="button">
                    <i className="icon-center-alignment"></i>
                  </button>
                  <button type="button">
                    <i className="icon-left-alignment-"></i>
                  </button>
                </div>
                <div className="flex space-x-2.5">
                  <button type="button">
                    <i className="icon-list-alpha text-xl"></i>
                  </button>
                  <button type="button">
                    <i className="icon-list text-xl"></i>
                  </button>
                  <button type="button">
                    <i className="icon-list-num text-xl"></i>
                  </button>
                </div>
              </div>
              <textarea
                cols="30"
                rows="5"
                className="w-full outline-none p-7 py-5"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="text-right">
            <button
              className="btn-primary"
              onClick={() => setIsNotificationDetailPreviewPopupOpen(true)}
            >
              preview
            </button>
          </div>
          <BottomNavigation />
        </div>
      </div>
      <Modal isOpen={isNotificationDetailPreviewPopupOpen}>
        <NotificationDetailsPreviewPopup
          handleClose={setIsNotificationDetailPreviewPopupOpen}
        />
      </Modal>
    </div>
  );
}

export default NotificationDetails;
