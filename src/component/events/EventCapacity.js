import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { addCapacity } from '../../redux/createEvent';

function EventCapacity() {
  const navigate = useNavigate();
	const dispatch = useDispatch();

  const [type, setType] = useState();
  
	const initialState = {
		personCapacity: "",
    parkingCapacity: "",
    aboutPlace: "",
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

	const clickNextHandler = () => {
		dispatch(addCapacity({capacity: {...values,type: type}}));
		navigate("/dashboard/event/companydetails");
	}

  return (
		//   <!-- Content In -->
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
                <div className="flex items-end -mx-3.5">
                  <div className="w-full lg:w-1/3 px-3.5">
                      <label htmlfor="selact" className="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                        <input type="radio" name="type" id="select" className="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer" onChange={(e) => setType(1)}/>
                        <h3 className="text-base">Romantic Stay</h3>
                      </label>
                  </div>
                  <div className="w-full lg:w-1/3 px-3.5">
                      <label htmlfor="selact1" className="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                        <input type="radio" name="type" id="select1" className="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer" onChange={(e) => setType(2)} />
                        <h3 className="text-base">Romantic Lunch / Dinner</h3>
                      </label>
                  </div>
                  <div className="w-full lg:w-1/3 px-3.5">
                    <label htmlfor="selact2" className="p-5 py-4 bg-white rounded-md flex space-x-3 cursor-pointer">
                      <input type="radio" name="type" id="select2" className="w-6 h-6 rounded-full bg-brightGray appearance-none cursor-pointer" onChange={(e) => setType(3)} />
                      <h3 className="text-base">Romantic Candlelight Dinner</h3>
                    </label>
                  </div>
                </div>
                <div className="w-full inputHolder">
                    <span className="input-titel">person capacity</span>
                    <input type="text" className="input font-bold" name="personCapacity" value={values.personCapacity} onChange={handleInputChange} />
                </div>
                <div className="w-full inputHolder">
                    <span className="input-titel">Parking Capacity</span>
                    <input type="text" className="input font-bold" name="parkingCapacity" value={values.parkingCapacity} onChange={handleInputChange} />
                </div>
                <div className="w-full relative">
                    <span className="input-titel">About place</span>
                    <div className="w-full flex flex-wrap bg-white p-2 rounded-md">
                      <textarea id="" cols="30" rows="5" className="outline-none w-full" name="aboutPlace" value={values.aboutPlace} onChange={handleInputChange} ></textarea>
                      <Link to="/" className="title-btn ml-auto uppercase">Location from Google map</Link>
                    </div>                    
                </div>
              </div>
              {/* <!-- advisement --> */}
              <Advertisement />
            </div>
            <div className="prw-next-btn">
              <button type="button" className="flex items-center" onClick={() => navigate(-1)}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
              <button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
            </div>
          </div>
        </div>
  )
}

export default EventCapacity