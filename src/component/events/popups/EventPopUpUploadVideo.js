import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrl } from '../../../config';
import { videoType } from '../../../shared/constants';

function EventPopUpUploadVideo({handleClose, eventId, videoList}) {
  const [video, setVideo] = useState("");
  const [currentVideoList, setCurrentVideoList] = useState(videoList);
  const [details, setDetails] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`,
	}
  const videoHeader = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'multipart/form-data'
	}
  
	const videoChangeHandler = (event) => {
		let selected = event.target.files[0];
		const size = 512;
		try {
			if(selected && videoType.includes(selected.type)) {
				if(selected.size < (size*1024*1024)) {
					setVideo(selected);
          setErrorMessage(null);
					setError(false);
				}
				else {
					// console.log("file size is greater than 512MB. File size is ", selected.size);
					setErrorMessage("file size is greater than "+size+" Mb.");
					setError(true);
				}
			} else {
				// console.log("please select video file with mp4 extension.",selected.type);
				setErrorMessage("please select valid video file.");
				setError(true);
			}
		} catch (error) {
			console.log(error);
			setError(true);
		}
	}  

  const videoUpload = async() =>{
    try {
      let formDataVideo = new FormData();
      formDataVideo.append("file", video);
      const response = await axios.post(`${baseUrl}/organizer/events/video`, formDataVideo, {headers: videoHeader});
      console.log(response);
      if (response.data.IsSuccess) {
        const reqObj = {
          eventid: eventId,
          videos: [...videoList,
          {
            url: response.data.Data.url,
            description: details
          }
          ]
        }
        const res = await axios.post(`${baseUrl}/organizer/events/media`, reqObj, { headers: header });
        console.log(res);
        toast.success(res.data.Message);
        handleClose(false);
      } else {
        toast.error(response.data.Message);
      }
    } catch (error) {
      toast.error("Something Went wrong.");
      console.log(error);
    }
  }

  const submitHandler = async() => {
		if(!error) {
      videoUpload();
		} else {
			console.log("error occured");
		}
	}

  return (
	<div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-12">
            <div className="flex justify-between items-center">
              <h1 className="h1">Upload Video</h1>
              <div>
                <button onClick={()=>handleClose(false)} className="text-xl"><i className="icon-close"></i></button>
              </div>
            </div>
            <form className="py-7 space-y-5">
              <div className="upload-holder">
                <h6 className="text-sm font-bold text-quicksilver">Select Video <span className="text-10">2 video (up to 512MB/Video)</span></h6>
                <label htmlfor="upload" className="upload upload-popup">
                  <input type="file" name="video" id="upload" className="appearance-none hidden" onChange={videoChangeHandler} />
                  <span className="input-titel mt-1"><i className="icon-video-play mr-2"></i>Upload Video</span>
                </label>
                {error ? <span className="mt-1" style={{color: "red", fontSize: "14px"}}>{errorMessage} </span> : <span className="mt-1" style={{fontSize: "14px"}}>{video.name}</span>}
              </div>
              <div className="w-full">
                <span className="input-titel">Details</span>
                <textarea name="" id="" cols="30" rows="5" className="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md" onChange={(e) => setDetails(e.target.value)}></textarea>
              </div>
            </form>
            <div className="btn-primary w-full uppercase cursor-pointer" onClick={submitHandler}>Submit</div>
          </div>
        </div>
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

export default EventPopUpUploadVideo;