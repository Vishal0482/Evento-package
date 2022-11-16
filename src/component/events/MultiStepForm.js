import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { decrement } from '../../redux/stepProgressCount';
import Advertisement from '../Advertisement';
import EventAboutPlace from './EventAboutPlace';
import StepProgressBar from './StepProgressBar';

function MultiStepForm() {
    const params = useParams();
    const eventType = params.eventType;	

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

         <EventAboutPlace />
		 
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

export default MultiStepForm;
