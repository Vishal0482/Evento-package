import React from "react";
import celebrationSvg from "../../assest/svg/celebration.svg";
import UserPlanCard from "./UserPlanCard";

function AllUserSelectPlan() {
  return (
    <div>
      {/* <!-- select user card  --> */}
      <div className="">
        <h3>Select User Plan</h3>
        <div className="flex justify-between space-x-5 items-center py-5">
          {/* <UserPlanCard totalUser={999} notificationCount={69} smsCount={399} emailCount={89} allCount={475} colorFrom={"#13e1b094"} colorTo={"#13E1B0"} />
          <UserPlanCard totalUser={9999} notificationCount={69} smsCount={399} emailCount={89} allCount={475} />
          <UserPlanCard totalUser={99999} notificationCount={69} smsCount={399} emailCount={89} allCount={475} /> */}
          
          <div className="w-1/3">
                  <div className="bg-gradient-to-r from-[#13e1b094] to-[#13E1B0] p-5 rounded-xl relative overflow-hidden">
                    <div className="absolute -left-3 -bottom-3">
                      <img src={celebrationSvg} alt="celebration" />
                    </div>
                    <label htmlFor="user-999" className="relative">
                      <div className="flex items-center">
                        <div className="radio">
                          <input className="radio" type="radio" name="radio-card" id="user-999" />
                          <i className="icon-right"></i>
                        </div>
                        <span className="text-xl font-normal text-white ml-5">FOR 999 USERS </span>
                      </div>
                      <div className="pt-7 space-y-3">
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">Notification</span>
                          <span className="text-sm text-japaneseIndigo font-bold">69 FOR 999 USERS</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">SMS</span>
                          <span className="text-sm text-japaneseIndigo font-bold">399 FOR 999 USERS</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">Email</span>
                          <span className="text-sm text-japaneseIndigo font-bold">89 FOR 999 USERS</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">All</span>
                          <span className="text-sm text-japaneseIndigo font-bold">475 FOR 999 USERS</span>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="bg-gradient-to-r from-[#20c0e878] to-[#20C0E8] p-5 rounded-xl relative overflow-hidden">
                    <div className="absolute -left-3 -bottom-3">
                      <img src={celebrationSvg} alt="celebration" />
                    </div>
                    <label htmlFor="user-9999" className="relative">
                      <div className="flex items-center">
                        <div className="radio">
                          <input className="radio" type="radio" name="radio-card" id="user-9999" checked />
                          <i className="icon-right"></i>
                        </div>
                        <span className="text-xl font-normal text-white ml-5">FOR 9999 USERS </span>
                      </div>
                      <div className="pt-7 space-y-3">
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">Notification</span>
                          <span className="text-sm text-japaneseIndigo font-bold">299 FOR 9999 USERS</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">SMS</span>
                          <span className="text-sm text-japaneseIndigo font-bold">1999 FOR 9999 USERS</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">Email</span>
                          <span className="text-sm text-japaneseIndigo font-bold">8399 FOR 9999 USERS</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">All</span>
                          <span className="text-sm text-japaneseIndigo font-bold">2299 FOR 9999 USERS</span>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="bg-gradient-to-r from-[#faba1585] to-[#FABA15] p-5 rounded-xl relative overflow-hidden">
                    <div className="absolute -left-3 -bottom-3">
                      <img src={celebrationSvg} alt="celebration" />
                    </div>
                    <label htmlFor="user-99999" className="relative">
                      <div className="flex items-center">
                        <div className="radio">
                          <input className="radio" type="radio" name="radio-card" id="user-99999"/>
                          <i className="icon-right"></i>
                        </div>
                        <span className="text-xl font-normal text-white ml-5">FOR 99999 USERS </span>
                      </div>
                      <div className="card-content pt-7 space-y-3">
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">Notification</span>
                          <span className="text-sm text-japaneseIndigo font-bold">1799 FOR 99999 USERS</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">SMS</span>
                          <span className="text-sm text-japaneseIndigo font-bold">16999 FOR 99999 USERS</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">Email</span>
                          <span className="text-sm text-japaneseIndigo font-bold">3399 FOR 99999 USERS</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <span className="text-sm text-japaneseIndigo font-bold">All</span>
                          <span className="text-sm text-japaneseIndigo font-bold">475 FOR 99999 USERS</span>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

        </div>
      </div>
      {/* <!-- dashed border   --> */}
      <h2 className="border-t-2 border-gray-400 border-dashed text-center relative my-10">
        <small className="text-japaneseIndigo py-1 px-10 absolute -mt-5 bg-brightGray">
          OR
        </small>
      </h2>
      {/* <!-- main-content  --> */}
      <div>
        <div className="flex items-end justify-between">
          <div className="w-1/2">
            <h3 className="pb-3">Select All App User</h3>
            <select className="bg-white rounded-md flex space-x-3 outline-0 px-6 py-[18px] relative arrow option">
              <option>Select All</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className="bg-white p-[18px] rounded-md">
            <span className="text-base font-bold text-japaneseIndigo">
              Total User : 10000
            </span>
          </div>
        </div>
        <div className="flex pt-7">
          <div className="w-1/2">
            <h3 className="pb-3">ads publish location</h3>
            <select className="bg-white rounded-md flex space-x-3 outline-0 px-6 py-[18px] relative location option">
              <option>Surat</option>
              <option>Rajkot</option>
              <option>Ahmadabad</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUserSelectPlan;
