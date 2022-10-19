import React, {useState} from 'react';
import Modal from "../modal/Modal";
import EventPopUpUploadPhoto from './popups/EventPopUpUploadPhoto';
import EventPopUpUploadVideo from "./popups/EventPopUpUploadVideo";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import axios from 'axios';
import { baseUrl } from "../../config";
import { increment } from '../../redux/stepProgressCount';
import { useDispatch } from 'react-redux';

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
const handleNext = async() => {
	try {
		setloading(true);
		
		if(imageList && imageList.length < 6 && imageList.length > 0) {
			imageList?.map(async(element) =>{
				let formDataImage = new FormData();
				formDataImage.append("image_details", element.detail);
				formDataImage.append("event", eventId);
				formDataImage.append("image", element.image);
				const response = await axios.post(`${baseUrl}/api/image_event`,formDataImage, {headers: header});
				console.log(response);
			});
		}

		if(videoList && videoList.length < 2 && videoList.length > 0) {
			videoList?.map((async (element) => {
				let formDataVideo = new FormData();
				formDataVideo.append("image_details",element.detail);
				formDataVideo.append("event", eventId);
				formDataVideo.append("video", element.video);
				const response = await axios.post(`${baseUrl}/api/video_event`, formDataVideo, {headers: header});
				console.log(response);
			}));
		}

		setloading(false);
		dispatch(increment());
		navigate(`/dashboard/event/addservices/${eventId}/${userId}`);
	} catch (error) {
		setloading(false);
	}
}

console.log(imageList);
console.log(videoList);
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
			   <h3 className="flex items-end">Photo <span className="input-titel ml-2">5 Images (up to 5MB/Image)</span></h3>
			   <label onClick={()=>setIsUploadPhotoPopUpOpen(true)} htmlFor="upload" className="upload">
				 <input  name="images" id="upload" className="appearance-none hidden"/>
				 <span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>
			   </label>
		   </div>
		   <div className="media-upload-holder">
			   <span className="input-titel">Uploaded Photo</span>
				<div className="flex space-x-2.5">
					{imageList?.map((img, index) => (
						<div className="upload-box" key={index}>
							<div className="rounded relative overflow-hidden">
							<img src={img.previewUrl} alt={"upload-"+index}/>
							<button onClick={() => {
								setImageList(current => current.filter(ele => ele.id !== index));
								setImageList(current => current.map((ele, i) => {
									return {...ele, id: i}
								}));
							}}>Remove</button>
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
		   </div>
		   <div className="media-upload-holder">
			   <span className="input-titel">Uploaded videos</span>
			   <div className="flex space-x-2.5">
					{videoList?.map((vid, index) => (
						<div className="upload-box" key={index}>
							<div className="rounded relative overflow-hidden">
								<img src={vid.previewUrl} alt={"upload-"+index}/>
								<button onClick={() => {
								setVideoList(current => current.filter(ele => ele.id !== index));
								setVideoList(current => current.map((ele, i) => {
									return {...ele, id: i}
								}));
							}}>Remove</button>
							</div>
						</div>
					))}
			   </div>
		   </div>
		   <div className="w-full inline-block">
			 <div  className="float-right btn-primary small leading-10" onClick={() => navigate("/dashboard/event/buy-space-plan")}>Buy Space</div>
			 <span className="float-left input-titel text-sm lg:leading-10">Disclaimer - These images and videos will first be verified by the admin and then given the authority.</span>
		   </div>
		 </div>
		 {/* <!-- advisement --> */}
		 <Advertisement />
	   </div>
	   <div className="prw-next-btn">
		 <button type="button" className="flex items-center" onClick={() => navigate(-1)}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
		 <button type="button" className="flex items-center active" onClick={handleNext}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
	   </div>
	 </div>
	 <div>
	{imageList.length < 5 && <Modal isOpen={isUploadPhotoPopUpOpen}>
		<EventPopUpUploadPhoto handleClose={setIsUploadPhotoPopUpOpen} setImageList={setImageList} />
	 </Modal>}
	 {videoList.length < 2 && <Modal isOpen={isUploadVideoPopUpOpen}>
		<EventPopUpUploadVideo handleClose={setIsUploadVideoPopUpOpen} setVideoList={setVideoList} />
	</Modal>}
	 </div>

   </div>
  )
}

export default EventPhotosAndVideos