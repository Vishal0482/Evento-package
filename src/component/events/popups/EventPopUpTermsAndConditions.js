import React from 'react'
import { createRef } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { createElement } from 'react'
import { Link } from 'react-router-dom'

function EventPopUpTermsAndConditions({handleClose, terms}) {

	
	useEffect(() => {
		const box = document.getElementById("termsBox");
		box.innerHTML = terms;
	}, [terms]);
	
  return (
		//  <!--  Terms and Conditions  -->
		 <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
		 <div className="table-cell align-middle">
		   <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
			 <div className="bg-brightGray p-7 space-y-7">
			   <h2 className="h1 w-full max-w-xs"> Terms and Conditions </h2>

			   <div id="termsBox" ></div>
			   {/* <ul className="space-y-2.5 list-disc list-inside text-xs font-medium"> */}
				{/* {terms} */}
				 {/* <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li>
				 <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum.</li> */}
			   {/* </ul> */}
			   <div className="flex items-center space-x-5">
				 <button onClick={()=>handleClose(false)} className="btn-primary btn-cancel w-full">CANCEL</button>
				 <div className="btn-primary w-full" onClick={()=>handleClose(false)}>APPLY</div>
			   </div>
			 </div>
		   </div>
		 </div>
	   </div>
	)
}

export default EventPopUpTermsAndConditions