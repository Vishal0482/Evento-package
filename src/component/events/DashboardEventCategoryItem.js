import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sweetLoveCatering from "../../assest/images/sweet-love-catering.png";
import { baseUrl } from '../../config';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/stepProgressCount';

function DashboardEventCategoryItem({data}) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isActive, setIsAcvive] = useState(false);
	// const [category, setCategory] = useState({});
	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`,
	}

	// const getCategory = async()=> {
	// 	try {
	// 		const response = await axios.get(`${baseUrl}/api/event_category/${data.category_id}`,{headers: header});
	// 		console.log(response);
	// 		setCategory(response.data.data[0]);
	// 	} catch (error) {	
	// 		 console.log(error);
	// 	}
	// }
	// useEffect(() => {
	// 	getCategory();
	// },[]);

  return (
    <div className="w-full flex items-center">
			<div>
			  <label className="checkbox w-16">
			  <input type="checkbox" className="bg-white"/>
			  <i className="icon-right"></i>
			  </label>
			</div>
			<Link to={`../../event-view/${data?.eventId}`} className="cursor-pointer w-full p-4 pr-7 bg-white rounded">
			  <div className="flex space-x-5">
				<img src={sweetLoveCatering} />
				<div className="w-full">
				  <div className="flex justify-between border-b-2 pb-4">
					<div className="">
					  <span className="text-sm text-white bg-spiroDiscoBall px-3 py-1">{data?.category_id.category_name}</span>
					  <h2 className="text-japaneseIndigo pt-5">{data?.display_name}</h2>
					  <div className="text-sm text-quicksilver pt-3"><i className="icon-fill-location mr-3"></i>Dallas, Texas
					  </div>
					</div>
					<div className="">
					  <div className="flex items-center">
						<input type="checkbox" className="switch mr-3" defaultChecked={data?.is_active} onClick={(e) => { e.stopPropagation(); setIsAcvive(!isActive)} } />
						<label htmlFor="">
						  <h3>Live</h3>
						</label>
					  </div>
					  <h1 className="pt-7">250 INR</h1>
					</div>
				  </div>
				  <div className="flex justify-between pt-4">
					<div className="flex items-center space-x-1">
					  <i className="icon-fillStar text-sm"></i>
					  <i className="icon-fillStar text-sm"></i>
					  <i className="icon-fillStar text-sm"></i>
					  <i className="icon-star text-sm"></i>
					  <i className="icon-star text-sm"></i>
					  <span className="text-quicksilver text-xs font-bold pl-2"> 19,981 ratings</span>
					</div>
					<div className="flex space-x-2">
					  <Link to={`form`} onClick={()=> dispatch(increment())} className="bg-brightGray px-2 py-1 text-center rounded"><i className="text-base edit text-black icon-edit" style={{color: "#000"}}></i></Link>
						<Link to="/" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-fill-megaphone text-base text-black"></i></Link>
					  <Link to={`/dashboard/event/calender`} className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-calendar1 text-base text-black"></i></Link>
					  <Link to="/" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-percentage text-base text-black"></i></Link>
					  <Link to="/" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-share text-base text-black"></i></Link>
					</div>
				  </div>
				</div>
			  </div>
			</Link>
		  </div>
  )
}

export default DashboardEventCategoryItem;