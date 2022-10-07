import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';




function Register() {
    const location = useLocation();

    const [registerFrom, setRegisterFrom] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        phone_no: "7585888585",
    })

    const [errMsgObj, setErrMsgObj] = useState({});

    const navigate = useNavigate()

    useEffect(() => {
        if (location.state?.phone) {
            handelChange('phone_no', location.state?.phone)
        }
    }, [])

    const handelChange = (name, value) => {
        setRegisterFrom({ ...registerFrom, [name]: value })
    }


    const handelRegFrom = async (e) => {
        e.preventDefault();

        console.log("handle form submit");
        console.log('registerFrom', registerFrom);

        let tmpErrObj = errMsgObj;
        // Name Condition check
        if (!registerFrom.name || registerFrom.name === "") {
            tmpErrObj = { ...tmpErrObj, name: "name is required" }
        } else {
            tmpErrObj = { ...tmpErrObj, name: undefined };
        }
        // Email Condition check
        if (!registerFrom.email || registerFrom.email === "") {
            tmpErrObj = { ...tmpErrObj, email: "email is required" }
        } else {
            tmpErrObj = { ...tmpErrObj, email: undefined };
        }
        // password Condition check
        if (!registerFrom.password || registerFrom.password === "") {
            tmpErrObj = { ...tmpErrObj, password: "password is required" }
        } else {
            if (registerFrom.password2 && registerFrom.password2 !== "") {
                if (registerFrom.password2 !== registerFrom.password) {
                    tmpErrObj = { ...tmpErrObj, password: "password and confirm password does not match" }
                } else {
                    tmpErrObj = { ...tmpErrObj, password: undefined }
                }
            }
        }
        // password 2 Condition check
        if (!registerFrom.password2 || registerFrom.password2 === "") {
            tmpErrObj = { ...tmpErrObj, password2: "password2 is required" }
        } else {
            tmpErrObj = { ...tmpErrObj, password2: undefined };
        }
        // phone Number Condition check
        if (!registerFrom.phone_no || registerFrom.phone_no === "") {
            tmpErrObj = { ...tmpErrObj, phone_no: "phone_no is required" }
        } else {
            tmpErrObj = { ...tmpErrObj, phone_no: undefined };
        }
        setErrMsgObj(tmpErrObj)
        // http://64.227.167.195:8000/api
        if (tmpErrObj) { }
        if (!tmpErrObj.password2 && !tmpErrObj.email && !tmpErrObj.name && !tmpErrObj.password && !tmpErrObj.phone_no) {
            try {
                const response = await axios.post(`http://64.227.167.195:8000/api/register/organizer`, registerFrom);
                console.log('response', response);
                if (response && response.data && response.data.isSuccess) {
                    console.log("Hello");
                    console.log('registerFrom', registerFrom);
                    window.location.href = "/dashboard/event/";
                } else {
                    if (response && response.data && response.data.data) {
                        if (response.data.data.email && response.data.data.email[0]) {
                            tmpErrObj = { ...tmpErrObj, email: response.data.data.email[0] }
                            setErrMsgObj(tmpErrObj)
                        }
                        if (response.data.data.phone_no && response.data.data.phone_no[0]) {
                            tmpErrObj = { ...tmpErrObj, phone_no: response.data.data.phone_no[0] }
                            setErrMsgObj(tmpErrObj)
                        }
                    }
                }
            } catch (error) {
                console.log(error);
                alert("Some error occurred Please try again")
            }
        }
    }

    const verifyHandler = async () => {
        try {
            const response = await axios.post(`http://64.227.167.195:8000/api/sms`, {
                "phone": "+91" + registerFrom.phone_no
            });
            console.log('response', response);

            if (response.data.data) {
                alert(response.data.message)
                navigate("/dashboard/otp", {
                    phone: response.data.data.phone,
                    otp: response.data.data.OTP
                })
            } else {
                alert("Error in sending OTP")
            }
        } catch (errorInApi) {
            console.log('errorInApi', errorInApi);
        }

    }

    return (
        <div className="main">
            <div className="login-page">
                <div className="form-holder">
                    <div className="form-main">
                        <div className="form-title ">
                            <h1>Create an Account</h1>
                            <p className="title-pera">Let’s get you all set up you can verify your personal account and login setting up your profile</p>
                        </div>
                        <div className="form f-2">
                            <form method="post" onSubmit={handelRegFrom}>
                                <div className="sm-holder">
                                    <div className="sm-1">
                                        <label htmlFor="">Your Name</label>
                                        <input type="text" name="name" value={registerFrom.name} onChange={(e) => { handelChange('name', e.target.value) }} />
                                        {/* {registerFrom.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>} */}
                                        {errMsgObj.name && <span style={{ color: "red" }}>{errMsgObj.name}</span>}
                                    </div>
                                </div>
                                <div className="sm-holder">
                                    <div className="sm-1">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="email" value={registerFrom.email} onChange={(e) => { handelChange('email', e.target.value) }} />
                                        {/* {registerFrom.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>} */}
                                        {errMsgObj.email && <span style={{ color: "red" }}>{errMsgObj.email}</span>}
                                    </div>
                                </div>
                                <div className="ps-1">
                                    <label htmlFor="">Phone Number</label>
                                    <div className="verify-holder">
                                        <input disabled={(location.state?.phone) ? true : false} type="tel" value={registerFrom.phone_no} onChange={(e) => { handelChange('phone_no', e.target.value) }} />
                                        {!(location.state?.phone) ? <a style={{ cursor: "pointer" }} onClick={verifyHandler}>Verify</a> :
                                            <a style={{ color: "green", fontSize: 20 }} > <span  >&#10003;</span></a>}
                                        {!(location.state?.phone) && registerFrom.phone_no.length !== 10 && <span style={{ color: "red" }}>Please verify your number before continue</span>}
                                        {errMsgObj.phone_no && <span style={{ color: "red" }}>{errMsgObj.phone_no}</span>}
                                    </div>
                                </div>
                                <div className="sm-holder">
                                    <div className="sm-1">
                                        <label htmlFor="">Password</label>
                                        <div className="c-pass">
                                            <input type="password" name="password" value={registerFrom.password} onChange={(e) => { handelChange('password', e.target.value) }} />
                                            {/* <i onClick={() => setPassVisible(!passVisible)} className="icon-view"></i> */}
                                            {errMsgObj.password && <span style={{ color: "red" }}>{errMsgObj.password}</span>}
                                        </div>
                                    </div>
                                    <div className="sm-1">
                                        <label htmlFor="">Confirm Password</label>
                                        <div className="c-pass">
                                            <input type="password" value={registerFrom.password2} onChange={(e) => { handelChange('password2', e.target.value) }} />
                                            {/* <i onClick={() => setPassVisible(!passVisible)} className="icon-view"></i> */}
                                            {errMsgObj.password2 && <span style={{ color: "red" }}>{errMsgObj.password2}</span>}
                                        </div>
                                    </div>
                                </div>
                                <button>REGISTER NOW</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register