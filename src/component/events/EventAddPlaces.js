import React, {useEffect, useState} from 'react';
import EventAddPlacesEventList from './EventAddPlacesEventList';
import EventPopUpAddPlaceWithDisplayName from "./popups/EventPopUpAddPlaceWithDisplayName";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/stepProgressCount';
import axios from 'axios';
import { baseUrl } from '../../config';
import Modal from "../modal/Modal";
import EventPopUpCreateNew from './popups/EventPopUpCreateNew';
import { toast, ToastContainer } from 'react-toastify';

function EventAddPlaces() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const eventId = params.eventId;
	const eventType = params.eventType;
	const placeId = params.placeId;
	console.log(eventType);
	const [newEvent, setNewEvent] = useState([]);
	const [categoryName, setCategoryName] = useState("");
	console.log("new event", newEvent);
	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}
	const getAddedEvent = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/event/type?id=${eventId}`,{headers: header});
			console.log("New created event >> ", response.data.data);
			localStorage.setItem("displayName", response.data.data[0]?.display_name);
			setNewEvent(response.data.data);

			const responseCategoryName = await axios.get(`${baseUrl}/api/event_category/${response.data.data[0].category_id}`,{headers: header});
			console.log("get category by id >> ",responseCategoryName.data);
			setCategoryName(responseCategoryName.data.data[0].category_name);
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
		if(eventType === "places" ) navigate(`../aboutplace/${eventId}/${placeId}`);
		else navigate(`../personaldetails/${eventId}/${newEvent[0].user_id}`);
	};

	const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	}

  return (
	//  <!-- Content In -->
	 <div className="rightInContent">
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
		   <EventAddPlacesEventList displayName={newEvent[0]?.display_name} categoryName={categoryName} eventId={eventId} />
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
   </div>

  )
}

export default EventAddPlaces