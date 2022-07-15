import React from "react";

function PSBCompanyDetails() {
  return (
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
          <div class="-mx-2">
            <div class="w-full flex items-end flex-wrap space-y-5">
              <div class="w-full md:w-1/2 px-2 inputHolder">
                <span class="input-titel">Company Name</span>
                <input type="text" class="input" />
              </div>
              <div class="w-full md:w-1/2 px-2 inputHolder">
                <span class="input-titel">Company GST (Optional)</span>
                <label for="upload" class="upload upload-popup">
                  <input
                    type="file"
                    name="images"
                    id="upload"
                    class="appearance-none hidden"
                  />
                  <span class="input-titel mt-1">
                    <i class="icon-pdf mr-2"></i>Upload PDF
                  </span>
                </label>
              </div>
              <div class="w-full md:w-1/2 px-2 inputHolder">
                <span class="input-titel">Company Contact No</span>
                <input type="text" class="input" />
              </div>
              <div class="w-full md:w-1/2 px-2 inputHolder">
                <span class="input-titel">Company Email</span>
                <input type="text" class="input" />
              </div>
              <div class="w-full px-2">
                <span class="input-titel">Company About</span>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  class="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md"
                ></textarea>
              </div>
            </div>
            <div class="space-y-5 mt-7">
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
            <div class="upload-holder px-2 pt-5">
              <span class="input-titel">
                Company Photos Max 5 images (up to 5MB/image)
              </span>
              <label for="upload" class="upload">
                <input
                  type="file"
                  name="images"
                  id="upload"
                  class="appearance-none hidden"
                />
                <span class="input-titel mt-1">
                  <i class="icon-image mr-2"></i>Upload Images
                </span>
              </label>
            </div>
            <div class="upload-holder px-2 pt-5">
              <span class="input-titel">
                Company Video Max 2 videos (up to 2GB/video)
              </span>
              <label for="upload2" class="upload">
                <input
                  type="file"
                  name="images"
                  id="upload2"
                  class="appearance-none hidden"
                />
                <div class="mt-1 flex items-baseline justify-center">
                  <i class="icon-video-play text-base mr-2"></i>{" "}
                  <span class="input-titel pt-1">Upload videos</span>
                </div>
              </label>
            </div>
          </div>
          {/* <!-- add more button  --> */}
          <p class="text-sm text-quicksilver font-bold">
            Disclaimer - These images and videos will first be verified by the
            admin and then given the authority.
          </p>
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

export default PSBCompanyDetails;
