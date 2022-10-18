import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from "../modal/Modal";
import EventPopUpAddService from './popups/EventPopUpAddService';
import EventAddServicesListItem from './EventAddServiceListItem';
import StepProgressBar from './StepProgressBar';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/stepCountPogress';

function EventAddServices() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false);

	const handelAddphotoandvideo = () => {
		dispatch(increment())
		navigate("/dashboard/event/capacity");
	}


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
						<button onClick={() => setIsAddServicesPopUpOpen(true)} className="btn-primary flex items-center"><i className="icon-plus mr-3"></i><span>Add Service</span></button>
					</div>
					{/* <!-- step-progress-bar  --> */}
					<StepProgressBar />
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
					<button type="button" className="flex items-center" onClick={() => {
						navigate(-1)
						dispatch(decrement())
					}}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
					<button type="button" className="flex items-center active" onClick={handelAddphotoandvideo}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
				</div>
			</div>
			<Modal isOpen={isAddServicesPopUpOpen}>
				<EventPopUpAddService handleClose={setIsAddServicesPopUpOpen} />
			</Modal>
		</div>
	)
}

export default EventAddServices