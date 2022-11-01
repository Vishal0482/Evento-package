import React, { useEffect, useState } from "react";
import logoImage from "../assest/svg/logo.svg";
import userImage from "../assest/images/user-2.png";
import Modal from "./modal/Modal.js"
import { Link, useNavigate } from "react-router-dom";
import LanguagePopup from "./other/modal/LanguagePopup"

function SideBar({children}) {
  
  const [languagePopup, setLanguagePopup] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("Token") || null;
  console.log(token);

  useEffect(()=>{
    if(token == null) return navigate("/login")
  },[])

  return (
    <div className="main flex min-h-screen">
      {/* <!-- Left Panel --> */}
      <div className="leftPanel max-w-[230px] w-full bg-white shadow-md relative z-30">
        <div className="logo text-center px-4 pt-5 pb-8">
          <Link to="/" className="block">
            <img
              src={ logoImage } 
              alt="Evento Package Logo"
              className="max-w-full w-auto mx-auto"
            />
          </Link>
        </div>
        <div className="nav">
          <Link to="/" className="active" title="Dashboard">
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
          <Link to="/" className="" title="Refer & Earn">
            <span>
              <i className="w-6 block text-center text-lg icon-refer"></i>
            </span>
            <span>Refer & Earn</span>
          </Link>
          <Link to="/" className="" title="Redeem">
            <span>
              <i className="w-6 block text-center text-lg icon-redem"></i>
            </span>
            <span>Redeem</span>
          </Link>
          <Link to="/" className="" title="Help & FAQ">
            <span>
              <i className="w-6 block text-center text-lg icon-help"></i>
            </span>
            <span>Help & FAQ</span>
          </Link>
          <Link to="/" className="" title="Gallery">
            <span>
              <i className="w-6 block text-center text-lg icon-gallery"></i>
            </span>
            <span>Gallery</span>
          </Link>
          <Link to="/" className="" title="Festum Evento">
            <span>
              <i className="w-6 block text-center text-lg icon-f-evanto"></i>
            </span>
            <span>Festum Evento</span>
          </Link>
          <Link to="/" className="" title="Booking">
            <span>
              <i className="w-6 block text-center text-lg icon-booking"></i>
            </span>
            <span>Booking</span>
          </Link>
          <Link to="/" className="" title="Invoice">
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
        </div>
      </div>
      {/* <!-- Content --> */}
      <div className="w-full">
        {/* <!-- Top Header --> */}
        <div className="w-full bg-white py-3.5 px-6 xl:px-12 flex flex-wrap items-center shadow-sm">
          {/* <!-- Search Box --> */}
          <form className="w-72 relative bg-brightGray rounded-md flex items-center">
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
          </form>

          {/* <!-- Right Bar --> */}
          <div className="ml-auto">
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="block hover:text-spiroDiscoBall anim"
                title="Language"
                onClick={() => setLanguagePopup(true) }
              >
                <span className="icon-language text-2xl block"></span>
              </a>
              <a
                href="#"
                className="block hover:text-spiroDiscoBall anim"
                title="Massage"
              >
                <span className="icon-massage text-2xl block"></span>
              </a>
              <a
                href="#"
                className="block hover:text-spiroDiscoBall anim"
                title="Megaphone"
              >
                <span className="icon-megaphone text-2xl block"></span>
              </a>
              <Link to="/" className="block">
                <img
                  src={ userImage }
                  alt="user name"
                  className="w-12 h-12 object-cover rounded-2xl"
                />
              </Link>
            </div>
          </div>
        </div>
        <Modal isOpen={languagePopup}>
          <LanguagePopup handleClose={setLanguagePopup} />
        </Modal>
        {/* <!-- Content In --> */}
        <div className="rightInContent">
            {children}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
