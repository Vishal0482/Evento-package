import React from "react";

function NotificationPayment() {
  return (
    <>
      <h3>Payment</h3>
      <div className="">
        <div className="flex items-end flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 inputHolder">
            <span className="input-titel">Card Holder Name</span>
            <input type="text" className="input" />
          </div>
          <div className="w-full md:w-1/2 px-2 inputHolder">
            <span className="input-titel">Card Number</span>
            <input type="text" className="input" />
          </div>
        </div>
        <div className="flex items-end flex-wrap -mx-2 pt-5">
          <div className="w-full md:w-1/2 px-2 inputHolder">
            <span className="input-titel">Expiry Date</span>
            <input type="text" className="input" />
          </div>
          <div className="w-full md:w-1/2 px-2 inputHolder relative">
            <span className="input-titel">CVV</span>
            <input type="text" className="input" />
            <a href="#" className="absolute top-1/2 mt-1 right-5">
              <i className="icon-pass-hide mr-5"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationPayment;
