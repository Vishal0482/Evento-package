import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Modal from "../modal/Modal";
import EventPopUpAddService from './popups/EventPopUpAddService';
import EventAddServicesListItem from './EventAddServiceListItem';
import StepProgressBar from './StepProgressBar';
import axios from 'axios';
import { baseUrl } from '../../config';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/stepProgressCount';

function EventAddServices() {

	const navigate = useNavigate();
	const params = useParams();
	const dispatch = useDispatch();
	const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false);
	const [serviceList, setServiceList] = useState([]);
	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}
	const getServiceList = async() => {
		const response = await axios.get(`${baseUrl}/api/service_list`, {headers: header});
		setServiceList(response.data.data);
		console.log("services >> ",response);
	}

	useEffect(() => {
		getServiceList();
	},[isAddServicesPopUpOpen]);

	const clickNextHandler = () => {
		dispatch(increment());
		navigate(`/dashboard/event/capacity/${params.eventId}/${params.userId}`);
	};

	const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
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
		   <button onClick={()=>setIsAddServicesPopUpOpen(true)} className="btn-primary flex items-center"><i className="icon-plus mr-3"></i><span>Add Service</span></button>
		 </div>
		  {/* <!-- step-progress-bar  --> */}
		 <StepProgressBar />
		 <div className="pt-5 space-y-3">
		   { serviceList?.map(element => <EventAddServicesListItem data = {element} key={element.Id} edit={true} /> )}
		   
		 </div>
	   </div>
	   {/* <!-- next preview button  --> */}
	   <div className="prw-next-btn mt-auto">
		 <button type="button" className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>
	 <Modal isOpen={isAddServicesPopUpOpen}>
		<EventPopUpAddService handleClose={setIsAddServicesPopUpOpen} edit={false}/>
	 </Modal>
   </div>
  )
}

export default EventAddServices