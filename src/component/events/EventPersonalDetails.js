import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Advertisement from '../Advertisement';
function EventPersonalDetails() {
	const navigate = useNavigate();
	const initialState = {
		personalSkill: "",
		fullName: "",
		mobileNo: "",
		alterMobileNo: "",
		email: "",
		flatNo: "",
		streetName: "",
		areaName: "",
		city: "",
		state: "",
		pincode: "",
	}
	const [values, setValues] = useState(initialState);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
		  ...values,
		  [name]: value,
		});
	  };
	console.log(values);
  return (
	// <!-- Content In -->
	<div className="rightInContent">
	<div className="wrapper min-h-full">
	  
	  <div className="space-y-8 h-full">
		 {/* <!-- title-holder  --> */}
		<div className="flex justify-between items-center">
		  <Link to="/" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Sweet Love Catering</h1></Link>
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
		<div className="space-y-5 -mx-2">
		  <div className="w-full flex items-end flex-wrap">
			<div className="w-full md:w-1/2 px-2 inputHolder">
				<span className="input-titel">Professional Skill</span>
				<input type="text" className="input" name="personalSkill" value={values?.personalSkill} onChange={handleInputChange}/>
			</div>
			<div className="w-full md:w-1/2 px-2 inputHolder">
				<span className="input-titel">Full Name (Mr / Mrs / Ms) <span>*</span></span>
				<input type="text" className="input" name="fullName" value={values?.fullName} onChange={handleInputChange} required/>
			</div>
		  </div> 
		  <div className="w-full flex items-end flex-wrap">
			<div className="w-full md:w-1/3 px-2 inputHolder">
				<div className="input-label-holder">
				  <label className="input-titel">Mobile Number <span>*</span></label>
				  <div className="input-checkd"><input type="checkbox" className="mr-2" />Hidden</div>
				</div>
				<input type="text" className="input" name="mobileNo" value={values?.mobileNo} onChange={handleInputChange} required/>
			</div>
			<div className="w-full md:w-1/3 px-2 inputHolder">
				<label className="input-titel">Alternative Mobile Number <span></span></label>
				<input type="text" className="input" name="alterMobileNo" value={values?.alterMobileNo} onChange={handleInputChange}/>
			</div>
			<div className="w-full md:w-1/3 px-2 inputHolder">
				<div className="input-label-holder">
				  <label className="input-titel">Email Address <span>*</span></label>
				  <div className="input-checkd"><input type="checkbox" className="mr-2"/>Hidden</div>
				</div>
				<input type="text" className="input" name="email" value={values?.email} onChange={handleInputChange} required/>
			</div>
		  </div>
		  <div className="space-y-5">
			  <h3 className="px-2">Address</h3>
			  <div className="w-full flex flex-wrap">
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<span className="input-titel">Flat No.</span>
					<input type="text" className="input" name="flatNo" value={values?.flatNo} onChange={handleInputChange} required/>
				</div>
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<span className="input-titel">Street Name.</span>
					<input type="text" className="input" name="streetName" value={values?.streetName} onChange={handleInputChange}/>
				</div>
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<span className="input-titel">Area Name.</span>
					<input type="text" className="input" name="areaName" value={values?.areaName} onChange={handleInputChange} required/>
				</div>
			  </div>
			  <div className="w-full flex flex-wrap">
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<label className="input-titel">City <span>*</span></label>
					<input type="text" className="input" name="city" value={values?.city} onChange={handleInputChange} required/>
				</div>
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<label className="input-titel">State <span>*</span></label>
					<input type="text" className="input" name="state" value={values?.state} onChange={handleInputChange}  required/>
				</div>
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<label className="input-titel">Pincode <span>*</span></label>
					<input type="text" className="input" name="pincode" value={values?.pincode} onChange={handleInputChange} required/>
				</div>
			  </div>
		  </div>
		</div>
		{/* <!-- advisement --> */}
		<Advertisement />
	  </div>
	  <div className="prw-next-btn">
		<button type="button" className="flex items-center" onClick={() => navigate(-1)}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		<button type="button" className="flex items-center active" onClick={() => navigate("/dashboard/event/photosandvideos")}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	  </div>
	</div>
  </div>
  )
}

export default EventPersonalDetails