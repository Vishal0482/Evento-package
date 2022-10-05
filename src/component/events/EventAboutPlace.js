import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ringAd from "../../assest/images/ring-ad.png"

function EventAboutPlace() {

	const navigate = useNavigate();
	const [isAddPlaceWithDisplayNamePopUpOpen, setIsAddPlaceWithDisplayNamePopUpOpen] = useState(false);
	const [price, setPrice] = useState("");
	const [priceType, setPriceType] = useState("");
	const [about, setAbout] = useState("");

	console.log(price, priceType, about)
  
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
		 <div className="w-full overflow-hidden">
		   <ul className="flex justify-between step-progress-holder">
			 <li>
			   <div>
				 <span>01</span>
			   </div>
			   <h3>Add Place</h3>
			 </li>
			 <li>
			   <div>
				 <span>02</span>
			   </div>
			   <h3>about place</h3>
			 </li>
			 <li>
			   <div>
				 <span>03</span>
			   </div>
			   <h3>personal details</h3>
			 </li>
			 <li>
			   <div>
				 <span>04</span>
			   </div>
			   <h3>Photos & videos</h3>
			 </li>
			 <li>
			   <div>
				 <span>05</span>
			   </div>
			   <h3>add service</h3>
			 </li>
			 <li>
			   <div>
				 <span>06</span>
			   </div>
			   <h3>capacity</h3>
			 </li>
			 <li>
			   <div>
				 <span>07</span>
			   </div>
			   <h3>company details</h3>
			 </li>
			 <li>
			   <div>
				 <span>08</span>
			   </div>
			   <h3>Terms & Conditions</h3>
			 </li>
			 <li>
			   <div>
				 <span>09</span>
			   </div>
			   <h3>Discount</h3>
			 </li>
			 <li>
			   <div>
				 <span>10</span>
			   </div>
			   <h3>Calendar</h3>
			 </li>
		   </ul>
		 </div>
		 {/* <!-- main-content  --> */}
		 <div className="space-y-3">
		   <div className="w-full">
			 <span className="input-titel">Price</span>
			 <label htmlFor="" className="flex items-center w-full bg-white p-2 px-3.5 rounded-md">
			   <div className="w-full px-3.5">
				 <input type="text" className="w-full outline-none text-spiroDiscoBall font-bold text-base"
				   value={price} onChange={(e) => setPrice(e.target.value)} />
			   </div>
			   <div className="selectPrice flex items-center space-x-3">
				 <label className="block cursor-pointer">
				   <input type="radio" name="price" value="perDay" className="hidden" onChange={(e) => setPriceType("per_day")} />
				   <span
					 className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
					 Per / Day
				   </span>
				 </label>
				 <label className="block cursor-pointer">
				   <input type="radio" name="price" value="perHour" className="hidden" defaultChecked onChange={(e) => setPriceType("per_hour")} />
				   <span
					 className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
					 Per / Hour
				   </span>
				 </label>
				 <label className="block cursor-pointer">
				   <input type="radio" name="price" value="perEvent" className="hidden"onChange={(e) => setPriceType("per_event")} />
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
			 <textarea name="" id="" cols="30" rows="5"
			   className="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md" onChange={(e) => setAbout(e.target.value)}></textarea>
		   </div>
		 </div>
		 {/* <!-- advisement --> */}
		 <div className="w-full mt-5">
		   <img src={ringAd} alt="ring-ad" className="w-full object-cover" />
		 </div>
	   </div>
	   <div className="prw-next-btn mt-auto">
		 <button type="button" className="flex items-center" onClick={() => navigate(-1)}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active" onClick={() => navigate("/dashboard/event/personaldetails")}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>

   </div>
  )
}

export default EventAboutPlace