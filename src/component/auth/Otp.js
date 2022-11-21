import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BgImage from "./BgImage";
import { toast, ToastContainer } from "react-toastify";
import { baseUrl } from "../../config";
import axios from "axios";

function Otp() {
  const params = useParams();
  const username = params.username;
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState(["0", "0", "0", "0"]);

  function keyPressHandler(e) {

    let currentElementId = parseInt(e.target.id.slice(6));
    if(currentElementId==1) return;
    if (e.key === 'Backspace') {
        document.getElementById(`digit-${currentElementId}`).placeholder ="";
        document.getElementById(`digit-${currentElementId-1}`).placeholder ="";
        document.getElementById(`digit-${currentElementId - 1}`).focus();
    }

  }

  function onOtpInputHandler(e) {
    let currentElementId = parseInt(e.target.id.slice(6));
    document.getElementById(`digit-${currentElementId}`).placeholder = e.target.value;
    let temp = otpValue;
    temp[currentElementId - 1] = e.target.value;
    setOtpValue(temp);
    if(currentElementId==4) return;
    document.getElementById(`digit-${currentElementId + 1}`).focus();
  }

  const reSendOtp = async() => {
    // logic htmlFor sending otp
    toast.success("Otp sent successfully.");
  }

  const verifiyCode = async(e) => {
    e.preventDefault();
    let fullOtp = otpValue[0] + otpValue[1] + otpValue[2] + otpValue[3];
    // login verify otp
    try {
      if (fullOtp != "0000") {
        const response = await axios.post(`${baseUrl}/api/register/organizer`,JSON.parse("register"));
        if(response.data.isSuccess) {
          toast.success("Otp Verified successfully.");
          navigate(`../login`);
        }
      }
    } catch (error) {
      toast.warn("Please Enter Valid Otp.");
      console.log(error);
    }
  }
  

  return (
    <div className="flex min-h-screen">
    <div className="flex w-full flex-wrap bg-white">
      <BgImage />
      <div className="w-full relative lg:w-1/2 flex px-4">
        <div className="max-w-md w-full m-auto">
          <h1 className="whitespace-nowrap">Enter OTP</h1>
          <p className="sm:text-lg xl:text-xl text-quicksilver font-normal sm:pt-3.5 xl:pr-8">Please enter the 4 Digit code sent to</p>
          <div className="flex justify-between sm:mt-1">
            <div className="block font-bold text-japaneseIndigo text-base sm:text-lg xl:text-xl">{username}</div>
            <div onClick={() => navigate(-1)} className="cursor-pointer" ><span className="text-caribbeanGreen font-semibold text-base sm:text-lg xl:text-xl">Change?</span></div>
          </div>
          <div className="w-full pt-7 sm:pt-10">
            <form className="space-y-5 relative" id="codeverifyForm">    
              <span className="absolute -top-5 left-0 text-sm text-quicksilver block">Enter OTP</span>
              <div className="flex items-center justify-center space-x-3 sm:space-x-6 py-2">                  
                <input id="digit-1"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[0]} 
                      className="caret-transparent w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] bg-brightGray text-4xl sm:text-6xl font-bold text-chatlook-dark text-center rounded-[5px] placeholder:text-4xl placeholder:sm:text-6xl placeholder:leading-5 placeholder:font-bold otp" maxlength="1"/>
                <input id="digit-2"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[1]} 
                      className="caret-transparent w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] bg-brightGray text-4xl sm:text-6xl font-bold text-chatlook-dark text-center rounded-[5px] placeholder:text-4xl placeholder:sm:text-6xl placeholder:leading-5 placeholder:font-bold otp" maxlength="1"  /> 
                <input id="digit-3"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[2]}
                      className="caret-transparent w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] bg-brightGray text-4xl sm:text-6xl font-bold text-chatlook-dark text-center rounded-[5px] placeholder:text-4xl placeholder:sm:text-6xl placeholder:leading-5 placeholder:font-bold otp" maxlength="1" />
                <input id="digit-4"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[3]} 
                      className="caret-transparent w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] bg-brightGray text-4xl sm:text-6xl font-bold text-chatlook-dark text-center rounded-[5px] placeholder:text-4xl placeholder:sm:text-6xl placeholder:leading-5 placeholder:font-bold otp" maxlength="1" />
              </div>            
              <button onClick={verifiyCode} className="btn-primary w-full py-[15px] uppercase">Verified code</button>
              <div onClick={reSendOtp} className="cursor-pointer block font-bold text-japaneseIndigo text-xs xl:text-sm text-center">Not Get? Re-send</div>
            </form>
          </div>
        </div>
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

export default Otp;
