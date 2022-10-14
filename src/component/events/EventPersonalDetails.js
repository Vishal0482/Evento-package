import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { addPersonalDetails } from '../../redux/createEvent';
import { decrement, increment } from '../../redux/stepProgressCount';
import { baseUrl } from '../../config';
import axios from 'axios';

function EventPersonalDetails() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [mobileNoHidden, setMobileNoHidden] = useState(false);
	const [emailHidden, setEmailHidden] = useState(false);
	const eventId = useSelector(state => state.createEvent.category?.id);	
	const userId = localStorage.getItem("userId");

	const token = '7234eb833b21d7dae48848fb8d4a0cc3b1ea6c9f';
	const header = {
		'Authorization': `Token ${token}`
	}

	const initialState = {
		professional_skill: "",
		full_name: "",
		mobile_no: "",
		alt_mobile_no: "",
		email: "",
		flat_no: "",
		street: "",
		area: "",
		city: "",
		state: "",
		pincode: "",
	}
	const [values, setValues] = useState(initialState);
	const handleInputChange = (e) =>{
			const { name, value } = e.target;
			setValues({
			  ...values,
			  [name]: value,
			});
	};
	console.log(values);

	const clickNextHandler = async() => {
		const requestObj = {...values, is_mobile_no_hidden : mobileNoHidden , is_email_hidden: emailHidden, eventId: eventId, user_id: userId};
		try {
			const response = await axios.post(`${baseUrl}/api/events/personaldetail`, requestObj, {headers: header});
			console.log("Personal details > ", response);		
			if(response.data.isSuccess === true) {
				dispatch(addPersonalDetails({personalDetail : values}));
				dispatch(increment());
				navigate("/dashboard/event/photosandvideos");
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
	// <!-- Content In -->
	<div className="rightInContent">
	<div className="wrapper min-h-full">
	  
	  <div className="space-y-8 h-full">
		 {/* <!-- title-holder  --> */}
		<div className="flex justify-between items-center">
		  <Link to="/" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Sweet Love Catering</h1></Link>
		</div>
		{/* <!-- step-progress-bar  --> */}
		<StepProgressBar />
		{/* <!-- main-content  --> */}
		<div className="space-y-5 -mx-2">
		  <div className="w-full flex items-end flex-wrap">
			<div className="w-full md:w-1/2 px-2 inputHolder">
				<span className="input-titel">Professional Skill</span>
				<input type="text" className="input" name="professional_skill" value={values?.professional_skill} onChange={handleInputChange}/>
			</div>
			<div className="w-full md:w-1/2 px-2 inputHolder">
				<span className="input-titel">Full Name (Mr / Mrs / Ms) <span>*</span></span>
				<input type="text" className="input" name="full_name" value={values?.full_name} onChange={handleInputChange} required/>
			</div>
		  </div> 
		  <div className="w-full flex items-end flex-wrap">
			<div className="w-full md:w-1/3 px-2 inputHolder">
				<div className="input-label-holder">
				  <label className="input-titel">Mobile Number <span>*</span></label>
				  <div className="input-checkd"><input type="checkbox" className="mr-2" checked={mobileNoHidden} onClick={() => setMobileNoHidden(!mobileNoHidden)} />Hidden</div>
				</div>
				<input type="text" className="input" name="mobile_no" value={values?.mobile_no} onChange={handleInputChange} required/>
			</div>
			<div className="w-full md:w-1/3 px-2 inputHolder">
				<label className="input-titel">Alternative Mobile Number <span></span></label>
				<input type="text" className="input" name="alt_mobile_no" value={values?.alt_mobile_no} onChange={handleInputChange}/>
			</div>
			<div className="w-full md:w-1/3 px-2 inputHolder">
				<div className="input-label-holder">
				  <label className="input-titel">Email Address <span>*</span></label>
				  <div className="input-checkd"><input type="checkbox" className="mr-2" checked={emailHidden} onClick={() => setEmailHidden(!emailHidden)} />Hidden</div>
				</div>
				<input type="text" className="input" name="email" value={values?.email} onChange={handleInputChange} required/>
			</div>
		  </div>
		  <div className="space-y-5">
			  <h3 className="px-2">Address</h3>
			  <div className="w-full flex flex-wrap">
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<span className="input-titel">Flat No.</span>
					<input type="text" className="input" name="flat_no" value={values?.flat_no} onChange={handleInputChange} required/>
				</div>
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<span className="input-titel">Street Name.</span>
					<input type="text" className="input" name="street" value={values?.street} onChange={handleInputChange}/>
				</div>
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<span className="input-titel">Area Name.</span>
					<input type="text" className="input" name="area" value={values?.area} onChange={handleInputChange} required/>
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
		<button type="button" className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		<button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	  </div>
	</div>
  </div>
  )
}

export default EventPersonalDetails