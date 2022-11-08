import React, {useEffect, useState} from 'react';
import Modal from "../modal/Modal";
import EventPopUpUploadPhoto from './popups/EventPopUpUploadPhoto';
import EventPopUpUploadVideo from "./popups/EventPopUpUploadVideo";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import axios from 'axios';
import { baseUrl } from "../../config";
import { decrement, increment } from '../../redux/stepProgressCount';
import { useDispatch } from 'react-redux';
import videoThumb from '../../assest/images/video-thumbnail.jpg';

function EventPhotosAndVideos() {

const [isUploadPhotoPopUpOpen, setIsUploadPhotoPopUpOpen] = useState(false);
const [isUploadVideoPopUpOpen, setIsUploadVideoPopUpOpen] = useState(false);
const [imageList, setImageList] = useState([]);
const [videoList, setVideoList] = useState([]);
const [loading, setloading] = useState(false);
const navigate = useNavigate();
const dispatch = useDispatch();
const params = useParams();
const eventId = params.eventId;
const userId = params.userId;
const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'multipart/form-data'
	}

	const getImage = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/image_event?eventId=${eventId}`, {headers: header});
			setImageList(response.data.data);
			// console.log("Image response >> ",response);
		} catch (error) {
			console.log(error);
		}
	}
	
	const getVideo = async() => {
		try {
			const response = await axios.get(`${baseUrl}/api/video_event?eventId=${eventId}`, {headers: header});
			setVideoList(response.data.data);
			// console.log("Video response >> ",response);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(()=>{
		getImage();
		getVideo();
	},[isUploadPhotoPopUpOpen, isUploadVideoPopUpOpen]);

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

const clickNextHandler = () => {
	dispatch(increment());
	navigate(`../addservices/${eventId}/${userId}`);
}

const clickBackHander = () => {
	dispatch(decrement());
	navigate(-1);
}

  return (
	//  <!-- Content In -->
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
		 <div className="space-y-5">
		   <div className="upload-holder">
			   <h3 className="flex items-end">Photo <span className="input-titel ml-2">15 Images (up to 3MB/Image)</span></h3>
			   <label onClick={()=>setIsUploadPhotoPopUpOpen(true)} htmlFor="upload" className="upload">
				 <input  name="images" id="upload" className="appearance-none hidden"/>
				 <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>
			   </label>
				 <span className="input-titel mt-1">{imageList.length} Images Uploaded</span>
		   </div>
		   <div className="media-upload-holder">
			   <span className="input-titel">Uploaded Photo</span>
				<div className="flex flex-wrap herobox">
					{imageList?.map((img, index) => (
						<div key={index}>
							<div className="upload-box" >
								<div className="rounded relative overflow-hidden flex justify-center items-center h-full">
								<img src={baseUrl+"/api"+img.image} alt={"upload-"+index}/>
								<button onClick={() =>removeImageClick(img.id)}>Remove</button>
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
			   <span className="input-titel mt-1">{videoList.length} Videos Uploaded</span>
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

export default EventPhotosAndVideos