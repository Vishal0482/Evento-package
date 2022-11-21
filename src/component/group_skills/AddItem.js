import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Modal from "../modal/Modal";
import EventPopUpAddService from '../events/popups/EventPopUpAddService';
import EventAddServicesListItem from '../events/EventAddServiceListItem';
import StepProgressBar from '../events/StepProgressBar';
import axios from 'axios';
import { baseUrl } from '../../config';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/stepProgressCount';
import { toast, ToastContainer } from 'react-toastify';
import { MoonLoader } from 'react-spinners';

function AddItem() {
	const displayName = localStorage.getItem("displayName");
    const navigate = useNavigate();
	const params = useParams();
	const eventType = params.eventType;
	const eventId = params.eventId;
	const userId = params.userId;
	const dispatch = useDispatch();
	const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false);
	const [serviceList, setServiceList] = useState([]);
	const [reload, setReload] = useState(false);
	const [loading, setLoading] = useState(true);
	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}
	const getServiceList = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/service_list`, {headers: header});
			setLoading(false);
			setServiceList(response.data.data);
			console.log("services >> ",response);
		} catch (error) {
			toast.error("Something Went wrong.");
			console.log(error);
		}
	}

	useEffect(() => {
		getServiceList();
	},[isAddServicesPopUpOpen, reload]);

	const clickNextHandler = () => {
		toast.success("Items saved Successfully.");
		dispatch(increment());
		navigate(`../addservices/${eventId}/${userId}`);
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
		   <button onClick={()=>setIsAddServicesPopUpOpen(true)} className="btn-primary flex items-center"><i className="icon-plus mr-3"></i><span>Add Items</span></button>
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
		   { serviceList?.map(element => <EventAddServicesListItem data = {element} key={element.Id} edit={true} setReload={setReload} /> )}
		   
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

export default AddItem;
