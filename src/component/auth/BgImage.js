import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from "../../assest/images/landing-page/bg-1.png";
import logo from "../../assest/svg/logo.svg";

function BgImage() {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full relative lg:w-1/2 hidden lg:block">
            <img src={bgImage} alt="login-bg" className="absolute inset-0 w-full h-full object-cover" />
            <div className="bg-white p-5 w-36 h-36 xl:w-48 xl:h-48 relative ml-36 flex">
                <img src={logo} alt="evanto-logo" className="m-auto" onClick={() => navigate("/")} />
            </div>
        </div>
    )
}

export default BgImage;
