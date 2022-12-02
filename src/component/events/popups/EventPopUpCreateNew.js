import React, { useState, useEffect } from 'react'
import Modal from "../../modal/Modal.js"
import EventPopUpCategory from './EventPopUpCategory.js'
import axios from "axios";
import { baseUrl } from '../../../config.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment } from '../../../redux/stepProgressCount.js';
import { toast } from 'react-toastify';
import { getEventType } from '../../../shared/helper.js';
import { WindowScrollController } from '@fullcalendar/core/internal.js';

function EventPopUpCreateNew({ handleClose, selectedCategory, displayName, edit, eventId }) {

	const [isCategoryPopUpOpen, setIsCategoryPopUpOpen] = useState(false);
	const [category, setCategory] = useState([]);
	const [newCategoryId, setNewCategoryId] = useState(0);
	const [newCategoryDisplayName, setNewCategoryDisplayName] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const eventType = getEventType(params.eventType);

	const token = localStorage.getItem("Token");;
	const header = {
		'Authorization': `Token ${token}`
	}
	const getCategory = async() => {
		try {
			const response = await axios.get(`${baseUrl}/organizer/events/listcategory`,{headers: header});
			// console.log("Categorys >> ",response);
			setCategory(response.data.Data);
			setNewCategoryId(response.data.Data[0]?._id);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(()=>{
		getCategory();
		if(edit){
			setNewCategoryDisplayName(displayName);
		}
	},[handleClose, isCategoryPopUpOpen]);

	const clickHandler = async() => {
		const requestObj = {
			event_type: eventType,
    		display_name: newCategoryDisplayName,
    		event_category: newCategoryId
		}
		if(edit) {
			requestObj.eventid = eventId
		}
		console.log(requestObj)
		if(newCategoryDisplayName === "" || newCategoryDisplayName === null) {
			toast.warn("Display name can not be empty.")
			return
		}
		try {
			const response = await axios.post(`${baseUrl}/organizer/events/save`, requestObj, { headers: header });
			// console.log("created event >> ", response);
			if (response.data.IsSuccess) {
				toast.success(response.data.Message);
				handleClose(false);
				if(!edit) {
					dispatch(increment());
					navigate(`../addplaces`);
				}
				// temporary fix for page reload
				window.location.reload();
			} else {
				toast.error(response.data.Message);
				handleClose(false);
			}
		} catch (error) {
			toast.error("Something went Wrong.");
			console.log(error);
		}
	}

	return (
		//    <!-- Create New  -->
		<div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
			<div className="table-cell align-middle">
				<div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
					<div className="bg-brightGray p-12">
						<div className="flex justify-between items-center">
							<h1 className="h1">Create New</h1>
							<div className="flex items-center space-x-6">
								<button onClick={() => {
									setIsCategoryPopUpOpen(true)
								}} href="#" className="text-base font-bold text-spiroDiscoBall"><i className="icon-plus font-bold text-xs"></i> <span>Add Category</span></button>
								<button onClick={() => handleClose(false)} href="#" className="text-xl"><i className="icon-close"></i></button>
							</div>
						</div>
						<form className="space-y-5 pt-7">
							<div className="w-full inputHolder">
								<label className="input-titel">Select Category</label>
								<select defaultValue={selectedCategory} className="w-full arrow option" onChange={(e) => {
									setNewCategoryId(e.target[e.target.selectedIndex].getAttribute('data-id'));
								}} >
									{category && category.map((element) =>
										<option key={element._id} value={element.category_name} selected={element.category_name === selectedCategory} data-id={element._id}>{element.category_name}</option>
									)}
								</select>
							</div>
							<div className="w-full inputHolder">
								<label className="input-titel">Give Display Name of Your Category</label>
								<input className="input" type="text" value={newCategoryDisplayName} onChange={(e) => setNewCategoryDisplayName(e.target.value)}/>
							</div>
						<a href="#" className="btn-primary w-full uppercase" onClick={() => clickHandler()}>Submit</a>	
						</form>
					</div>
				</div>
			</div>
			<Modal isOpen={isCategoryPopUpOpen} >
				<EventPopUpCategory handleClose={setIsCategoryPopUpOpen} />
			</Modal>
		</div>
	)
}

export default EventPopUpCreateNew