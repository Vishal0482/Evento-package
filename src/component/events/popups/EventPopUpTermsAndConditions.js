import React from 'react'

function EventPopUpTermsAndConditions({handleClose}) {
  return (
		//  <!--  Terms and Conditions  -->
		 <div class="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
		 <div class="table-cell align-middle">
		   <div class="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
			 <div class="bg-brightGray p-7 space-y-7">
			   <h2 class="h1 w-full max-w-xs"> Terms and Conditions </h2>
			   <ul class="space-y-2.5 list-disc list-inside text-xs font-medium">
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
			   </ul>
			   <div class="flex items-center space-x-5">
				 <button onClick={()=>handleClose(false)} class="btn-primary btn-cancel w-full">CANCEL</button>
				 <a href="#" class="btn-primary w-full">APPLY</a>
			   </div>
			 </div>
		   </div>
		 </div>
	   </div>
	)
}

export default EventPopUpTermsAndConditions