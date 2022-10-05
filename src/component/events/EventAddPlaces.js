import React, {useState} from 'react';
import Modal from "../modal/Modal";
import EventAddPlacesEventList from './EventAddPlacesEventList';
import EventPopUpAddPlaceWithDisplayName from "./popups/EventPopUpAddPlaceWithDisplayName";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Advertisement from '../Advertisement';


function EventAddPlaces() {

	const [isAddPlaceWithDisplayNamePopUpOpen, setIsAddPlaceWithDisplayNamePopUpOpen] = useState(false);
	const navigate = useNavigate();
	const newEvent = useSelector((state) => state.createEvent.category);
	console.log(newEvent);
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
		   <EventAddPlacesEventList displayName={newEvent?.displayName} categoryName={newEvent?.categoryName} />
		 </div>
		 {/* <!-- advisement --> */}
		 <Advertisement />
	   </div>
	   <div className="prw-next-btn mt-auto">
		 <button type="button" className="flex items-center" onClick={() => navigate(-1)}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active" onClick={() => navigate("/dashboard/event/aboutplace")}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>
	 <Modal isOpen={isAddPlaceWithDisplayNamePopUpOpen}>
		<EventPopUpAddPlaceWithDisplayName handleClose={setIsAddPlaceWithDisplayNamePopUpOpen}/>
	 </Modal>
	 
   </div>

  )
}

export default EventAddPlaces