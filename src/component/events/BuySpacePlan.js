import React from 'react';
import { useNavigate } from 'react-router-dom';
import Advertisement from '../Advertisement';

function BuySpacePlan() {
    const navigate = useNavigate();
  return (
    <div className="rightInContent">
          <div className="wrapper">
            <div className="flex justify-between items-center">
              <a href="#" className="flex items-center" onClick={() => navigate(-1)}><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Buy Space Plan</h1></a>
            </div>
            <div className="flex flex-wrap items-center -m-3 mt-7">
              <div className="w-full xl:w-1/2 p-3">
                <div className="bg-white rounded flex items-center justify-between p-7">
                  <div>
                    <h1>Basic</h1>
                    <p className="text-quicksilver text-base font-normal pt-5">25 images (up to 7MB/Image)</p>
                    <p className="text-quicksilver text-base font-normal pt-3">10 Videos (up to 3GB/Video , up to 40min)</p>
                  </div>
                  <div className="ml-auto">
                    <h1 className="pb-5">99 INR <span className="text-xl font-normal text-quicksilver">/ Mo</span></h1>
                    <button className="block ml-auto btn-primary small uppercase"><p>buy Plan</p></button>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2 p-3">
                <div className="bg-white rounded flex items-center justify-between p-7">
                  <div>
                    <h1>Standard</h1>
                    <p className="text-quicksilver text-base font-normal pt-5">50 images (up to 7MB/Image)</p>
                    <p className="text-quicksilver text-base font-normal pt-3">25 Videos (up to 3GB/Video , up to 40min)</p>
                  </div>
                  <div className="ml-auto">
                    <h1 className="pb-5">199 INR <span className="text-xl font-normal text-quicksilver">/ Mo</span></h1>
                    <button className="block ml-auto btn-primary small uppercase"><p>buy Plan</p></button>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2 p-3">
                <div className="bg-white rounded flex items-center justify-between p-7">
                  <div>
                    <h1>Pro</h1>
                    <p className="text-quicksilver text-base font-normal pt-5">100 images (up to 7MB/Image)</p>
                    <p className="text-quicksilver text-base font-normal pt-3">50 Videos (up to 3GB/Video , up to 40min)</p>
                  </div>
                  <div className="ml-auto">
                    <h1 className="pb-5">499 INR <span className="text-xl font-normal text-quicksilver">/ Mo</span></h1>
                    <button className="block ml-auto btn-primary small uppercase"><p>buy Plan</p></button>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2 p-3">
                <div className="bg-white rounded flex items-center justify-between p-7">
                  <div>
                    <h1>Premium</h1>
                    <p className="text-quicksilver text-base font-normal pt-5">200 images (up to 7MB/Image)</p>
                    <p className="text-quicksilver text-base font-normal pt-3">100 Videos (up to 3GB/Video , up to 40min)</p>
                  </div>
                  <div className="ml-auto">
                    <h1 className="pb-5">849 INR <span className="text-xl font-normal text-quicksilver">/ Mo</span></h1>
                    <button className="block ml-auto btn-primary small uppercase"><p>buy Plan</p></button>
                  </div>
                </div>
              </div>
            </div>
          <Advertisement />
          </div>

        </div>
  )
}

export default BuySpacePlan;
