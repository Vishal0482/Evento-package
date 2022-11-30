import React, { useEffect, useState } from "react";
import logoImage from "../assest/svg/logo.svg";
import userImage from "../assest/images/user-2.png";
import Modal from "./modal/Modal.js"
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import LanguagePopup from "./other/modal/LanguagePopup"
import SelectWhoYouAre from "./events/SelectWhoYouAre";
import DashboardEvent from "./events/DashboardEvent";
import EventCalender from "./events/EventCalender";
import EventAddPlaces from "./events/EventAddPlaces";
import EventAboutPlace from "./events/EventAboutPlace";
import EventPersonalDetails from "./events/EventPersonalDetails";
import EventPhotosAndVideos from "./events/EventPhotosAndVideos";
import EventAddServices from "./events/EventAddServices";
import EventCapacity from "./events/EventCapacity";
import EventCompanyDetails from "./events/EventCompanyDetails";
import EventTermsAndConditions from "./events/EventTermsAndConditions";
import EventDiscounts from "./events/EventDiscounts";
import DashboardEventView from "./event-view/DashboardEventView";
import PSBOtherCost from "./personal_skills_business/PSBOtherCost";

import Gallery from "./other/Gallery";
import ReferToEarn from "./other/ReferToEarn";
import RedeemCoin from "./other/RedeemCoin";
import Booking from "./other/Booking";
import Invoice from "./other/Invoice";
import FAQ from "./other/FAQ";
import Chatbot from "./other/Chatbot";
import Notification from "./Notification/Notification";
import Profile from "./other/Profile";
import { toast, ToastContainer } from "react-toastify";
import OurProducts from "./other/OurProducts";

function SideBar() {

  const [languagePopup, setLanguagePopup] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("Token") || null;
	const header = {
		'Authorization': `Token ${token}`
	}

  useEffect(() => {
    if (token == null) return navigate("../auth/login")
  }, []);

  const handleLogout = async () => {
    // try {
				// const response = await axios.post(`${baseUrl}/api/logout`, {}, {headers: header});
				// console.log("Logout",response);
      // } catch (error) {
        // console.log(error);
        // toast.error("something Went wrong.");
      // }
      toast.success("Logout successfully.")
    setTimeout(() => {
      navigate("../auth/login");
    }, 500);
      localStorage.clear();
  }

  return (
    <div className="main flex min-h-screen">
      {/* <!-- Left Panel --> */}
      <div className="leftPanel max-w-[230px] w-full bg-white shadow-md relative z-30">
        <div className="logo text-center px-4 pt-5 pb-8">
          <Link to="/" className="block">
            <img
              src={logoImage}
              alt="Evento Package Logo"
              className="max-w-full w-auto mx-auto"
            />
          </Link>
        </div>
        <div className="nav">
          <Link to="../dashboard" className="active" title="Dashboard">
            <span>
              <i className="w-6 block text-center text-lg icon-deshbord"></i>
            </span>
            <span>Dashboard</span>
          </Link>
          <Link to="/" className="" title="Subscription">
            <span>
              <i className="w-6 block text-center text-lg icon-subsciption"></i>
            </span>
            <span>Subscription</span>
          </Link>
          <Link to="refer-to-earn" className="" title="Refer & Earn">
            <span>
              <i className="w-6 block text-center text-lg icon-refer"></i>
            </span>
            <span>Refer & Earn</span>
          </Link>
          <Link to="redeem" className="" title="Redeem">
            <span>
              <i className="w-6 block text-center text-lg icon-redem"></i>
            </span>
            <span>Redeem</span>
          </Link>
          <Link to="gallery" className="" title="Gallery">
            <span>
              <i className="w-6 block text-center text-lg icon-gallery"></i>
            </span>
            <span>Gallery</span>
          </Link>
          <a href="https://www.festumevento.com" target="_blank" className="" title="Festum Evento">
            <span>
              <i className="w-6 block text-center text-lg icon-f-evanto"></i>
            </span>
            <span>Festum Evento</span>
          </a>
          <Link to="booking" className="" title="Booking">
            <span>
              <i className="w-6 block text-center text-lg icon-booking"></i>
            </span>
            <span>Booking</span>
          </Link>
          <Link to="invoice" className="" title="Invoice">
            <span>
              <i className="w-6 block text-center text-lg icon-invoice"></i>
            </span>
            <span>Invoice</span>
          </Link>
          <Link to="/" className="" title="Membership">
            <span>
              <i className="w-6 block text-center text-lg icon-membership"></i>
            </span>
            <span>Membership</span>
          </Link>
          <Link to="our-products" className="" title="Our Products">
            <span>
              <i className="w-6 block text-center text-lg icon-our-product"></i>
            </span>
            <span>Our Products</span>
          </Link>
          <Link to="/" className="" title="Gift">
            <span>
              <i className="w-6 block text-center text-lg icon-refer"></i>
            </span>
            <span>Gift</span>
          </Link>
          <Link to="faq" className="" title="Help & FAQ">
            <span>
              <i className="w-6 block text-center text-lg icon-help"></i>
            </span>
            <span>Help & FAQ</span>
          </Link>
        </div>
      </div>
      {/* <!-- Content --> */}
      <div className="w-full">
        {/* <!-- Top Header --> */}
        <div className="w-full bg-white py-3.5 px-6 xl:px-12 flex flex-wrap items-center shadow-sm">
          {/* <!-- Search Box --> */}
          <div className="w-72 relative bg-brightGray rounded-md flex items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="w-full h-10 bg-transparent text-sm font-bold pl-3.5 focus:outline-none"
            />
            <button type="submit" className="p-3.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.80624 7.7457C9.39675 6.93931 9.74996 5.9488 9.74996 4.87502C9.74996 2.18703 7.56294 0 4.87497 0C2.18699 0 0 2.18703 0 4.87502C0 7.56301 2.18701 9.75004 4.87499 9.75004C5.94877 9.75004 6.93936 9.39678 7.74575 8.80627L10.9395 12L12 10.9395C12 10.9394 8.80624 7.7457 8.80624 7.7457ZM4.87499 8.25002C3.01391 8.25002 1.50001 6.73611 1.50001 4.87502C1.50001 3.01393 3.01391 1.50001 4.87499 1.50001C6.73607 1.50001 8.24997 3.01393 8.24997 4.87502C8.24997 6.73611 6.73605 8.25002 4.87499 8.25002Z"
                  fill="#9BA0A8"
                />
              </svg>
            </button>
          </div>

          {/* <!-- Right Bar --> */}
          <div className="ml-auto">
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="block hover:text-spiroDiscoBall anim"
                title="Language"
                onClick={() => setLanguagePopup(true)}
              >
                <span className="icon-language text-2xl block"></span>
              </a>
              <Link
                to="chatbot"
                className="block hover:text-spiroDiscoBall anim"
                title="Massage"
              >
                <span className="icon-massage text-2xl block"></span>
              </Link>
              <Link
                to="notification"
                className="block hover:text-spiroDiscoBall anim"
                title="Megaphone"
              >
                <span className="icon-megaphone text-2xl block"></span>
              </Link>
              <div className="block por">
                <img
                  src={userImage}
                  alt="user name"
                  className="w-12 h-12 object-cover rounded-2xl relative"
                />
                <div className="dropprofile absolute pt-2.5 right-12 translate-y-5 opacity-0 anim invisible ">
                  <div className="profile-dropdown border-[#eee] border rounded bg-white relative px-2.5 py-[15px]">
                    <Link to="profile" className="text-xs flex items-center hover:text-spiroDiscoBall cursor-pointer mb-4">
                      <i className="w-6 block text-center text-lg icon-user mr-4"></i>
                      <span className="font-bold font-primary leading-4">View Profile</span>
                    </Link>
                    <div className="text-xs flex items-center cursor-pointer text-[#FE4D5F]" onClick={handleLogout}>
                      <i className="w-6 block text-center text-lg icon-logout mr-4"></i>
                      <span className="font-bold font-primary leading-4">Sign Out</span>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={languagePopup}>
          <LanguagePopup handleClose={setLanguagePopup} />
        </Modal>
        {/* <!-- Content In --> */}
        <div className="rightInContent">
          <Routes>
            <Route index element={<SelectWhoYouAre />} />
            <Route path="event">
              <Route path="event-view/:eventId" element={<DashboardEventView /> } />
              <Route path=":eventType" >
                <Route index element={<DashboardEvent />} />
                  {/* <Route path=":eventId"> */}
                    <Route path="addplaces" element={<EventAddPlaces />} />
                    <Route path="aboutplace" element={<EventAboutPlace />} />
                    <Route path="personaldetails" element={<EventPersonalDetails />} />
                    <Route path="photosandvideos" element={<EventPhotosAndVideos />} />
                    <Route path="addservices" element={<EventAddServices />} />
                    <Route path="capacity" element={<EventCapacity />} />
                    <Route path="companydetails" element={<EventCompanyDetails />} />
                    <Route path="termsandconditions" element={<EventTermsAndConditions />} />
                    <Route path="discounts" element={<EventDiscounts />} />
                    <Route path="calender" element={<EventCalender />} />
                    <Route path="othercost" element={<PSBOtherCost />} />
                    <Route path="additem" element={<EventAddServices />} />
                  {/* </Route> */}

                {/* <Route path="addplaces/:eventId/:placeId" element={<EventAddPlaces />} />
                <Route path="aboutplace/:eventId/:placeId" element={<EventAboutPlace />} />
                <Route path="personaldetails/:eventId/:userId" element={<EventPersonalDetails />} />
                <Route path="photosandvideos/:eventId/:userId" element={<EventPhotosAndVideos />} />
                <Route path="addservices/:eventId/:userId" element={<EventAddServices />} />
                <Route path="capacity/:eventId/:userId" element={<EventCapacity />} />
                <Route path="companydetails/:eventId/:userId" element={<EventCompanyDetails />} />
                <Route path="termsandconditions/:eventId/:userId" element={<EventTermsAndConditions />} />
                <Route path="discounts/:eventId/:userId" element={<EventDiscounts />} />
                <Route path="calender/:eventId/:userId" element={<EventCalender />} />
                
                <Route path="othercost/:eventId/:userId" element={<PSBOtherCost />} />
                <Route path="additem/:eventId/:userId" element={<AddItem />} /> */}
              </Route>
            </Route>

            {/* Side bar links */}
            <Route path="profile" element={<Profile />} />
            <Route path="refer-to-earn" element={<ReferToEarn />} />
            <Route path="redeem" element={<RedeemCoin />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="booking" element={<Booking />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="our-products" element={<OurProducts />} />

            {/* header link */}
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="notification" element={<Notification />} />

          </Routes>
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
  );
}

export default SideBar;
