import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Advertisement from "../Advertisement";
import { useDispatch } from 'react-redux';
import StepProgressBar from "../events/StepProgressBar";
import { toast } from "react-toastify";
import { decrement, increment } from "../../redux/stepProgressCount";
import axios from "axios";
import { baseUrl } from "../../config";
import { useEffect } from "react";

function PSBOtherCost() {
  const displayName = localStorage.getItem("displayName");
  const navigate = useNavigate();
	const params = useParams();
	const eventType = params.eventType;
	const eventId = params.eventId;
	const dispatch = useDispatch(); 
  const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}

  const [travelCost, setTravelCost] = useState("");
  const [travelCostOn, setTravelCostOn] = useState(false);  
  const [accommodation, setAccommodation] = useState("");
  const [accommodationOn, setAccommodationOn] = useState(false);  
  const [food, setFood] = useState("");
  const [foodOn, setFoodOn] = useState(false);

  const clickNextHandler = async () => {
    const reqObj = {
      eventid: eventId,
      othercost: [
        {
          travel_cost: travelCostOn,
          details: travelCost
        },
        {
          accommodation: accommodationOn,
          details: accommodation
        },
        {
          food: foodOn,
          details: food
        }
      ]
    }
    console.log(reqObj)
    try {
      const response = await axios.post(`${baseUrl}/organizer/events/othercost`, reqObj, { headers: header });
      if (response.data.IsSuccess) {
        toast.success(response.data.Message);
        dispatch(increment());
        navigate(`../companydetails`);
      } else {
        toast.error(response.data.Message);
      }
    } catch (error) {
      toast.error("Something Went Wrong.")
      console.log(error);
    }
  };

	const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	}


  const getOtherCost = async() => {
		try {
			const response = await axios.get(`${baseUrl}/organizer/events/othercost?eventid=${eventId}`, {headers: header});
			if(response.data.Data.othercost){
        console.log(response.data);
        setTravelCost(response.data.Data.othercost[0]?.details)
        setTravelCostOn(response.data.Data.othercost[0]?.travel_cost);
        setAccommodation(response.data.Data.othercost[1]?.details);
        setAccommodationOn(response.data.Data.othercost[1]?.accommodation);
        setFood(response.data.Data.othercost[2]?.details);
        setFoodOn(response.data.Data.othercost[2]?.food);
			}
			if(!response.data.IsSuccess) {
				toast.error("Error occured while fetching data.")
			}
		} catch (error) {
			console.log(error);
		}
	}

  useEffect(()=> {
    getOtherCost();
  },[]);

  return (
    <div>
      <div className="wrapper min-h-full flex flex-col">
        <div className="space-y-8 h-full">
          {/* <!-- title-holder  --> */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <i className="icon-back-arrow mr-4 text-2xl"></i>
              <h1>{displayName}</h1>
            </div>
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
                      checked={travelCostOn}
                      onChange={() => setTravelCostOn(!travelCostOn)}
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
                      value={travelCost}
                      onChange={(e) => setTravelCost(e.target.value)}
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
                      checked={accommodationOn}
                      onChange={() => setAccommodationOn(!accommodationOn)}
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
                      value={accommodation}
                      onChange={(e) => setAccommodation(e.target.value)}
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
                      checked={foodOn}
                      onChange={() => setFoodOn(!foodOn)}
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
                      value={food}
                      onChange={(e) => setFood(e.target.value)}
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
