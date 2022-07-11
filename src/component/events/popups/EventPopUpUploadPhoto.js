import React from 'react'

function EventPopUpUploadPhoto({handleClose}) {
  return (
	//  <!-- Upload Photo  -->
	 <div class="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
	 <div class="table-cell align-middle">
	   <div class="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
		 <div class="bg-brightGray p-12">
		   <div class="flex justify-between items-center">
			 <h1 class="h1">Upload Photo</h1>
			 <div>
			   <button onClick={()=>handleClose(false)} class="text-xl"><i class="icon-close"></i></button>
			 </div>
		   </div>
		   <form class="py-7 space-y-5">
			 <div class="upload-holder">
			   <h6 class="text-sm font-bold text-quicksilver">Select Photo <span class="text-10">5 Images (up to 5MB/Image)</span></h6>
			   <label for="upload" class="upload upload-popup">
				 <input type="file" name="images" id="upload" class="appearance-none hidden"/>
				 <span class="input-titel mt-1"><i class="icon-image mr-2"></i>Choose Images</span>
			   </label>
			 </div>
			 <div class="w-full">
			   <span class="input-titel">Details</span>
			   <textarea name="" id="" cols="30" rows="5" class="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md"></textarea>
			 </div>
		   </form>
		   <a href="#" class="btn-primary w-full uppercase">Submit</a>
		 </div>
	   </div>
	 </div>
   </div>
  )
}

export default EventPopUpUploadPhoto