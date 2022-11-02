import React, { useEffect, useState } from "react";

import "../../assest/css/style.css";
// import "../../assest/css/bootstrap.min.css";
// import "../../assest/icon/font/style.css";

import logo from "../../assest/images/landing-page/evento packege.png";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// same screen is used for both forgot pass OTP and Mobile verify 

function Otp() {
  const location = useLocation();
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState(["0", "0", "0", "0"]);
  console.log(location.state);

  // const history = useHistory()

  useEffect(() => {
    if (!location.state?.otp ) {
        // history.goBack()
    }
  
  }, [])
  

  function onSubmitHandler(e) {
      e.preventDefault()
      let fullOtp = otpValue[0] + otpValue[1] + otpValue[2] + otpValue[3]
      if (fullOtp == location.state.otp) {
        // if phone then redirect to register page else redirect to newpassword page
          // history.push(location.state?.phone?"/register":"/newpassword",{
          //   email : location.state?.email,
          //   phone : location.state?.phone
          // })
          alert("Success")
      }else{
          alert("wrong otp")
      }
  }

  function keyPressHandler(e) {

    let currentElementId = parseInt(e.target.id.slice(6));
    if(currentElementId==1) return;
    if (e.key =='Backspace') {
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

  return (
    <div className="main">
      <div className="login-page">
        <div className="logo height">
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
        </div>
        <div className="form-holder">
          <div className="form-main">
            <div className="form-title">
              <h1>Enter OTP</h1>
              <p>Please enter the 4 Digit code sent to</p>
            </div>
            <div className="name-change">
              <p>{location.state?.email || location.state?.phone}</p>
              <Link to="/forgatepassword">Change?</Link>
            </div>
            <div className="form">
              <form  onSubmit={onSubmitHandler}>
                <label for="" className="otp-titel">
                  Enter OTP
                </label>
                <div className="otp-holder">
                  <div className="otp-nub">
                    <input
                      id="digit-1"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[0]}
                      className="otp-input"
                    />
                  </div>
                  <div className="otp-nub">
                    <input
                      id="digit-2"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[1]}
                      className="otp-input"
                    />
                  </div>
                  <div className="otp-nub">
                    <input
                      id="digit-3"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[2]}
                      className="otp-input"
                    />
                  </div>
                  <div className="otp-nub">
                    <input
                      id="digit-4"
                      onChange={onOtpInputHandler}
                      onKeyDown={keyPressHandler}
                      value=""
                      type="text"
                      placeholder={otpValue[3]}
                      className="otp-input"
                    />
                  </div>
                </div>
               
                  <button onClick={onSubmitHandler} type="submit" className="form-btn1">VERIFICATION CODE</button>
              </form>
            </div>
            <div className="botm-t">
              <p>
                Now Get? <a  >Re-Send</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
