import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sweetLoveCatering from "../../assest/images/sweet-love-catering.png";
import { baseUrl } from '../../config';

function DashboardEventCategoryItem({data}) {
	// const [isLive, setIsLive] = useState(false);
	// const token = localStorage.getItem("Token");
	// const header = {
	// 	'Authorization': `Token ${token}`,
	// }

	// useEffect(async()=> {
	// 	const requestObj = {

	// 	};

	// 	try {
	// 		const response = await axios.put(`${baseUrl}/api/events_get_list`, {requestObj},{headers: header});
	// 		console.log(response);
	// 	} catch (error) {	
	// 		 console.log(error);
	// 	}
	// }, []);

  return (
    <div className="w-full flex items-center">
			<div>
			  <label className="checkbox w-16">
			  <input type="checkbox" className="bg-white"/>
			  <i className="icon-right"></i>
			  </label>
			</div>
			<div className="w-full p-4 pr-7 bg-white rounded">
			  <div className="flex space-x-5">
				<img src={sweetLoveCatering} alt=""/>
				<div className="w-full">
				  <div className="flex justify-between border-b-2 pb-4">
					<div className="">
					  <span className="text-sm text-white bg-spiroDiscoBall px-3 py-1">{data?.event_type}</span>
					  <h2 className="text-japaneseIndigo pt-5">{data?.display_name}</h2>
					  <div className="text-sm text-quicksilver pt-3"><i className="icon-fill-location mr-3"></i>Dallas, Texas
					  </div>
					</div>
					<div className="">
					  <div className="flex items-center">
						<input type="checkbox" className="switch mr-3" />
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
					  <Link to={`/dashboard/event/addplaces/${data.eventId}`} className="bg-brightGray px-2 py-1 text-center rounded"><i className="text-base edit text-black icon-edit" style={{color: "#000"}}></i></Link>
						<Link to="/" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-fill-megaphone text-base text-black"></i></Link>
					  <Link to="/" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-calendar1 text-base text-black"></i></Link>
					  <Link to="/" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-percentage text-base text-black"></i></Link>
					  <Link to="/" className="bg-brightGray px-2 py-1 text-center rounded"><i
						className="icon-share text-base text-black"></i></Link>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
  )
}

export default DashboardEventCategoryItem;