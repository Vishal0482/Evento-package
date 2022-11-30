import React, { useEffect, useState } from 'react';
import Modal from '../modal/Modal';
import EventPopUpCreateNew from './popups/EventPopUpCreateNew';
import axios from 'axios';
import { baseUrl } from '../../config';
import DashboardEventCategoryItem from './DashboardEventCategoryItem';
import { useParams } from 'react-router-dom';
import Advertisement from "../Advertisement";
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/stepProgressCount';
import { MoonLoader } from 'react-spinners';
import Paggination from '../Paggination';
import { getEventType } from '../../shared/helper';

function DashboardEvent() {
	const params = useParams();
	const dispatch = useDispatch();
	const [isCreateNewPopUpOpen, setIsCreateNewPopUpOpen] = useState(false);
	const [allEvents, setAllEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const token = localStorage.getItem("Token");
	const eventType = getEventType(params.eventType);
	const limit = 3;
	const header = {
		'Authorization': `Token ${token}`
	}
	const getAllEvents = async () => {
		const requestObj = {
			page: pageNo,
			limit: limit,
			search: eventType
		}
		try {
			const response = await axios.post(`${baseUrl}/organizer/events/list`,requestObj, { headers: header });
			console.log("events >> ", response.data);
			setAllEvents(response.data.Data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	const getCategory = async () => {
		try {
			const response = await axios.get(`${baseUrl}/organizer/events/listcategory`, { headers: header });
			// console.log("Categorys >> ",response.data);
			setCategory(response.data.Data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getAllEvents();
	}, [pageNo]);
	
	useEffect(() => {
		getCategory();
		dispatch(reset());
	}, [isCreateNewPopUpOpen]);

	console.log(allEvents?.totalDocs)

	return (
		<div className="wrapper">
			<div className="flex flex-wrap items-center">
				<h1>All Category</h1>
				<div className="flex whitespace-nowrap space-x-5 ml-auto">
					<select name="All Category"
						className="arrow bg-white pl-5 pr-11 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider appearance-none focus-visible:outline-none">
						<option value="all-category" >All Category</option>
						{category?.map(ele => (
							<option value={ele.category_name} key={ele._id} >{ele.category_name}</option>
						))}
					</select>
					<button className="bg-white px-5 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider">MultipleLive</button>
					<button href="#" onClick={() => setIsCreateNewPopUpOpen(true)} className="btn-primary"><i className="icon-plus mr-3"></i>Create New</button>
				</div>
			</div>
			<div className="space-y-5 pt-10 h-auto" >
				<MoonLoader
					cssOverride={{ margin: "100px auto" }}
					color={"#20c0E8"}
					loading={loading}
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
				{allEvents.docs?.map(ele => (
					<DashboardEventCategoryItem key={ele._id}  data={ele} />
				))}
				
				{!loading && ((allEvents?.totalPages > 0) ? <Paggination allEvents={allEvents} limit={limit} setPageNo={setPageNo} pageNo={pageNo} /> : <h1 style={{margin: "100px 0"}}>No Event Found</h1>)}

				<Modal isOpen={isCreateNewPopUpOpen} >
					<EventPopUpCreateNew handleClose={setIsCreateNewPopUpOpen} eventType={eventType} edit={false} />
				</Modal>
			</div>
			{/* <!-- advisement --> */}
			{!loading && <Advertisement />}
		</div>
	)
}

export default DashboardEvent;