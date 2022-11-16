import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Advertisement from "../Advertisement";
import { useDispatch, useSelector } from 'react-redux';
import { addAboutPlace } from '../../redux/createEvent';
import axios from 'axios';
import { baseUrl } from '../../config';
import StepProgressBar from './StepProgressBar';
import { decrement, increment } from '../../redux/stepProgressCount';

function EventAboutPlace() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const [banner, setBanner] = useState(null);
	const [price, setPrice] = useState("");
	const [priceType, setPriceType] = useState("per_hour");
	const [about, setAbout] = useState("");
	const [edit, setEdit] = useState(false);
	const eventId = params.eventId;	
	const eventType = params.eventType;	

	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'multipart/form-data',
	}

	const getAboutPlace = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/add_place_event/${eventId}`, {headers: header});
			if(response.data.data.length !== 0) {
				setBanner(response.data.data[0].place_banner);
				setAbout(response.data.data[0].details);
				setPrice(response.data.data[0].place_price);
				setPriceType(response.data.data[0].price_type);
				setEdit(true);
			}
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(()=>{
		getAboutPlace();
	},[]);

	
	const clickNextHandler = async() => {

		const formData = new FormData();
		formData.append("place_price",price);
		formData.append("price_type",priceType);
		formData.append("details",about);
		formData.append("event",eventId);
		try {
			if(edit == false) {
				// Insert place
				formData.append("place_banner",banner);
				const response = await axios.post(`${baseUrl}/api/add_place_event`, formData, {headers: header});
				console.log("About place Inserted>> ",response.data);
				if(response.data.isSuccess === true) {
					dispatch(increment()) 
					navigate(`../personaldetails/${eventId}/${response.data.data.user_id}`);
				}
			} else {
				// Update Place
				const response = await axios.put(`${baseUrl}/api/add_place_event/${eventId}`, formData, {headers: header});
				console.log("About place updated>> ",response.data);
				if(response.data.isSuccess === true) {
					dispatch(increment()) 
					navigate(`../personaldetails/${eventId}/${response.data.data.user_id}`);
				}
			}
		} catch (error) {
			console.log(error);
		}
	}

	const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	}
  
  return (
	
		 <div className="space-y-3">
		 <div className="upload-holder">
			  	<span className="input-titel ml-2">Place Banner</span>
			   <label htmlFor="upload" className="upload">
				 <input type="file" name="images" id="upload" className="appearance-none hidden" onChange={(e) => setBanner(e.target.files[0])}/>
				 <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>
			   </label>
				<span className="input-titel ml-2">{banner ? (banner.name || banner) : "Please select Images"}</span>
		   </div>
		   <div className="w-full">
			 <span className="input-titel">Price</span>
			 <label htmlFor="" className="flex items-center w-full bg-white p-2 px-3.5 rounded-md">
			   <div className="w-full px-3.5">
				 <input type="text" className="w-full outline-none text-spiroDiscoBall font-bold text-base"
				   value={price} onChange={(e) => setPrice(e.target.value)} />
			   </div>
			   <div className="selectPrice flex items-center space-x-3">
				 <label className="block cursor-pointer">
				   <input type="radio" name="price" value="per_day" checked={priceType === "per_day" && true} className="hidden" onChange={(e) => setPriceType("per_day")} />
				   <span
					 className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
					 Per / Day
				   </span>
				 </label>
				 <label className="block cursor-pointer">
				   <input type="radio" name="price" value="per_hour" className="hidden" defaultChecked onChange={(e) => setPriceType("per_hour")} />
				   <span
					 className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
					 Per / Hour
				   </span>
				 </label>
				 <label className="block cursor-pointer">
				   <input type="radio" name="price" value="per_event" className="hidden" checked={priceType === "per_event" && true} onChange={(e) => setPriceType("per_event")} />
				   <span
					 className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
					 Per / Event
				   </span>
				 </label>
			   </div>
			 </label>
		   </div>
		   <div className="w-full">
			 <span className="input-titel">About place</span>
			 <textarea name="" id="" cols="30" rows="5" value={about}
			   className="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md" onChange={(e) => setAbout(e.target.value)}></textarea>
		   </div>
		 </div>
  )
}

export default EventAboutPlace