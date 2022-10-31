import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../config';
import Select from 'react-select';

function EventPopUpDiscountOnEquipmentOrItem({handleClose, eventId, discountId}) {
  console.log(discountId);
  const [value, setValue] = useState("");
  const [serviceList, setServiceList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selecetdServiceId, setSelectedServiceId] = useState([]);
  const [error, setError] = useState("");
  console.log(serviceList);
  console.log(selected);
  const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}
	const getServiceList = async() => {
		try {
			setServiceList([]);
			const response = await axios.get(`${baseUrl}/api/service_list`, {headers: header});
			setServiceList([]);
			response.data.data.map(ele => {
				setServiceList(current => [...current, {value: ele.Id, label: ele.service_name}]);
			})
			console.log("services >> ",response.data.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getServiceList();
	},[]);

	const optionChangeHandler = (e) => {
		// setSelected(e);
		e.map(ele => {
			setSelectedServiceId(cuurent => [...cuurent, ele.value])
		})
		console.log(selecetdServiceId);
	}

	const validateDiscount = (e) => {
		if((e.target.value <= 100) && (e.target.value >= 0)) {
			setValue(e.target.value);
			setError(null);
		} else {
			setError("Enter Valid Discount value");
		}
	}

	const handleSubmit = async() => {
		try {	
			const response = await axios.put(`${baseUrl}/api/org/discount/${discountId}?event_id=${eventId}`,{equipment_id: selecetdServiceId, discount: value+"%"},{headers: header});
			console.log(response);
      handleClose(false);
		} catch (error) {
			console.log(error);
		}
	}
  return (
	//  <!--  Discount on Particular Equipment Or Item  -->
	 <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
	 <div className="table-cell align-middle">
	   <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
		 <div className="bg-brightGray p-7 space-y-7">
		   <h2 className="h1 w-full max-w-[60%] text-center mx-auto"> Discount on Particular Equipment Or Item </h2>
		   <form className="flex items-center space-x-5">
			 <div className="w-full lg:w-1/2 inputHolder">
			   <label className="input-titel">Equipment Or Item</label>
			   {/* <select className="w-full arrow option">
				 <option></option>
				 <option>Love</option>
				 <option>Sweet</option>
			   </select> */}
			   <Select options={serviceList} isMulti onChange={(e) => optionChangeHandler(e)} />
			 </div>
			 <div className="w-full lg:w-1/2 inputHolder">
			   <label className="input-titel">Discount</label>
			   <input className="input option" type="text" onChange={validateDiscount} />
			   <span className="mt-1" style={{color: "red", fontSize: "14px"}}>{error} </span>
			 </div>
		   </form>
		   {/* <div className="flex justify-end">
			 <div className="btn-primary small"><i className="icon-plus mr-3 font-bold"></i>Add Equipment</div>
		   </div> */}
		   <ul className="space-y-2.5">
			 <li className="text-xs font-medium">* Terms & Conditions</li>
			 <li className="text-10 leading-5 font-medium text-japaneseIndigo pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
			 <li className="text-10 leading-5 font-medium text-japaneseIndigo pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
		   </ul>
		   <div className="flex items-center space-x-5">
		   <button onClick={()=>handleClose(false)} className="btn-primary btn-cancel w-full">CANCEL</button>
			 <button onClick={handleSubmit} className="btn-primary w-full">APPLY</button>
		   </div>
		 </div>
	   </div>
	 </div>
   </div>

  )
}

export default EventPopUpDiscountOnEquipmentOrItem