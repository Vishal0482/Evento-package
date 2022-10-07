import axios from 'axios';
import React, { useState } from 'react';
import cuttingBoard from "../../assest/images/cutting-board.png";
import { baseUrl } from '../../config';
import Modal from '../modal/Modal';
import EventPopUpAddService from './popups/EventPopUpAddService';

function EventAddServiceListItem({data}) {
	
	const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false);
	const token = '7234eb833b21d7dae48848fb8d4a0cc3b1ea6c9f';
	const header = {
		'Authorization': `Token ${token}`
	}
	const deleteHandler = async() =>{
		const response = await axios.delete(`${baseUrl}/api/add_service_event/${data.Id}`, {headers: header});
		console.log("services Deleted >> ",response);
	}

  return (
    <div className="bg-white rounderd px-7 py-4">
			 <div className="flex justify-between">
			   <div className="">
				 <div className="w-28 h-28 border-2 border-brightGray rounded-md">
				   <img src={cuttingBoard} alt="" className="w-full h-full object-cover"/>
				 </div>
			   </div>
			   <div className="w-full pl-5">
				 <div className="flex justify-between">
				   <h2>{data.service_name}</h2>
				   <div className="flex items-center space-x-5">
					 <div className="flex items-center">
					   <input type="checkbox" id="on" className="switch mx-3 order-2" />
					   <span className="off text-base font-bold anim order-1 text-caribbeanGreen">Off</span>
					   <span className="on text-base font-bold anim order-3">On</span>
					 </div>
					 <span
					   className="inline-block text-base text-spiroDiscoBall font-bold bg-brightGray py-1.5 px-3.5 rounded">100
					 Qty</span>
					 <a href="#" title="Delete" onClick={deleteHandler}><i className="text-center icon-fill-delete text-xl"></i></a>
					 <a href="#" title="Edit" onClick={()=>setIsAddServicesPopUpOpen(true)}><i className="text-center icon-edit text-xl"></i></a>
				   </div>
				 </div>
				<p className="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]"> {data.service_desc} </p>
				 {/* <p className="text-quicksilver text-sm font-normal leading-6 pt-3 xl:max-w-[90%]">Lorem Ipsum is simply dummy text of the
				   printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
				   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				   specimen book 
				 </p> */}
				 <h3 className="text-right">{data.service_price} INR</h3>
			   </div>
			 </div>
			 <Modal isOpen={isAddServicesPopUpOpen}>
				<EventPopUpAddService handleClose={setIsAddServicesPopUpOpen} data={data}/>
	 		</Modal>
		   </div>
  )
}

export default EventAddServiceListItem;
