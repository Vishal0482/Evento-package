import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { useDispatch } from 'react-redux';
import { addPersonalDetails } from '../../redux/createEvent';

function EventPersonalDetails() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
	const [errMsgObj, setErrMsgObj] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const clickNextHandler = (e) => {
		e.preventDefault()
		let tmpErrObj = errMsgObj;

		// FullName Condition check
		if (!values.fullName || values.fullName === "") {
			tmpErrObj = { ...tmpErrObj, fullName: "Name is Required" }
		}
		// Mobile Number Condition check
		if (!values.mobileNo || values.mobileNo === "") {
			tmpErrObj = { ...tmpErrObj, mobileNo: "Mobile No is not valid" }
		}

		// email Condition check
		if (!values.email || values.email === "") {
			tmpErrObj = { ...tmpErrObj, email: "Email Address is Required" }
		}
		// city Condition check
		if (!values.city || values.city === "") {
			tmpErrObj = { ...tmpErrObj, city: "City Name is Required" }
		}
		// state Condition check
		if (!values.state || values.state === "") {
			tmpErrObj = { ...tmpErrObj, state: "State Name is Required" }
		}
		// pincode Condition check
		if (!values.pincode || values.pincode === "") {
			tmpErrObj = { ...tmpErrObj, pincode: "Pincode is Required" }
		}

		setErrMsgObj(tmpErrObj)
		if (tmpErrObj) { }

		if (!tmpErrObj?.fullName && !tmpErrObj?.mobileNo && !tmpErrObj?.email && !tmpErrObj?.state && !tmpErrObj?.pincode) {
			try {
				dispatch(addPersonalDetails({ personalDetail: values }));
				navigate("/dashboard/event/photosandvideos");
			} catch (error) {
				console.log(error);
				alert("Some error occured. Please try again")
			}
		}
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
								<input type="text" className="input" name="personalSkill" value={values?.personalSkill} onChange={handleInputChange} />
							</div>
							<div className="w-full md:w-1/2 px-2 inputHolder">
								<span className="input-titel">Full Name (Mr / Mrs / Ms) <span>*</span></span>
								<input type="text" className="input" name="fullName" value={values?.fullName} onChange={handleInputChange} required />
								{errMsgObj.fullName && <span style={{ color: "red", fontSize: "10px" }}>{errMsgObj.fullName}</span>}
							</div>
						</div>
						<div className="w-full flex items-end flex-wrap">
							<div className="w-full md:w-1/3 px-2 inputHolder">
								<div className="input-label-holder">
									<label className="input-titel">Mobile Number <span>*</span></label>
									<div className="input-checkd"><input type="checkbox" className="mr-2" />Hidden</div>
								</div>
								<input type="tel" className="input" name="mobileNo" value={values?.mobileNo} onChange={handleInputChange} required maxLength={10} minLength={10}/>
								{errMsgObj.mobileNo && <span style={{ color: "red", fontSize: "10px" }}>{errMsgObj.mobileNo}</span>}
							</div>
							<div className="w-full md:w-1/3 px-2 inputHolder">
								<label className="input-titel">Alternative Mobile Number <span></span></label>
								<input type="tel" className="input" name="alterMobileNo" value={values?.alterMobileNo} onChange={handleInputChange} maxLength={10} minLength={10}/>
							</div>
							<div className="w-full md:w-1/3 px-2 inputHolder">
								<div className="input-label-holder">
									<label className="input-titel">Email Address <span>*</span></label>
									<div className="input-checkd"><input type="checkbox" className="mr-2" />Hidden</div>
								</div>
								<input type="email" className="input" name="email" value={values?.email} onChange={handleInputChange} required />
								{errMsgObj.email && <span style={{ color: "red", fontSize: "10px" }}>{errMsgObj.email}</span>}
							</div>
						</div>
						<div className="space-y-5">
							<h3 className="px-2">Address</h3>
							<div className="w-full flex flex-wrap">
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<span className="input-titel">Flat No.</span>
									<input type="text" className="input" name="flatNo" value={values?.flatNo} onChange={handleInputChange} required />
								</div>
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<span className="input-titel">Street Name.</span>
									<input type="text" className="input" name="streetName" value={values?.streetName} onChange={handleInputChange} />
								</div>
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<span className="input-titel">Area Name.</span>
									<input type="text" className="input" name="areaName" value={values?.areaName} onChange={handleInputChange} required />
								</div>
							</div>
							<div className="w-full flex flex-wrap">
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<label className="input-titel">City <span>*</span></label>
									<input type="text" className="input" name="city" value={values?.city} onChange={handleInputChange} required />
									{errMsgObj.city && <span style={{ color: "red", fontSize: "10px" }}>{errMsgObj.city}</span>}
								</div>
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<label className="input-titel">State <span>*</span></label>
									<input type="text" className="input" name="state" value={values?.state} onChange={handleInputChange} required />
									{errMsgObj.state && <span style={{ color: "red", fontSize: "10px" }}>{errMsgObj.state}</span>}
								</div>
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<label className="input-titel">Pincode <span>*</span></label>
									<input type="num" className="input" name="pincode" value={values?.pincode} onChange={handleInputChange} required maxLength={6} />
									{errMsgObj.pincode && <span style={{ color: "red", fontSize: "10px" }}>{errMsgObj.pincode}</span>}
								</div>
							</div>
						</div>
					</div>
					{/* <!-- advisement --> */}
					<Advertisement />
				</div>
				<div className="prw-next-btn">
					<button type="button" className="flex items-center" onClick={() => navigate(-1)}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
					<button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
				</div>
			</div>
		</div>
	)
}

export default EventPersonalDetails