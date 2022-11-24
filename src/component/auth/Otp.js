import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BgImage from "./BgImage";
import { toast, ToastContainer } from "react-toastify";
import { baseUrl, localUrl } from "../../config";
import axios from "axios";

function Otp() {
  const params = useParams();
  const username = params.username;
  const flag = params.flag;
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState(["0", "0", "0", "0", "0" ,"0" ]);
  const otpLength = otpValue.length;

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
    if(currentElementId==otpLength) return;
    document.getElementById(`digit-${currentElementId + 1}`).focus();
  }

  const reSendOtp = async() => {
    try {
      const response = await axios.post(`${baseUrl}/api/sendotp`, {phone_no: "+91"+username});
      console.log(response);
      if(response.data.isSuccess) {
        toast.success(response.data.Message);
      } else {
        toast.error(response.data.Message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Something Went wrong.");
    }
  }

  const verifiyCode = async(e) => {
    e.preventDefault();
    let fullOtp = otpValue[0] + otpValue[1] + otpValue[2] + otpValue[3] + otpValue[4] + otpValue[5];
    console.log(fullOtp);

    const reqobj = {
      phone_no : username,
      key : localStorage.getItem("key"),
      otp : fullOtp
    }
    console.log(reqobj);
    try {
      if (fullOtp != "000000") {
        const response = await axios.post(`${baseUrl}/organizer/register/verifyotp`, reqobj);
        if (response.data?.IsSuccess) {
          toast.success(response.data?.Message);
          localStorage.removeItem("key");
          setTimeout(() => {
            if (flag === "true") {
              navigate(`../login`)
            } else {
              navigate(`../new-password/${username}`);
            }
          }, 500);
        } else {
          toast.warn(response.data?.Message);
          localStorage.removeItem("key");
          setTimeout(() => {
            navigate(`../login`);
          }, 2000);
        }
      }
    } catch (error) {
      toast.error("Something Went wrong.");
      console.log(error);
    }
  }
  

  return (
    <div className="flex min-h-screen">
    <div className="flex w-full flex-wrap bg-white">
      <BgImage />
      <div className="w-full relative lg:w-1/2 flex px-4">
        <div className="max-w-max w-full m-auto">
          <h1 className="whitespace-nowrap">Enter OTP</h1>
          <p className="sm:text-lg xl:text-xl text-quicksilver font-normal sm:pt-3.5 xl:pr-8">Please enter the 4 Digit code sent to</p>
         {username !=0 && <div className="flex justify-between sm:mt-1">
            <div className="block font-bold text-japaneseIndigo text-base sm:text-lg xl:text-xl">{username}</div>
            <div onClick={() => navigate(-1)} className="cursor-pointer" ><span className="text-caribbeanGreen font-semibold text-base sm:text-lg xl:text-xl">Change?</span></div>
          </div>}
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
                      className="caret-transparent w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] bg-brightGray text-4xl sm:text-6xl font-bold text-chatlook-dark text-center rounded-[5px] placeholder:text-4xl placeholder:sm:text-6xl placeholder:leading-5 placeholder:font-bold otp" maxLength="1"/>
                <input id="digit-2"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[1]} 
                      className="caret-transparent w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] bg-brightGray text-4xl sm:text-6xl font-bold text-chatlook-dark text-center rounded-[5px] placeholder:text-4xl placeholder:sm:text-6xl placeholder:leading-5 placeholder:font-bold otp" maxLength="1"  /> 
                <input id="digit-3"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[2]}
                      className="caret-transparent w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] bg-brightGray text-4xl sm:text-6xl font-bold text-chatlook-dark text-center rounded-[5px] placeholder:text-4xl placeholder:sm:text-6xl placeholder:leading-5 placeholder:font-bold otp" maxLength="1" />
                <input id="digit-4"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[3]} 
                      className="caret-transparent w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] bg-brightGray text-4xl sm:text-6xl font-bold text-chatlook-dark text-center rounded-[5px] placeholder:text-4xl placeholder:sm:text-6xl placeholder:leading-5 placeholder:font-bold otp" maxLength="1" />
                <input id="digit-5"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[4]} 
                      className="caret-transparent w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] bg-brightGray text-4xl sm:text-6xl font-bold text-chatlook-dark text-center rounded-[5px] placeholder:text-4xl placeholder:sm:text-6xl placeholder:leading-5 placeholder:font-bold otp" maxLength="1" />
                <input id="digit-6"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[5]} 
                      className="caret-transparent w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] bg-brightGray text-4xl sm:text-6xl font-bold text-chatlook-dark text-center rounded-[5px] placeholder:text-4xl placeholder:sm:text-6xl placeholder:leading-5 placeholder:font-bold otp" maxLength="1" />
              </div>            
              <button onClick={verifiyCode} className="btn-primary w-full py-[15px] uppercase">Verified code</button>
              {/* <div onClick={reSendOtp} className="cursor-pointer block font-bold text-japaneseIndigo text-xs xl:text-sm text-center">Not Get? Re-send</div> */}
              <div className="cursor-pointer block font-bold text-japaneseIndigo text-xs xl:text-sm text-center">Not Get? Re-send</div>
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
