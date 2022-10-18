import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCompanyDetail } from "../../redux/createEvent";
import StepProgressBar from "./StepProgressBar";
import { decrement, increment } from "../../redux/stepCountPogress";

function EventCompanyDetails() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const initialState = {
		companyName: "",
		contactNo: "",
		email: "",
		flatNo: "",
		streetName: "",
		areaName: "",
		city: "",
		state: "",
		pincode: "",
	};
	const [values, setValues] = useState(initialState);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	console.log(values);

	const clickNextHandler = () => {
		dispatch(addCompanyDetail({ companyDetail: values }));
		navigate("/dashboard/event/termsandconditions");
		dispatch(increment());
	};

	return (
		//   <!-- Content In -->
		<div className="rightInContent">
			<div className="wrapper min-h-full">
				<div className="space-y-8 h-full">
					{/* <!-- title-holder  --> */}
					<div className="flex justify-between items-center">
						<Link to="/" className="flex items-center">
							<i className="icon-back-arrow mr-4 text-2xl"></i>
							<h1>Sweet Love Catering</h1>
						</Link>
					</div>
					{/* <!-- step-progress-bar  --> */}
					<StepProgressBar />
					{/* <!-- main-content  --> */}
					<div className="space-y-5 -mx-2">
						<div className="w-full flex items-end flex-wrap">
							<div className="w-full md:w-1/2 px-2 inputHolder">
								<span className="input-titel">Company Name</span>
								<input
									type="text"
									className="input"
									name="companyName"
									value={values?.companyName}
									onChange={handleInputChange}
								/>
							</div>
							<div className="w-full md:w-1/2 px-2 inputHolder">
								<span className="input-titel">Company GST (Optional)</span>
								<label htmlFor="upload" className="upload upload-popup">
									<input type="file" name="images" id="upload" className="appearance-none hidden" />
									<span className="input-titel mt-1">
										<i className="icon-pdf mr-2"></i>Upload PDF
									</span>
								</label>
							</div>
						</div>
						<div className="w-full flex items-end flex-wrap">
							<div className="w-full md:w-1/2 px-2 inputHolder">
								<span className="input-titel">Company Contact No</span>
								<input type="text" className="input" name="contactNo" value={values?.contactNo} onChange={handleInputChange} />
							</div>
							<div className="w-full md:w-1/2 px-2 inputHolder">
								<span className="input-titel">Company Email</span>
								<input type="text" className="input" name="email" value={values?.email} onChange={handleInputChange} />
							</div>
						</div>
						<div className="space-y-5">
							<h3 className="px-2">Address</h3>
							<div className="w-full flex flex-wrap">
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<span className="input-titel">Flat No.</span>
									<input type="text" className="input" name="flatNo" value={values?.flatNo} onChange={handleInputChange} />
								</div>
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<span className="input-titel">Street Name.</span>
									<input
										type="text"
										className="input"
										name="streetName"
										value={values?.streetName}
										onChange={handleInputChange}
									/>
								</div>
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<span className="input-titel">Area Name.</span>
									<input type="text" className="input" name="areaName" value={values?.areaName} onChange={handleInputChange} />
								</div>
							</div>
							<div className="w-full flex flex-wrap">
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<label className="input-titel">City</label>
									<input type="text" className="input" name="city" value={values?.city} onChange={handleInputChange} />
								</div>
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<label className="input-titel">State</label>
									<input type="text" className="input" name="state" value={values?.state} onChange={handleInputChange} />
								</div>
								<div className="w-full md:w-1/3 px-2 inputHolder">
									<label className="input-titel">Pincode</label>
									<input type="text" className="input" name="pincode" value={values?.pincode} onChange={handleInputChange} />
								</div>
							</div>
						</div>
						<div className="upload-holder px-2">
							<span className="input-titel ml-2">Company Photos Max 5 images (up to 5MB/image)</span>
							<label htmlFor="upload" className="upload">
								<input type="file" name="images" id="upload" className="appearance-none hidden" />
								<span className="input-titel mt-1">
									<i className="icon-image mr-2"></i>Upload Images
								</span>
							</label>
						</div>
						<div className="upload-holder px-2">
							<span className="input-titel ml-2">Company Video Max 2 videos (up to 2GB/video)</span>
							<label htmlFor="upload2" className="upload">
								<input type="file" name="images" id="upload2" className="appearance-none hidden" />
								<div className="mt-1 flex items-baseline justify-center">
									<i className="icon-video-play text-base mr-2"></i> <span className="input-titel pt-1">Upload videos</span>
								</div>
							</label>
						</div>
					</div>
					<span className="input-titel capitalize">
						Disclaimer - These images and videos will first be verified by the admin and then given the authority.
					</span>
				</div>

				<div className="prw-next-btn">
					<button type="button" className="flex items-center" onClick={() => {
						navigate(-1)
						dispatch(decrement())
					}}>
						<i className="icon-back-arrow mr-3"></i>
						<h3>Back</h3>
					</button>
					<button type="button" className="flex items-center active" onClick={clickNextHandler}>
						<h3>Next</h3>
						<i className="icon-next-arrow ml-3"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default EventCompanyDetails;
