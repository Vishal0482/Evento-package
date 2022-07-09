import React from "react";

function NotificationMode() {
  return (
    <>
      <div className="">
        <h3>Bill Details</h3>
        <div className="bg-white rounded p-8 mt-6 space-y-5">
          <div className="flex items-start">
            <i className="w-8 icon-bell text-2xl mr-5"></i>
            <div className="w-full flex justify-between">
              <div className="">
                <p className="text-base text-japaneseIndigo font-bold">
                  Notification
                </p>
                <span className="text-sm text-gray-300 font-normal">(Free)</span>
              </div>
              <div className="flex items-center text-2xl text-japaneseIndigo">
                <i className="icon-rs rs-black text-base mr-3"></i>0
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <i className="w-8 icon-fill-massage text-2xl mr-5"></i>
            <div className="w-full flex justify-between">
              <div className="">
                <p className="text-base text-japaneseIndigo font-bold">SMS</p>
                <span className="text-sm text-gray-300 font-normal">
                  280 Phone Number x 0.18
                </span>
              </div>
              <div className="flex items-center text-2xl text-japaneseIndigo">
                <i className="icon-rs rs-black text-base mr-3"></i>6
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <i className="w-8 icon-email text-2xl mr-5"></i>
            <div className="w-full flex justify-between">
              <div className="">
                <p className="text-base text-japaneseIndigo font-bold">Email</p>
                <span className="text-sm text-gray-300 font-normal">
                  100 Email ID x 0.06
                </span>
              </div>
              <div className="flex items-center text-2xl text-japaneseIndigo">
                <i className="icon-rs rs-black text-base mr-3"></i>50.4
              </div>
            </div>
          </div>
          <span className="block border-b-2 border-dashed border-gray-300"></span>
          <div className="flex justify-between capitalize">
            <h1>total</h1>
            <h2>
              <i className="icon-rs rs-black text-lg"></i>26.4
            </h2>
          </div>
        </div>
      </div>
      <div className="">
        <h3>Discount Coupon</h3>
        <div className="flex justify-between -mx-1">
          <div className="max-w-full w-full px-1 inputHolder pt-3 mr-3">
            <input
              type="text"
              className="input h-full"
              placeholder="Enter Coupon Code"
              required
            />
          </div>
          <div className="px-1 inputHolder pt-3">
            <button type="button" className="btn-primary whitespace-nowrap">
              <h3>Apply Code</h3>
            </button>
          </div>
        </div>
      </div>

      <button type="button" className="btn-primary w-full uppercase">
        <h3>Pay NOW</h3>
      </button>
    </>
  );
}

export default NotificationMode;
