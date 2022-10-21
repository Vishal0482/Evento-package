import React, { useState } from 'react';
import Modal from "../modal/Modal";
import uploadOne from "../../assest/images/upload-1.png";
import EventPopUpUploadPhoto from './popups/EventPopUpUploadPhoto';
import EventPopUpUploadVideo from "./popups/EventPopUpUploadVideo";
import { Link, useNavigate } from 'react-router-dom';
import Advertisement from '../Advertisement';
import axios from 'axios';
import { baseUrl } from "../../config";
import StepProgressBar from './StepProgressBar';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/stepCountPogress';
import { current } from '@reduxjs/toolkit';



function EventPhotosAndVideos() {

	const [isUploadPhotoPopUpOpen, setIsUploadPhotoPopUpOpen] = useState(false);
	const [isUploadVideoPopUpOpen, setIsUploadVideoPopUpOpen] = useState(false);
	const [imageList, setImageList] = useState([]);
	const [videoList, setVideoList] = useState([]);

	const [loading, setloading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch()

	const token = '248258927fede2b3e48c182f40539846bcd47037'
	const header = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'multipart/form-data'
	}

	const handleNext = async () => {
		try {
			setloading(true);
			dispatch(increment())
			imageList.map(async (element) => {
				let formData = new FormData();
				formData.append("image_details", element.detail);
				formData.append("event", element.eventId);
				formData.append("image", element.image);
				const response = await axios.post(`${baseUrl}/api/image_event`, formData, { headers: header });
				console.log(response);

				videoList.map(async (element) => {
					let formDatavideo = new FormData();
					formDatavideo.append("video-Details", element.detail);
					formDatavideo.append("event", element.eventId);
					formDatavideo.append("image", element.video);
					const response = axios.post(`${baseUrl}/api//video_event`, formDatavideo, { headers: header });
					console.log(response)
				})
			});
			setloading(false);
			navigate("/dashboard/event/addservices");
		} catch (error) {
			setloading(false);
		}
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
							<h3 className="flex items-end">Photo <span className="input-titel ml-2">5 Images (up to 5MB/Image)</span></h3>
							<label onClick={() => setIsUploadPhotoPopUpOpen(true)} htmlFor="upload" className="upload">
								<input name="images" id="upload" className="appearance-none hidden" />
								<span className="input-titel mt-1"><i className="icon-image mr-2"></i>Upload Images</span>
							</label>
						</div>
						<div className="media-upload-holder">
							<span className="input-titel">Uploaded Photo</span>
							<div className="flex flex-wrap">
								{imageList?.map((img, index) => (
									<div>
										<div className="w-full upload-box" key={index}>
											<div className="rounded relative overflow-hidden h-full">
												<img src={img.previewUrl} alt={"upload-" + index} />
												{/* <button onClick={() => setImageList(current => current.filter(ele => ele.id !== index))}>Remove</button> */}
												<button onClick={() => { setImageList(current => current.filter(ele => ele.id !== index)); setImageList(current => current.map((ele, i) => { return { ...ele, id: i } })); }}>Remove</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="upload-holder">
							<h3 className="flex items-end">videos <span className="input-titel ml-2">2 videos (up to 512MB/video)</span></h3>
							<label onClick={() => setIsUploadVideoPopUpOpen(true)} htmlFor="upload2" className="upload">
								<input name="images" id="upload2" className="appearance-none hidden" />
								<div className="mt-1 flex items-baseline justify-center"><i className="icon-video-play text-base mr-2"></i> <span className="input-titel pt-1">Upload videos</span></div>
							</label>
						</div>
						<div className="media-upload-holder">
							<span className="input-titel">Uploaded videos</span>
							<div className="flex space-x-2.5">
								{imageList?.map((img, index) => (
									<div>
										<div className="w-full upload-box" key={index}>
											<div className="rounded relative overflow-hidden h-full">
												<img src={img.previewUrl} alt={"upload-" + index} />
												<button onClick={() => { setImageList(current => current.filter(ele => ele.id !== index)); setImageList(current => current.map((ele, i) => { return { ...ele, id: i } })); }}>Remove</button>
											</div>
										</div>
									</div>
								))}
								{videoList?.map((vid, index) => (
									<div>
										<div className="upload-box" key={index}>
											<div className="rounded relative overflow-hidden">
												<img src={vid.previewUrl} alt={"upload-" + index} />
												<button onClick={() => { setVideoList(current => current.filter(ele => ele.Id !== index)); setVideoList(current => current.map((ele, i) => { return { ...ele, id: i } })); }}>Remove</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="w-full inline-block">
							{/* <Link to="/" className="float-right btn-primary small leading-10" onClick={() => navigate("/dashboard/event/buy-space-plan")}>Buy Space</Link> */}
							<span className="float-left input-titel text-sm lg:leading-10">Disclaimer - These images and videos will first be verified by the admin and then given the authority.</span>
						</div>
					</div>
					{/* <!-- advisement --> */}
					<Advertisement />
				</div>
				<div className="prw-next-btn">
					<button type="button" className="flex items-center" onClick={() => {
						navigate(-1)
						dispatch(decrement())
					}}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
					<button type="button" className="flex items-center active" onClick={handleNext}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
				</div>
			</div>
			<div>
				<Modal isOpen={isUploadPhotoPopUpOpen}>
					<EventPopUpUploadPhoto handleClose={setIsUploadPhotoPopUpOpen} setImageList={setImageList} />
				</Modal>
				<Modal isOpen={isUploadVideoPopUpOpen}>
					<EventPopUpUploadVideo handleClose={setIsUploadVideoPopUpOpen} />
				</Modal>
			</div>

		</div >
	)
}

export default EventPhotosAndVideos