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
	const [allEvents,setAllEvents] =useState({});
	const [category, setCategory] = useState([]);
	const token = '7234eb833b21d7dae48848fb8d4a0cc3b1ea6c9f';
	console.log("params",params.id);

	const header = {
		'Authorization': `Token ${token}`
	}
	const getAllEvents = async() =>{
		try {	
			const response = await axios.get(`${baseUrl}/api/events_get_list`,{headers: header});
			console.log(response);
			setAllEvents(response.data);
		} catch (error) {
			console.log(error);
		}
	}
	
	const getCategory = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/event_category_list`,{headers: header});
			console.log("Categorys >> ",response);
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
	
	console.log("All Events >> ",allEvents.data);

  return ( 
	<div className="rightInContent">
	  <div className="wrapper">
		<div className="flex flex-wrap items-center">
		  <h1>All Category</h1>
		  <div className="flex whitespace-nowrap space-x-5 ml-auto">
			<select name="All Category"
			  className="arrow bg-white pl-5 pr-11 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider appearance-none focus-visible:outline-none">
				{category?.map(ele => (
					<option value={ele.category_name} key={ele.categoryId} >{ele.category_name}</option>
				))}
			  
			  {/* <option value="">All Category</option>
			  <option value="">All Category</option>
			  <option value="">All Category</option> */}
			</select>
			<button className="bg-white px-5 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider">MultipleLive</button>
			<button href="#" onClick={()=>setIsCreateNewPopUpOpen(true)} className="btn-primary"><i className="icon-plus mr-3"></i>Create New</button>
		  </div>
		</div>
		<div className="space-y-5 pt-10">
		  {allEvents.data?.map(ele => (
			<DashboardEventCategoryItem key={ele.eventId} data={ele} />
		  ))}
		  
	<Modal isOpen={isCreateNewPopUpOpen} >
		<EventPopUpCreateNew handleClose={setIsCreateNewPopUpOpen}/>
	</Modal>
		</div>
		{/* <!-- advisement --> */}
		<Advertisement />
	  </div>
	</div>
  )
}

export default DashboardEvent