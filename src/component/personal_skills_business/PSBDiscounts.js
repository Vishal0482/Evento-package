import React, {useState} from 'react'

import ringAd from "../../assest/images/ring-ad.png"
import celebration from "../../assest/svg/celebration.svg"
import Modal from "../modal/Modal"
import EventPopUpDiscountOnTotalBill  from "./popups/PSBPopUpDiscountOnTotalBill"
import EventPopUpDiscountOnEquipmentOrItem from "./popups/PSBPopUpDiscountOnEquipmentOrItem"
import EventPopUpAdvanceAndDiscountConfirmation from "./popups/PSBPopUpAdvanceAndDiscountConfirmation"
import { Link } from 'react-router-dom'



function PSBDiscounts() {

	const [isDiscountOnTotalBillPopUpOpen, setIsDiscountOnTotalBillPopUpOpen] = useState(false)
	const [isDiscountOnEquipmentOrItemPopUpOpen, setIsDiscountOnEquipmentOrItemPopUpOpen] = useState(false)
	const [isAdvanceAndDiscountConfirmationPopUpOpen, setIsAdvanceAndDiscountConfirmationPopUpOpen] = useState(false)

	return (
	//    <!-- Content In -->
	   <div className="rightInContent">
	   <div className="wrapper min-h-full">
		 <div className="space-y-8 h-full">
		   {/* <!-- title-holder  --> */}
		   <div className="flex justify-between items-center">
			 <Link to="/" className="flex items-center">
			   <i className="icon-back-arrow mr-4 text-2xl"></i>
			   <h1>Personal Skill Business</h1>
			 </Link>
		   </div>
		   {/* <!-- step-progress-bar  --> */}
		   <div className="w-full overflow-hidden">
			 <ul className="flex justify-between step-progress-holder">
			   <li>
				 <div>
				   <span>01</span>
				 </div>
				 <h3>Add Place</h3>
			   </li>
			   <li>
				 <div>
				   <span>02</span>
				 </div>
				 <h3>about place</h3>
			   </li>
			   <li>
				 <div>
				   <span>03</span>
				 </div>
				 <h3>personal details</h3>
			   </li>
			   <li>
				 <div>
				   <span>04</span>
				 </div>
				 <h3>Photos & videos</h3>
			   </li>
			   <li>
				 <div>
				   <span>05</span>
				 </div>
				 <h3>add service</h3>
			   </li>
			   <li>
				 <div>
				   <span>06</span>
				 </div>
				 <h3>capacity</h3>
			   </li>
			   <li>
				 <div>
				   <span>07</span>
				 </div>
				 <h3>company details</h3>
			   </li>
			   <li>
				 <div>
				   <span>08</span>
				 </div>
				 <h3>Terms & Conditions</h3>
			   </li>
			   <li>
				 <div>
				   <span>09</span>
				 </div>
				 <h3>Discount</h3>
			   </li>
			   <li>
				 <div>
				   <span>10</span>
				 </div>
				 <h3>Calendar</h3>
			   </li>
			 </ul>
		   </div>
		   {/* <!-- main-content  --> */}
		   <div className="space-y-5">
			 <div onClick={()=>setIsDiscountOnTotalBillPopUpOpen(true)} className="bg-gradient-to-r from-[#13e1b094] to-[#13E1B0] p-5 pr-8 rounded-lg">
			   <div className="flex justify-between items-center">
				 <div>
				   <h1 className="text-white">Discount On Total Bill</h1>
				   <div className="text-[40px] text-black font-bold">10%</div>
				   <span className="text-xs text-white font-normal">4 Event can be posted or one with max 30 day</span>
				 </div>
				 <div>
				   <img src={celebration} alt=""/>
				 </div>
			   </div>
			 </div>
			 <div onClick={()=>setIsDiscountOnEquipmentOrItemPopUpOpen(true)} className="bg-gradient-to-r from-[#20c0e878] to-[#20C0E8] p-5 pr-8 rounded-lg">
			   <div className="flex justify-between items-center">
				 <div>
				   <h1 className="text-white">Discount On Equipment Or Item</h1>
				   <div className="text-[40px] text-black font-bold">10%</div>
				   <span className="text-xs text-white font-normal">4 Event can be posted or one with max 30 day</span>
				 </div>
				 <div>
				   <img src={celebration} alt=""/>
				 </div>
			   </div>
			 </div>
			 <div onClick={()=>setIsAdvanceAndDiscountConfirmationPopUpOpen(true)} className="bg-gradient-to-r from-[#faba1585] to-[#FABA15] p-5 pr-8 rounded-lg">
			   <div className="flex justify-between items-center">
				 <div>
				   <h1 className="text-white">Advance and Discount Confirmation</h1>
				   <div className="text-[40px] text-black font-bold">10%</div>
				   <span className="text-xs text-white font-normal">4 Event can be posted or one with max 30 day</span>
				 </div>
				 <div>
				   <img src={celebration} alt=""/>
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
			 <button type="button" className="flex items-center"><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
			 <button type="button" className="flex items-center active"><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
		   </div>
		 </div>
	   </div>

	   <Modal isOpen={isDiscountOnTotalBillPopUpOpen}>
		<EventPopUpDiscountOnTotalBill handleClose={setIsDiscountOnTotalBillPopUpOpen}/>
	 </Modal>
	 <Modal isOpen={isDiscountOnEquipmentOrItemPopUpOpen}>
		<EventPopUpDiscountOnEquipmentOrItem handleClose={setIsDiscountOnEquipmentOrItemPopUpOpen}/>
	 </Modal>
	 <Modal isOpen={isAdvanceAndDiscountConfirmationPopUpOpen}>
		<EventPopUpAdvanceAndDiscountConfirmation handleClose={setIsAdvanceAndDiscountConfirmationPopUpOpen}/>
	 </Modal>

	 </div>
  )
}

export default PSBDiscounts