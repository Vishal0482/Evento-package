import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StepProgressBar from './StepProgressBar';
import { baseUrl } from '../../config';
import axios from 'axios';
import { increment, setNumber } from '../../redux/stepProgressCount';
import Modal from "../modal/Modal";
import EventPopUpUploadPhoto from '../../component/events/popups/EventPopUpUploadPhoto';
import EventPopUpUploadVideo from "../../component/events/popups/EventPopUpUploadVideo";
import videoThumb from '../../assest/images/video-preview.png';
import { Formik, Form, Field, ErrorMessage, withFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import CompanyPopUpUploadPhotos from '../../component/events/popups/CompanyPopUpUploadPhotos';
import CompanyPopUpUploadVideo from './popups/CompanyPopUpUploadVideo';

function EventCompanyDetails() {
	const displayName = localStorage.getItem("displayName");
	const [isUploadPhotoPopUpOpen, setIsUploadPhotoPopUpOpen] = useState(false);
  	const [isUploadVideoPopUpOpen, setIsUploadVideoPopUpOpen] = useState(false);
	const [imageList, setImageList] = useState([]);
	const [videoList, setVideoList] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [about, setabout] = useState("");

	// dispatch(setNumber(7));
	const params = useParams();
	const userId = params.userId;
	const eventId = params.eventId;
	const eventType = params.eventType;
	const [gstFile, setGstFile] = useState(null);
	const [gstFileError, setGstFileError] = useState(null);
	const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'multipart/form-data'
	}
	console.log("imageList >> ", imageList);
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

	// const getImage = async() => {
		// try {
			// const response = await axios.get(`${baseUrl}/api/image_event?eventId=${eventId}`, {headers: header});
			// setImageList(response.data.data);
			// console.log("Image response >> ",response);
		// } catch (error) {
			// console.log(error);
		// }
	// }
	
	// const getVideo = async() => {
		// try {
			// const response = await axios.get(`${baseUrl}/api/video_event?eventId=${eventId}`, {headers: header});
			// setVideoList(response.data.data);
			// console.log("Video response >> ",response);
		// } catch (error) {
			// console.log(error);
		// }
	// }

	// useEffect(()=>{
	// 	getImage();
	// },[isUploadPhotoPopUpOpen]);

	// useEffect(()=>{
	// 	getVideo();
	// },[isUploadVideoPopUpOpen]);

	// const removeImageClick = async(id) => {
	// 	try {
	// 		const response = await axios.delete(`${baseUrl}/api/event/image/?id=${id}`, {headers: header});
	// 		if(response.data.isSuccess === true) {
	// 			getImage();
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
	
	// const removeVideoClick = async(id) => {
	// 	try {
	// 		const response = await axios.delete(`${baseUrl}/api/event/video/?id=${id}`, {headers: header});
	// 		if(response.data.isSuccess === true) {
	// 			getVideo();
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	const getCompanyDetail = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/events/companydetail?eventId=${eventId}`, {headers: header});
			console.log("Company details > ", response.data);
		  } catch (error) {
			console.log(error);
		  }
	  }
	
	useEffect(() => {
		getCompanyDetail();
	},[]);

	const pdfUpload = (e) => {	

		if(e.target.files.length > 0) {
			if(e.target.files[0]?.type === 'application/pdf') {
				if(e.target.files[0].size > 1*1024*1024) {
					setGstFileError("File size should be less than 1MB.")
				} else {
					setGstFile(e.target.files[0]);
					setGstFileError(null);
				}
			} else {
				setGstFileError("Please select Pdf File.");
			}
		} else {
			setGstFileError(null);
		}

	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Company name is required'),
		contact_no: Yup.number().typeError('The value must be a digit').integer().positive("contact number must be positive").required('Contact No is required'),
		email: Yup.string().email('Invalid Email format').required('Email is required'),
		flat_no: Yup.string().required('Flat No is required'),
		street: Yup.string().required('Street is required'),
		area: Yup.string().required('Area is required'),
		city: Yup.string().required('City is required'),
		state: Yup.string().required('State is required'),
		pincode: Yup.number().typeError('The value must be a digit').min(6,"Pincode should be six digit long.").required('pincode is required'),
	})

	const clickNextHandler = async(values) => {
		
		const formData = new FormData();
		for(var key in values){
			formData.append(key,values[key]);
		}
		formData.append("eventId",eventId);
		formData.append("user_id",userId);
		formData.append("about", about);
		formData.append("gst",gstFile || null);

		try {
			const response = await axios.post(`${baseUrl}/api/events/companydetail`, formData, {headers: header});
			console.log("Company details > ", response);
			if(response.data.isSuccess === true) {

				imageList.map(e => uploadImage(e, response.data?.detail?.id));
				videoList.map(e => videoUpload(e, response.data?.detail?.id));
				toast.success("Company Details Saved Successfully.")
				dispatch(increment());
				navigate(`../termsandconditions/${params.eventId}/${params.userId}`);
			}
		} catch (error) {
			toast.error("Something Went Wrong.")
			console.log(error);
		}
	}

	const uploadImage = async(e, compId) => {
		try {
			let formDataImage = new FormData();
			formDataImage.append("company_id",compId);
			formDataImage.append("image", e);
			const response = await axios.post(`${baseUrl}/api/events/companydetail/image`,formDataImage, {headers: header});
			console.log(response);
			if(response.data.isSuccess) {
				toast.success("Image Uploaded successfully.");
				
			} else {
				toast.error("Image Uploaded Failed");
			}
		} catch (error) {
			toast.success("Something Went Wrong");
			console.log(error);
		}
	}

	const videoUpload = async(e, compId) =>{
		try {
		  let formDataVideo = new FormData();
		  formDataVideo.append("company_id",compId);
		  formDataVideo.append("video", e);
		  const response = await axios.post(`${baseUrl}/api/events/companydetail/video`, formDataVideo, {headers: header});
		  console.log(response);
		  if(response.data.isSuccess) {
			toast.success("Video Uploaded successfully.");
			} else {
			toast.error("Video Uploaded Failed");
		}
		} catch (error) {
		  toast.error("Something Went wrong.");
		  console.log(error);
		}
	  }

  return (
	//   <!-- Content In -->
	  <div>
	  <div className="wrapper min-h-full">
		<Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={clickNextHandler}>
			 {({ errors, touched, formik }) => (
      <Form>
		<div className="space-y-8 h-full">
		  {/* <!-- title-holder  --> */}
		  <div className="flex justify-between items-center">
			<div className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>{displayName}</h1></div>
		  </div>
		  {/* <!-- step-progress-bar  --> */}
		 <StepProgressBar eventType={eventType}/>
		  {/* <!-- main-content  --> */}
		  <div className="space-y-5 -mx-2">
			<div className="w-full flex items-end flex-wrap">
			  <div  iv className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company Name <span>*</span></span>
				  <Field type="text" className="input" name="name" value={formik?.values.name} />
					<ErrorMessage name='name'  component="span" className="text-red-500 text-xs" />
				<br/>
			  </div>
			  <div className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company GST <span>*</span></span>
				  {/* <span className="input-titel">Company GST (Optional)</span> */}
				  <label htmlFor="upload" className="upload upload-popup">
					<input type="file" name="pdf" id="upload" className="appearance-none hidden" onChange={pdfUpload} />
					{/* <Field type="file" className="appearance-none hidden" id="upload" name="gst" value={formik?.values.gst} /> */}
					<span className="input-titel mt-1"><i className="icon-pdf mr-2"></i>Upload PDF</span>
				  </label>
				  {/* <ErrorMessage name='gst' component="span" className="text-red-500 text-xs" /> */}
				  {/* <span className={gstFileError && "field_error"}>{gstFileError || gstFile?.name + "<span>remove</span>"}</span>  */}
				  {gstFileError && <span className="text-red-500 text-xs">{gstFileError}</span> }
				  {gstFile !== null && <><span>{gstFile?.name}</span> <span className="cursor-pointer" onClick={() => setGstFile(null)}> remove</span></>}
				  <br/>
			  </div>
			</div>
			<div className="w-full flex items-end flex-wrap">
			  <div className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company Contact No <span>*</span></span>
				  <Field type="text" className="input" name="contact_no"  value={formik?.values.contact_no} />
					<ErrorMessage name='contact_no'  component="span" className="text-red-500 text-xs"/>
				<br/>
			  </div>
			  <div className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company Email <span>*</span></span>
				  <Field type="email" className="input" name="email"  value={formik?.values.email}/>
					<ErrorMessage name='email'  component="span" className="text-red-500 text-xs"/>
				<br/>
			  </div>
			  <div className="w-full px-2">
                <span className="input-titel">Company About</span>
                <textarea
				onChange={(e) => setabout(e.target.value)}
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  className="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md"
                ></textarea>
              </div>
			</div> 
			<div className="space-y-5">
				<h3 className="px-2">Address</h3>
				<div className="w-full flex flex-wrap">
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Flat No. <span>*</span></span>
					  <Field type="text" className="input" name="flat_no"  value={formik?.values.flat_no} />
						<ErrorMessage name='flat_no'  component="span" className="text-red-500 text-xs"/>
				<br/>
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Street Name. <span>*</span></span>
					  <Field type="text" className="input" name="street" value={formik?.values.street} />
						<ErrorMessage name='street'  component="span" className="text-red-500 text-xs" />
				<br/>
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Area Name. <span>*</span></span>
					  <Field type="text" className="input" name="area" value={formik?.values.area} />
						<ErrorMessage name='area' component="span" className="text-red-500 text-xs"/>
				<br/>
				  </div>
				</div>
				<div className="w-full flex flex-wrap">
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <label className="input-titel">City <span>*</span></label>
					  <Field type="text" className="input" name="city" value={formik?.values.city} />
						<ErrorMessage name='city' component="span" className="text-red-500 text-xs"/>
				<br/>
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <label className="input-titel">State <span>*</span></label>
					  <Field type="text" className="input" name="state" value={formik?.values.state} />
						<ErrorMessage name='state' component="span" className="text-red-500 text-xs" />
				<br/>						
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <label className="input-titel">Pincode <span>*</span></label>
					  <Field type="text" className="input" name="pincode" value={formik?.values.pincode}/>
						<ErrorMessage name='pincode' component="span" className="text-red-500 text-xs" />
				<br/>		
				  </div>
				</div>
			</div>
			<div className="upload-holder px-2">
			  <span className="input-titel">Company Photos Max 5 images (up to 5MB/image)</span>
			  <label onClick={()=>setIsUploadPhotoPopUpOpen(true)} htmlfor="upload" className="upload">
				 <input  name="images" id="upload" className="appearance-none hidden"/>
				 <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>	
			   </label>
			   {imageList?.length !== 0  &&<span className="input-titel mt-1">{imageList.length} Images Uploaded</span>}
			</div>
			{imageList?.length !== 0  &&<div className="media-upload-holder">
			   <span className="input-titel ml-2">Uploaded Photo</span>
				<div className="flex space-x-2.5">
					{imageList?.map((img, index) => (
						<div className="upload-box" key={index}>
							<div className="rounded relative overflow-hidden h-full">
							<img src={URL.createObjectURL(img)} alt={"upload-"+index}/>
							<button>Remove</button>
							{/* <button onClick={() =>removeImageClick(img.id)}>Remove</button> */}
						</div>
					</div>
					))}
				</div>
			</div>}


			<div className="upload-holder px-2">
				<span className="input-titel">Company Video Max 2 videos (up to 2GB/video)</span>
				<label onClick={()=>setIsUploadVideoPopUpOpen(true)} htmlFor="upload2" className="upload">
				  <input  name="images" id="upload2" className="appearance-none hidden" />
				  <div className="mt-1 flex items-baseline justify-center"><i className="icon-video-play text-base mr-2"></i> <span className="input-titel pt-1">Upload videos</span></div>
				</label>
				{videoList?.length !== 0 && <span className="input-titel mt-1">{videoList.length} Videos Uploaded</span>}
			</div>
		  </div>
			{videoList.length != 0 && <div className="media-upload-holder">
			   <span className="input-titel">Uploaded videos</span>
			   <div className="flex space-x-2.5">
					{videoList?.map((vid, index) => (
						<div className="upload-box" key={index}>
							<div className="rounded relative overflow-hidden h-full">
								<img src={vid.thumbnail ? vid.thumbnail : videoThumb} alt={"upload-"+index}/>
							<button>Remove</button>
							{/* <button onClick={()=> removeVideoClick(vid.id)}>Remove</button> */}
							</div>
						</div>
					))}
			   </div>
		   </div>}
		  <span className="input-titel capitalize">Disclaimer - These images and videos will first be verified by the admin and then given the authority.
		</span>
		</div>

		<div className="prw-next-btn">
		  <button className="flex items-center" onClick={() => navigate(-1)} ><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		  <button type="submit" className="flex items-center active"><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
		</div>
    </Form>
		)}
    </Formik>  
		{imageList.length < 15 && <Modal isOpen={isUploadPhotoPopUpOpen}>
			<CompanyPopUpUploadPhotos handleClose={setIsUploadPhotoPopUpOpen} setImageList={setImageList} />
		</Modal>}
		{videoList.length < 2 && <Modal isOpen={isUploadVideoPopUpOpen}>
			<CompanyPopUpUploadVideo handleClose={setIsUploadVideoPopUpOpen} setVideoList={setVideoList} />
		</Modal>}
	  </div>
	  <ToastContainer
			  position="bottom-right"
			  autoClose={5000}
			  hideProgressBar={false}
			  newestOnTop={false}
			  closeOnClick
			  rtl={false}
			  pauseOnFocusLoss
			  draggable
			  pauseOnHover
			  theme="colored"
		  />
	</div>
  )
}

export default EventCompanyDetails