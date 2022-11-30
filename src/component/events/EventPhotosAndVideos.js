import React, {useEffect, useState} from 'react';
import Modal from "../modal/Modal";
import EventPopUpUploadPhoto from './popups/EventPopUpUploadPhoto';
import EventPopUpUploadVideo from "./popups/EventPopUpUploadVideo";
import { useNavigate, useParams } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import axios from 'axios';
import { baseUrl, s3Url } from "../../config";
import { decrement, increment } from '../../redux/stepProgressCount';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { current } from '@reduxjs/toolkit';

function EventPhotosAndVideos() {
	const displayName = localStorage.getItem("displayName");
const [isUploadPhotoPopUpOpen, setIsUploadPhotoPopUpOpen] = useState(false);
const [isUploadVideoPopUpOpen, setIsUploadVideoPopUpOpen] = useState(false);
const [imageList, setImageList] = useState([]);
const [videoList, setVideoList] = useState([]);
const navigate = useNavigate();
const dispatch = useDispatch();
const params = useParams();
const eventId = params.eventId;
const eventType = params.eventType;
const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`,
	}

	const getMedia = async() => {
		try {
			const response = await axios.get(`${baseUrl}/organizer/events/media?eventid=${eventId}`, {headers: header});
			if(response.data.Data.photos) setImageList(response.data?.Data?.photos);
			if(response.data.Data.videos) setVideoList(response.data?.Data?.videos);
			// console.log("Media response >> ",response);
		} catch (error) {
			console.log(error);
		}
	}
	
	useEffect(()=>{
		getMedia();
	},[isUploadPhotoPopUpOpen, isUploadVideoPopUpOpen]);

const removeImageClick = async(index) => {
	// console.log(index)
	const tmpList = imageList;
	if(index === 0) tmpList.shift();
	else if(tmpList.length > 1) tmpList.splice(index, 1);
	// console.log(tmpList);
	const reqObj = {
		eventid: eventId,
		photos: tmpList
	}
	try{
		const res = await axios.post(`${baseUrl}/organizer/events/media`, reqObj, {headers: header});
		// console.log(res);
		if(res.data.IsSuccess) {
			toast.success("Image removed Successfully.");
			getMedia();
		}
	} catch(error) {
		toast.error("Something went wrong");
		console.log(error);
	}
}

const removeVideoClick = async(index) => {
	console.log(index);
	const tmpList = videoList;
	if(index === 0) tmpList.shift();
	else if(tmpList.length > 1) tmpList.splice(index, 1);
	console.log(tmpList);
	// without below line UI not Updating and display removed video insted of remaining one.
	setVideoList([]);
	const reqObj = {
		eventid: eventId,
		videos: tmpList
	}
	try{
		const res = await axios.post(`${baseUrl}/organizer/events/media`, reqObj, {headers: header});
		console.log(res);
		if(res.data.IsSuccess) {
			toast.success("Video removed Successfully.");
			getMedia();
		}
	} catch(error) {
		toast.error("Something went wrong");
		console.log(error);
	}
}

const clickNextHandler = () => {
	toast.success("Data saved successfully.");
	dispatch(increment());
	if(eventType === "group_skills") navigate(`../additem`);
	else navigate(`../addservices`);
}

const clickBackHander = () => {
	dispatch(decrement());
	navigate(-1);
}

  return (
	//  <!-- Content In -->
	 <div>
	 <div className="wrapper min-h-full">
	   
	   <div className="space-y-8 h-full">
		 {/* <!-- title-holder  --> */}
		 <div className="flex justify-between items-center">
		   <div className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>{displayName}</h1></div>
		 </div>
		 {/* <!-- step-progress-bar  --> */}
		 <StepProgressBar eventType={eventType} />
		 {/* <!-- main-content  --> */}
		 <div className="space-y-5">
		   <div className="upload-holder">
			   <h3 className="flex items-end">Photo <span className="input-titel ml-2">15 Images (up to 3MB/Image)</span></h3>
			   <label onClick={()=>setIsUploadPhotoPopUpOpen(true)} htmlFor="upload" className="upload">
				 <input  name="images" id="upload" className="appearance-none hidden"/>
				 <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>
			   </label>
			   {imageList?.length !== 0  &&<span className="input-titel mt-1">{imageList?.length} Images Uploaded</span>}
		   </div>
		   <div className="media-upload-holder">
			  {imageList?.length !== 0  && <span className="input-titel">Uploaded Photo</span>}
				<div className="flex flex-wrap herobox">
					{imageList?.map((img, index) => (
						<div key={index} className="mt-2 mr-2">
							<div className="upload-box" >
								<div className="rounded relative overflow-hidden flex justify-center items-center h-full">
								<img src={s3Url+"/"+img.url} alt={"upload-"+index}/>
								<button onClick={() =>removeImageClick(index)}>Remove</button>
							</div>
						</div>
					</div>
					))}
				</div>
		   </div>
		   <div className="upload-holder">
			   <h3 className="flex items-end">videos <span className="input-titel ml-2">2 videos (up to 512MB/video)</span></h3>
			   <label onClick={()=>setIsUploadVideoPopUpOpen(true)} htmlFor="upload2" className="upload">
				 <input  name="images" id="upload2" className="appearance-none hidden"/>
				 <div className="mt-1 flex items-baseline justify-center"><i className="icon-video-play text-base mr-2"></i> <span className="input-titel pt-1">Upload videos</span></div>
			   </label>
			   {videoList?.length !== 0 &&<span className="input-titel mt-1">{videoList?.length} Videos Uploaded</span>}
		   </div>
		   <div className="media-upload-holder">
			  {videoList?.length !== 0 && <span className="input-titel">Uploaded videos</span>}
			   <div className="flex space-x-2.5">
					{videoList?.map((vid, index) => (
						<div className="upload-box" key={index}>
							<div className="rounded relative overflow-hidden h-full" >
								<video className='h-full' >
									<source src={s3Url + "/" + vid.url} alt={"upload-" + index} />
								</video>
								<button onClick={() => removeVideoClick(index)}>Remove</button>
							</div>
						</div>
					))}
			   </div>
		   </div>
		   <div className="w-full inline-block">
			 {/* <a href="#" className="float-right btn-primary small leading-10" onClick={() => navigate("/dashboard/event/buy-space-plan")}>Buy Space</a> */}
			 <span className="float-left input-titel text-sm lg:leading-10">Disclaimer - These images and videos will first be verified by the admin and then given the authority.</span>
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
	 <div>
	{imageList?.length < 15 && <Modal isOpen={isUploadPhotoPopUpOpen}>
		<EventPopUpUploadPhoto handleClose={setIsUploadPhotoPopUpOpen} eventId={eventId} imageList={imageList} />
	 </Modal>}
	 {videoList?.length < 2 && <Modal isOpen={isUploadVideoPopUpOpen}>
		<EventPopUpUploadVideo handleClose={setIsUploadVideoPopUpOpen} eventId={eventId} videoList={videoList} />
	</Modal>}
	 </div>
   </div>
  )
}

export default EventPhotosAndVideos