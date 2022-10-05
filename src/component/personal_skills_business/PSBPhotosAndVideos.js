import React, {useState} from "react";
import Modal from "../modal/Modal";
import Advertisement from "../Advertisement";
import uploadOne from "../../assest/images/upload-1.png"
import PSBPopUpUploadPhoto from './popups/EventPopUpUploadPhoto'
import PSBPopUpUploadVideo from "./popups/EventPopUpUploadVideo"
import { Link } from "react-router-dom";


function PSBPhotosAndVideos() {

	const [isUploadPhotoPopUpOpen, setIsUploadPhotoPopUpOpen] = useState(false)
	const [isUploadVideoPopUpOpen, setIsUploadVideoPopUpOpen] = useState(false)

  return (
    // <!-- Content In -->
    <div className="rightInContent">
      <div className="wrapper min-h-full">
        <div className="space-y-8 h-full">
          {/* <!-- title-holder  --> */}
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <i className="icon-back-arrow mr-4 text-2xl"></i>
              <h1>Personal Skill Business</h1>
            </Link>
          </div>
          {/* <!-- step-progress-bar  --> */}
          <div className="w-full overflow-hidden">
            <ul className="flex justify-between step-progress-holder">
              <li>
                <div>
                  <span>01</span>
                </div>
                <h3>Select Skill</h3>
              </li>
              <li>
                <div>
                  <span>02</span>
                </div>
                <h3>Personal Details</h3>
              </li>
              <li>
                <div>
                  <span>03</span>
                </div>
                <h3>Photos & Videos</h3>
              </li>
              <li>
                <div>
                  <span>04</span>
                </div>
                <h3>Equipment</h3>
              </li>
              <li>
                <div>
                  <span>05</span>
                </div>
                <h3>Other Cost</h3>
              </li>
              <li>
                <div>
                  <span>06</span>
                </div>
                <h3>Company Details</h3>
              </li>
              <li>
                <div>
                  <span>07</span>
                </div>
                <h3>Terms and Conditions</h3>
              </li>
              <li>
                <div>
                  <span>08</span>
                </div>
                <h3>Discount</h3>
              </li>
              <li>
                <div>
                  <span>09</span>
                </div>
                <h3>Calendar</h3>
              </li>
            </ul>
          </div>
          {/* <!-- main-content  --> */}
          <div className="space-y-5">
            <div className="upload-holder">
              <h3 className="flex items-end">
                Photo{" "}
                <span className="input-titel ml-2">5 Images (up to 5MB/Image)</span>
              </h3>
              <label onClick={()=>setIsUploadVideoPopUpOpen(true)} htmlfor="upload" className="upload">
                <input
                  name="images"
                  id="upload"
                  className="appearance-none hidden"
                />
                <span className="input-titel mt-1">
                  <i className="icon-image mr-2"></i>Upload Images
                </span>
              </label>
            </div>
            <div className="media-upload-holder">
              <span className="input-titel">Uploaded Photo</span>
              <div className="flex space-x-2.5">
                <div className="upload-box">
                  <div className="rounded relative overflow-hidden">
                    <img src={uploadOne} alt="upload-1" />
                    <button>Remove</button>
                  </div>
                </div>
                <div className="upload-box">
                  <div className="rounded relative overflow-hidden">
                    <img src={uploadOne} alt="upload-1" />
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="upload-holder">
              <h3 className="flex items-end">
                videos{" "}
                <span className="input-titel ml-2">
                  2 videos (up to 512MB/video)
                </span>
              </h3>
              <label onClick={()=>setIsUploadPhotoPopUpOpen(true)} htmlfor="upload2" className="upload">
                <input
                  name="images"
                  id="upload2"
                  className="appearance-none hidden"
                />
                <div className="mt-1 flex items-baseline justify-center">
                  <i className="icon-video-play text-base mr-2"></i>{" "}
                  <span className="input-titel pt-1">Upload videos</span>
                </div>
              </label>
            </div>
            <div className="media-upload-holder">
              <span className="input-titel">Uploaded videos</span>
              <div className="flex space-x-2.5">
                <div className="upload-box">
                  <div className="rounded relative overflow-hidden">
                    <img src={uploadOne} alt="upload-1" />
                    <button>Remove</button>
                  </div>
                </div>
                <div className="upload-box">
                  <div className="rounded relative overflow-hidden">
                    <img src={uploadOne} alt="upload-1" />
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full inline-block">
              <a href="#" className="float-right btn-primary small leading-10">
                Buy Space
              </a>
              <span className="float-left input-titel text-sm lg:leading-10">
                Disclaimer - These images and videos will first be verified by
                the admin and then given the authority.
              </span>
            </div>
          </div>
          {/* <!-- advisement --> */}
          <Advertisement/>
        </div>
        <div className="prw-next-btn">
          <button type="button" className="flex items-center">
            <i className="icon-back-arrow mr-3"></i>
            <h3>Back</h3>
          </button>
          <button type="button" className="flex items-center active">
            <h3>Next</h3>
            <i className="icon-next-arrow ml-3"></i>
          </button>
        </div>
      </div>
	  <div>
	  <Modal isOpen={isUploadPhotoPopUpOpen}>
		<PSBPopUpUploadPhoto handleClose={setIsUploadPhotoPopUpOpen}/>
	 </Modal>
	 <Modal isOpen={isUploadVideoPopUpOpen}>
		<PSBPopUpUploadVideo handleClose={setIsUploadVideoPopUpOpen}/>
	</Modal>
	  </div>
    </div>
  );
}

export default PSBPhotosAndVideos;
