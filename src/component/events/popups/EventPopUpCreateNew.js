import React, { useState, useEffect } from 'react'
import Modal from "../../modal/Modal.js"
import EventPopUpCategory from './EventPopUpCategory.js'
import axios from "axios";
import { baseUrl } from '../../../config.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../redux/createEvent.js';
import GetData from "../../../hooks/GetData";

function EventPopUpCreateNew({ handleClose }) {

	const [isCategoryPopUpOpen, setIsCategoryPopUpOpen] = useState(false);
	const [category, setCategory] = useState([]);
	const [newCategoryId, setNewCategoryId] = useState(0);
	const [newCategoryName, setNewCategoryName] = useState("");
	const [newCategoryDisplayName, setNewCategoryDisplayName] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// const token = '7234eb833b21d7dae48848fb8d4a0cc3b1ea6c9f';
	// const header = {
	// 	'Authorization': `Token ${token}`
	// }
	// const getCategory = async() => {
	// 	try {
	// 		const response = await axios.get(`${baseUrl}/api/event_category_list`,{headers: header});
	// 		console.log("Categorys >> ",response);
	// 		setCategory(response.data.data);
	// 		setNewCategoryName(response.data.data[0].category_name);
	// 		setNewCategoryId(response.data.data[0].categoryId);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// useEffect(()=>{
	// 	getCategory();
	// },[]);

	const {data} = GetData("event_category_list");
	console.log("data",data);
	useEffect(()=>{
			if(data) {
			setCategory(data);
			setNewCategoryName(data[0]?.category_name);
			setNewCategoryId(data[0]?.categoryId);
		}
	},[data]);

	console.log(newCategoryId, newCategoryName, newCategoryDisplayName);
	const clickHandler = () => {
		const category = {id: newCategoryId, categoryName: newCategoryName, displayName: newCategoryDisplayName}
		dispatch(addCategory({category: category}));
		navigate("/dashboard/event/addplaces");
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
									// handleClose(false)
								}} href="#" className="text-base font-bold text-spiroDiscoBall"><i className="icon-plus font-bold text-xs"></i> <span>Add Category</span></button>
								<button onClick={() => handleClose(false)} href="#" className="text-xl"><i className="icon-close"></i></button>
							</div>
						</div>
						<form className="space-y-5 pt-7">
							<div className="w-full inputHolder">
								<label className="input-titel">Select Category</label>
								<select className="w-full arrow option" onChange={(e) => {
									setNewCategoryName(e.target.value);
									setNewCategoryId(e.target[e.target.selectedIndex].getAttribute('data-id'));
								}} >
									{category && category.map((element) =>
										<option key={element.categoryId} value={element.category_name} data-id={element.categoryId} >{element.category_name}</option>
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