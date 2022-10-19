import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import EventAddPlacesEventList from "./EventAddPlacesEventList";
import EventPopUpAddPlaceWithDisplayName from "./popups/EventPopUpAddPlaceWithDisplayName";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Advertisement from "../Advertisement";
import StepProgressBar from "./StepProgressBar";
import { decrement, increment } from "../../redux/stepCountPogress";
import axios from "axios";
import { baseUrl } from "../../config";

function EventAddPlaces() {
	const [isAddPlaceWithDisplayNamePopUpOpen, setIsAddPlaceWithDisplayNamePopUpOpen] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const newEvent = useSelector((state) => state.createEvent.category);
	console.log(newEvent);

	const { eventId } = useParams();
	console.log(eventId);

	const token = "248258927fede2b3e48c182f40539846bcd47037";
	const header = {
		Authorization: `Token ${token}`,
	};

	const [addPlace, setaddPlace] = useState([])
	const [categoryName, setCategoryName] = useState('')

	const getEventType = async () => {
		const response = await axios.get(`${baseUrl}/api/event/type?id=${eventId}`, { headers: header })
		console.log(response);
		setaddPlace(response.data.data)

		const responseCatagory = await axios.get(`${baseUrl}/api/event_category/${response.data.data[0].categoryId}`, { headers: header })
		console.log(responseCatagory);
		setCategoryName(responseCatagory.data.data[0].category_name)
	}

	useEffect(() => {
		getEventType();
	}, [])

	const handeladdplace = () => {
		dispatch(increment());
		navigate(`/dashboard/event/aboutplace/${eventId}`)
	}
	return (
		//  <!-- Content In -->
		<div className="rightInContent">
			<div className="wrapper min-h-full flex flex-col">
				<div className="space-y-8 h-full">
					{/* <!-- title-holder  --> */}
					<div className="flex justify-between items-center">
						<Link to="/" className="flex items-center">
							<i className="icon-back-arrow mr-4 text-2xl"></i>
							<h1>Create New</h1>
						</Link>
						<button href="#" onClick={() => setIsAddPlaceWithDisplayNamePopUpOpen(true)} className="btn-primary small">
							<i className="icon-plus mr-3"></i>Add place
						</button>
					</div>
					{/* <!-- step-progress-bar  --> */}
					<StepProgressBar />
					{/* <!-- main-content  --> */}
					<div className=" space-y-3">
						<EventAddPlacesEventList displayName={addPlace[0]?.display_name} categoryName={categoryName} event={eventId} />
					</div>
					{/* <!-- advisement --> */}
					<Advertisement />
				</div>
				<div className="prw-next-btn mt-auto">
					<button type="button" className="flex items-center" onClick={() => {
						navigate(-2)
						dispatch(decrement())
					}}>
						<i className="icon-back-arrow mr-3"></i>
						<h3>Back</h3>
					</button>
					<button type="button" className="flex items-center active" onClick={handeladdplace}>
						<h3>Next</h3>
						<i className="icon-next-arrow ml-3"></i>
					</button>
				</div>
			</div>
			<Modal isOpen={isAddPlaceWithDisplayNamePopUpOpen}>
				<EventPopUpAddPlaceWithDisplayName handleClose={setIsAddPlaceWithDisplayNamePopUpOpen} />
			</Modal>
		</div>
	);
}

export default EventAddPlaces;
