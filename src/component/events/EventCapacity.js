import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { decrement, increment } from '../../redux/stepProgressCount';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrl } from '../../config';
import axios from 'axios';

function EventCapacity() {
  const displayName = localStorage.getItem("displayName");
  const navigate = useNavigate();
	const dispatch = useDispatch();
  const params = useParams();
  const eventType = params.eventType;
  const eventId = params.eventId;
  const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}

  const [type, setType] = useState("");
	const initialState = {
		event: eventId,
    person_capacity: "",
    parking_capacity: "",
    address: "",
    let: "",
    long: ""
	}
	const [values, setValues] = useState(initialState);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
		  ...values,
		  [name]: value,
		});
	  };
	console.log(values);

	const clickNextHandler = async() => {
    try {
      const response = await axios.post(`${baseUrl}/api/event/capacity`, {...values, IncludingFacilities: type},{headers: header});
      toast.success("Data Saved Successfully.");  
      dispatch(increment());
      navigate(`../companydetails/${params.eventId}/${params.userId}`);
    } catch (error) {
      toast.error("Something went Wrong.")
      console.log(error);
    }

	}

  const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	}

  return (
		//   <!-- Content In -->
		  <div className="rightInContent">
          <div className="wrapper min-h-full">
            
            <div className="space-y-8 h-full">
              {/* <!-- title-holder  --> */}
              <div className="flex justify-between items-center">
                <div className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>{displayName}</h1></div>
              </div>
              {/* <!-- step-progress-bar  --> */}
              <StepProgressBar eventType={eventType}/>
              {/* <!-- main-content  --> */}
              <div className="space-y-5">
                <div className="flex items-end -mx-3.5">
                  <div className="w-full lg:w-1/3 px-3.5">
                      <label htmlfor="selact" className="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                        <input type="radio" name="type" id="select" className="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer" onChange={(e) => setType("romantic_stay")}/>
                        <h3 className="text-base">Romantic Stay</h3>
                      </label>
                  </div>
                  <div className="w-full lg:w-1/3 px-3.5">
                      <label htmlfor="selact1" className="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                        <input type="radio" name="type" id="select1" className="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer" onChange={(e) => setType('romantic_lunch_dinner')} />
                        <h3 className="text-base">Romantic Lunch / Dinner</h3>
                      </label>
                  </div>
                  <div className="w-full lg:w-1/3 px-3.5">
                    <label htmlfor="selact2" className="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                      <input type="radio" name="type" id="select2" className="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer" onChange={(e) => setType('romantic_candlelight_dinner')} />
                      <h3 className="text-base">Romantic Candlelight Dinner</h3>
                    </label>
                  </div>
                </div>
                <div className="w-full inputHolder">
                    <span className="input-titel">person capacity</span>
                    <input type="text" className="input font-bold" name="person_capacity" value={values.person_capacity} onChange={handleInputChange} />
                </div>
                <div className="w-full inputHolder">
                    <span className="input-titel">Parking Capacity</span>
                    <input type="text" className="input font-bold" name="parking_capacity" value={values.parking_capacity} onChange={handleInputChange} /> 
                </div>
                <div className="w-full relative">
                    <span className="input-titel">Address</span>
                    <div className="w-full flex flex-wrap bg-white p-2 rounded-md">
                      <textarea id="" cols="30" rows="5" className="outline-none w-full" name="address" value={values.address} onChange={handleInputChange} ></textarea>
                      <a href={`https://www.google.com/maps/place/${values.address?.replaceAll(" ","+")}`} target="blank" className="title-btn ml-auto uppercase">Location from Google map</a>
                    </div>                    
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

export default EventCapacity