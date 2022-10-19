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
	const eventId = params.eventId;	
	// const aboutPlaceSelector = useSelector(state => state.createEvent.aboutPlace);
	// console.log("about place selector > ",aboutPlaceSelector);
	// useEffect(() => {
	// 	if(aboutPlaceSelector != null) {
	// 		setAbout(aboutPlaceSelector?.about);
	// 		setPrice(aboutPlaceSelector?.price);
	// 		setPriceType(aboutPlaceSelector?.priceType);
	// 	}
	// },[]);

	// console.log(banner,price, priceType, about, eventId);

	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'multipart/form-data',
	}
	
	const clickNextHandler = async() => {

		// console.log({ ...aboutPlace,event: eventId });
		const formData = new FormData();
		formData.append("place_price",price);
		formData.append("price_type",priceType);
		formData.append("details",about);
		formData.append("event",eventId);
		formData.append("place_banner",banner);
		

		// if(aboutPlaceSelector == null) {
			// Insert place
			const response = await axios.post(`${baseUrl}/api/add_place_event`, formData, {headers: header});
			console.log("About place Inserted>> ",response);
			// const aboutPlace = {id: response.data.data.Id , price: price, priceType: priceType, about: about};
			// dispatch(addAboutPlace({aboutPlace: aboutPlace}));
			
			if(response.data.isSuccess === true) {
				dispatch(increment()) 
				navigate(`/dashboard/event/personaldetails/${eventId}/${response.data.data.user_id}`);
			}
		// } else {
			// Update Place
			// const response = await axios.put(`${baseUrl}/api/add_place_event/${aboutPlaceSelector.id}`, formData, {headers: header});
			// console.log("About place Inserted>> ",response);
			// if(response.data.isSuccess === true) {
			// 	dispatch(increment()) 
			// 	navigate("/dashboard/event/personaldetails");
			// }
		// }

	}

	const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	}
  
  return (
	//  <!-- Content In -->
	 <div className="rightInContent">
	 <div className="wrapper min-h-full flex flex-col">
	   <div className="space-y-8 h-full">
		 {/* <!-- title-holder  -->/ */}
		 <div className="flex justify-between items-center">
		   <Link to="/" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i>
			 <h1>Sweet Love Catering</h1>
		   </Link>
		 </div>
		 {/* <!-- step-progress-bar  --> */}
		 <StepProgressBar />
		 {/* <!-- main-content  --> */}
		 <div className="space-y-3">
		 <div className="upload-holder">
			  	<span className="input-titel ml-2">Place Banner</span>
			   <label htmlFor="upload" className="upload">
				 <input type="file" name="images" id="upload" className="appearance-none hidden" onChange={(e) => setBanner(e.target.files[0])}/>
				 <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>
			   </label>
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
		 {/* <!-- advisement --> */}
		<Advertisement />
	   </div>
	   <div className="prw-next-btn mt-auto">
		 <button type="button" className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>

   </div>
  )
}

export default EventAboutPlace