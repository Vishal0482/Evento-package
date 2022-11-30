import React, {useEffect, useState} from 'react';
import EventAddPlacesEventList from './EventAddPlacesEventList';
import { useNavigate, useParams } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/stepProgressCount';
import axios from 'axios';
import { baseUrl } from '../../config';
import { toast, ToastContainer } from 'react-toastify';

function EventAddPlaces() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	// const eventId = params.eventId;
	const eventType = params.eventType;
	// const placeId = params.placeId;
	// console.log(eventType);
	const [newEvent, setNewEvent] = useState([]);
	const [categoryName, setCategoryName] = useState("");
	// console.log("new event", newEvent);
	const token = localStorage.getItem("Token");
	const eventId = localStorage.getItem("eventId");
	const header = {
		'Authorization': `Token ${token}`
	}
	const getAddedEvent = async() => {
		try {
			const response = await axios.get(`${baseUrl}/organizer/events?eventid=${eventId}`,{headers: header});
			// console.log("New created event >> ", response.data.data);
			if(!response.data.IsSuccess) {
				toast.error("Error occured while fetching data.")
			}
			localStorage.setItem("displayName", response.data.Data?.display_name);
			setNewEvent(response.data.Data);
			setCategoryName(response.data.Data.event_category.category_name);
		} catch (error) {
			console.log(error);
		}
	}
	
	useEffect(()=> {
		getAddedEvent();
	},[]);

	const clickNextHandler = () => {
		toast.success("Data Saved Successfully.");
		dispatch(increment());
		if(eventType === "hyp" ) navigate(`../aboutplace`);
		else navigate(`../personaldetails/`);
	};

	const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	}

  return (
	//  <!-- Content In -->
	 <>
	 <div className="wrapper min-h-full flex flex-col">
	   <div className="space-y-8 h-full">
		 {/* <!-- title-holder  --> */}
		 <div className="flex justify-between items-center">
			 <div className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Create New</h1></div>
		 </div>
		 {/* <!-- step-progress-bar  --> */}
		<StepProgressBar eventType={eventType} />
		 {/* <!-- main-content  --> */}
		 <div className=" space-y-3">
		   <EventAddPlacesEventList displayName={newEvent?.display_name} categoryName={categoryName} eventId={newEvent?._id} />
		 </div>
		 {/* <!-- advisement --> */}
		 <Advertisement />
	   </div>
	   <div className="prw-next-btn mt-auto">
		 <button type="button" className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>
		  <ToastContainer
			  position="bottom-right"
			  autoClose={5000}
			  hideProgressBar={false}
			  newestOnTop={false}
			  closeOnClick
			  rtl={false}
			  pauseOnFocusLoss
			  draggable
			  pauseOnHover
			  theme="colored"
		  />
   </>

  )
}

export default EventAddPlaces;