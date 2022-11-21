import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Advertisement from "../Advertisement";
import { useDispatch } from 'react-redux';
import StepProgressBar from "../events/StepProgressBar";
import { toast } from "react-toastify";
import { decrement, increment } from "../../redux/stepProgressCount";

function PSBOtherCost() {
  const navigate = useNavigate();
	const params = useParams();
	const eventType = params.eventType;
	const dispatch = useDispatch(); 

  const clickNextHandler = () => {
		toast.success("Services saved Successfully.");
		dispatch(increment());
		navigate(`../companydetails/${params.eventId}/${params.userId}`);
	};

	const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	}

  return (
    <div>
      <div className="wrapper min-h-full flex flex-col">
        <div className="space-y-8 h-full">
          {/* <!-- title-holder  --> */}
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <i className="icon-back-arrow mr-4 text-2xl"></i>
              <h1>Personal Skill Business</h1>
            </Link>
          </div>
          {/* <!-- step-progress-bar  --> */}
         <StepProgressBar eventType={eventType} />
          {/* <!-- main-content  --> */}
          <div className="space-y-5 pt-5">
            <div className="flex justify-between items-center space-x-5">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <h3>Travel Cost</h3>
                <div className="bg-white shadow rounded-md mt-5">
                  <div className="flex items-center bg-brightGray px-8 py-3">
                    <input
                      type="checkbox"
                      id="on"
                      className="switch mx-3 order-2"
                    />
                    <span className="off text-base font-bold anim order-1 text-caribbeanGreen">
                      Include
                    </span>
                    <span className="on text-base font-bold anim order-3">
                      Exclude
                    </span>
                  </div>
                  <div className="w-full px-8 py-5">
                    <textarea
                      name=""
                      id=""
                      rows="4"
                      className="outline-none flex items-center w-full bg-white rounded-md resize-none"
                      placeholder="Enter Details..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <h3>Accommodation</h3>
                <div className="bg-white shadow rounded-md mt-5">
                  <div className="flex items-center bg-brightGray px-8 py-3">
                    <input
                      type="checkbox"
                      id="on"
                      className="switch mx-3 order-2"
                    />
                    <span className="off text-base font-bold anim order-1 text-caribbeanGreen">
                      Include
                    </span>
                    <span className="on text-base font-bold anim order-3">
                      Exclude
                    </span>
                  </div>
                  <div className="w-full px-8 py-5">
                    <textarea
                      name=""
                      id=""
                      rows="4"
                      className="outline-none flex items-center w-full bg-white rounded-md resize-none"
                      placeholder="Enter Details..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <h3>Food</h3>
                <div className="bg-white shadow rounded-md mt-5">
                  <div className="flex items-center bg-brightGray px-8 py-3">
                    <input
                      type="checkbox"
                      id="on"
                      className="switch mx-3 order-2"
                    />
                    <span className="off text-base font-bold anim order-1 text-caribbeanGreen">
                      Include
                    </span>
                    <span className="on text-base font-bold anim order-3">
                      Exclude
                    </span>
                  </div>
                  <div className="w-full px-8 py-5">
                    <textarea
                      name=""
                      id=""
                      rows="4"
                      className="outline-none flex items-center w-full bg-white rounded-md resize-none"
                      placeholder="Enter Details..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- advisement --> */}
          <Advertisement />
        </div>
        <div className="prw-next-btn mt-auto">
          <button type="button" className="flex items-center" onClick={clickBackHander}>
            <i className="icon-back-arrow mr-3"></i>
            <h3>Back</h3>
          </button>
          <button type="button" className="flex items-center active" onClick={clickNextHandler}>
            <h3>Next</h3>
            <i className="icon-next-arrow ml-3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PSBOtherCost;
