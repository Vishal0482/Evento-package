import React from "react";
import Advisement from "../Advisement";

function PSBOtherCost() {
  return (
    <div class="rightInContent">
      <div class="wrapper min-h-full flex flex-col">
        <div class="space-y-8 h-full">
          {/* <!-- title-holder  --> */}
          <div class="flex justify-between items-center">
            <a href="#" class="flex items-center">
              <i class="icon-back-arrow mr-4 text-2xl"></i>
              <h1>Personal Skill Business</h1>
            </a>
          </div>
          {/* <!-- step-progress-bar  --> */}
          <div class="w-full overflow-hidden">
            <ul class="flex justify-between step-progress-holder">
              <li>
                <div>
                  <span>01</span>
                </div>
                <h3>Select Skill</h3>
              </li>
              <li>
                <div>
                  <span>02</span>
                </div>
                <h3>Personal Details</h3>
              </li>
              <li>
                <div>
                  <span>03</span>
                </div>
                <h3>Photos & Videos</h3>
              </li>
              <li>
                <div>
                  <span>04</span>
                </div>
                <h3>Equipment</h3>
              </li>
              <li>
                <div>
                  <span>05</span>
                </div>
                <h3>Other Cost</h3>
              </li>
              <li>
                <div>
                  <span>06</span>
                </div>
                <h3>Company Details</h3>
              </li>
              <li>
                <div>
                  <span>07</span>
                </div>
                <h3>Terms and Conditions</h3>
              </li>
              <li>
                <div>
                  <span>08</span>
                </div>
                <h3>Discount</h3>
              </li>
              <li>
                <div>
                  <span>09</span>
                </div>
                <h3>Calendar</h3>
              </li>
            </ul>
          </div>
          {/* <!-- main-content  --> */}
          <div class="space-y-5 pt-5">
            <div class="flex justify-between items-center space-x-5">
              <div class="w-full md:w-1/2 lg:w-1/3">
                <h3>Travel Cost</h3>
                <div class="bg-white shadow rounded-md mt-5">
                  <div class="flex items-center bg-brightGray px-8 py-3">
                    <input
                      type="checkbox"
                      id="on"
                      class="switch mx-3 order-2"
                    />
                    <span class="off text-base font-bold anim order-1 text-caribbeanGreen">
                      Include
                    </span>
                    <span class="on text-base font-bold anim order-3">
                      Exclude
                    </span>
                  </div>
                  <div class="w-full px-8 py-5">
                    <textarea
                      name=""
                      id=""
                      rows="4"
                      class="outline-none flex items-center w-full bg-white rounded-md resize-none"
                      placeholder="Enter Details..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3">
                <h3>Accommodation</h3>
                <div class="bg-white shadow rounded-md mt-5">
                  <div class="flex items-center bg-brightGray px-8 py-3">
                    <input
                      type="checkbox"
                      id="on"
                      class="switch mx-3 order-2"
                    />
                    <span class="off text-base font-bold anim order-1 text-caribbeanGreen">
                      Include
                    </span>
                    <span class="on text-base font-bold anim order-3">
                      Exclude
                    </span>
                  </div>
                  <div class="w-full px-8 py-5">
                    <textarea
                      name=""
                      id=""
                      rows="4"
                      class="outline-none flex items-center w-full bg-white rounded-md resize-none"
                      placeholder="Enter Details..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3">
                <h3>Food</h3>
                <div class="bg-white shadow rounded-md mt-5">
                  <div class="flex items-center bg-brightGray px-8 py-3">
                    <input
                      type="checkbox"
                      id="on"
                      class="switch mx-3 order-2"
                    />
                    <span class="off text-base font-bold anim order-1 text-caribbeanGreen">
                      Include
                    </span>
                    <span class="on text-base font-bold anim order-3">
                      Exclude
                    </span>
                  </div>
                  <div class="w-full px-8 py-5">
                    <textarea
                      name=""
                      id=""
                      rows="4"
                      class="outline-none flex items-center w-full bg-white rounded-md resize-none"
                      placeholder="Enter Details..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- advisement --> */}
          <Advisement />
        </div>
        <div class="prw-next-btn mt-auto">
          <button type="button" class="flex items-center">
            <i class="icon-back-arrow mr-3"></i>
            <h3>Back</h3>
          </button>
          <button type="button" class="flex items-center active">
            <h3>Next</h3>
            <i class="icon-next-arrow ml-3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PSBOtherCost;
