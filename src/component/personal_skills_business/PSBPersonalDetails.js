import React from "react";
import { Link } from "react-router-dom";
import Advertisement from "../Advertisement";

function PSBPersonalDetails() {
  return (
    //    <!-- Content In -->
    <div className="rightInContent">
      <div className="wrapper min-h-full">
        <div className="space-y-8 h-full">
          {/* <!-- title-holder  --> */}
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <i className="icon-back-arrow mr-4 text-2xl"></i>
              <h1>Personal Skill Business</h1>
            </Link>
          </div>
          {/* <!-- step-progress-bar  --> */}
          <div className="w-full overflow-hidden">
            <ul className="flex justify-between step-progress-holder">
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
          <div className="space-y-5 -mx-2">
            <div className="w-full flex items-end flex-wrap">
              <div className="w-full md:w-1/2 px-2 inputHolder">
                <span className="input-titel">Professional Skill</span>
                <input type="text" className="input" />
              </div>
              <div className="w-full md:w-1/2 px-2 inputHolder">
                <span className="input-titel">
                  Full Name (Mr / Mrs / Ms) <span>*</span>
                </span>
                <input type="text" className="input" required />
              </div>
            </div>
            <div className="w-full flex items-end flex-wrap">
              <div className="w-full md:w-1/3 px-2 inputHolder">
                <div className="input-label-holder">
                  <label className="input-titel">
                    Mobile Number <span>*</span>
                  </label>
                  <div className="input-checkd">
                    <input type="checkbox" className="mr-2" />
                    Hidden
                  </div>
                </div>
                <input type="text" className="input" required />
              </div>
              <div className="w-full md:w-1/3 px-2 inputHolder">
                <div className="input-label-holder">
                  <label className="input-titel">
                    Alternative Mobile Number <b className="text-10">(Optional)</b>
                  </label>
                  <div className="input-checkd">
                    <input type="checkbox" className="mr-2" />
                    Hidden
                  </div>
                </div>
                <input type="text" className="input" required />
              </div>
              <div className="w-full md:w-1/3 px-2 inputHolder">
                <div className="input-label-holder">
                  <label className="input-titel">
                    Email Address <span>*</span>
                  </label>
                  <div className="input-checkd">
                    <input type="checkbox" className="mr-2" />
                    Hidden
                  </div>
                </div>
                <input type="text" className="input" required />
              </div>
            </div>
            <div className="w-1/2 px-2">
              <span className="input-titel">
                Price <b className="text-10">(If free value 0)</b>
              </span>
              <label
                htmlfor=""
                className="flex items-center w-full bg-white p-2 px-3.5 rounded-md"
              >
                <div className="w-full px-3.5">
                  <input
                    type="text"
                    className="w-full outline-none text-spiroDiscoBall font-bold text-base"
                    value=""
                  />
                </div>
                <div className="selectPrice flex items-center space-x-3">
                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="perDay"
                      className="hidden"
                    />
                    <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                      Per / Event
                    </span>
                  </label>
                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="perHour"
                      className="hidden"
                      checked
                    />
                    <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                      Per / hr
                    </span>
                  </label>
                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="perEvent"
                      className="hidden"
                    />
                    <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                      Per / Day
                    </span>
                  </label>
                </div>
              </label>
            </div>
            <div className="space-y-5">
              <h3 className="px-2">Address</h3>
              <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/3 px-2 inputHolder">
                  <span className="input-titel">Flat No.</span>
                  <input type="text" className="input" required />
                </div>
                <div className="w-full md:w-1/3 px-2 inputHolder">
                  <span className="input-titel">Street Name.</span>
                  <input type="text" className="input" />
                </div>
                <div className="w-full md:w-1/3 px-2 inputHolder">
                  <span className="input-titel">Area Name.</span>
                  <input type="text" className="input" required />
                </div>
              </div>
              <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/3 px-2 inputHolder">
                  <label className="input-titel">
                    City<span>*</span>
                  </label>
                  <input type="text" className="input" required />
                </div>
                <div className="w-full md:w-1/3 px-2 inputHolder">
                  <label className="input-titel">
                    State<span>*</span>
                  </label>
                  <input type="text" className="input" required />
                </div>
                <div className="w-full md:w-1/3 px-2 inputHolder">
                  <label className="input-titel">
                    Pincode<span>*</span>
                  </label>
                  <input type="text" className="input" required />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- advisement --> */}
          <Advertisement />
        </div>
        <div className="prw-next-btn">
          <button type="button" className="flex items-center">
            <i className="icon-back-arrow mr-3"></i>
            <h3>Back</h3>
          </button>
          <button type="button" className="flex items-center active">
            <h3>Next</h3>
            <i className="icon-next-arrow ml-3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PSBPersonalDetails;
