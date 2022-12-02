import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StepProgressBar from './StepProgressBar';
import { baseUrl, s3Url } from '../../config';
import axios from 'axios';
import { decrement, increment } from '../../redux/stepProgressCount';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useCallback } from 'react';
import { imageType, videoType } from '../../shared/constants';

function EventCompanyDetails() {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const eventType = params.eventType;
	const eventId = localStorage.getItem("eventId");	
	const displayName = localStorage.getItem("displayName");
	const token = localStorage.getItem("Token");
	const [gstFile, setGstFile] = useState(null);
	const [gstFileError, setGstFileError] = useState(null);
	const [imageList, setImageList] = useState([]);
	const [videoList, setVideoList] = useState([]);
	const [error, setError] = useState(false);
	const [error2, setError2] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const header = {
		'Authorization': `Token ${token}`
	}

	const imageHeader = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'multipart/form-data'
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Company name is required'),
		contact_no: Yup.number().typeError('The value must be a digit').integer().positive("contact number must be positive").required('Contact No is required'),
		email: Yup.string().email('Invalid Email format').required('Email is required'),
		about: Yup.string().required("About is required."),
		flat_no: Yup.string(),
		street: Yup.string(),
		area: Yup.string(),
		city: Yup.string().required('City is required'),
		state: Yup.string().required('State is required'),
		pincode: Yup.number().typeError('The value must be a digit').min(6, "Pincode should be six digit long.").required('pincode is required'),
	});

	const initialState = {
		name: "",
		contact_no: "",
		email: "",
		about: "",
		flat_no: "",
		street: "",
		area: "",
		city: "",
		state: "",
		pincode: "",
	};

	const clickNextHandler = async(values) => {
		try {
			const requestObj = {...values, gst: gstFile, photos: imageList, videos: videoList, eventid: eventId};
			const response = await axios.post(`${baseUrl}/organizer/events/companydetail`, requestObj, {headers: header});
			console.log(response);
			if(response.data.IsSuccess) {
				toast.success(response.data.Message);
				dispatch(increment());
				navigate(`../termsandconditions`);
				
			} else {
				toast.success(response.data.Message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	};

	const formik = useFormik({
		initialValues: initialState,
		validationSchema: validationSchema,
		onSubmit: clickNextHandler,
	});

	const setInputValue = useCallback(
		(key, value) =>
			formik.setValues({
				...formik.values,
				[key]: value,
			}),
		[formik]
	);

	const getCompanyDetail = async () => {
		try {
			const response = await axios.get(`${baseUrl}/organizer/events/companydetail?eventid=${eventId}`, { headers: header });
			console.log("Company details > ", response.data.Data);
			if(response.data.Data.companydetail) {
				formik.setValues(response.data.Data.companydetail);
				setImageList(response.data.Data.companydetail.photos);
				setVideoList(response.data.Data.companydetail.videos);
				setGstFile(response.data.Data.companydetail.gst);
			}
			if(!response.data.IsSuccess) {
				toast.error("Error occured while fetching data.");
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getCompanyDetail();
	}, []);

	const pdfUpload = async(e) => {
		const size = 1;
		if (e.target.files.length > 0) {
			if (e.target.files[0]?.type === 'application/pdf') {
				if (e.target.files[0].size > size * 1024 * 1024) {
					setGstFileError("File size should be less than " + size + " MB.");
				} else {
					const formData = new FormData();
					formData.append("file", e.target.files[0]);
					try {
						const response = await axios.post(`${baseUrl}/organizer/events/document`,formData, { headers: header });
						console.log(response);
						if(response.data.IsSuccess) {
							setGstFile(response.data.Data.url);
							setGstFileError(null);
							toast.success(response.data.Message);
						} else {
							toast.error(response.data.Message);
						}
					} catch (error) {
						toast.error("Something went Wrong.");
						console.log(error);
					}
				}
			} else {
				setGstFileError("Please select Pdf File.");
			}
		} else {
			setGstFileError(null);
		}
	}

	const photoChangeHandler = async(event) => {
		const size = 5;
		let selected = event.target.files[0];
		if(imageList.length >= 5)  {
			toast.info("Image Upload Limit Exceed.");
			return
		}
		try {
			if(selected && imageType.includes(selected.type)) {
				if(selected.size < (size*1024*1024)){
					try {
						const formDataImage = new FormData();
						formDataImage.append("file",selected);
						const response = await axios.post(`${baseUrl}/organizer/events/image`, formDataImage, {headers: imageHeader});
						if(response.data.IsSuccess) {
							toast.success(response.data.Message);
							console.log(response);
							setErrorMessage(null);
							setError(false);
							setImageList(current => [...current,{url : response.data.Data.url}]);
						} else {
							toast.error(response.data.Message);
						}
					} catch (error) {
						toast.error("Something Went Wrong.");
						console.log(error);
					}
				}
				else {
					// console.log("file size is greater than 3MB. File size is ", selected.size);
					setErrorMessage("file size is greater than "+size+" MB");
					setError(true);
				}
			} else {
				// console.log("please select valid image file. File type is ", selected.type);
				setErrorMessage("please select valid image file.");
				setError(true);
			}
		} catch (error) {
			console.log(error);
			setError(true);
		}
	}  

	const videoChangeHandler = async(event) => {
		let selected = event.target.files[0];
		const size = 1024;
		if(videoList.length >= 2)  {
			toast.info("Video Upload Limit Exceed.");
			return
		}
		try {
			if(selected && videoType.includes(selected.type)) {
				if(selected.size < (size*1024*1024)) {
					try {
						const formDataVideo = new FormData();
						formDataVideo.append("file",selected)
						const response = await axios.post(`${baseUrl}/organizer/events/video`, formDataVideo, {headers: imageHeader});
						if(response.data.IsSuccess) {
							toast.success(response.data.Message);
							console.log(response);
							setErrorMessage(null);
						  	setError2(false);
							setVideoList(current => [...current,{url : response.data.Data.url}]);
						} else {
							toast.error(response.data.Message);
						}
					} catch (error) {
						toast.error("Something Went Wrong.");
						console.log(error);
					}
				}
				else {
					// console.log("file size is greater than 512MB. File size is ", selected.size);
					setErrorMessage("file size is greater than "+size+" Mb.");
					setError2(true);
				}
			} else {
				// console.log("please select video file with mp4 extension.",selected.type);
				setErrorMessage("please select valid video file.");
				setError2(true);
			}
		} catch (error) {
			console.log(error);
			setError2(true);
		}
	}  

	const removeImageClick = async(index) => {
		// console.log(index)
		const tmpList = imageList;
		tmpList.splice(index, 1);
		setImageList([...tmpList]);
		// console.log(tmpList);
	}
	
	const removeVideoClick = async(index) => {
		console.log(index);
		const tmpList =[...videoList];
		if(tmpList === videoList) console.log(true)
		setVideoList([]);
		tmpList.splice(index, 1);
		console.log(tmpList);
		setVideoList([...tmpList]);
	}
	
	console.log(videoList);

  return (
	<div>
          <form onSubmit={formik.handleSubmit} className="wrapper min-h-full">
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
                  <div className="w-full md:w-1/2 px-2 inputHolder">
                      <span className="input-titel">Company Name <span>*</span></span>
                      <input type="text" className="input" name="name" value={formik.values?.name} onChange={(e) => setInputValue("name", e.target.value)}/>
					  <small className="text-red-500 text-xs">{formik.errors.name}</small>
					  <br/>
                  </div>
                  <div className="w-full md:w-1/2 px-2 inputHolder">
                      <span className="input-titel">Company GST (Optional)</span>
                      <label htmlfor="upload" className="upload upload-popup">
                        <input type="file" name="images" id="upload" className="appearance-none hidden" onChange={pdfUpload} />
                        <span className="input-titel mt-1"><i className="icon-pdf mr-2"></i>Upload PDF</span>
                      </label>
						{gstFileError && <span className="text-red-500 text-xs">{gstFileError}</span>}
						{!gstFileError && gstFile !== null && <span className="text-[#20C0E8] text-xs"><a target="blank" href={s3Url+"/"+gstFile}>preview link</a></span>}
					  <br/>
                  </div>
                </div>
                <div className="w-full flex items-end flex-wrap">
                  <div className="w-full md:w-1/2 px-2 inputHolder">
                      <span className="input-titel">Company Contact No <span>*</span></span>
                      <input type="text" className="input" name="contact_no" value={formik.values?.contact_no} onChange={(e) => setInputValue("contact_no", e.target.value)} />
					  <small className="text-red-500 text-xs">{formik.errors.contact_no}</small>
					  <br/>
                  </div>
                  <div className="w-full md:w-1/2 px-2 inputHolder">
                      <span className="input-titel">Company Email <span>*</span></span>
                      <input type="text" className="input" name="email" value={formik.values?.email} onChange={(e) => setInputValue("email", e.target.value)} />
					  <small className="text-red-500 text-xs">{formik.errors.email}</small>
					  <br/>
                  </div>
				  <div className="w-full px-2 mt-3" >
                    <span className="input-titel">Company About <span>*</span></span>
                    <textarea name="about" id="" cols="30" rows="3"
                      className="outline-none flex items-center w-full bg-white rounded-md p-3"
					  value={formik.values?.about} onChange={(e) => setInputValue("about", e.target.value)} ></textarea>
					  <small className="text-red-500 text-xs">{formik.errors.about}</small>
					  <br/>
                  </div>
                </div> 
                <div className="space-y-5">
                    <h3 className="px-2">Address</h3>
                    <div className="w-full flex flex-wrap">
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <span className="input-titel">Flat No.</span>
                          <input type="text" className="input" name="area" value={formik.values?.area} onChange={(e) => setInputValue("area", e.target.value)} />
						  <small className="text-red-500 text-xs">{formik.errors.area}</small>
						  <br/>
                      </div>
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <span className="input-titel">Street Name.</span>
                          <input type="text" className="input" name="street" value={formik.values?.street} onChange={(e) => setInputValue("street", e.target.value)} />
						  <small className="text-red-500 text-xs">{formik.errors.street}</small>
						  <br/>
                      </div>
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <span className="input-titel">Area Name.</span>
                          <input type="text" className="input" name="area" value={formik.values?.area} onChange={(e) => setInputValue("area", e.target.value)}/>
						  <small className="text-red-500 text-xs">{formik.errors.area}</small>
						  <br/>
                      </div>
                    </div>
                    <div className="w-full flex flex-wrap">
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">City <span>*</span></label>
                          <input type="text" className="input" name="city" value={formik.values?.city} onChange={(e) => setInputValue("city", e.target.value)} />
						  <small className="text-red-500 text-xs">{formik.errors.city}</small>
						  <br/>
                      </div>
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">State <span>*</span></label>
                          <input type="text" className="input" name="state" value={formik.values?.state} onChange={(e) => setInputValue("state", e.target.value)} />
						  <small className="text-red-500 text-xs">{formik.errors.state}</small>
						  <br/>
                      </div>
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">Pincode <span>*</span></label>
                          <input type="text" className="input" name="pincode" value={formik.values?.pincode} onChange={(e) => setInputValue("pincode", e.target.value)} />
						  <small className="text-red-500 text-xs">{formik.errors.pincode}</small>
						  <br/>
                      </div>
                    </div>
                </div>
                <div className="upload-holder px-2">
                  <span className="input-titel ">Company Photos Max 5 images (up to 5MB/image)</span>
                  <label htmlfor="upload" className="upload" onChange={photoChangeHandler}>
                    <input type="file" name="images" id="upload" className="appearance-none hidden" />
                    <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>
                  </label>
				{error && <small className="text-red-500 text-xs">{errorMessage} </small>}
				<br/>
                </div>
				<div className="media-upload-holder ml-2">
			  	{imageList?.length !== 0  && <span className="input-titel">Uploaded Photo</span>}
				<div className="flex flex-wrap herobox">
					{imageList?.map((img, index) => (
						<div key={index} className="mt-2 mr-2">
							<div className="upload-box" >
								<div className="rounded relative overflow-hidden flex justify-center items-center h-full">
								<img src={s3Url+"/"+img.url} alt={"upload-"+index}/>
								<button type="button" onClick={() =>removeImageClick(index)} >Remove</button>
							</div>
						</div>
					</div>
					))}
				</div>
		   </div>
                <div className="upload-holder px-2">
                    <span className="input-titel ">Company Video Max 2 videos (up to 2GB/video)</span>
                    <label htmlfor="upload2" className="upload">
                      <input type="file" name="images" id="upload2" className="appearance-none hidden" onChange={videoChangeHandler} />
                      <div className="mt-1 flex items-baseline justify-center"><i className="icon-video-play text-base mr-2"></i> <span className="input-titel pt-1">Upload videos</span></div>
                    </label>
					{error2 && <small className="text-red-500 text-xs">{errorMessage} </small>}
					<br/>
                </div>
				<div className="media-upload-holder ml-2">
			  {videoList?.length !== 0 && <span className="input-titel">Uploaded videos</span>}
			   <div className="flex space-x-2.5">
					{videoList?.map((vid, index) => (
						<div className="upload-box" key={index}>
							<div className="rounded relative overflow-hidden h-full" >
								<video className='h-full' >
									<source src={s3Url + "/" + vid.url} alt={"upload-" + index} />
								</video>
								<button type="button" onClick={() => removeVideoClick(index)}>Remove</button>
							</div>
						</div>
					))}
			   </div>
		   </div>
              </div>
              <span className="input-titel capitalize">Disclaimer - These images and videos will first be verified by the admin and then given the authority.</span>
            </div>

            <div className="prw-next-btn">
              <button type="button" className="flex items-center" onClick={clickBackHander} ><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
              <button type="submit" className="flex items-center active"><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
            </div>

          </form>
        </div>
  )
}

export default EventCompanyDetails