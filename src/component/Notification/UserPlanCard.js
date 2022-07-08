import React from "react";
import celebrationSvg from "../../assest/svg/celebration.svg";

function UserPlanCard({totalUser, notificationCount, smsCount, emailCount, allCount, colorFrom, colorTo }) {
  return (
    <div className="w-1/3">
      <div className={`"bg-gradient-to-r from-[${colorFrom}] to-[${colorTo}] p-5 rounded-xl relative overflow-hidden"`}>
        <div className="absolute -left-3 -bottom-3">
          <img src={celebrationSvg} alt="celebration" />
        </div>
        <label htmlFor={"user-"+totalUser} className="relative">
          <div className="flex items-center">
            <div className="radio">
              <input
                className="radio"
                type="radio"
                name="radio-card"
                id={"user-"+totalUser}
              />
              <i className="icon-right"></i>
            </div>
            <span className="text-xl font-normal text-white ml-5">
              FOR {totalUser} USERS{" "}
            </span>
          </div>
          <div className="pt-7 space-y-3">
            <div className="flex w-full justify-between items-center">
              <span className="text-sm text-japaneseIndigo font-bold">
                Notification
              </span>
              <span className="text-sm text-japaneseIndigo font-bold">
                {notificationCount} FOR {totalUser} USERS
              </span>
            </div>
            <div className="flex w-full justify-between items-center">
              <span className="text-sm text-japaneseIndigo font-bold">SMS</span>
              <span className="text-sm text-japaneseIndigo font-bold">
                {smsCount} FOR {totalUser} USERS
              </span>
            </div>
            <div className="flex w-full justify-between items-center">
              <span className="text-sm text-japaneseIndigo font-bold">Email</span>
              <span className="text-sm text-japaneseIndigo font-bold">
                {emailCount} FOR {totalUser} USERS
              </span>
            </div>
            <div className="flex w-full justify-between items-center">
              <span className="text-sm text-japaneseIndigo font-bold">All</span>
              <span className="text-sm text-japaneseIndigo font-bold">
                {allCount} FOR {totalUser} USERS
              </span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default UserPlanCard;
