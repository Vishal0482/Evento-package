import React, { useEffect, useState } from 'react'

import ringAd from "../../assest/images/ring-ad.png"
import celebration from "../../assest/svg/celebration.svg"
import Modal from "../modal/Modal"
import EventPopUpDiscountOnTotalBill from "./popups/EventPopUpDiscountOnTotalBill"
import EventPopUpDiscountOnEquipmentOrItem from "./popups/EventPopUpDiscountOnEquipmentOrItem"
import EventPopUpAdvanceAndDiscountConfirmation from "./popups/EventPopUpAdvanceAndDiscountConfirmation"
import axios from 'axios'
import { baseUrl } from '../../config'
import { useDispatch } from 'react-redux'
import StepProgressBar from './StepProgressBar'
import { decrement, increment } from '../../redux/stepCountPogress'
import { useNavigate } from 'react-router-dom'



function EventDiscounts() {

	const [isDiscountOnTotalBillPopUpOpen, setIsDiscountOnTotalBillPopUpOpen] = useState(false);
	const [isDiscountOnEquipmentOrItemPopUpOpen, setIsDiscountOnEquipmentOrItemPopUpOpen] = useState(false);
	const [isAdvanceAndDiscountConfirmationPopUpOpen, setIsAdvanceAndDiscountConfirmationPopUpOpen] = useState(false);
	const [allDiscount, setAllDiscount] = useState({});
	const token = '248258927fede2b3e48c182f40539846bcd47037'

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const getDiscount = async () => {
		const header = {
			'Authorization': `Token ${token}`
		}
		try {
			const response = await axios.get(`${baseUrl}/api/discount`, { headers: header });
			console.log(response);
			setAllDiscount(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getDiscount();
	}, [])

	const handeladddiscount = () => {
		navigate("/dashboard/event/calender")
		dispatch(increment());
	}

	return (
		//    <!-- Content In -->
		<div className="rightInContent">
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
					<StepProgressBar />
					{/* <!-- main-content  --> */}
					<div className="space-y-5">
						<div onClick={() => setIsDiscountOnTotalBillPopUpOpen(true)} className="bg-gradient-to-r from-[#13e1b094] to-[#13E1B0] p-5 pr-8 rounded-lg">
							<div className="flex justify-between items-center">
								<div>
									<h1 className="text-white">Discount On Total Bill</h1>
									<div className="text-[40px] text-black font-bold">10%</div>
									<span className="text-xs text-white font-normal">4 Event can be posted or one with max 30 day</span>
								</div>
								<div>
									<img src={celebration} alt="" />
								</div>
							</div>
						</div>
						<div onClick={() => setIsDiscountOnEquipmentOrItemPopUpOpen(true)} className="bg-gradient-to-r from-[#20c0e878] to-[#20C0E8] p-5 pr-8 rounded-lg">
							<div className="flex justify-between items-center">
								<div>
									<h1 className="text-white">Discount On Equipment Or Item</h1>
									<div className="text-[40px] text-black font-bold">10%</div>
									<span className="text-xs text-white font-normal">4 Event can be posted or one with max 30 day</span>
								</div>
								<div>
									<img src={celebration} alt="" />
								</div>
							</div>
						</div>
						<div onClick={() => setIsAdvanceAndDiscountConfirmationPopUpOpen(true)} className="bg-gradient-to-r from-[#faba1585] to-[#FABA15] p-5 pr-8 rounded-lg">
							<div className="flex justify-between items-center">
								<div>
									<h1 className="text-white">Advance and Discount Confirmation</h1>
									<div className="text-[40px] text-black font-bold">10%</div>
									<span className="text-xs text-white font-normal">4 Event can be posted or one with max 30 day</span>
								</div>
								<div>
									<img src={celebration} alt="" />
								</div>
							</div>
						</div>
					</div>
					{/* <!-- advisement --> */}
					<div className="w-full mt-5">
						<img src={ringAd} alt="ring-ad" className="w-full object-cover" />
					</div>
					{/* <!-- next preview button --> */}
					<div className="prw-next-btn">
						<button type="button" className="flex items-center" onClick={() => {
							navigate(-1)
							dispatch(decrement())
						}}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
						<button type="button" className="flex items-center active" onClick={handeladddiscount}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
					</div>
				</div>
			</div>

			<Modal isOpen={isDiscountOnTotalBillPopUpOpen}>
				<EventPopUpDiscountOnTotalBill handleClose={setIsDiscountOnTotalBillPopUpOpen} />
			</Modal>
			<Modal isOpen={isDiscountOnEquipmentOrItemPopUpOpen}>
				<EventPopUpDiscountOnEquipmentOrItem handleClose={setIsDiscountOnEquipmentOrItemPopUpOpen} />
			</Modal>
			<Modal isOpen={isAdvanceAndDiscountConfirmationPopUpOpen}>
				<EventPopUpAdvanceAndDiscountConfirmation handleClose={setIsAdvanceAndDiscountConfirmationPopUpOpen} />
			</Modal>

		</div>
	)
}

export default EventDiscounts