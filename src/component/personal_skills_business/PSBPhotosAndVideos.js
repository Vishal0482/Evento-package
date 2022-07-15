import React, {useState} from "react";
import Modal from "../modal/Modal";
import Advisement from "../Advisement";
import uploadOne from "../../assest/images/upload-1.png"
import PSBPopUpUploadPhoto from './popups/EventPopUpUploadPhoto'
import PSBPopUpUploadVideo from "./popups/EventPopUpUploadVideo"


function PSBPhotosAndVideos() {

	const [isUploadPhotoPopUpOpen, setIsUploadPhotoPopUpOpen] = useState(false)
	const [isUploadVideoPopUpOpen, setIsUploadVideoPopUpOpen] = useState(false)

  return (
    // <!-- Content In -->
    <div class="rightInContent">
      <div class="wrapper min-h-full">
        <div class="space-y-8 h-full">
          {/* <!-- title-holder  --> */}
          <div class="flex justify-between items-center">
            <a href="#" class="flex items-center">
              <i class="icon-back-arrow mr-4 text-2xl"></i>
              <h1>Personal Skill Business</h1>
            </a>
          </div>
          {/* <!-- step-progress-bar  --> */}
          <div class="w-full overflow-hidden">
            <ul class="flex justify-between step-progress-holder">
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
          <div class="space-y-5">
            <div class="upload-holder">
              <h3 class="flex items-end">
                Photo{" "}
                <span class="input-titel ml-2">5 Images (up to 5MB/Image)</span>
              </h3>
              <label onClick={()=>setIsUploadVideoPopUpOpen(true)} for="upload" class="upload">
                <input
                  name="images"
                  id="upload"
                  class="appearance-none hidden"
                />
                <span class="input-titel mt-1">
                  <i class="icon-image mr-2"></i>Upload Images
                </span>
              </label>
            </div>
            <div class="media-upload-holder">
              <span class="input-titel">Uploaded Photo</span>
              <div class="flex space-x-2.5">
                <div class="upload-box">
                  <div class="rounded relative overflow-hidden">
                    <img src={uploadOne} alt="upload-1" />
                    <button>Remove</button>
                  </div>
                </div>
                <div class="upload-box">
                  <div class="rounded relative overflow-hidden">
                    <img src={uploadOne} alt="upload-1" />
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="upload-holder">
              <h3 class="flex items-end">
                videos{" "}
                <span class="input-titel ml-2">
                  2 videos (up to 512MB/video)
                </span>
              </h3>
              <label onClick={()=>setIsUploadPhotoPopUpOpen(true)} for="upload2" class="upload">
                <input
                  name="images"
                  id="upload2"
                  class="appearance-none hidden"
                />
                <div class="mt-1 flex items-baseline justify-center">
                  <i class="icon-video-play text-base mr-2"></i>{" "}
                  <span class="input-titel pt-1">Upload videos</span>
                </div>
              </label>
            </div>
            <div class="media-upload-holder">
              <span class="input-titel">Uploaded videos</span>
              <div class="flex space-x-2.5">
                <div class="upload-box">
                  <div class="rounded relative overflow-hidden">
                    <img src={uploadOne} alt="upload-1" />
                    <button>Remove</button>
                  </div>
                </div>
                <div class="upload-box">
                  <div class="rounded relative overflow-hidden">
                    <img src={uploadOne} alt="upload-1" />
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full inline-block">
              <a href="#" class="float-right btn-primary small leading-10">
                Buy Space
              </a>
              <span class="float-left input-titel text-sm lg:leading-10">
                Disclaimer - These images and videos will first be verified by
                the admin and then given the authority.
              </span>
            </div>
          </div>
          {/* <!-- advisement --> */}
          <Advisement/>
        </div>
        <div class="prw-next-btn">
          <button type="button" class="flex items-center">
            <i class="icon-back-arrow mr-3"></i>
            <h3>Back</h3>
          </button>
          <button type="button" class="flex items-center active">
            <h3>Next</h3>
            <i class="icon-next-arrow ml-3"></i>
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
