import React, {useEffect, useState} from 'react';
import Modal from '../modal/Modal';
import EventPopUpCreateNew from './popups/EventPopUpCreateNew';
import axios from 'axios';
import { baseUrl } from '../../config';
import DashboardEventCategoryItem from './DashboardEventCategoryItem';
import { useParams } from 'react-router-dom';
import Advertisement from "../Advertisement";
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/stepProgressCount';

function DashboardEvent() {
	const params = useParams();
	const dispatch = useDispatch();
	const [isCreateNewPopUpOpen, setIsCreateNewPopUpOpen] = useState(false);
	const [allEvents,setAllEvents] = useState([]);
	const [allEventsCopy,setAllEventsCopy] = useState([]);
	const [category, setCategory] = useState([]);
	const token = localStorage.getItem("Token");
	const eventType = params.eventType;

	const header = {
		'Authorization': `Token ${token}`
	}
	const getAllEvents = async() =>{
		try {	
			const response = await axios.get(`${baseUrl}/api/events?event_type=${eventType}`,{headers: header});
			// console.log("events >> ",response.data);
			setAllEvents(response.data.data);
			setAllEventsCopy(response.data.data);
		} catch (error) {
			console.log(error);
		}
	}
	
	const getCategory = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/event_category_list`,{headers: header});
			// console.log("Categorys >> ",response.data);
			setCategory(response.data.data);
		} catch (error) {
			console.log(error);
		}
	}
	
	useEffect(() => {
		getAllEvents();
		getCategory();	
		dispatch(reset());
	}, []);
	
	const filterCategory = (event) => {
		let copy = allEventsCopy.map(item => {return {...item}});
		console.log("All event copy >>", allEventsCopy);
		console.log("copy >>", copy);
		
		console.log(event.target.value);
		if (event.target.value !== "all-category") {
			const filtereArray = copy.filter((item) => {
				if(item.categoryId.category_name === event.target.value) {
					return item;
				}
			});
			setAllEvents(filtereArray);
		} else {
			const filtereArray = copy.filter((item) => {
				return item;
			});
			setAllEvents(filtereArray);
		}
		console.log("All Events >> ",allEvents);
		// console.log("filter >> ", filtereArray);
	}

  return ( 
	<div className="rightInContent">
	  <div className="wrapper">
		<div className="flex flex-wrap items-center">
		  <h1>All Category</h1>
		  <div className="flex whitespace-nowrap space-x-5 ml-auto">
			<select name="All Category" onChange={filterCategory}
			  className="arrow bg-white pl-5 pr-11 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider appearance-none focus-visible:outline-none">
				  <option value="all-category" >All Category</option>
				{category?.map(ele => (
					<option value={ele.category_name} key={ele.categoryId} >{ele.category_name}</option>
				))}
			</select>
			<button className="bg-white px-5 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider">MultipleLive</button>
			<button href="#" onClick={()=>setIsCreateNewPopUpOpen(true)} className="btn-primary"><i className="icon-plus mr-3"></i>Create New</button>
		  </div>
		</div>
		<div className="space-y-5 pt-10">
		  {allEvents?.map(ele => (
			<DashboardEventCategoryItem key={ele.eventId} data={ele} />
		  ))}
		  
	<Modal isOpen={isCreateNewPopUpOpen} >
		<EventPopUpCreateNew handleClose={setIsCreateNewPopUpOpen} eventType={eventType} edit={false}/>
	</Modal>
		</div>
		{/* <!-- advisement --> */}
		<Advertisement />
	  </div>
	</div>
  )
}

export default DashboardEvent;