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

function EventAddPlaces() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const params = useParams();
	const eventId = 14;
	const eventType = 1;
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
		dispatch(increment());
		if(eventType === "places" ) navigate(`../aboutplace/${eventId}`);
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
			 <a href="#" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Create New</h1></a>
		 </div>
		 <div className=" space-y-3">
		   <EventAddPlacesEventList displayName={newEvent[0]?.display_name} categoryName={categoryName} eventId={eventId} />
		 </div>
		 {/* <!-- advisement --> */}
		 <Advertisement />
	   </div>
	 </div>
   </div>

  )
}

export default EventAddPlaces