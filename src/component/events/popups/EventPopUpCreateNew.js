import React, { useState } from 'react'
import { useEffect } from 'react';
import Modal from "../../modal/Modal.js"
import EventPopUpCategory from './EventPopUpCategory.js'
import axios from "axios"

function EventPopUpCreateNew({ handleClose }) {

	const [isCategoryPopUpOpen, setIsCategoryPopUpOpen] = useState(false);
	// const [catering, setCatering] = useState([""]);

	// useEffect(function () {
	// 	axios.get("https://jsonplaceholder.typicode.com/users").then((res) => (res.data))
	// })

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
						<form className="space-y-5 py-7">
							<div className="w-full inputHolder">
								<label className="input-titel">Select Category</label>
								<select className="w-full arrow option">
									{/* Dropdown list */}
									{/* {catering.map((user) => (
										<option key={user.id} value={user.id}>{user.name}</option>

									))} */}
									<option>Love Catering</option>
									<option>Sweet Catering</option>
								</select>
							</div>
							<div className="w-full inputHolder">
								<label className="input-titel">Give Display Name of Your Category</label>
								<input className="input" type="text" />
							</div>
						</form>
						<a href="#" className="btn-primary w-full uppercase">Submit</a>
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