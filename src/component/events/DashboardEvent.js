import React, { useEffect, useState } from "react";
import ringAd from "../../assest/images/ring-ad.png";
import Modal from "../modal/Modal";
import EventPopUpCreateNew from "./popups/EventPopUpCreateNew";
import axios from "axios";
import { baseUrl } from "../../config";
import DashboardEventCategoryItem from "./DashboardEventCategoryItem";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/stepCountPogress";

function DashboardEvent() {
	const params = useParams();
	const [isCreateNewPopUpOpen, setIsCreateNewPopUpOpen] = useState(false);
	const [allEvent, setAllEvent] = useState([]);
	const [allEventsCopy, setAllEventsCopy] = useState([]);
	const [category, setCategory] = useState([]);
	const dispatch = useDispatch();
	const eventType = params.eventType;


	const filterCategory = (event) => {
		let copy = allEventsCopy.map(item => { return { ...item } });
		console.log("All event copy >>", allEventsCopy);
		console.log("copy >>", copy);

		console.log(event.target.value);
		if (event.target.value !== "all-allCategories") {
			const filtereArray = copy.filter((item) => {
				if (item.categoryId.category_name === event.target.value) {
					return item;
				}
			});
			setAllEvent(filtereArray);
		} else {
			const filtereArray = copy.filter((item) => {
				return item;
			});
			setAllEvent(filtereArray);
		}
		console.log("All Events >> ", allEvent);
	}






	dispatch(reset())

	const token = "248258927fede2b3e48c182f40539846bcd47037";
	console.log("params", params.id)
	const header = {
		Authorization: `Token ${token}`,
	};

	const getAllEvent = async () => {
		try {
			const response = await axios.get(`${baseUrl}/api/event_category_list`, { headers: header });
			console.log(response);
			setAllEvent(response.data.data);
			setAllEventsCopy(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	const categoryList = async () => {
		try {
			const response = await axios.get(`${baseUrl}/api/event_category_list`, { headers: header });
			console.log(response);
			setCategory(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllEvent();
		categoryList();
	}, []);

	console.log("All categories >> ", category.data);

	return (
		<div className="rightInContent">
			<div className="wrapper">
				<div className="flex flex-wrap items-center">
					<h1>All Category</h1>
					<div className="flex whitespace-nowrap space-x-5 ml-auto">
						<select
							onChange={filterCategory}
							name="All Category"
							className="arrow bg-white pl-5 pr-11 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider appearance-none focus-visible:outline-none">
							<option value="all-category" >All Category</option>
							{category?.map((element) => (
								<option key={element.categoryId} value={element.category_name} data-id={element.categoryId}>
									{element.category_name}
								</option>
							))}
						</select>
						<button className="bg-white px-5 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider">MultipleLive</button>
						<button href="#" onClick={() => setIsCreateNewPopUpOpen(true)} className="btn-primary">
							<i className="icon-plus mr-3"></i>Create New
						</button>
					</div>
				</div>
				<div className="space-y-5 pt-10">
					{allEvent?.map((element) => (
						<DashboardEventCategoryItem key={element.eventId} data={element} />
					))}

					<Modal isOpen={isCreateNewPopUpOpen}>
						<EventPopUpCreateNew handleClose={setIsCreateNewPopUpOpen} eventType={eventType} />
					</Modal>
				</div>
				{/* <!-- advisement --> */}
				<div className="w-full mt-5">
					<img src={ringAd} alt="ring-ad" className="w-full object-cover" />
				</div>
			</div>
		</div>
	);
}

export default DashboardEvent;
