import React, {useState} from 'react'
import ringAd from "../../assest/images/ring-ad.png"

function EventAboutPlace() {

	
	const [isAddPlaceWithDisplayNamePopUpOpen, setIsAddPlaceWithDisplayNamePopUpOpen] = useState(false);
  
  return (
	//  <!-- Content In -->
	 <div class="rightInContent">
	 <div class="wrapper min-h-full flex flex-col">
	   <div class="space-y-8 h-full">
		 {/* <!-- title-holder  -->/ */}
		 <div class="flex justify-between items-center">
		   <a href="#" class="flex items-center"><i class="icon-back-arrow mr-4 text-2xl"></i>
			 <h1>Sweet Love Catering</h1>
		   </a>
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
		 <div class="space-y-3">
		   <div class="w-full">
			 <span class="input-titel">Price</span>
			 <label for="" class="flex items-center w-full bg-white p-2 px-3.5 rounded-md">
			   <div class="w-full px-3.5">
				 <input type="text" class="w-full outline-none text-spiroDiscoBall font-bold text-base"
				   value="100 INR" />
			   </div>
			   <div class="selectPrice flex items-center space-x-3">
				 <label class="block cursor-pointer">
				   <input type="radio" name="price" value="perDay" class="hidden" />
				   <span
					 class="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
					 Per / Day
				   </span>
				 </label>
				 <label class="block cursor-pointer">
				   <input type="radio" name="price" value="perHour" class="hidden" checked />
				   <span
					 class="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
					 Per / Hour
				   </span>
				 </label>
				 <label class="block cursor-pointer">
				   <input type="radio" name="price" value="perEvent" class="hidden" />
				   <span
					 class="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
					 Per / Event
				   </span>
				 </label>
			   </div>
			 </label>
		   </div>
		   <div class="w-full">
			 <span class="input-titel">About place</span>
			 <textarea name="" id="" cols="30" rows="5"
			   class="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md"></textarea>
		   </div>
		 </div>
		 {/* <!-- advisement --> */}
		 <div class="w-full mt-5">
		   <img src={ringAd} alt="ring-ad" class="w-full object-cover" />
		 </div>
	   </div>
	   <div class="prw-next-btn mt-auto">
		 <button type="button" class="flex items-center"><i class="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" class="flex items-center active"><h3>Next</h3><i class="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>

   </div>
  )
}

export default EventAboutPlace