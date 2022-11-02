import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DashboardEvent from './events/DashboardEvent';




const Register = (value, callback) => {
    const location = useLocation();

    const [registerFrom, setRegisterFrom] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        phone_no: "6356855230",
    });

    const [errors, setErrors] = useState({})
    const [isSuccess, setIsSuccess] = useState(false)

    const handelChange = (event) => {
        const { name, value } = event.target;
        setRegisterFrom({ ...registerFrom, [name]: value })
        console.log(registerFrom);
    }

    // useEffect(
    //     () => {
    //         if (Object.keys(errors).length === 0 && isSuccess) {
    //             callback();
    //         }
    //     },
    //     [errors])

    // const fromSubmited = () => {
    //     setIsSuccess(true);
    // }
    const validationRegFrom = (value) => {
        let errors = {};

        // username 
        if (!value.name) {
            errors.name = "Name Is Required"
        }
        // Email 
        if (!value.email) {
            errors.email = "Email Address Is Required"
        } else if (!/\S+@\S+\.\S+/.test(value.email)) {
            errors.email = "Email Address Is invalid"
        }
        // password 
        if (!value.password) {
            errors.password = "Password Is Required"
        } else if (value.password.length < 6) {
            errors.password = "Password Must be 6 character"
        }
        // password 2 
        if (!value.password2) {
            errors.password2 = "Conform Is Required"
        } else if (!value.password !== value.password2) {
            errors.password2 = "Conform Password Not Mach"
        }
        return errors;
    }

    const handelRegFrom = async (e) => {
        e.preventDefault();
        // setErrors(validationRegFrom(value));
        console.log(registerFrom);

        try {
            const response = await axios.post("http://192.168.29.23:8080/api/register/customer", registerFrom)
            console.log(response);
            if (response.data.isSuccess === true) {
                console.log("Success");
            } else {
                alert("Registration fail !")
            }

        } catch (error) {
            console.log(error);
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
                                    <div className="sm-1 mb-4">
                                        <label className="block" htmlFor="">Your Name</label>
                                        <input type="text" name="name" value={registerFrom.name} onChange={handelChange} />
                                        {/* {errors.name && <span style={{ color: "red", fontSize: "12px" }}>{errors.name}</span>} */}
                                    </div>
                                </div>
                                <div className="sm-holder">
                                    <div className="sm-1 mb-4">
                                        <label className="block" htmlFor="">Email</label>
                                        <input type="email" name="email" value={registerFrom.email} onChange={handelChange} />
                                        {/* {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>} */}
                                    </div>
                                </div>
                                {/* <div className="ps-1 mb-4">
                                    <label className="block" htmlFor="">Phone Number</label>
                                    <div className="verify-holder">
                                        <input disabled={(location.state?.phone) ? true : false} type="tel" value={registerFrom.phone_no} onChange={handelChange}/>
                                        { {!(location.state?.phone) ? <Link to="/" style={{ cursor: "pointer" }} onClick={verifyHandler}>Verify</Link> :
                                            <a style={{ color: "green", fontSize: 20 }} > <span  >&#10003;</span></a>}
                                        {!(location.state?.phone) && registerFrom.phone_no.length === 10 && <span style={{ color: "red" }}>Please verify your number before continue</span>}
                                        {errMsgObj.phone_no && <span style={{ color: "red" }}>{errMsgObj.phone_no}</span>} }
                                    </div>
                                </div> */}
                                <div className="sm-holder">
                                    <div className="sm-1 mb-4">
                                        <label className="block" htmlFor="">Password</label>
                                        <div className="c-pass">
                                            <input type="password" name="password" value={registerFrom.password} onChange={handelChange} />
                                            {/* {errors.password && <span style={{ color: "red", fontSize: "12px" }}>{errors.password}</span>} */}
                                            {/* <i onClick={() => setPassVisible(!passVisible)} className="icon-view"></i> */}
                                        </div>
                                    </div>
                                    <div className="sm-1 mb-4">
                                        <label className="block" htmlFor="">Confirm Password</label>
                                        <div className="c-pass">
                                            <input type="password" name="password2" value={registerFrom.password2} onChange={handelChange} />
                                            {/* {errors.password2 && <span style={{ color: "red", fontSize: "12px" }}>{errors.password2}</span>} */}
                                            {/* <i onClick={() => setPassVisible(!passVisible)} className="icon-view"></i> */}
                                        </div>
                                    </div>
                                </div>
                                <button type="Submit">REGISTER NOW</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register