import React from 'react'

import ringAd from "../../assest/images/ring-ad.png"

function EventCapacity() {
  return (
		//   <!-- Content In -->
		  <div class="rightInContent">
          <div class="wrapper min-h-full">
            
            <div class="space-y-8 h-full">
              {/* <!-- title-holder  --> */}
              <div class="flex justify-between items-center">
                <a href="#" class="flex items-center"><i class="icon-back-arrow mr-4 text-2xl"></i><h1>Sweet Love Catering</h1></a>
              </div>
              {/* <!-- step-progress-bar  --> */}
              <div class="w-full overflow-hidden">
                <ul class="flex justify-between step-progress-holder">
                  <li>
                    <div>
                      <span>01</span>
                    </div>
                    <h3>Add Place</h3>                        
                  </li>                      
                  <li>
                    <div>
                      <span>02</span>
                    </div>
                    <h3>about place</h3>                        
                  </li>
                  <li>
                    <div>
                      <span>03</span>
                    </div>
                    <h3>personal details</h3>                        
                  </li>
                  <li>
                    <div>
                      <span>04</span>
                    </div>
                    <h3>Photos & videos</h3>                        
                  </li>
                  <li>
                    <div>
                      <span>05</span>
                    </div>
                    <h3>add service</h3>                        
                  </li>
                  <li>
                    <div>
                      <span>06</span>
                    </div>
                    <h3>capacity</h3>                        
                  </li>
                  <li>
                    <div>
                      <span>07</span>
                    </div>
                    <h3>company details</h3>                        
                  </li>
                  <li>
                    <div>
                      <span>08</span>
                    </div>
                    <h3>Terms & Conditions</h3>                        
                  </li>
                  <li>
                    <div>
                      <span>09</span>
                    </div>
                    <h3>Discount</h3>                        
                  </li>
                  <li>
                    <div>
                      <span>10</span>
                    </div>
                    <h3>Calendar</h3>                        
                  </li>
                </ul>
              </div>
              {/* <!-- main-content  --> */}
              <div class="space-y-5">
                <div class="flex items-end -mx-3.5">
                  <div class="w-full lg:w-1/3 px-3.5">
                      <label for="selact" class="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                        <input type="radio" name="select" id="selact" class="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer"/>
                        <h3 class="text-base">Romantic Stay</h3>
                      </label>
                  </div>
                  <div class="w-full lg:w-1/3 px-3.5">
                      <label for="selact1" class="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                        <input type="radio" name="select" id="selact1" class="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer"/>
                        <h3 class="text-base">Romantic Lunch / Dinner</h3>
                      </label>
                  </div>
                  <div class="w-full lg:w-1/3 px-3.5">
                    <label for="selact2" class="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                      <input type="radio" name="select" id="selact2" class="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer"/>
                      <h3 class="text-base">Romantic Candlelight Dinner</h3>
                    </label>
                  </div>
                </div>
                <div class="w-full inputHolder">
                    <span class="input-titel">person capacity</span>
                    <input type="text" class="input font-bold" value="20"/>
                </div>
                <div class="w-full inputHolder">
                    <span class="input-titel">Parking Capacity</span>
                    <input type="text" class="input font-bold" value="20"/>
                </div>
                <div class="w-full relative">
                    <span class="input-titel">About place</span>
                    <div class="w-full flex flex-wrap bg-white p-2 rounded-md">
                      <textarea name="" id="" cols="30" rows="5" class="outline-none w-full"></textarea>
                      <a href="#" class="title-btn ml-auto uppercase">Location from Google map</a>
                    </div>                    
                </div>
              </div>
              {/* <!-- advisement --> */}
              <div class="w-full mt-5">
                  <img src={ringAd} alt="ring-ad" class="w-full object-cover"/>
              </div>
            </div>
            <div class="prw-next-btn">
              <button type="button" class="flex items-center"><i class="icon-back-arrow mr-3"></i><h3>Back</h3></button>
              <button type="button" class="flex items-center active"><h3>Next</h3><i class="icon-next-arrow ml-3"></i></button>
            </div>
          </div>
        </div>
  )
}

export default EventCapacity