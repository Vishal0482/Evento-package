import React, {  useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { useDispatch} from 'react-redux';
import { decrement, increment } from '../../redux/stepProgressCount';
import { baseUrl } from '../../config';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage, useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';


function EventPersonalDetails() {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const eventType = params.eventType;
	const eventId = params.eventId;	
	const displayName = localStorage.getItem("displayName");
	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}
	const ValidationSchema = Yup.object().shape({
		professional_skill: Yup.string(),
		full_name: Yup.string().min(2, 'Too Short!').max(40, 'Too Long!').required('Full name is required*'),
		mobile_no: Yup.number().typeError('Contact number must be a digit').integer().positive("Contact number must be positive").required("Contact number is required"),
		alt_mobile_no: Yup.number().typeError('Contact number must be a digit').integer().positive("Contact number must be positive"),
		email: Yup.string().email('Invalid email format').required('Email address is required*'),
		flat_no: Yup.string(),
		street: Yup.string(),
		area: Yup.string(),
		city: Yup.string().required('City name is required*'),
		state: Yup.string().required('State name is required*'),
		pincode: Yup.string().min(6, 'Too Short!').max(6, 'Too Long!').required('Pincode is required*')
	});
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
	const [mobileNoHidden, setMobileNoHidden] = useState(false);
	const [emailHidden, setEmailHidden] = useState(false);

	const clickNextHandler = async (values) => {
		const requestObj = { ...values, is_mobile_no_hidden: mobileNoHidden, is_email_hidden: emailHidden, eventid: eventId };
		console.log("values >> ",requestObj);
		// console.log(requestObj);
		try {
			const response = await axios.post(`${baseUrl}/organizer/events/personaldetail`, requestObj, {headers: header});
			console.log("Personal details > ", response);		
			if(response.data.IsSuccess) {
				toast.success(response.data.Message);
				dispatch(increment());
				navigate(`../photosandvideos`);
			} else {
				toast.error(response.data.Message);
			}
		} catch (error) {
			toast.error("Something Went Wrong.");
			console.log(error);
		}
	}

	const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	}

	const formik = useFormik({
		initialValues: initialState,
		validationSchema: ValidationSchema,
		onSubmit: clickNextHandler,
	  });
		const getPersonalDetails = async() => {
		try {
			const response = await axios.get(`${baseUrl}/organizer/events/personaldetail?eventid=${eventId}`, {headers: header});
			// console.log("Get Personal details > ", response);
			if(response.data.Data.personaldetail) {
				formik.setValues(response.data.Data.personaldetail);
			}
			if(!response.data.IsSuccess) {
				toast.error("Error occured while fetching data.");
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPersonalDetails();
	},[]);

	  const setInputValue = useCallback(
		(key, value) =>
		  formik.setValues({
			...formik.values,
			[key]: value,
		  }),
		[formik]
	  );
  return (
	<div>
          <form onSubmit={formik.handleSubmit} className="wrapper min-h-full">
            <div className="space-y-8 h-full">
               {/* <!-- title-holder  --> */}
              <div className="flex justify-between items-center">
                <div className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>{displayName}</h1></div>
              </div>
              {/* <!-- step-progress-bar  --> */}
             <StepProgressBar eventType={eventType} />
              {/* <!-- main-content  --> */}
              <div className="space-y-5 -mx-2">
                <div className="w-full flex items-end flex-wrap">
                  <div className="w-full md:w-1/2 px-2 inputHolder">
                      <span className="input-titel">Professional Skill</span>
                      <input type="text" className="input" name="professional_skill" value={formik.values?.professional_skill} onChange={(e) => setInputValue("professional_skill", e.target.value)}/>
					  <small className="text-red-500 text-xs">{formik.errors.professional_skill}</small>
					  <br/>
                  </div>
                  <div className="w-full md:w-1/2 px-2 inputHolder">
                      <span className="input-titel">Full Name (Mr / Mrs / Ms) <span>*</span></span>
                      <input type="text" className="input" name="full_name" value={formik.values?.full_name} onChange={(e) => setInputValue("full_name", e.target.value)} required/>
					  <small className="text-red-500 text-xs">{formik.errors.full_name}</small>
					  <br/>
                  </div>
                </div> 
                <div className="w-full flex items-end flex-wrap">
                  <div className="w-full md:w-1/3 px-2 inputHolder">
                      <div className="input-label-holder">
                        <label className="input-titel">Mobile Number <span>*</span></label>
                        <div className="input-checkd"><input type="checkbox" className="mr-2" name="is_mobile_hidden" onChange={() => setMobileNoHidden(!mobileNoHidden)} />Hidden</div>
                      </div>
                      <input type="text" className="input" name="mobile_no" value={formik.values?.mobile_no} onChange={(e) => setInputValue("mobile_no", e.target.value)} required/>
					  <small className="text-red-500 text-xs">{formik.errors.mobile_no}</small>
					  <br/>
                  </div>
                  <div className="w-full md:w-1/3 px-2 inputHolder">
                      <label className="input-titel">Alternative Mobile Number <span></span></label>
                      <input type="text" className="input" name='alt_mobile_no'  value={formik.values?.alt_mobile_no} onChange={(e) => setInputValue("alt_mobile_no", e.target.value)} />
					  <small className="text-red-500 text-xs">{formik.errors.alt_mobile_no}</small>
					  <br/>
                  </div>
                  <div className="w-full md:w-1/3 px-2 inputHolder">
                      <div className="input-label-holder">
                        <label className="input-titel">Email Address <span>*</span></label>
                        <div className="input-checkd"><input type="checkbox" className="mr-2" onChange={() => setEmailHidden(!emailHidden)} />Hidden</div>
                      </div>
                      <input type="text" className="input" name='email'  value={formik.values?.email} onChange={(e) => setInputValue("email", e.target.value)} required/>
					  <small className="text-red-500 text-xs">{formik.errors.email}</small>
					  <br/>
                  </div>
                </div>
                <div className="space-y-5">
                    <h3 className="px-2">Address</h3>
                    <div className="w-full flex flex-wrap">
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <span className="input-titel">Flat No.</span>
                          <input type="text" className="input" name='flat_no' value={formik.values?.flat_no} onChange={(e) => setInputValue("flat_no", e.target.value)}/>
						  <small className="text-red-500 text-xs">{formik.errors.flat_no}</small>
						  <br/>
                      </div>
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <span className="input-titel">Street Name.</span>
                          <input type="text" className="input" name='street' value={formik.values?.street} onChange={(e) => setInputValue("street", e.target.value)} />
						  <small className="text-red-500 text-xs">{formik.errors.street}</small>
						  <br/>
                      </div>
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <span className="input-titel">Area Name.</span>
                          <input type="text" className="input" name='area' value={formik.values?.area} onChange={(e) => setInputValue("area", e.target.value)} required/>
						  <small className="text-red-500 text-xs">{formik.errors.area}</small>
						  <br/>
                      </div>
                    </div>
                    <div className="w-full flex flex-wrap">
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">City <span>*</span></label>
                          <input type="text" className="input" name='city' value={formik.values?.city} onChange={(e) => setInputValue("city", e.target.value)} required/>
						  <small className="text-red-500 text-xs">{formik.errors.city}</small>
						  <br/>
                      </div>
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">State <span>*</span></label>
                          <input type="text" className="input" name='state'value={formik.values?.state} onChange={(e) => setInputValue("state", e.target.value)} required/>
						  <small className="text-red-500 text-xs">{formik.errors.state}</small>
						  <br/>
                      </div>
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">Pincode <span>*</span></label>
                          <input type="text" className="input" name='pincode' value={formik.values?.pincode} onChange={(e) => setInputValue("pincode", e.target.value)} required/>
						  <small className="text-red-500 text-xs">{formik.errors.pincode}</small>
						  <br/>
                      </div>
                    </div>
                </div>
              </div>
              {/* <!-- advisement --> */}
				<Advertisement />
            </div>
            <div className="prw-next-btn">
              <button type="button" className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
              <button type="submit" className="flex items-center active" ><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
            </div>
          </form>
        </div>
  )
}

export default EventPersonalDetails;


// import React, {  useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import Advertisement from '../Advertisement';
// import StepProgressBar from './StepProgressBar';
// import { useDispatch} from 'react-redux';
// import { decrement, increment } from '../../redux/stepProgressCount';
// import { baseUrl } from '../../config';
// import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { toast } from 'react-toastify';

// function EventPersonalDetails() {
// 	const displayName = localStorage.getItem("displayName");
// 	const navigate = useNavigate();
// 	const dispatch = useDispatch();
// 	const params = useParams();
// 	const [mobileNoHidden, setMobileNoHidden] = useState(false);
// 	const [emailHidden, setEmailHidden] = useState(false);
// 	const eventType = params.eventType;	
// 	const eventId = params.eventId;	
// 	const userId = params.userId;
// 	// console.log(eventId, userId);
// 	const token = localStorage.getItem("Token");
// 	const header = {
// 		'Authorization': `Token ${token}`
// 	}

// 	const initialState = {
// 		professional_skill: "",
// 		full_name: "",
// 		mobile_no: "",
// 		alt_mobile_no: "",
// 		email: "",
// 		flat_no: "",
// 		street: "",
// 		area: "",
// 		city: "",
// 		state: "",
// 		pincode: "",
// 	}
// 	const [values, setValues] = useState();
// 	console.log(values);
// 	const ValidationSchema = Yup.object().shape({
// 		professional_skill: Yup.string().min(3, 'Too Short!').max(40, 'Too Long!'),
// 		full_name: Yup.string().min(2, 'Too Short!').max(40, 'Too Long!').required('Full name is required*'),
// 		mobile_no:Yup.number().typeError('Contact number must be a digit').integer().positive("Contact number must be positive").required("Contact number is required"),
// 		alt_mobile_no: Yup.number().typeError('Contact number must be a digit').integer().positive("Contact number must be positive"),
// 		email: Yup.string().email('Invalid email format').required('Email address is required*'),
// 		flat_no: Yup.string(),
// 		street: Yup.string(),
// 		area: Yup.string(),
// 		city: Yup.string().required('City name is required*'),
// 		state: Yup.string().required('State name is required*'),
// 		pincode: Yup.string().min(6, 'Too Short!').max(6, 'Too Long!').required('Pincode is required*')
// 	});

// 	const getPersonalDetails = async() => {
// 		try {
// 			const response = await axios.get(`${baseUrl}/organizer/events/personaldetail?eventid=${eventId}`, {headers: header});
// 			console.log("Get Personal details > ", response);
// 			if(response.data.Data.personaldetail) {
// 				setValues(response.data.Data.personaldetail);
// 			}
// 			if(!response.data.IsSuccess) {
// 				toast.error("Error occured while fetching data.");
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	useEffect(() => {
// 		getPersonalDetails();
// 	},[]);


// 	const clickNextHandler = async(values) => {
// 		const requestObj = {...values, is_mobile_no_hidden : mobileNoHidden , is_email_hidden: emailHidden, eventId: eventId, user_id: userId};
// 		console.log(values);
// 		console.log(requestObj);
// 		try {
// 			// const response = await axios.post(`${baseUrl}/api/events/personaldetail`, requestObj, {headers: header});
// 			// console.log("Personal details > ", response);		
// 			// if(response.data.isSuccess === true) {
// 				toast.success("Personal Details Saved Successfully.");
// 				dispatch(increment());
// 				navigate(`../photosandvideos`);
// 			// }
// 		} catch (error) {
// 			toast.error("Something Went Wrong.")
// 			console.log(error);
// 		}

// 	}

// 	const clickBackHander = () => {
// 		dispatch(decrement());
// 		navigate(-1);
// 	}

//   return (
// 	// <!-- Content In -->
// 	<>
// 	<div className="wrapper min-h-full">
// 	<Formik
//       initialValues={initialState}
//       validationSchema={ValidationSchema}
//       onSubmit={clickNextHandler}>
// 			 {({ errors, touched,formik }) => (
//       <Form>	
// 	  <div className="space-y-8 h-full">
// 		 {/* {/ <!-- title-holder  --> /} */}
// 		<div className="flex justify-between items-center">
// 		  <div className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>{displayName}</h1></div>
// 		</div>
// 		{/* {/ <!-- step-progress-bar  --> /} */}
// 		<StepProgressBar eventType={eventType} />
// 		{/* {/ <!-- main-content  --> /} */}
// 		<div className="space-y-5 -mx-2">
// 		  <div className="w-full flex items-end flex-wrap">
// 			<div className="w-full md:w-1/2 px-2 inputHolder">
// 				<span className="input-titel">Professional Skill</span>
// 				<Field type="text" className="input" name="professional_skill" value={formik?.values.professional_skill || values?.professional_skill } onChange={e => setValues({...values,[e.target.name]: e.target.value})} />
//         <ErrorMessage name='professional_skill' component="span" className="text-red-500 text-xs" />
// 				<br/>
// 			</div>
// 			<div className="w-full md:w-1/2 px-2 inputHolder">
// 				<span className="input-titel">Full Name (Mr / Mrs / Ms) <span>*</span></span>
// 				<Field type="text" className="input" name="full_name" value={values?.full_name || formik?.values.full_name }  />		
//         <ErrorMessage name='full_name' component="span" className="text-red-500 text-xs"/>
// 				<br/>
// 			</div>
// 		  </div> 
// 		  <div className="w-full flex items-end flex-wrap">
// 			<div className="w-full md:w-1/3 px-2 inputHolder">
// 				<div className="input-label-holder">
// 				  <label className="input-titel">Mobile Number <span>*</span></label>
// 				  <div className="input-checkd"><input type="checkbox" className="mr-2" defaultChecked={mobileNoHidden} onClick={() => setMobileNoHidden(!mobileNoHidden)} />Hidden</div>
// 				</div>
// 				<Field type="text" className="input" name="mobile_no" value={formik?.values.mobile_no || values?.mobile_no} onChange={e => setValues({...values,[e.target.name]: e.target.value})}/>
//         <ErrorMessage name='mobile_no' component="span" className="text-red-500 text-xs"/>
// 				<br/>
// 			</div>
// 			<div className="w-full md:w-1/3 px-2 inputHolder">
// 				<label className="input-titel">Alternative Mobile Number <span></span></label>
// 				<Field type="text" className="input" name="alt_mobile_no" value={formik?.values.mobile_no || values?.alt_mobile_no} onChange={e => setValues({...values,[e.target.name]: e.target.value})}/>
//         <ErrorMessage name='alt_mobile_no' component="span" className="text-red-500 text-xs"/>
// 				<br/>
// 			</div>
// 			<div className="w-full md:w-1/3 px-2 inputHolder">
// 				<div className="input-label-holder">
// 				  <label className="input-titel">Email Address <span>*</span></label>
// 				  <div className="input-checkd"><input type="checkbox" className="mr-2" defaultChecked={emailHidden} onClick={() => setEmailHidden(!emailHidden)} />Hidden</div>
// 				</div>
// 				<Field type="email" className="input" name="email" value={formik?.values.email || values?.email} onChange={e => setValues({...values,[e.target.name]: e.target.value})}/>
//         <ErrorMessage name='email' component="span" className="text-red-500 text-xs"/>
// 				<br/>
// 			</div>
// 		  </div>
// 		  <div className="space-y-5">
// 			  <h3 className="px-2">Address</h3>
// 			  <div className="w-full flex flex-wrap">
// 				<div className="w-full md:w-1/3 px-2 inputHolder">
// 					<span className="input-titel">Flat No.</span>
// 					<Field type="text" className="input" name="flat_no" value={formik?.values.flat_no || values?.flat_no} onChange={e => setValues({...values,[e.target.name]: e.target.value})}/>
//         <ErrorMessage name='flat_no' component="span" className="text-red-500 text-xs"/>
// 				<br/>
// 				</div>
// 				<div className="w-full md:w-1/3 px-2 inputHolder">
// 					<span className="input-titel">Street Name.</span>
// 					<Field type="text" className="input" name="street" value={formik?.values.street || values?.street} onChange={e => setValues({...values,[e.target.name]: e.target.value})}/>
//         <ErrorMessage name='street' component="span" className="text-red-500 text-xs"/>
// 				<br/>
// 				</div>
// 				<div className="w-full md:w-1/3 px-2 inputHolder">
// 					<span className="input-titel">Area Name.</span>
// 					<Field type="text" className="input" name="area" value={formik?.values.area || values?.area} onChange={e => setValues({...values,[e.target.name]: e.target.value})} />
//         <ErrorMessage name='area' component="span" className="text-red-500 text-xs"/>
// 				<br/>
// 				</div>
// 			  </div>
// 			  <div className="w-full flex flex-wrap">
// 				<div className="w-full md:w-1/3 px-2 inputHolder">
// 					<label className="input-titel">City <span>*</span></label>
// 					<Field type="text" className="input" name="city" value={formik?.values.city || values?.city}  onChange={e => setValues({...values,[e.target.name]: e.target.value})} />			
//         <ErrorMessage name='city' component="span" className="text-red-500 text-xs"/>
// 				<br/>
// 				</div>
// 				<div className="w-full md:w-1/3 px-2 inputHolder">
// 					<label className="input-titel">State <span>*</span></label>
// 					<Field type="text" className="input" name="state" value={formik?.values.state || values?.state} onChange={e => setValues({...values,[e.target.name]: e.target.value})} />
//         <ErrorMessage name='state' component="span" className="text-red-500 text-xs"/>
// 				<br/>
// 				</div>
// 				<div className="w-full md:w-1/3 px-2 inputHolder">
// 					<label className="input-titel">Pincode <span>*</span></label>
// 					<Field type="text" className="input" name="pincode" value={formik?.values.pincode || values?.pincode} onChange={e => setValues({...values,[e.target.name]: e.target.value})}  />
//         <ErrorMessage name='pincode' component="span" className="text-red-500 text-xs"/>
// 				<br/>
// 				</div>
// 			  </div>
// 		  </div>
// 		</div>
// 		{/* {/ <!-- advisement --> /} */}
// 		<Advertisement />
// 	  </div>
// 	  <div className="prw-next-btn">
// 		<button  className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
// 		<button type="submit" className="flex items-center active"><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
// 	  </div>
// 		</Form>
// 		)}
//     </Formik>
// 	</div>
//   </>
//   )
// }

// export default EventPersonalDetails