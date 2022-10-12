import React, {useState} from 'react'
import Modal from '../modal/Modal';
import EventPopUpCreateNew from './popups/EventPopUpCreateNew';
// import axios from '../../axios';
// import axios from 'axios';
// import { baseUrl } from '../../config';
import DashboardEventCategoryItem from './DashboardEventCategoryItem';
// import { useLocation, useParams } from 'react-router-dom';
import GetData from '../../hooks/GetData';
import Advertisement from '../Advertisement';


function DashboardEvent() {
	// const params = useParams();
	const [isCreateNewPopUpOpen, setIsCreateNewPopUpOpen] = useState(false);
	// const [allEvents,setAllEvents] =useState([]);
	// const token = '7234eb833b21d7dae48848fb8d4a0cc3b1ea6c9f';
	// console.log("params",params.id);
	// const getAllEvents = async() =>{
	// 	const header = {
	// 		'Authorization': `Token ${token}`
	// 	}
	// 	try {	
	// 		const response = await axios.get(`${baseUrl}/api/events_get_list`,{headers: header});
	// 		console.log(response);
	// 		setAllEvents(response.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
	
	
	// useEffect(() => {
	// 	getAllEvents();
	// }, []);
	
	// console.log("All Events >> ",allEvents.data);

	// const { data } = GetData("events_get_list");
	// setAllEvents(data);
	// console.log(data)

	const categoryList = GetData("event_category_list");
	// console.log("data",data1);

	const eventList = GetData("events_get_list");
	// console.log("events", data2);

  return ( 
	<div className="rightInContent">
	  <div className="wrapper">
		<div className="flex flex-wrap items-center">
		  <h1>All Category</h1>
		  <div className="flex whitespace-nowrap space-x-5 ml-auto">
			<select name="All Category"
			  className="arrow bg-white pl-5 pr-11 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider appearance-none focus-visible:outline-none">
				{categoryList?.map(ele => (
					<option value={ele.category_name} key={ele.categoryId}>{ele.category_name}</option>
				))}
			</select>
			<button className="bg-white px-5 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider">MultipleLive</button>
			<button href="#" onClick={()=>setIsCreateNewPopUpOpen(true)} className="btn-primary"><i className="icon-plus mr-3"></i>Create New</button>
		  </div>
		</div>
		<div className="space-y-5 pt-10">
		  {eventList?.map(ele => (
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