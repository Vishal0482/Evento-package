import React, {useState} from 'react'
import ringAd from "../../assest/images/ring-ad.png"
import Modal from "../modal/Modal";
import EventPopUpAddPlaceWithDisplayName from "./popups/EventPopUpAddPlaceWithDisplayName";


function EventAddPlaces() {


	const [isAddPlaceWithDisplayNamePopUpOpen, setIsAddPlaceWithDisplayNamePopUpOpen] = useState(false);

  return (
	//  <!-- Content In -->
	 <div className="rightInContent">
	 <div className="wrapper min-h-full flex flex-col">
	   <div className="space-y-8 h-full">
		 {/* <!-- title-holder  --> */}
		 <div className="flex justify-between items-center">
			 <a href="#" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Create New</h1></a>
			 <button href="#" onClick={()=>setIsAddPlaceWithDisplayNamePopUpOpen(true)} className="btn-primary small"><i className="icon-plus mr-3"></i>Add place</button>
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
		 <div className=" space-y-3">
		   <div className="w-full flex items-center">
			 <div>
				 <label className="checkbox w-16">
					 <input type="checkbox" checked/>
					 <i className="icon-right"></i>                  
				 </label>
			 </div>
			 <div className="w-full px-7 py-5 bg-white rounded">
				 <div className="flex items-start justify-between">
					 <div>
					   <h2>Sweet Love Catering</h2>
					   <span className="text-sm text-spiroDiscoBall font-medium tracking-wider">Caterers</span>
					 </div>
					 <div className="flex">
						 <a href="#" className="flex items-center text-xs text-quicksilver font-semibold tracking-wider pr-4 border-r border-quicksilver"><i className="icon-fill-delete mr-1"></i>Delete</a>
						 <a href="#" className="flex items-center text-xs text-quicksilver font-semibold tracking-wider pl-4"><i className="icon-edit mr-1"></i>Edit</a>
					 </div>
				 </div>
			 </div>
		   </div> 
		   <div className="w-full flex items-center">
			 <div>
				 <label className="checkbox w-16">
					 <input type="checkbox"/>
					 <i className="icon-right"></i>                  
				 </label>
			 </div>
			 <div className="w-full px-7 py-5 bg-white rounded">
				 <div className="flex items-start justify-between">
					 <div>
					   <h2>Sweet Love Catering</h2>
					   <span className="text-sm text-spiroDiscoBall font-medium tracking-wider">Caterers</span>
					 </div>
					 <div className="flex">
						 <a href="#" className="flex items-center text-xs text-quicksilver font-semibold tracking-wider pr-4 border-r border-quicksilver"><i className="icon-fill-delete mr-1"></i>Delete</a>
						 <a href="#" className="flex items-center text-xs text-quicksilver font-semibold tracking-wider pl-4"><i className="icon-edit mr-1"></i>Edit</a>
					 </div>
				 </div>
			 </div>
		   </div>  
		 </div>
		 {/* <!-- advisement --> */}
		 <div className="w-full mt-5">
			 <img src={ringAd} alt="ring-ad" className="w-full object-cover"/>
		 </div>
	   </div>
	   <div className="prw-next-btn mt-auto">
		 <button type="button" className="flex items-center"><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active"><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>
	 <Modal isOpen={isAddPlaceWithDisplayNamePopUpOpen}>
		<EventPopUpAddPlaceWithDisplayName handleClose={setIsAddPlaceWithDisplayNamePopUpOpen}/>
	 </Modal>
	 
   </div>

  )
}

export default EventAddPlaces