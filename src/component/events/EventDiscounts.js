import React, {useEffect, useState} from 'react';
import Advertisement from '../Advertisement';
import celebration from "../../assest/svg/celebration.svg";
import Modal from "../modal/Modal";
import EventPopUpDiscountOnTotalBill  from "./popups/EventPopUpDiscountOnTotalBill";
import EventPopUpDiscountOnEquipmentOrItem from "./popups/EventPopUpDiscountOnEquipmentOrItem";
import axios from 'axios';
import { baseUrl } from '../../config';
import StepProgressBar from './StepProgressBar';
import { useNavigate, useParams } from 'react-router-dom';
import { decrement, increment } from '../../redux/stepProgressCount';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

function EventDiscounts() {

	const [isDiscountOnTotalBillPopUpOpen, setIsDiscountOnTotalBillPopUpOpen] = useState(false);
	const [isDiscountOnEquipmentOrItemPopUpOpen, setIsDiscountOnEquipmentOrItemPopUpOpen] = useState(false);
	const [isAdvanceAndDiscountConfirmationPopUpOpen, setIsAdvanceAndDiscountConfirmationPopUpOpen] = useState(false);
	const [allDiscount, setAllDiscount] = useState([]);
	const params = useParams();
	const eventId = params.eventId;
	const userId = params.userId;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [totalDiscountId, setTotalDiscountId] = useState("");
	const [equipmentDiscountId, setEquipmentDiscountIdDiscountId] = useState("");
	const [advanceDiscountId, setAdvanceDiscountId] = useState("");

	
	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}
	const getDiscount = async() => {
		try {	
			const response = await axios.get(`${baseUrl}/api/org/discount?event_id=${eventId}`,{headers: header});
			console.log(response);
			setAllDiscount(response.data.data);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		getDiscount();
	}, [isDiscountOnTotalBillPopUpOpen, isDiscountOnEquipmentOrItemPopUpOpen, isAdvanceAndDiscountConfirmationPopUpOpen]);

	const clickNextHandler = () => {
    	toast.success("Data saved Successfully.");
		dispatch(increment());
		navigate(`../calender/${eventId}/${userId}`);
	}

	const clickBackHandler = () => {
		dispatch(decrement());
		navigate(-1);
	}
	return (
	//    <!-- Content In -->
	   <div>
	   <div className="wrapper min-h-full">
		 <div className="space-y-8 h-full">
		   {/* <!-- title-holder  --> */}
		   <div className="flex justify-between items-center">
			 <a href="#" className="flex items-center">
			   <i className="icon-back-arrow mr-4 text-2xl"></i>
			   <h1>Sweet Love Catering</h1>
			 </a>
		   </div>
		   {/* <!-- step-progress-bar  --> */}
		   <div className="w-full overflow-hidden">
				<StepProgressBar />
		   </div>
		   {/* <!-- main-content  --> */}
		   <div className="space-y-5">
			{allDiscount.map(ele => {
				if(ele.discount_type === "discount_on_total_bill") {
					return (
						<div className="bg-gradient-to-r from-[#13e1b094] to-[#13E1B0] p-5 pr-8 relative overflow-hidden rounded-lg">
							<div className="flex justify-between item-basline">
								<div>
									<h1 className="text-white">Discount On Total Bill</h1>
									<div className="text-[40px] text-black font-bold">{ele.discount}</div>
									<span className="text-xs text-white font-normal">4 Event can be posted or one with max 30 day</span>
								</div>
								<div>
									<button onClick={() => {
										setIsDiscountOnTotalBillPopUpOpen(true)
										setTotalDiscountId(ele.id);
										}} className="bg-white p-2 rounded-md text-sm font-bold"><i className="text-sm edit text-black icon-edit mr-2"></i>Edit</button>
									<div className="absolute" style={{ right: "40px", top: "65%", transform: "scale(1.2)" }}>
										<img src={celebration} alt="" />
									</div>
								</div>
							</div>
						</div>
					)
				}
				if(ele.discount_type === "discount_on_equipment_or_item") {
					return (
						<div className="bg-gradient-to-r from-[#20c0e878] to-[#20C0E8] p-5 pr-8 relative overflow-hidden rounded-lg">
							<div className="flex justify-between item-basline">
								<div>
									<h1 className="text-white">Discount On Equipment Or Item</h1>
									<div className="text-[40px] text-black font-bold">{ele.discount}</div>
									<span className="text-xs text-white font-normal">4 Event can be posted or one with max 30 day</span>
								</div>
								<div>
									<button onClick={() => {
										setIsDiscountOnEquipmentOrItemPopUpOpen(true);
										setEquipmentDiscountIdDiscountId(ele.id);
										}}  className="bg-white p-2 rounded-md text-sm font-bold"><i className="text-sm edit text-black icon-edit mr-2"></i>Edit</button>
									<div className="absolute" style={{ right: "40px", top: "65%", transform: "scale(1.2)" }}>
										<img src={celebration} alt="" />
									</div>
								</div>
							</div>
			 			</div>
					)
				}
				if(ele.discount_type === "advance_and_discount_confirmation") {
					return (
						<div className="bg-gradient-to-r from-[#faba1585] to-[#FABA15] p-5 pr-8 relative overflow-hidden rounded-lg">
							<div className="flex justify-between item-basline">
								<div>
									<h1 className="text-white">Advance and Discount Confirmation</h1>
									<div className="text-[40px] text-black font-bold">{ele.discount}</div>
									<span className="text-xs text-white font-normal">4 Event can be posted or one with max 30 day</span>
								</div>
								<div>
									<button onClick={() => {
										setIsAdvanceAndDiscountConfirmationPopUpOpen(true);
										setAdvanceDiscountId(ele.id);
										}} className="bg-white p-2 rounded-md text-sm font-bold"><i className="text-sm edit text-black icon-edit mr-2"></i>Edit</button>
									<div className="absolute" style={{ right: "40px", top: "65%", transform: "scale(1.2)" }}>
										<img src={celebration} alt="" />
									</div>
								</div>
							</div>
						</div>
					)
				}
			})}
		   </div>
		   {/* <!-- advisement --> */}
		   <Advertisement />
		   {/* <!-- next preview button --> */}
		   <div className="prw-next-btn">               
			 <button type="button" className="flex items-center" onClick={clickBackHandler}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
			 <button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
		   </div>
		 </div>
	   </div>

	 <Modal isOpen={isDiscountOnTotalBillPopUpOpen}>
		<EventPopUpDiscountOnTotalBill handleClose={setIsDiscountOnTotalBillPopUpOpen} eventId={eventId} totalDiscountId={totalDiscountId}/>
	 </Modal>
	 <Modal isOpen={isDiscountOnEquipmentOrItemPopUpOpen}>
		<EventPopUpDiscountOnEquipmentOrItem handleClose={setIsDiscountOnEquipmentOrItemPopUpOpen} eventId={eventId} discountId={equipmentDiscountId} />
	 </Modal>
	 <Modal isOpen={isAdvanceAndDiscountConfirmationPopUpOpen}>
		<EventPopUpDiscountOnTotalBill handleClose={setIsAdvanceAndDiscountConfirmationPopUpOpen} eventId={eventId} advanceDiscountId={advanceDiscountId} />
	 </Modal>
	 </div>
  )
}

export default EventDiscounts