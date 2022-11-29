import React, {useEffect, useState} from 'react';
import Advertisement from '../Advertisement';
import celebration from "../../assest/svg/celebration.svg";
import Modal from "../modal/Modal";
import EventPopUpDiscount from "./popups/EventPopUpDiscount";
import axios from 'axios';
import { baseUrl } from '../../config';
import StepProgressBar from './StepProgressBar';
import { useNavigate, useParams } from 'react-router-dom';
import { decrement, increment } from '../../redux/stepProgressCount';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { current } from '@reduxjs/toolkit';

function EventDiscounts() {
	const displayName = localStorage.getItem("displayName");
	const [isDiscountPopUpOpen, setIsDiscountPopUpOpen] = useState(false);
	const [allDiscount, setAllDiscount] = useState([]);
	console.log(allDiscount);
	const params = useParams();
	const eventId = params.eventId;
	const eventType = params.eventType;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [serviceOn, setServiceOn] = useState(false);

	const [activeList, setActiveList] = useState([]);
	const [selectedDiscount, setSelectedDiscount] = useState({});
	console.log(activeList)
	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}
	const getDiscount = async() => {
		try {	
			const response = await axios.get(`${baseUrl}/organizer/discount/list`,{headers: header});
			console.log(response);
			if(response.data.IsSuccess) {
				const res = await axios.get(`${baseUrl}/organizer/events/discount?eventid=${eventId}`,{headers: header});
				setAllDiscount([...res.data.Data.discounts,...response.data.Data]);
			}
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		getDiscount();
	}, [isDiscountPopUpOpen]);


	const createActiveDiscount = async() => {
		try {	
			const response = await axios.post(`${baseUrl}/organizer/events/discount`,{eventid: eventId, discounts: activeList},{headers: header});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	const initialRender = useRef(true);
	const initialRender2 = useRef(true);
	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
		  } else {
			createActiveDiscount();
		}
	},[activeList]);

	useEffect(() => {
		if (initialRender2.current) {
			initialRender2.current = false;
		  } else {
			setActiveList(current => current.map(ele => {
				if(ele._id === selectedDiscount._id) {
					return selectedDiscount;
				} else {
					return ele;
				}
			}))
		}
	},[selectedDiscount]);
	

	const clickNextHandler = async() => {
    	toast.success("Data saved Successfully.");
		dispatch(increment());
		navigate(`../calender`);
	}

	const clickBackHandler = () => {
		dispatch(decrement());
		navigate(-1);
	}

	const gradientStyle = (type) => {
		if(type === "discount_on_total_bill") return " from-[#13e1b094] to-[#13E1B0] ";
		if(type === "discount_on_equipment_or_item") return " from-[#20c0e878] to-[#20C0E8] ";
		if(type === "advance_and_discount_confirmation") return " from-[#faba1585] to-[#FABA15] ";
	}

	const checkboxHandler = (e, ele) => {
		if(e.target.checked) {
			setActiveList(current => [...current, ele]);
		} else {
			setActiveList(current => current.filter(data => data._id !== ele._id))
		}
	}

	const editButtonHandler = (ele) => {
		setSelectedDiscount(ele);
		if(ele.discounttype === "discount_on_total_bill") setServiceOn(false);
		if(ele.discounttype === "discount_on_equipment_or_item") setServiceOn(true);
		if(ele.discounttype === "advance_and_discount_confirmation") setServiceOn(false);
		return setIsDiscountPopUpOpen(!isDiscountPopUpOpen);
	}
	console.log("selected discount >> ", selectedDiscount);
	console.log("active >> ", activeList);

	return (
	//    <!-- Content In -->
	   <div>
	   <div className="wrapper min-h-full">
		 <div className="space-y-8 h-full">
		   {/* <!-- title-holder  --> */}
		   <div className="flex justify-between items-center">
			 <div className="flex items-center">
			   <i className="icon-back-arrow mr-4 text-2xl"></i>
			   <h1>{displayName}</h1>
			 </div>
		   </div>
		   {/* <!-- step-progress-bar  --> */}
		   <div className="w-full overflow-hidden">
				<StepProgressBar eventType={eventType} />
		   </div>
		   {/* <!-- main-content  --> */}
		   <div className="space-y-5">
		   {allDiscount.map(ele => 
			   <div className="w-full flex items-center" key={ele._id}>
				   <label className="checkbox w-16">
					   <input type="checkbox" className="bg-white" onChange={(e) => checkboxHandler(e, ele)} />
					   <i className="icon-right"></i>
				   </label>
				   <div className={gradientStyle(ele.discounttype) + "bg-gradient-to-r p-5 pr-8 relative overflow-hidden rounded-lg w-full"}>
					   <div className="flex justify-between item-basline">
						   <div>
							   <h1 className="text-white">{ele.discountname}</h1>
							   <div className="text-[40px] text-black font-bold">{ele.discount}</div>
							   <span className="text-xs text-white font-normal">{ele.description}</span>
						   </div>
						   <div>
							   <button onClick={() => editButtonHandler(ele)} className="bg-white p-2 rounded-md text-sm font-bold"><i className="text-sm edit text-black icon-edit mr-2"></i>Edit</button>
							   <div className="absolute" style={{ right: "40px", top: "65%", transform: "scale(1.2)" }}>
								   <img src={celebration} alt="" />
							   </div>
						   </div>
					   </div>
				   </div>
			   </div>
		   )}
		   </div>
		   {/* <!-- advisement --> */}
		   <Advertisement />
		   {/* <!-- next preview button --> */}
		   <div className="prw-next-btn">               
			 <button type="button" className="flex items-center" onClick={clickBackHandler}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
			 <button type="button" className="flex items-center active btn-primary" onClick={clickNextHandler}>Go To Calender</button>
		   </div>
		 </div>
	   </div>

	 <Modal isOpen={isDiscountPopUpOpen}>
		<EventPopUpDiscount handleClose={setIsDiscountPopUpOpen} eventId={eventId} setSelectedDiscount={setSelectedDiscount} selectedDiscount={selectedDiscount} serviceOn={serviceOn} />
	 </Modal>
	 </div>
  )
}

export default EventDiscounts