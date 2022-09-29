import React from 'react'
import { Link } from 'react-router-dom'

import ringAd from "../../assest/images/ring-ad.png"

function EventCapacity() {
  return (
		//   <!-- Content In -->
		  <div className="rightInContent">
          <div className="wrapper min-h-full">
            
            <div className="space-y-8 h-full">
              {/* <!-- title-holder  --> */}
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Sweet Love Catering</h1></Link>
              </div>
              {/* <!-- step-progress-bar  --> */}
              <div className="w-full overflow-hidden">
                <ul className="flex justify-between step-progress-holder">
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
              <div className="space-y-5">
                <div className="flex items-end -mx-3.5">
                  <div className="w-full lg:w-1/3 px-3.5">
                      <label for="selact" className="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                        <input type="radio" name="select" id="selact" className="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer"/>
                        <h3 className="text-base">Romantic Stay</h3>
                      </label>
                  </div>
                  <div className="w-full lg:w-1/3 px-3.5">
                      <label for="selact1" className="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                        <input type="radio" name="select" id="selact1" className="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer"/>
                        <h3 className="text-base">Romantic Lunch / Dinner</h3>
                      </label>
                  </div>
                  <div className="w-full lg:w-1/3 px-3.5">
                    <label for="selact2" className="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                      <input type="radio" name="select" id="selact2" className="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer"/>
                      <h3 className="text-base">Romantic Candlelight Dinner</h3>
                    </label>
                  </div>
                </div>
                <div className="w-full inputHolder">
                    <span className="input-titel">person capacity</span>
                    <input type="text" className="input font-bold" value="20"/>
                </div>
                <div className="w-full inputHolder">
                    <span className="input-titel">Parking Capacity</span>
                    <input type="text" className="input font-bold" value="20"/>
                </div>
                <div className="w-full relative">
                    <span className="input-titel">About place</span>
                    <div className="w-full flex flex-wrap bg-white p-2 rounded-md">
                      <textarea name="" id="" cols="30" rows="5" className="outline-none w-full"></textarea>
                      <Link to="/" className="title-btn ml-auto uppercase">Location from Google map</Link>
                    </div>                    
                </div>
              </div>
              {/* <!-- advisement --> */}
              <div className="w-full mt-5">
                  <img src={ringAd} alt="ring-ad" className="w-full object-cover"/>
              </div>
            </div>
            <div className="prw-next-btn">
              <button type="button" className="flex items-center"><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
              <button type="button" className="flex items-center active"><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
            </div>
          </div>
        </div>
  )
}

export default EventCapacity