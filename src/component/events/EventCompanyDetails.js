import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCompanyDetail } from '../../redux/createEvent';
import StepProgressBar from './StepProgressBar';
import { baseUrl } from '../../config';
import axios from 'axios';
import { increment } from '../../redux/stepProgressCount';
import Modal from "../modal/Modal";
import EventPopUpUploadPhoto from '../../component/events/popups/EventPopUpUploadPhoto';
import EventPopUpUploadVideo from "../../component/events/popups/EventPopUpUploadVideo";
import videoThumb from '../../assest/images/video-thumbnail.jpg';

function EventCompanyDetails() {
	const [isUploadPhotoPopUpOpen, setIsUploadPhotoPopUpOpen] = useState(false);
  const [isUploadVideoPopUpOpen, setIsUploadVideoPopUpOpen] = useState(false);
	const [imageList, setImageList] = useState([]);
	const [videoList, setVideoList] = useState([]);
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
	const getImage = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/image_event?eventId=${eventId}`, {headers: header});
			setImageList(response.data.data);
			console.log("Image response >> ",response);
		} catch (error) {
			console.log(error);
		}
	}
	
	const getVideo = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/video_event?eventId=${eventId}`, {headers: header});
			setVideoList(response.data.data);
			console.log("Video response >> ",response);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(()=>{
		getImage();
	},[isUploadPhotoPopUpOpen]);

	useEffect(()=>{
		getVideo();
	},[isUploadVideoPopUpOpen]);

	const removeImageClick = async(id) => {
		try {
			const response = await axios.delete(`${baseUrl}/api/event/image/?id=${id}`, {headers: header});
			if(response.data.isSuccess === true) {
				getImage();
			}
		} catch (error) {
			console.log(error);
		}
	}
	
	const removeVideoClick = async(id) => {
		try {
			const response = await axios.delete(`${baseUrl}/api/event/video/?id=${id}`, {headers: header});
			if(response.data.isSuccess === true) {
				getImage();
			}
		} catch (error) {
			console.log(error);
		}
	}

	const getCompanyDetail = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/events/companydetail?eventId=${eventId}`, {headers: header});
			console.log("Company details > ", response);		
			if(response.data.isSuccess === true) {
				initialState.name = response.data.data[0].name;
				initialState.contact_no = response.data.data[0].contact_no;
				initialState.email = response.data.data[0].email;
				initialState.flat_no = response.data.data[0].flat_no;
				initialState.street = response.data.data[0].street;
				initialState.area = response.data.data[0].area;
				initialState.city = response.data.data[0].city;
				initialState.state = response.data.data[0].state;
				initialState.pincode = response.data.data[0].pincode;
			  }
		  } catch (error) {
			  console.log(error);
		  }
	  }
	  
	useEffect(() => {
		getCompanyDetail();
	},[]);

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
				  <input type="text" className="input" name="name" value={values?.name} onChange={handleInputChange} />
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
				  <input type="text" className="input" name="contact_no" value={values?.contact_no} onChange={handleInputChange} />
			  </div>
			  <div className="w-full md:w-1/2 px-2 inputHolder">
				  <span className="input-titel">Company Email</span>
				  <input type="text" className="input" name="email" value={values?.email} onChange={handleInputChange}/>
			  </div>
			</div> 
			<div className="space-y-5">
				<h3 className="px-2">Address</h3>
				<div className="w-full flex flex-wrap">
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Flat No.</span>
					  <input type="text" className="input" name="flat_no" value={values?.flat_no} onChange={handleInputChange} />
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Street Name.</span>
					  <input type="text" className="input" name="street" value={values?.street} onChange={handleInputChange} />
				  </div>
				  <div className="w-full md:w-1/3 px-2 inputHolder">
					  <span className="input-titel">Area Name.</span>
					  <input type="text" className="input" name="area" value={values?.area} onChange={handleInputChange} />
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
					  <input type="text" className="input" name="pincode" value={values?.pincode} onChange={handleInputChange}/>
				  </div>
				</div>
			</div>
			<div className="upload-holder px-2">
			  <span className="input-titel ml-2">Company Photos Max 5 images (up to 5MB/image)</span>
			  <label onClick={()=>setIsUploadPhotoPopUpOpen(true)} htmlFor="upload" className="upload">
				<input  name="images" id="upload" className="appearance-none hidden" />
				<span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>
			  </label>
				<span className="input-titel mt-1">{imageList.length} Images Uploaded</span>
			</div>
			<div className="media-upload-holder">
			   <span className="input-titel">Uploaded Photo</span>
				<div className="flex space-x-2.5">
					{imageList?.map((img, index) => (
						<div className="upload-box" key={index}>
							<div className="rounded relative overflow-hidden h-full">
							<img src={baseUrl+"/api"+img.image} alt={"upload-"+index}/>
							<button onClick={() =>removeImageClick(img.id)}>Remove</button>
						</div>
					</div>
					))}
				</div>
			</div>


			<div className="upload-holder px-2">
				<span className="input-titel ml-2">Company Video Max 2 videos (up to 2GB/video)</span>
				<label onClick={()=>setIsUploadVideoPopUpOpen(true)} htmlFor="upload2" className="upload">
				  <input  name="images" id="upload2" className="appearance-none hidden" />
				  <div className="mt-1 flex items-baseline justify-center"><i className="icon-video-play text-base mr-2"></i> <span className="input-titel pt-1">Upload videos</span></div>
				</label>
				<span className="input-titel mt-1">{videoList.length} Videos Uploaded</span>
			</div>
		  </div>
			<div className="media-upload-holder">
			   <span className="input-titel">Uploaded videos</span>
			   <div className="flex space-x-2.5">
					{videoList?.map((vid, index) => (
						<div className="upload-box" key={index}>
							<div className="rounded relative overflow-hidden h-full">
								<img src={vid.thumbnail ? vid.thumbnail : videoThumb} alt={"upload-"+index}/>
							<button onClick={()=> removeVideoClick(vid.id)}>Remove</button>
							</div>
						</div>
					))}
			   </div>
		   </div>
		  <span className="input-titel capitalize">Disclaimer - These images and videos will first be verified by the admin and then given the authority.
		</span>
		</div>

		<div className="prw-next-btn">
		  <button type="button" className="flex items-center" onClick={() => navigate(-1)} ><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		  <button type="button" className="flex items-center active" onClick={clickNextHandler} ><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
		</div>
		{imageList.length < 15 && <Modal isOpen={isUploadPhotoPopUpOpen}>
		<EventPopUpUploadPhoto handleClose={setIsUploadPhotoPopUpOpen} eventId={eventId} />
	 </Modal>}
	 {videoList.length < 2 && <Modal isOpen={isUploadVideoPopUpOpen}>
		<EventPopUpUploadVideo handleClose={setIsUploadVideoPopUpOpen} eventId={eventId} />
	</Modal>}
	  </div>
	</div>
  )
}

export default EventCompanyDetails