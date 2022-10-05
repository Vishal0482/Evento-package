import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from "../modal/Modal";
import EventPopUpAddService from './popups/EventPopUpAddService';
import EventAddServicesListItem from './EventAddServiceListItem';

function EventAddServices() {

	const navigate = useNavigate();
	const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false);

  return (
	//  <!-- Content In -->
	 <div className="rightInContent">
	 <div className="wrapper min-h-full">
	   <div className="space-y-8">
		 <div className="flex justify-between items-center">
		   <Link to="/" className="flex items-center">
			 <i className="icon-back-arrow mr-4 text-2xl"></i>
			 <h1>Sweet Love Catering</h1>
		   </Link>
		   <button onClick={()=>setIsAddServicesPopUpOpen(true)} className="btn-primary flex items-center"><i className="icon-plus mr-3"></i><span>Add Service</span></button>
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
		 <div className="pt-5 space-y-3">
		   <EventAddServicesListItem />
		   <EventAddServicesListItem />
		   <EventAddServicesListItem />
		   <EventAddServicesListItem />
		   
		 </div>
		 {/* <!-- add more button  --> */}
		 <div className="text-right">
		   <button className="btn-primary small">Add More</button>
		 </div>
	   </div>
	   {/* <!-- next preview button  --> */}
	   <div className="prw-next-btn">
		 <button type="button" className="flex items-center" onClick={() => navigate(-1)}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active" onClick={() => navigate("/dashboard/event/capacity")}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>
	 <Modal isOpen={isAddServicesPopUpOpen}>
		<EventPopUpAddService handleClose={setIsAddServicesPopUpOpen}/>
	 </Modal>
   </div>
  )
}

export default EventAddServices