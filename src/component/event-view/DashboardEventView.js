import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dashboardBgImage from "../../assest/images/dashboard-bg.png";
import { baseUrl } from '../../config';
import DashboardEventAttendee from './DashboardEventAttendee';
import DashboardEventReview from './DashboardEventReview';
import DashboardEventViewOverview from './DashboardEventViewOverview';

function DashboardEventView() {
  const [tab,setTab] = useState(1);
  const [event, setEvent] = useState({});
  const navigate = useNavigate();
	const params = useParams();
	const token = localStorage.getItem("Token");
	const eventId = params.eventId;
	const header = {
		'Authorization': `Token ${token}`
	}
	const getEventById = async () => {
		try {
			const response = await axios.get(`${baseUrl}/api/events_get_list/${eventId}`, { headers: header });
			console.log("get event by id >> ", response.data.data);
			setEvent(response.data.data[0]);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getEventById();
	}, []);
  console.log(event)
  return (
    <>
      <div className="-mt-12 relative -z-10">
              <img src={dashboardBgImage} alt="dashboard-bg" className="w-full object-cover"/>
          </div>
          <div className="wrapper min-h-full -mt-14 z-10">
            
            <div className="flex items-center justify-between bg-white py-5 px-7 rounded-md">
                <h2>{event?.display_name}</h2>
                <div className="space-y-4">
                  <div className="flex space-x-6 items-center justify-end">
                    <button type="button" className="py-1 px-2 bg-spiroDiscoBall text-sm font-bold text-white">promotion</button>
                    <button type="button" className="w-8 h-8 bg-brightGray rounded-full flex items-center justify-center"><i className="icon-share text-sm"></i></button>
                  </div>
                  <div className="flex items-center text-base font-semibold text-ufoGreen space-x-1">
                    <a href="#">Romantic Dinner</a>
                    <span>/</span>
                    <a href="#">Lunch</a>
                  </div>
                </div>
            </div>
            {/* <!-- tab-holder  --> */}
            <div className="teb-holder">
                <button type="button" data-tab="overview" className={tab===1 ? "active" : undefined} onClick={()=> setTab(1)}>Overview</button>
                <button type="button" data-tab="attendee" className={tab===2 ? "active" : undefined} onClick={()=> setTab(2)}>Attendee</button>
                <button type="button" data-tab="reviews" className={tab===3 ? "active" : undefined} onClick={()=> setTab(3)}>Reviews</button>
            </div>   
            {/* <!-- tab-contents-holder --> */}
            {tab===1 && <DashboardEventViewOverview data={event} />}
            {tab===2 && <DashboardEventAttendee />}
            {tab===3 && <DashboardEventReview />}
          </div>
    </>
  )
}

export default DashboardEventView;
