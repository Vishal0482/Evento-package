import React, { useState } from "react";
import Advertisement from "../Advertisement";
import Modal from "../../component/modal/Modal";
import PSBPopUpAddSkill from "./popups/PSBPopUpAddSkill";
import { Link } from "react-router-dom";

function PSBSelectSkill() {
  const [isAddSkillPopUpOpen, setIsAddSkillPopUpOpen] = useState(false);
  return (
    // <!-- Content In -->
    <div className="rightInContent">
      <div className="wrapper min-h-full flex flex-col">
        <div className="space-y-8 h-full">
          {/* <!-- title-holder  --> */}
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <i className="icon-back-arrow mr-4 text-2xl"></i>
              <h1>Personal Skill Business</h1>
            </Link>
            <button onClick={()=>setIsAddSkillPopUpOpen(true)} className="btn-primary">
              <i className="icon-plus mr-3"></i>Add New
            </button>
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
            <div className="w-full inputHolder">
              <label className="input-titel">Personal Skill</label>
              <select className="w-full arrow option">
                <option>Sounds and Lights</option>
                <option>Sounds and Lights</option>
                <option>Sounds and Lights</option>
              </select>
            </div>
          </div>
          {/* <!-- advisement --> */}
          <Advertisement />
        </div>
        <div className="prw-next-btn mt-auto">
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
      <Modal isOpen={isAddSkillPopUpOpen}>
        <PSBPopUpAddSkill handleClose={setIsAddSkillPopUpOpen} />
      </Modal>
    </div>
  );
}

export default PSBSelectSkill;
