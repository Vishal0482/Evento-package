import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCompanyDetail } from '../../redux/createEvent';
import StepProgressBar from './StepProgressBar';
import { baseUrl } from '../../config';
import axios from 'axios';
import { increment } from '../../redux/stepProgressCount';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function EventCompanyDetails() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const userId = params.userId;
	const eventId = params.eventId;
	const [gstFile, setGstFile] = useState(null);

	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'multipart/form-data'
	}

	const initialState = {
		name: "",
		contact_no: "",
		email: "",
		flat_no: "",
		street: "",
		area: "",
		city: "",
		state: "",
		pincode: "",
	}
	const validationSchema = Yup.object().shape({
		name: Yup.string(),
		contact_no: Yup.number().min(10, "To short").max(10, "Too long").positive().integer(),
		email: Yup.string().email('Invalid Email format'),
		flat_no: Yup.string(),
		street: Yup.string(),
		area: Yup.string(),
		city: Yup.string(),
		state: Yup.string(),
		pincode:Yup.number().min(6, "To short").max(6, "Too long"),
	})
	const [values, setValues] = useState(initialState);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
		  ...values,
		  [name]: value,
		});
	  };
	console.log(values);
	const types = ['application/pdf'];
	const pdfUpload = (e) => {
		setGstFile(e.target.files[0]);
		if(!types.includes(gstFile)) {
			console.log("Please select valid Pdf file..");
		}  
	}

	const clickNextHandler = async() => {
		const formData = new FormData();
		for(var key in values){
			formData.append(key,values[key]);
		}
		formData.append("eventId",eventId);
		formData.append("user_id",userId);
		formData.append("gst",gstFile);

		try {
			const response = await axios.post(`${baseUrl}/api/events/companydetail`, formData, {headers: header});
			console.log("Company details > ", response);
			if(response.data.isSuccess === true) {
				dispatch(addCompanyDetail({companyDetail : values}));
				dispatch(increment());
				navigate(`/dashboard/event/termsandconditions/${params.eventId}/${params.userId}`);
			}	
		} catch (error) {
			console.log(error);
		}
	}

  return (
	//   <!-- Content In -->
	  <div className="rightInContent">
	  <div className="wrapper min-h-full">
		<Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={clickNextHandler}>
      <Form>
		<div className="space-y-8 h-full">
		  {/* <!-- title-holder  --> */}
		  <div className="flex justify-between items-center">
			<a href="#" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Sweet Love Catering</h1></a>
		  </div>
		  {/* <!-- step-progress-bar  --> */}
		 <StepProgressBar />
		  {/* <!-- main-content  --> */}
		  <div className="space-y-5 -mx-2">
			<div className="w-full flex items-end flex-wrap">
			  <div  iv className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company Name</span>
				  <Field type="text" className="input" name="name" value={values?.name} onChange={handleInputChange} />
					<ErrorMessage name='name' />
				<br/>
			  </div>
			  <div className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company GST (Optional)</span>
				  <label htmlFor="upload" className="upload upload-popup">
					<input type="file" name="pdf" id="upload" className="appearance-none hidden" onClick={pdfUpload} />
					<span className="input-titel mt-1"><i className="icon-pdf mr-2"></i>Upload PDF</span>
				  </label>
			  </div>
			</div>
			<div className="w-full flex items-end flex-wrap">
			  <div className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company Contact No</span>
				  <Field type="text" className="input" name="contact_no" value={values?.contact_no} onChange={handleInputChange} />
					<ErrorMessage name='contact_no' />
				<br/>
			  </div>
			  <div className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company Email</span>
				  <Field type="email" className="input" name="email" value={values?.email} onChange={handleInputChange}/>
					<ErrorMessage name='email' />
				<br/>
			  </div>
			</div> 
			<div className="space-y-5">
				<h3 className="px-2">Address</h3>
				<div className="w-full flex flex-wrap">
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Flat No.</span>
					  <Field type="text" className="input" name="flat_no" value={values?.flat_no} onChange={handleInputChange} />
						<ErrorMessage name='flat_no' />
				<br/>
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Street Name.</span>
					  <Field type="text" className="input" name="street" value={values?.street} onChange={handleInputChange} />
						<ErrorMessage name='street' />
				<br/>
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Area Name.</span>
					  <Field type="text" className="input" name="area" value={values?.area} onChange={handleInputChange} />
						<ErrorMessage name='area' />
				<br/>
				  </div>
				</div>
				<div className="w-full flex flex-wrap">
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <label className="input-titel">City</label>
					  <Field type="text" className="input" name="city" value={values?.city} onChange={handleInputChange} />
						<ErrorMessage name='city' />
				<br/>
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <label className="input-titel">State</label>
					  <Field type="text" className="input" name="state" value={values?.state} onChange={handleInputChange} />
						<ErrorMessage name='state' />
				<br/>						
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <label className="input-titel">Pincode</label>
					  <Field type="text" className="input" name="pincode" value={values?.pincode} onChange={handleInputChange}/>
						<ErrorMessage name='pincode' />
				<br/>		
				  </div>
				</div>
			</div>
			<div className="upload-holder px-2">
			  <span className="input-titel ml-2">Company Photos Max 5 images (up to 5MB/image)</span>
			  <label htmlFor="upload" className="upload">
				<input type="file" name="images" id="upload" className="appearance-none hidden" />
				<span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>
			  </label>
			</div>
			<div className="upload-holder px-2">
				<span className="input-titel ml-2">Company Video Max 2 videos (up to 2GB/video)</span>
				<label htmlFor="upload2" className="upload">
				  <input type="file" name="images" id="upload2" className="appearance-none hidden" />
				  <div className="mt-1 flex items-baseline justify-center"><i className="icon-video-play text-base mr-2"></i> <span className="input-titel pt-1">Upload videos</span></div>
				</label>
			</div>
		  </div>
		  <span className="input-titel capitalize">Disclaimer - These images and videos will first be verified by the admin and then given the authority.
		</span>
		</div>

		<div className="prw-next-btn">
		  <button type="submit" className="flex items-center" onClick={() => navigate(-1)} ><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		  <button type="submit" className="flex items-center active"><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
		</div>
    </Form>
    </Formik>  
	  </div>
	</div>
  )
}

export default EventCompanyDetails