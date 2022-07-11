import React from 'react'
import ringAd from "../../assest/images/ring-ad.png"
function EventPersonalDetails() {
  return (
	// <!-- Content In -->
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
		<div class="space-y-5 -mx-2">
		  <div class="w-full flex items-end flex-wrap">
			<div class="w-full md:w-1/2 px-2 inputHolder">
				<span class="input-titel">Professional Skill</span>
				<input type="text" class="input"/>
			</div>
			<div class="w-full md:w-1/2 px-2 inputHolder">
				<span class="input-titel">Full Name (Mr / Mrs / Ms) <span>*</span></span>
				<input type="text" class="input" required/>
			</div>
		  </div> 
		  <div class="w-full flex items-end flex-wrap">
			<div class="w-full md:w-1/3 px-2 inputHolder">
				<div class="input-label-holder">
				  <label class="input-titel">Mobile Number <span>*</span></label>
				  <div class="input-checkd"><input type="checkbox" class="mr-2" />Hidden</div>
				</div>
				<input type="text" class="input" required/>
			</div>
			<div class="w-full md:w-1/3 px-2 inputHolder">
				<label class="input-titel">Alternative Mobile Number <span></span></label>
				<input type="text" class="input"/>
			</div>
			<div class="w-full md:w-1/3 px-2 inputHolder">
				<div class="input-label-holder">
				  <label class="input-titel">Email Address <span>*</span></label>
				  <div class="input-checkd"><input type="checkbox" class="mr-2"/>Hidden</div>
				</div>
				<input type="text" class="input" required/>
			</div>
		  </div>
		  <div class="space-y-5">
			  <h3 class="px-2">Address</h3>
			  <div class="w-full flex flex-wrap">
				<div class="w-full md:w-1/3 px-2 inputHolder">
					<span class="input-titel">Flat No.</span>
					<input type="text" class="input" required/>
				</div>
				<div class="w-full md:w-1/3 px-2 inputHolder">
					<span class="input-titel">Street Name.</span>
					<input type="text" class="input"/>
				</div>
				<div class="w-full md:w-1/3 px-2 inputHolder">
					<span class="input-titel">Area Name.</span>
					<input type="text" class="input" required/>
				</div>
			  </div>
			  <div class="w-full flex flex-wrap">
				<div class="w-full md:w-1/3 px-2 inputHolder">
					<label class="input-titel">City <span>*</span></label>
					<input type="text" class="input" required/>
				</div>
				<div class="w-full md:w-1/3 px-2 inputHolder">
					<label class="input-titel">State <span>*</span></label>
					<input type="text" class="input" required/>
				</div>
				<div class="w-full md:w-1/3 px-2 inputHolder">
					<label class="input-titel">Pincode <span>*</span></label>
					<input type="text" class="input" required/>
				</div>
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

export default EventPersonalDetails