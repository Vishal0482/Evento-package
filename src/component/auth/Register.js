import React, { useEffect, useState } from 'react';

// import "../assets/css/style.css";
// import "../assets/css/bootstrap.min.css";
// import "../assets/icon/font/style.css";

import logo from "../../assest/svg/logo.svg";
// import googlelogo from "../assets/img/google.png";
// import facebooklogo from "../assets/img/facebook.png";
import { Link } from "react-router-dom";

// import { API_URL } from "../constants";
import { useNavigate ,useLocation } from 'react-router-dom';
import { baseUrl } from '../../config';

const axios = require('axios');
function Register() {

  const location = useLocation();

    const [errMsgObj, setErrMsgObj] = useState({});
    const [formData, setFormData] = useState({ name: "", email: "", phone_no: "", password: "", password2: "", refer_code: "", user_type: 2 });
    const [passVisible, setPassVisible] = useState(false)

    const history = useNavigate()

    useEffect(() => {
      if (location.state?.phone) {
        setFormField('phone_no', location.state?.phone)
      }
    }, [])
    

    const setFormField = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }


    const handleSubmit = async () => {
        console.log("handle form submit");
        console.log('formData', formData);

        let tmpErrObj = errMsgObj;

        if (!formData.name || formData.name === "") {
            tmpErrObj = { ...tmpErrObj, name: "name is required" }
        } else {
            tmpErrObj = { ...tmpErrObj, name: undefined };
        }

        if (!formData.email || formData.email === "") {
            tmpErrObj = { ...tmpErrObj, email: "email is required" }
        } else {
            tmpErrObj = { ...tmpErrObj, email: undefined };
        }

        if (!formData.phone_no || formData.phone_no === "") {
            tmpErrObj = { ...tmpErrObj, phone_no: "phone_no is required" }
        } else {
            tmpErrObj = { ...tmpErrObj, phone_no: undefined };
        }

        if (!formData.password || formData.password === "") {
            tmpErrObj = { ...tmpErrObj, password: "password is required" }
        } else {
            //tmpErrObj = { ...tmpErrObj, password: undefined };
            if (formData.password2 && formData.password2 !== "") {
                if (formData.password2 !== formData.password) {
                    tmpErrObj = { ...tmpErrObj, password: "password and confirm password does not match" }
                } else {
                    tmpErrObj = { ...tmpErrObj, password: undefined }
                }
            }
        }

        if (!formData.password2 || formData.password2 === "") {
            tmpErrObj = { ...tmpErrObj, password2: "password2 is required" }
        } else {
            tmpErrObj = { ...tmpErrObj, password2: undefined };
        }

        // if( !formData.refer_code || formData.refer_code === "" ){ 
        //     tmpErrObj = { ...tmpErrObj, refer_code: "refer_code is required" }
        // }else{
        //     tmpErrObj = { ...tmpErrObj, refer_code: undefined };
        // }

        setErrMsgObj(tmpErrObj)

        if (tmpErrObj) { }
        if (!tmpErrObj.password2 && !tmpErrObj.email && !tmpErrObj.name && !tmpErrObj.password && !tmpErrObj.phone_no) {
            
            if (!formData.refer_code) {
                formData.refer_code = null;
            }

            try {
                const response = await axios.post(`${baseUrl}/register`, formData); 
                console.log('response', response);
                if (response && response.data && response.data.isSuccess ) {
                    window.location.href = "/login";
                } else {
                    if(response && response.data && response.data.data){
                        if(response.data.data.email && response.data.data.email[0]){
                            tmpErrObj = { ...tmpErrObj, email: response.data.data.email[0] }
                            setErrMsgObj(tmpErrObj)
                        }

                        if(response.data.data.phone_no && response.data.data.phone_no[0]){
                            tmpErrObj = { ...tmpErrObj, phone_no: response.data.data.phone_no[0] }
                            setErrMsgObj(tmpErrObj)
                        }
                    }
                }
            } catch (error) {
                console.log(error);
                alert("Some error occured. Please try again")
            }

        }
    }

    async function verifyHandler() {
        try {
            const response = await axios.post(`${baseUrl}/sms`, {
                "phone" : "+91" + formData.phone_no
            }); 
            console.log('response', response);

            if (response.data.data) {
                alert(response.data.message)
                history.push("/otp",{
                    phone:response.data.data.phone,
                    otp:response.data.data.OTP
                })
            } else {
                alert("Error in sending OTP")
            }
        } catch (errorInApi) {
            console.log('errorInApi',errorInApi);
        }
       
    }
    return (
        <div class="main">
            <div class="login-page">
                <div class="logo"><img src={logo} alt="logo" /></div>
                <div class="form-holder">
                    <div class="form-main">
                        <div class="form-title ">
                            <h1>Create an Account</h1>
                            <p class="title-pera">Let’s get you all set up you can verify your personal account and login setting up your profile</p>
                        </div>
                        <div class="form f-2">
                            <form method="post">
                                <div class="ps-1">
                                    <label for="">Your Name</label>
                                    <input type="text" value={formData.name} onChange={(e) => { setFormField('name', e.target.value) }} />
                                    {errMsgObj.name && <span style={{ color: "red" }}>{errMsgObj.name}</span>}

                                </div>
                                <div class="ps-1">
                                    <label for="">Email</label>
                                    <input type="text" value={formData.email} onChange={(e) => { setFormField('email', e.target.value) }} />
                                    {errMsgObj.email && <span style={{ color: "red" }}>{errMsgObj.email}</span>}
                                </div>
                                <div class="ps-1">
                                    <label for="">Phone Number</label>
                                    <div class="verify-holder">
                                        <input disabled={(location.state?.phone)?true:false} type="text" value={formData.phone_no} onChange={(e) => { setFormField('phone_no', e.target.value) }} />
                                     {!(location.state?.phone)?  <a style={{cursor:"pointer"}} onClick={verifyHandler}>Verify</a> :
                                       <a style={{color:"green",fontSize:20}} > <span  >&#10003;</span></a>}
                                        {!(location.state?.phone) && formData.phone_no.length == 10 && <span style={{ color: "red" }}>Please verify your number before continue</span>}
                                        {errMsgObj.phone_no && <span style={{ color: "red" }}>{errMsgObj.phone_no}</span>}
                                    </div>
                                </div>
                                <div class="sm-holder">
                                    <div class="sm-1">
                                        <label for="">Password</label>
                                        <div class="c-pass">
                                            <input  type={(passVisible)?"text":"password"}  value={formData.password} onChange={(e) => { setFormField('password', e.target.value) }} />
                                            <i onClick={()=>setPassVisible(!passVisible)} class="icon-view"></i>

                                        </div>
                                        {errMsgObj.password && <span style={{ color: "red" }}>{errMsgObj.password}</span>}
                                    </div>
                                    <div class="sm-1">
                                        <label for="">Confirm Password</label>
                                        <div class="c-pass">
                                            <input type={(passVisible)?"text":"password"} value={formData.password2} onChange={(e) => { setFormField('password2', e.target.value) }} />
                                            <i onClick={()=>setPassVisible(!passVisible)} class="icon-view"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="ps-1 rc">
                                    <label for="">Refer Code</label>
                                    <input type="text" value={formData.refer_code} onChange={(e) => { setFormField('refer_code', e.target.value) }} />
                                </div>

                                <button disabled={(location.state?.phone)?false:true}  class="form-btn" type="button" onClick={handleSubmit}>REGISTER NOW</button>
                                {/* {JSON.stringify(errMsgObj)} */}

                            </form>
                        </div>
                       
                        <div class="botm-t">
                            <p>Are you Already User?<Link to="/login">Login Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

// <div class="btn-hr">
// <p>or</p>
// </div>
// <div class="social-holder">
// <a href="https://www.google.com/" class="social-btn btn1">
//     <img src={googlelogo} alt="goooglelogo" />
//     <p>Google</p>
// </a>
// <a href="https://www.google.com/" class="social-btn btn2">
//     <img src={facebooklogo} alt="facebooklogo" />
//     <p>Facebook</p>
// </a>
// </div>