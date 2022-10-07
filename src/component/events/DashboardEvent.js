import React, { useEffect, useState } from 'react'
import ringAd from "../../assest/images/ring-ad.png"
import { useNavigate } from 'react-router-dom'
import Modal from '../modal/Modal';
import EventPopUpCreateNew from './popups/EventPopUpCreateNew';
// import axios from '../../axios';
import axios from 'axios';
import { baseUrl } from '../../config';
import DashboardEventCategoryItem from './DashboardEventCategoryItem';
import { useLocation, useParams } from 'react-router-dom';


function DashboardEvent() {
	const params = useParams();
	const [isCreateNewPopUpOpen, setIsCreateNewPopUpOpen] = useState(false);
	const [allCategories, setAllCatagories] = useState({});
	const navigator = useNavigate();
	const token = '7234eb833b21d7dae48848fb8d4a0cc3b1ea6c9f';
	console.log("params", params.id);
	const getAllCatagories = async () => {
		const header = {
			'Authorization': `Token ${token}`
		}
		try {
			const response = await axios.get(`${baseUrl}/api/events_get_list`, { headers: header });
			console.log(response);
			setAllCatagories(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	const handleLogout = (e) =>{
		e.preventDefault();
		localStorage.removeItem('token');
		navigator('/dashboard/login');
	}

	useEffect(() => {
		getAllCatagories();
	}, [])

	console.log("All categories >> ", allCategories.data);

	return (
		<div className="rightInContent">
			<div className="wrapper">
				<div className="flex flex-wrap items-center">
					<h1>All Category</h1>
					<div className="flex whitespace-nowrap space-x-5 ml-auto">
						<select name="All Category"
							className="arrow bg-white pl-5 pr-11 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider appearance-none focus-visible:outline-none">
							<option value="">All Category</option>
							<option value="">All Category</option>
							<option value="">All Category</option>
							<option value="">All Category</option>
						</select>
						<button className="bg-white px-5 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider" onClick={handleLogout}>LOGOUT</button>
						<button className="bg-white px-5 py-3 text-japaneseIndigo font-bold rounded-md tracking-wider">MultipleLive</button>
						<button href="#" onClick={() => setIsCreateNewPopUpOpen(true)} className="btn-primary"><i className="icon-plus mr-3"></i>Create New</button>
					</div>
				</div>
				<div className="space-y-5 pt-10">
					{allCategories.data?.map(ele => (
						<DashboardEventCategoryItem key={ele.categoryId} />
					))}

					<Modal isOpen={isCreateNewPopUpOpen} >
						<EventPopUpCreateNew handleClose={setIsCreateNewPopUpOpen} />
					</Modal>
				</div>
				{/* <!-- advisement --> */}
				<div className="w-full mt-5">
					<img src={ringAd} alt="ring-ad" className="w-full object-cover" />
				</div>
			</div>
		</div>
	)
}

export default DashboardEvent