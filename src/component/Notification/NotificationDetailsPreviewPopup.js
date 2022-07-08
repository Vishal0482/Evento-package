import React from "react";

function NotificationDetailsPreviewPopup() {
  return (
    <div class="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div class="table-cell align-middle">
        <div class="wrapper popin w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto">
          <div class="bg-brightGray p-7 space-y-7">
            <div class="flex justify-between items-center">
              <h1 class="h1">Notification</h1>
              <div class="flex items-center space-x-6">
                <a href="#" class="text-xl">
                  <i class="icon-close"></i>
                </a>
              </div>
            </div>
            <div class="bg-white p-5 rounded-md">
              <div class="flex justify-between items-center">
                <div class="w-2/12">
                  <img
                    src="../assest/svg/notification-2.svg"
                    alt=""
                    class="h-full object-cover"
                  />
                </div>
                <div class="w-10/12">
                  <div class="flex justify-between">
                    <h2>Lorem Ipsum is simply dummy text of the</h2>
                    <a href="#">
                      <i class="icon-more font-bold text-base"></i>
                    </a>
                  </div>
                  <p class="text-gray-400 text-base pt-3 font-medium">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, Simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationDetailsPreviewPopup;
