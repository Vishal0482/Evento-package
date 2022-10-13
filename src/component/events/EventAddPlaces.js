import React, {useEffect, useState} from 'react';

import EventAddPlacesEventList from './EventAddPlacesEventList';
import EventPopUpAddPlaceWithDisplayName from "./popups/EventPopUpAddPlaceWithDisplayName";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/stepProgressCount';



function EventAddPlaces() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const newEvent = useSelector((state) => state.createEvent.category);
	console.log(newEvent);

	useEffect(()=> {
		if(newEvent == null){
			navigate(-1);
		}
	});

	const clickNextHandler = () => {
		dispatch(increment())
		navigate("/dashboard/event/aboutplace")
	};

	const clickBackHander = () => {
		dispatch(decrement())
		navigate(-1)
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
		 {/* <!-- step-progress-bar  --> */}
		<StepProgressBar />
		 {/* <!-- main-content  --> */}
		 <div className=" space-y-3">
		   {newEvent && <EventAddPlacesEventList displayName={newEvent?.displayName} categoryName={newEvent?.categoryName}/>}
		 </div>
		 {/* <!-- advisement --> */}
		 <Advertisement />
	   </div>
	   <div className="prw-next-btn mt-auto">
		 <button type="button" className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>
   </div>

  )
}

export default EventAddPlaces