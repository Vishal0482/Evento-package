import React from "react";
import Advisement from "../Advisement";

function PSBPersonalDetails() {
  return (
    //    <!-- Content In -->
    <div class="rightInContent">
      <div class="wrapper min-h-full">
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
          <div class="space-y-5 -mx-2">
            <div class="w-full flex items-end flex-wrap">
              <div class="w-full md:w-1/2 px-2 inputHolder">
                <span class="input-titel">Professional Skill</span>
                <input type="text" class="input" />
              </div>
              <div class="w-full md:w-1/2 px-2 inputHolder">
                <span class="input-titel">
                  Full Name (Mr / Mrs / Ms) <span>*</span>
                </span>
                <input type="text" class="input" required />
              </div>
            </div>
            <div class="w-full flex items-end flex-wrap">
              <div class="w-full md:w-1/3 px-2 inputHolder">
                <div class="input-label-holder">
                  <label class="input-titel">
                    Mobile Number <span>*</span>
                  </label>
                  <div class="input-checkd">
                    <input type="checkbox" class="mr-2" />
                    Hidden
                  </div>
                </div>
                <input type="text" class="input" required />
              </div>
              <div class="w-full md:w-1/3 px-2 inputHolder">
                <div class="input-label-holder">
                  <label class="input-titel">
                    Alternative Mobile Number <b class="text-10">(Optional)</b>
                  </label>
                  <div class="input-checkd">
                    <input type="checkbox" class="mr-2" />
                    Hidden
                  </div>
                </div>
                <input type="text" class="input" required />
              </div>
              <div class="w-full md:w-1/3 px-2 inputHolder">
                <div class="input-label-holder">
                  <label class="input-titel">
                    Email Address <span>*</span>
                  </label>
                  <div class="input-checkd">
                    <input type="checkbox" class="mr-2" />
                    Hidden
                  </div>
                </div>
                <input type="text" class="input" required />
              </div>
            </div>
            <div class="w-1/2 px-2">
              <span class="input-titel">
                Price <b class="text-10">(If free value 0)</b>
              </span>
              <label
                for=""
                class="flex items-center w-full bg-white p-2 px-3.5 rounded-md"
              >
                <div class="w-full px-3.5">
                  <input
                    type="text"
                    class="w-full outline-none text-spiroDiscoBall font-bold text-base"
                    value=""
                  />
                </div>
                <div class="selectPrice flex items-center space-x-3">
                  <label class="block cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="perDay"
                      class="hidden"
                    />
                    <span class="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                      Per / Event
                    </span>
                  </label>
                  <label class="block cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="perHour"
                      class="hidden"
                      checked
                    />
                    <span class="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                      Per / hr
                    </span>
                  </label>
                  <label class="block cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="perEvent"
                      class="hidden"
                    />
                    <span class="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                      Per / Day
                    </span>
                  </label>
                </div>
              </label>
            </div>
            <div class="space-y-5">
              <h3 class="px-2">Address</h3>
              <div class="w-full flex flex-wrap">
                <div class="w-full md:w-1/3 px-2 inputHolder">
                  <span class="input-titel">Flat No.</span>
                  <input type="text" class="input" required />
                </div>
                <div class="w-full md:w-1/3 px-2 inputHolder">
                  <span class="input-titel">Street Name.</span>
                  <input type="text" class="input" />
                </div>
                <div class="w-full md:w-1/3 px-2 inputHolder">
                  <span class="input-titel">Area Name.</span>
                  <input type="text" class="input" required />
                </div>
              </div>
              <div class="w-full flex flex-wrap">
                <div class="w-full md:w-1/3 px-2 inputHolder">
                  <label class="input-titel">
                    City<span>*</span>
                  </label>
                  <input type="text" class="input" required />
                </div>
                <div class="w-full md:w-1/3 px-2 inputHolder">
                  <label class="input-titel">
                    State<span>*</span>
                  </label>
                  <input type="text" class="input" required />
                </div>
                <div class="w-full md:w-1/3 px-2 inputHolder">
                  <label class="input-titel">
                    Pincode<span>*</span>
                  </label>
                  <input type="text" class="input" required />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- advisement --> */}
          <Advisement />
        </div>
        <div class="prw-next-btn">
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

export default PSBPersonalDetails;
