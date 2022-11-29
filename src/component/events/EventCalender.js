import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { decrement, reset } from '../../redux/stepProgressCount';
import { useDispatch } from 'react-redux';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState } from 'react';

function EventCalender() {
	const displayName = localStorage.getItem("displayName");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const eventType = params.eventType;
	const [startDate, setStartDate] = useState(null);
	console.log(startDate);

	const setDate = (e) => {
		const date = e.target.value.split("-");
		console.log(new Date(date[0], date[1], date[2]));
	}

	const clickNextHandler = () => {
    	dispatch(reset());
		navigate("../../");
	}

  const clickBackHander = () => {
		dispatch(decrement());
		navigate(-1);
	}

	const generateRandomColor = () =>{
		let maxVal = 0xFFFFFF; // 16777215
		let randomNumber = Math.random() * maxVal; 
		randomNumber = Math.floor(randomNumber);
		randomNumber = randomNumber.toString(16);
		let randColor = randomNumber.padStart(6, 0);   
		return `#${randColor.toUpperCase()}`
	}
	
  return (
	    // <!-- Content In -->
		<div>
		<div className="wrapper">
		  
		  <div className="space-y-8">
			{/* <!-- title-holder  --> */}
			<div className="flex justify-between items-center">
			  <div className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>{displayName}</h1></div>
			</div>
			{/* <!-- step-progress-bar  --> */}
			<StepProgressBar eventType={eventType} />
			{/* <!-- main-content  --> */}
			<div className="space-y-5">
			  <div className="flex items-end -mx-3.5">
				<div className="w-full lg:w-1/3 px-3.5">
				  <h3 className="pb-2">Start Date &Time</h3>
				  <label className="bg-white rounded-md flex space-x-3 relative">
					<i className="icon-date-time flex items-center pl-5 absolute left-0 inset-y-0"></i>
					<input type="date" onChange={setDate} className="w-full rounded-md outline-none appearance-none pl-10 py-4"/>
				  </label>
				</div>
				<div className="w-full lg:w-1/3 px-3.5">
				  <h3 className="pb-2">End Date &Time</h3>
				  <label className="bg-white rounded-md flex space-x-3 relative">
					<i className="icon-date-time flex items-center pl-5 absolute left-0 inset-y-0"></i>
					<input type="date" className="w-full rounded-md outline-none appearance-none pl-10 py-4"/>
				  </label>
				</div>
				<div className="w-full lg:w-1/3 px-3.5">
				  <h3 className="pb-2">Months</h3>
				  <select className="bg-white rounded-md flex space-x-3 outline-0 px-6 py-4 relative arrow">
					<option></option>
					<option></option>
					<option></option>
				  </select>
				</div>
				<div className="w-full lg:w-1/3 px-3.5">
				  <h3 className="pb-2">Years</h3>
				  <select className="bg-white rounded-md flex space-x-3 outline-0 px-6 py-4 relative arrow">
					<option></option>
					<option></option>
					<option></option>
				  </select>
				</div>
			  </div>
			  {/* <!-- calendar --> */}
			  {/* <div className="calendar inline-block justify-center items-center rounded-md drop-shadow-one bg-white w-full px-12 py-7">
				
				<div className="days grid grid-cols-7 justify-center items-center text-center py-4 font-semibold">
				  <span>Sunday</span><span>Monday</span><span>Tuesday</span><span>Wednesday</span><span>Thursday</span><span>Friday</span><span>Saturday</span>
				</div>
				<div className="dates flex flex-wrap rounded-md overflow-hidden border border-gray-200">
				  <div className="calender_number" style={{color: "#B8B8B8"}}>30</div>
				  <div className="calender_number" style={{color: "#B8B8B8"}}>31</div>
				  <div className="calender_number">1</div>
				  <div className="calender_number">2</div>
				  <div className="calender_number">3</div>
				  <div className="calender_number">4</div>
				  <div className="calender_number">5</div>
				  <div className="calender_number">6</div>
				  <div className="calender_number">7</div>
				  <div className="calender_number">8</div>
				  <div className="calender_number">9</div>
				  <div className="calender_number">10</div>
				  <div className="calender_number">11</div>
				  <div className="calender_number">12</div>
				  <div className="calender_number">13</div>
				  <div className="calender_number">14</div>
				  <div className="calender_number">15</div>
				  <div className="calender_number">16</div>
				  <div className="calender_select_number calender_number">
					17
					<ul>
					  <li><span><svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.0791 0C1.3916 0 1.64876 0.100911 1.85059 0.302734C2.05566 0.504557 2.1582 0.761719 2.1582 1.07422C2.1582 1.38672 2.05566 1.64551 1.85059 1.85059C1.64876 2.05566 1.3916 2.1582 1.0791 2.1582C0.766602 2.1582 0.507812 2.05566 0.302734 1.85059C0.100911 1.64551 0 1.38672 0 1.07422C0 0.761719 0.100911 0.504557 0.302734 0.302734C0.507812 0.100911 0.766602 0 1.0791 0Z" fill="#2E363F"/> </svg></span>Lorem ipsum <i className="icon-dark-fill-time"></i> 08:45 AM</li>
					  <li><span><svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.0791 0C1.3916 0 1.64876 0.100911 1.85059 0.302734C2.05566 0.504557 2.1582 0.761719 2.1582 1.07422C2.1582 1.38672 2.05566 1.64551 1.85059 1.85059C1.64876 2.05566 1.3916 2.1582 1.0791 2.1582C0.766602 2.1582 0.507812 2.05566 0.302734 1.85059C0.100911 1.64551 0 1.38672 0 1.07422C0 0.761719 0.100911 0.504557 0.302734 0.302734C0.507812 0.100911 0.766602 0 1.0791 0Z" fill="#2E363F"/> </svg></span>Lorem ipsum <i className="icon-dark-fill-time"></i> 08:45 AM</li>
					</ul>
				  </div>
				  <div className="calender_number">18</div>
				  <div className="calender_number">19</div>
				  <div className="calender_number">20<time/></div>
				  <div className="calender_number">21</div>
				  <div className="calender_number">22</div>
				  <div className="calender_number">23</div>
				  <div className="calender_number">24</div>
				  <div className="calender_number">25</div>
				  <div className="calender_number">26</div>
				  <div className="calender_number">27</div>
				  <div className="calender_number">28</div>
				  <div className="calender_number">29</div>
				  <div className="calender_number">30</div>
				  <div className="calender_number">31</div>
				  <div className="calender_select_number calender_number">
					1
					<ul>
					  <li><span><svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.0791 0C1.3916 0 1.64876 0.100911 1.85059 0.302734C2.05566 0.504557 2.1582 0.761719 2.1582 1.07422C2.1582 1.38672 2.05566 1.64551 1.85059 1.85059C1.64876 2.05566 1.3916 2.1582 1.0791 2.1582C0.766602 2.1582 0.507812 2.05566 0.302734 1.85059C0.100911 1.64551 0 1.38672 0 1.07422C0 0.761719 0.100911 0.504557 0.302734 0.302734C0.507812 0.100911 0.766602 0 1.0791 0Z" fill="#2E363F"/> </svg></span>Lorem ipsum <i className="icon-dark-fill-time"></i> 08:45 AM</li>
					  <li><span><svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.0791 0C1.3916 0 1.64876 0.100911 1.85059 0.302734C2.05566 0.504557 2.1582 0.761719 2.1582 1.07422C2.1582 1.38672 2.05566 1.64551 1.85059 1.85059C1.64876 2.05566 1.3916 2.1582 1.0791 2.1582C0.766602 2.1582 0.507812 2.05566 0.302734 1.85059C0.100911 1.64551 0 1.38672 0 1.07422C0 0.761719 0.100911 0.504557 0.302734 0.302734C0.507812 0.100911 0.766602 0 1.0791 0Z" fill="#2E363F"/> </svg></span>Lorem ipsum <i className="icon-dark-fill-time"></i> 08:45 AM</li>
					</ul>
				  </div>
				  <div className="calender_number" style={{color: "#B8B8B8"}}>2</div>
				  <div className="calender_number" style={{color: "#B8B8B8"}}>3</div>
				  <div className="calender_number" style={{color: "#B8B8B8"}}>4</div>
				  <div className="calender_number" style={{color: "#B8B8B8"}}>5</div>
				  <div className="calender_number" style={{color: "#B8B8B8"}}>6</div>
				  <div className="calender_number" style={{color: "#B8B8B8"}}>7</div>
				  <div className="calender_number" style={{color: "#B8B8B8"}}>8</div>
				  <div className="calender_number" style={{color: "#B8B8B8"}}>9</div>
				</div>
			  </div> */}
				<div className="calendar inline-block justify-center items-center rounded-md drop-shadow-one bg-white w-full px-12 py-7">
					<FullCalendar
						plugins={[dayGridPlugin]}
						initialView="dayGridMonth"
						events={[
							{ title: 'event 1',  start: new Date("November 13, 2022 3:20:00"), end: new Date("November 16, 2022 16:20:00"), color: generateRandomColor() },
							{ title: 'event 2',  start: new Date("November 13, 2022 5:20:00"), end: new Date("November 16, 2022 16:20:00"), color: generateRandomColor() }
						  ]}
						
					/>
				</div>
			  {/* <!-- calendar end --> */}
			  <Advertisement />
			  <div className="prw-next-btn">
				<button type="button" className="flex items-center" onClick={clickBackHander}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
				<button className="btn-primary" onClick={clickNextHandler}>Done</button>
			  </div>
			</div>
		</div>
	  </div>
	  </div>
  )
}

export default EventCalender