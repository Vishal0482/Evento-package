import React from 'react'
import { Link } from 'react-router-dom';

function PersonalSkillBusinessPromote() {
  return (
    <div>
      <div className="">
            <h3>Bill Details</h3>
            <div className="bg-white rounded p-8 mt-6 space-y-5">
              <div className="flex items-start">
                <i className="w-8 icon-bell text-2xl mr-5"></i>
                <div className="w-full flex justify-between">
                  <div className="">
                    <p className="text-base text-japaneseIndigo font-bold">Notification</p>
                    <span className="text-sm text-gray-300 font-normal">(Free)</span>
                  </div>
                  <div className="flex items-center text-xl xl:text-2xl text-japaneseIndigo"><i className="icon-rs rs-black text-base mr-3"></i>0</div>
                </div>
              </div>
              <div className="flex items-start">
                <i className="w-8 icon-fill-massage text-2xl mr-5"></i>
                <div className="w-full flex justify-between">
                  <div className="">
                    <p className="text-base text-japaneseIndigo font-bold">SMS</p>
                    <span className="text-sm text-gray-300 font-normal">280 Phone Number x 0.18</span>
                  </div>
                  <div className="flex items-center text-xl xl:text-2xl text-japaneseIndigo"><i className="icon-rs rs-black text-base mr-3"></i>6</div>
                </div>
              </div>
              <div className="flex items-start">
                <i className="w-8 icon-email text-2xl mr-5"></i>
                <div className="w-full flex justify-between">
                  <div className="">
                    <p className="text-base text-japaneseIndigo font-bold">Email</p>
                    <span className="text-sm text-gray-300 font-normal">100 Email ID x 0.06</span>
                  </div>
                  <div className="flex items-center text-xl xl:text-2xl text-japaneseIndigo"><i className="icon-rs rs-black text-base mr-3"></i>50.4</div>
                </div>
              </div>
              <div className="flex justify-between capitalize text-magicPotion">
                <h3>discount savings</h3>
                <h2>- <i className="icon-rs text-lg before:text-magicPotion before:content-['\e921']"></i> 30</h2>
              </div>
              <span className="block border-b-2 border-dashed border-gray-300"></span>
              <div className="flex justify-between capitalize">
                <h1>total</h1>
                <h2><i className="icon-rs rs-black text-lg"></i>26.4</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center border border-caribbeanGreen rounded-md px-5 py-6 bg-green-50">
            <div>
              <h3 className="text-caribbeanGreen pb-2">Coupon applied  -  You saved ₹30</h3>
              <span className="text-sm text-quicksilver">Coupon Code : 5489off</span>
            </div>
            <div>
              <Link to="/"><i className="icon-delete text-2xl"></i></Link>
            </div>
          </div>
          {/* <!-- pay now button  --> */}
          <button type="button" className="btn-primary w-full uppercase"><h3>Pay NOW</h3></button>
    </div>
  )
}

export default PersonalSkillBusinessPromote;
