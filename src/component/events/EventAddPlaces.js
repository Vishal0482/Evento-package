import React from 'react'
import ringAd from "../../assest/images/ring-ad.png"


function EventAddPlaces() {
  return (
	//  <!-- Content In -->
	 <div class="rightInContent">
	 <div class="wrapper min-h-full flex flex-col">
	   <div class="space-y-8 h-full">
		 {/* <!-- title-holder  --> */}
		 <div class="flex justify-between items-center">
			 <a href="#" class="flex items-center"><i class="icon-back-arrow mr-4 text-2xl"></i><h1>Create New</h1></a>
			 <a href="#" class="btn-primary small"><i class="icon-plus mr-3"></i>Add place</a>
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
		 <div class=" space-y-3">
		   <div class="w-full flex items-center">
			 <div>
				 <label class="checkbox w-16">
					 <input type="checkbox" checked/>
					 <i class="icon-right"></i>                  
				 </label>
			 </div>
			 <div class="w-full px-7 py-5 bg-white rounded">
				 <div class="flex items-start justify-between">
					 <div>
					   <h2>Sweet Love Catering</h2>
					   <span class="text-sm text-spiroDiscoBall font-medium tracking-wider">Caterers</span>
					 </div>
					 <div class="flex">
						 <a href="#" class="flex items-center text-xs text-quicksilver font-semibold tracking-wider pr-4 border-r border-quicksilver"><i class="icon-fill-delete mr-1"></i>Delete</a>
						 <a href="#" class="flex items-center text-xs text-quicksilver font-semibold tracking-wider pl-4"><i class="icon-edit mr-1"></i>Edit</a>
					 </div>
				 </div>
			 </div>
		   </div> 
		   <div class="w-full flex items-center">
			 <div>
				 <label class="checkbox w-16">
					 <input type="checkbox"/>
					 <i class="icon-right"></i>                  
				 </label>
			 </div>
			 <div class="w-full px-7 py-5 bg-white rounded">
				 <div class="flex items-start justify-between">
					 <div>
					   <h2>Sweet Love Catering</h2>
					   <span class="text-sm text-spiroDiscoBall font-medium tracking-wider">Caterers</span>
					 </div>
					 <div class="flex">
						 <a href="#" class="flex items-center text-xs text-quicksilver font-semibold tracking-wider pr-4 border-r border-quicksilver"><i class="icon-fill-delete mr-1"></i>Delete</a>
						 <a href="#" class="flex items-center text-xs text-quicksilver font-semibold tracking-wider pl-4"><i class="icon-edit mr-1"></i>Edit</a>
					 </div>
				 </div>
			 </div>
		   </div>  
		 </div>
		 {/* <!-- advisement --> */}
		 <div class="w-full mt-5">
			 <img src={ringAd} alt="ring-ad" class="w-full object-cover"/>
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

export default EventAddPlaces