import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from "../../assest/images/landing-page/bg-1.png";
import logo from "../../assest/svg/logo.svg";

function BgImage() {
    return (
        <div className="w-full h-full relative lg:w-1/2 hidden lg:block">
            <img src={bgImage} alt="login-bg" className="absolute inset-0 w-full h-full object-cover" />
            <Link to="/" className="bg-white p-5 w-36 h-36 xl:w-48 xl:h-48 relative ml-36 flex">
                <img src={logo} alt="evanto-logo" className="m-auto" />
            </Link>
        </div>
    )
}

export default BgImage;
