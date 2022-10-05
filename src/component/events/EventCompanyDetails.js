import React from 'react'

function EventCompanyDetails() {
  return (
	//   <!-- Content In -->
	  <div className="rightInContent">
	  <div className="wrapper min-h-full">
		
		<div className="space-y-8 h-full">
		  {/* <!-- title-holder  --> */}
		  <div className="flex justify-between items-center">
			<a href="#" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Sweet Love Catering</h1></a>
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
		  <div className="space-y-5 -mx-2">
			<div className="w-full flex items-end flex-wrap">
			  <d  iv className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company Name</span>
				  <input type="text" className="input"/>
			  </d>
			  <div className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company GST (Optional)</span>
				  <label htmlfor="upload" className="upload upload-popup">
					<input type="file" name="images" id="upload" className="appearance-none hidden"/>
					<span className="input-titel mt-1"><i className="icon-pdf mr-2"></i>Upload PDF</span>
				  </label>
			  </div>
			</div>
			<div className="w-full flex items-end flex-wrap">
			  <div className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company Contact No</span>
				  <input type="text" className="input"/>
			  </div>
			  <div className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company Email</span>
				  <input type="text" className="input"/>
			  </div>
			</div> 
			<div className="space-y-5">
				<h3 className="px-2">Address</h3>
				<div className="w-full flex flex-wrap">
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Flat No.</span>
					  <input type="text" className="input"/>
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Street Name.</span>
					  <input type="text" className="input"/>
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Area Name.</span>
					  <input type="text" className="input"/>
				  </div>
				</div>
				<div className="w-full flex flex-wrap">
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <label className="input-titel">City</label>
					  <input type="text" className="input"/>
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <label className="input-titel">State</label>
					  <input type="text" className="input"/>
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <label className="input-titel">Pincode</label>
					  <input type="text" className="input"/>
				  </div>
				</div>
			</div>
			<div className="upload-holder px-2">
			  <span className="input-titel ml-2">Company Photos Max 5 images (up to 5MB/image)</span>
			  <label htmlfor="upload" className="upload">
				<input type="file" name="images" id="upload" className="appearance-none hidden" />
				<span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>
			  </label>
			</div>
			<div className="upload-holder px-2">
				<span className="input-titel ml-2">Company Video Max 2 videos (up to 2GB/video)</span>
				<label htmlfor="upload2" className="upload">
				  <input type="file" name="images" id="upload2" className="appearance-none hidden" />
				  <div className="mt-1 flex items-baseline justify-center"><i className="icon-video-play text-base mr-2"></i> <span className="input-titel pt-1">Upload videos</span></div>
				</label>
			</div>
		  </div>
		  <span className="input-titel capitalize">Disclaimer - These images and videos will first be verified by the admin and then given the authority.
		</span>
		</div>

		<div className="prw-next-btn">
		  <button type="button" className="flex items-center"><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		  <button type="button" className="flex items-center active"><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
		</div>

	  </div>
	</div>
  )
}

export default EventCompanyDetails