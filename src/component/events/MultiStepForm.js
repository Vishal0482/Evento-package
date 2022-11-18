import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { decrement } from '../../redux/stepProgressCount';
import Advertisement from '../Advertisement';

import EventAboutPlace from './EventAboutPlace';
import EventAddPlaces from './EventAddPlaces';
import EventPersonalDetails from './EventPersonalDetails';
import EventPhotosAndVideos from "./EventPhotosAndVideos";
import EventAddServices from "./EventAddServices";
import EventCapacity from "./EventCapacity";
import EventCompanyDetails from './EventCompanyDetails';
import EventTermsAndConditions from "./EventTermsAndConditions";
import EventDiscounts from "./EventDiscounts";
import EventCalender from "./EventCalender";

import PSBOtherCost from "../personal_skills_business/PSBOtherCost";

import StepProgressBar from './StepProgressBar';
import { useSelector } from 'react-redux';

function MultiStepForm() {
    const params = useParams();
    const eventType = params.eventType;	
	const count = useSelector(state => state.StepProgressCount.count);
    console.log("Count", count);

    const clickNextHandler = async() => {

	}

	const clickBackHander = () => {
		dispatchEvent(decrement());
		Navigate(-1);
	}
  return (
    <div className="rightInContent">
	 <div className="wrapper min-h-full flex flex-col">
	   <div className="space-y-8 h-full">
		 {/* <!-- title-holder  -->/ */}
		 <div className="flex justify-between items-center">
		   <Link to="/" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i>
			 <h1>Sweet Love Catering</h1>
		   </Link>
		 </div>
		 {/* <!-- step-progress-bar  --> */}
		 <StepProgressBar eventType={eventType} />
		 {/* <!-- main-content  --> */}
			 {/* select Skill */}
			{ count === 1 && <EventAddPlaces />} 
			{ eventType === "places" && count === 2 && <EventAboutPlace />}
			{ (eventType === "places" && count === 3) || (eventType !== "places" && count === 2) && <EventPersonalDetails /> }
			{ eventType === "places" && count === 4 && <EventPhotosAndVideos /> }
			{ eventType === "places" && count === 5 && <EventAddServices /> }
			{ eventType === "places" && count === 6 && <EventCapacity /> }
			{ eventType === "places" && count === 7 && <EventCompanyDetails /> }
			{ eventType === "places" && count === 8 && <EventTermsAndConditions /> }
			{ eventType === "places" && count === 9 && <EventDiscounts /> }
			{ eventType === "places" && count === 10 && <EventCalender /> }
			
			{ (eventType === "personal_skills" && count === 5) || (eventType === "group_skills" && count === 6) && <PSBOtherCost /> }

			
	   </div>
	   {/* <div className="prw-next-btn mt-auto">
		 <button type="button" className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div> */}
	 </div>
     </div>
  )
}

export default MultiStepForm;
