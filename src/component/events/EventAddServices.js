import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from "../modal/Modal";
import EventPopUpAddService from './popups/EventPopUpAddService';
import EventAddServicesListItem from './EventAddServiceListItem';
import StepProgressBar from './StepProgressBar';
import axios from 'axios';
import { baseUrl } from '../../config';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/stepProgressCount';
import { toast, ToastContainer } from 'react-toastify';
import { MoonLoader } from 'react-spinners';

function EventAddServices() {
	const displayName = localStorage.getItem("displayName");
	const navigate = useNavigate();
	const params = useParams();
	const eventType = params.eventType;
	const eventId = params.eventId;
	const dispatch = useDispatch();
	const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false);
	const [serviceList, setServiceList] = useState([]);
	const [activeList, setActiveList] = useState([]);
	console.log(activeList);
	const [reload, setReload] = useState(false);
	const [loading, setLoading] = useState(true);
	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}
	const getServiceList = async() => {
		try {
			const response = await axios.get(`${baseUrl}/organizer/events/listservice`, {headers: header});
			console.log("services >> ",response);
			if(response.data.Data) {
				setServiceList(response.data.Data);
				setLoading(false);
				const responseActive = await axios.get(`${baseUrl}/organizer/events/getselectservice?eventid=${eventId}`, {headers: header});
				console.log("Active services >> ",responseActive);
				if(responseActive.data.Data.services) {
					const temp = responseActive.data.Data.services.map(e => {
						return e._id
					})
					setActiveList(temp);
				}
			}
			if(!response.data.IsSuccess) {
				toast.error("Enable To Fetch Data.");
			}
		} catch (error) {
			toast.error("Something Went wrong.");
			console.log(error);
		}
	}
	console.log(serviceList);

	useEffect(() => {
		getServiceList();
	},[isAddServicesPopUpOpen, reload]);

	const clickNextHandler = () => {
		toast.success("Services saved Successfully.");
		dispatch(increment());
		if(eventType === "places") navigate(`../capacity`);
		else navigate(`../othercost`);
	};

	const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	}

  return (
	//  <!-- Content In -->
	 <div>
	 <div className="wrapper min-h-full">
	   <div className="space-y-8">
		 <div className="flex justify-between items-center">
		   <div className="flex items-center">
			 <i className="icon-back-arrow mr-4 text-2xl"></i>
			 <h1>{displayName}</h1>
		   </div>
		   <button onClick={()=>setIsAddServicesPopUpOpen(true)} className="btn-primary flex items-center"><i className="icon-plus mr-3"></i><span>{eventType === "have_you_places" ? "Add Service" : "Add Item"}</span></button>
		 </div>
		  {/* <!-- step-progress-bar  --> */}
		 <StepProgressBar eventType={eventType}/>
		 <MoonLoader
			cssOverride={{ margin: "100px auto" }}
			color={"#20c0E8"}
			loading={loading}
			size={50}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
		 <div className="pt-5 space-y-3">
		   { serviceList?.map(element => <EventAddServicesListItem data={element} key={element._id} eventId={eventId} edit={true} setReload={setReload} activeList={activeList} setActiveList={setActiveList} /> )}
		   
		 </div>
	   </div>
	   {/* <!-- next preview button  --> */}
	   <div className="prw-next-btn mt-auto">
		 <button type="button" className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>
	 <Modal isOpen={isAddServicesPopUpOpen}>
		<EventPopUpAddService isItem={eventType === "have_you_places" ? false:true} handleClose={setIsAddServicesPopUpOpen} setReload={setReload} edit={false} />
	 </Modal>
	 <ToastContainer
			  position="bottom-right"
			  autoClose={5000}
			  hideProgressBar={false}
			  newestOnTop={false}
			  closeOnClick
			  rtl={false}
			  pauseOnFocusLoss
			  draggable
			  pauseOnHover
			  theme="colored"
		  />
   </div>
  )
}

export default EventAddServices