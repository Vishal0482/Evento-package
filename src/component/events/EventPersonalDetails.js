import React, {  useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { useDispatch} from 'react-redux';
import { decrement, increment } from '../../redux/stepProgressCount';
import { baseUrl } from '../../config';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function EventPersonalDetails() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const [mobileNoHidden, setMobileNoHidden] = useState(false);
	const [emailHidden, setEmailHidden] = useState(false);
	const eventId = params.eventId;	
	const userId = params.userId;
	console.log(eventId, userId);
	const token = localStorage.getItem("Token");
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
	const ValidationSchema = Yup.object().shape({
		professional_skill: Yup.string().min(3, 'Too Short!').max(40, 'Too Long!'),
		full_name: Yup.string().min(2, 'Too Short!').max(40, 'Too Long!').required('Full name is required*'),
		mobile_no:Yup.number().typeError('Contact number must be a digit').integer().positive("Contact number must be positive").required("Contact number is required"),
		alt_mobile_no: Yup.number().typeError('Contact number must be a digit').integer().positive("Contact number must be positive"),
		email: Yup.string().email('Invalid email format').required('Email address is required*'),
		flat_no: Yup.string(),
		street: Yup.string(),
		area: Yup.string(),
		city: Yup.string().required('City name is required*'),
		state: Yup.string().required('State name is required*'),
		pincode: Yup.string().min(6, 'Too Short!').max(6, 'Too Long!').required('Pincode is required*')
	});

	const getPersonalDetails = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/events/personaldetail`, {headers: header});
			console.log("Get Personal details > ", response);		
		} catch (error) {
			console.log(error);
		}
	};

	// useEffect(() => {
		// getPersonalDetails();
	// },[]);


	const clickNextHandler = async(values) => {
		const requestObj = {...values, is_mobile_no_hidden : mobileNoHidden , is_email_hidden: emailHidden, eventId: eventId, user_id: userId};
	console.log(requestObj);
		try {
			const response = await axios.post(`${baseUrl}/api/events/personaldetail`, requestObj, {headers: header});
			console.log("Personal details > ", response);		
			if(response.data.isSuccess === true) {
				dispatch(increment());
				navigate(`/dashboard/event/photosandvideos/${eventId}/${userId}`);
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
	<Formik
      initialValues={initialState}
      validationSchema={ValidationSchema}
      onSubmit={clickNextHandler}>
			 {({ errors, touched,formik }) => (
      <Form>	
	  <div className="space-y-8 h-full">
		 {/* {/ <!-- title-holder  --> /} */}
		<div className="flex justify-between items-center">
		  <Link to="/" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Sweet Love Catering</h1></Link>
		</div>
		{/* {/ <!-- step-progress-bar  --> /} */}
		<StepProgressBar />
		{/* {/ <!-- main-content  --> /} */}
		<div className="space-y-5 -mx-2">
		  <div className="w-full flex items-end flex-wrap">
			<div className="w-full md:w-1/2 px-2 inputHolder">
				<span className="input-titel">Professional Skill</span>
				<Field type="text" className="input" name="professional_skill" value={formik?.values.professional_skill} />
        <ErrorMessage name='professional_skill' component="span" className="field_error" />
				<br/>
			</div>
			<div className="w-full md:w-1/2 px-2 inputHolder">
				<span className="input-titel">Full Name (Mr / Mrs / Ms) <span>*</span></span>
				<Field type="text" className="input" name="full_name" value={formik?.values.full_name}  />		
        <ErrorMessage name='full_name' component="span" className="field_error"/>
				<br/>
			</div>
		  </div> 
		  <div className="w-full flex items-end flex-wrap">
			<div className="w-full md:w-1/3 px-2 inputHolder">
				<div className="input-label-holder">
				  <label className="input-titel">Mobile Number <span>*</span></label>
				  <div className="input-checkd"><input type="checkbox" className="mr-2" checked={mobileNoHidden} onClick={() => setMobileNoHidden(!mobileNoHidden)} />Hidden</div>
				</div>
				<Field type="text" className="input" name="mobile_no" value={formik?.values.mobile_no} />
        <ErrorMessage name='mobile_no' component="span" className="field_error"/>
				<br/>
			</div>
			<div className="w-full md:w-1/3 px-2 inputHolder">
				<label className="input-titel">Alternative Mobile Number <span></span></label>
				<Field type="text" className="input" name="alt_mobile_no" value={formik?.values.mobile_no} />
        <ErrorMessage name='alt_mobile_no' component="span" className="field_error"/>
				<br/>
			</div>
			<div className="w-full md:w-1/3 px-2 inputHolder">
				<div className="input-label-holder">
				  <label className="input-titel">Email Address <span>*</span></label>
				  <div className="input-checkd"><input type="checkbox" className="mr-2" checked={emailHidden} onClick={() => setEmailHidden(!emailHidden)} />Hidden</div>
				</div>
				<Field type="email" className="input" name="email" value={formik?.values.email}  />
        <ErrorMessage name='email' component="span" className="field_error"/>
				<br/>
			</div>
		  </div>
		  <div className="space-y-5">
			  <h3 className="px-2">Address</h3>
			  <div className="w-full flex flex-wrap">
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<span className="input-titel">Flat No.</span>
					<Field type="text" className="input" name="flat_no" value={formik?.values.flat_no}  />
        <ErrorMessage name='flat_no' component="span" className="field_error"/>
				<br/>
				</div>
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<span className="input-titel">Street Name.</span>
					<Field type="text" className="input" name="street" value={formik?.values.street} />
        <ErrorMessage name='street' component="span" className="field_error"/>
				<br/>
				</div>
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<span className="input-titel">Area Name.</span>
					<Field type="text" className="input" name="area" value={formik?.values.area}  />
        <ErrorMessage name='area' component="span" className="field_error"/>
				<br/>
				</div>
			  </div>
			  <div className="w-full flex flex-wrap">
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<label className="input-titel">City <span>*</span></label>
					<Field type="text" className="input" name="city" value={formik?.values.city}   />			
        <ErrorMessage name='city' component="span" className="field_error"/>
				<br/>
				</div>
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<label className="input-titel">State <span>*</span></label>
					<Field type="text" className="input" name="state" value={formik?.values.state}  />
        <ErrorMessage name='state' component="span" className="field_error"/>
				<br/>
				</div>
				<div className="w-full md:w-1/3 px-2 inputHolder">
					<label className="input-titel">Pincode <span>*</span></label>
					<Field type="text" className="input" name="pincode" value={formik?.values.pincode}   />
        <ErrorMessage name='pincode' component="span" className="field_error"/>
				<br/>
				</div>
			  </div>
		  </div>
		</div>
		{/* {/ <!-- advisement --> /} */}
		<Advertisement />
	  </div>
	  <div className="prw-next-btn">
		<button  className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		<button type="submit" className="flex items-center active"><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	  </div>
		</Form>
		)}
    </Formik>
	</div>
  </div>
  )
}

export default EventPersonalDetails