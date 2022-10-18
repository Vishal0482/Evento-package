import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Advertisement from '../Advertisement';
import StepProgressBar from './StepProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { addPersonalDetails } from '../../redux/createEvent';
import axios from 'axios';
import { baseUrl } from '../../config'
import { decrement, increment } from '../../redux/stepCountPogress';

const token = "248258927fede2b3e48c182f40539846bcd47037";

const header = {
    'Authorization': `Token ${token}`
}
function EventPersonalDetails() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useSelector(state => state.createLogin?.userId);
    const eventId = useSelector(state => state.createEvent.category?.eventId);

    const initialState = {
        personalSkill: "",
        full_name: "",
        mobile_no: "",
        alterMobileNo: "",
        email: "",
        flatNo: "",
        streetName: "",
        areaName: "",
        city: "",
        state: "",
        pincode: "",
    }
    const [values, setValues] = useState(initialState);
    const [mobileNoHide, setMobileNoHide] = useState(false);
    const [emailHide, setEmailHide] = useState(false);
    const [errMsgObj, setErrMsgObj] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const clickNextHandler = async (e) => {
        e.preventDefault()
        let tmpErrObj = errMsgObj;

        // Full_name Condition check
        if (!values.full_name || values.full_name === "") {
            tmpErrObj = { ...tmpErrObj, full_name: "Name is Required" }
        } else {
            tmpErrObj = { ...tmpErrObj, full_name: undefined };
        }

        // Mobile Number Condition check
        // if (values.mobileNo !== "") {
        //     if (values.mobileNo.length === 10) {
        //         if (!values.mobileNo.test("/^[0-9\b]+$/")) {
        //         	tmpErrObj = { ...tmpErrObj, mobileNo: "Mobile No Is Not Valid" }
        //         } else {
        //         tmpErrObj = { ...tmpErrObj, email: undefined };
        //         }
        //     } else {
        //         tmpErrObj = { ...tmpErrObj, mobileNo: "Mobile No  10 " }
        //     }
        // } else {
        //     tmpErrObj = { ...tmpErrObj, mobileNo: "Mobile No Is Required" }

        // }

        if (!values.mobile_no || values.mobile_no === "") {
            tmpErrObj = { ...tmpErrObj, mobileNo: "MobileNo Address is Required" }
        } else {
            tmpErrObj = { ...tmpErrObj, mobileNo: undefined };
        }

        // email Condition check
        if (!values.email || values.email === "") {
            tmpErrObj = { ...tmpErrObj, email: "Email Address is Required" }
        } else {
            tmpErrObj = { ...tmpErrObj, email: undefined };
        }
        // city Condition check
        if (!values.city || values.city === "") {
            tmpErrObj = { ...tmpErrObj, city: "City Name is Required" }
        } else {
            tmpErrObj = { ...tmpErrObj, city: undefined };
        }
        // state Condition check
        if (!values.state || values.state === "") {
            tmpErrObj = { ...tmpErrObj, state: "State Name is Required" }
        } else {
            tmpErrObj = { ...tmpErrObj, state: undefined };
        }
        // pincode Condition check
        if (!values.pincode || values.pincode === "") {
            tmpErrObj = { ...tmpErrObj, pincode: "Pincode is Required" }
        } else {
            tmpErrObj = { ...tmpErrObj, pincode: undefined };
        }

        setErrMsgObj(tmpErrObj)
        if (tmpErrObj) { }

        if (!tmpErrObj?.full_name && !tmpErrObj?.mobileNo && !tmpErrObj?.email && !tmpErrObj?.state && !tmpErrObj?.pincode) {
            try {
                dispatch(addPersonalDetails({ personalDetail: values }));
                dispatch(increment());
                const response = await axios.post(`${baseUrl}/api/events/personaldetail`, { ...values, is_mobile_no_hidden: mobileNoHide, user_id: userId, eventId: eventId }, { headers: header })
                console.log(response);
                navigate("/dashboard/event/photosandvideos");
            } catch (error) {
                console.log(error);
                alert("Some error occured. Please try again")
            }
        }
    }
    return (
        // <!-- Content In -->
        <div className="rightInContent">
            <div className="wrapper min-h-full">

                <div className="space-y-8 h-full">
                    {/* <!-- title-holder  --> */}
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>Sweet Love Catering</h1></Link>
                    </div>
                    {/* <!-- step-progress-bar  --> */}
                    <StepProgressBar />
                    {/* <!-- main-content  --> */}
                    <div className="space-y-5 -mx-2">
                        <div className="w-full flex items-end flex-wrap">
                            <div className="w-full md:w-1/2 px-2 inputHolder">
                                <span className="input-titel">Professional Skill</span>
                                <input type="text" className="input" name="personalSkill" value={values?.personalSkill} onChange={handleInputChange} />
                            </div>
                            <div className="w-full md:w-1/2 px-2 inputHolder">
                                <span className="input-titel">Full Name (Mr / Mrs / Ms) <span>*</span></span>
                                <input type="text" className="input" name="full_name" value={values?.full_name} onChange={handleInputChange} required />
                                {errMsgObj.full_name && <span style={{ color: "red", fontSize: "12px" }}>{errMsgObj.full_name}</span>}
                            </div>
                        </div>
                        <div className="w-full flex items-end flex-wrap">
                            <div className="w-full md:w-1/3 px-2 inputHolder">
                                <div className="input-label-holder">
                                    <label className="input-titel">Mobile Number <span>*</span></label>
                                    <div className="input-checkd"><input type="checkbox" onChange={() => setMobileNoHide(!mobileNoHide)} className="mr-2" />Hidden</div>
                                </div>
                                <input type="tel" className="input" name="mobile_no" value={values?.mobile_no} onChange={handleInputChange} required maxLength={10} minLength={10} />
                                {errMsgObj.mobileNo && <span style={{ color: "red", fontSize: "12px" }}>{errMsgObj.mobileNo}</span>}
                            </div>
                            <div className="w-full md:w-1/3 px-2 inputHolder">
                                <label className="input-titel">Alternative Mobile Number <span></span></label>
                                <input type="tel" className="input" name="alterMobileNo" value={values?.alterMobileNo} onChange={handleInputChange} maxLength={10} minLength={10} />
                            </div>
                            <div className="w-full md:w-1/3 px-2 inputHolder">
                                <div className="input-label-holder">
                                    <label className="input-titel">Email Address <span>*</span></label>
                                    <div className="input-checkd"><input type="checkbox" onChange={() => setEmailHide(!emailHide)} className="mr-2" />Hidden</div>
                                </div>
                                <input type="email" className="input" name="email" value={values?.email} onChange={handleInputChange} required />
                                {errMsgObj.email && <span style={{ color: "red", fontSize: "12px" }}>{errMsgObj.email}</span>}
                            </div>
                        </div>
                        <div className="space-y-5">
                            <h3 className="px-2">Address</h3>
                            <div className="w-full flex flex-wrap">
                                <div className="w-full md:w-1/3 px-2 inputHolder">
                                    <span className="input-titel">Flat No.</span>
                                    <input type="text" className="input" name="flatNo" value={values?.flatNo} onChange={handleInputChange} required />
                                </div>
                                <div className="w-full md:w-1/3 px-2 inputHolder">
                                    <span className="input-titel">Street Name.</span>
                                    <input type="text" className="input" name="streetName" value={values?.streetName} onChange={handleInputChange} />
                                </div>
                                <div className="w-full md:w-1/3 px-2 inputHolder">
                                    <span className="input-titel">Area Name.</span>
                                    <input type="text" className="input" name="areaName" value={values?.areaName} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap">
                                <div className="w-full md:w-1/3 px-2 inputHolder">
                                    <label className="input-titel">City <span>*</span></label>
                                    <input type="text" className="input" name="city" value={values?.city} onChange={handleInputChange} required />
                                    {errMsgObj.city && <span style={{ color: "red", fontSize: "12px" }}>{errMsgObj.city}</span>}
                                </div>
                                <div className="w-full md:w-1/3 px-2 inputHolder">
                                    <label className="input-titel">State <span>*</span></label>
                                    <input type="text" className="input" name="state" value={values?.state} onChange={handleInputChange} required />
                                    {errMsgObj.state && <span style={{ color: "red", fontSize: "12px" }}>{errMsgObj.state}</span>}
                                </div>
                                <div className="w-full md:w-1/3 px-2 inputHolder">
                                    <label className="input-titel">Pincode <span>*</span></label>
                                    <input type="num" className="input" name="pincode" value={values?.pincode} onChange={handleInputChange} required maxLength={6} />
                                    {errMsgObj.pincode && <span style={{ color: "red", fontSize: "12px" }}>{errMsgObj.pincode}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- advisement --> */}
                    <Advertisement />
                </div>
                <div className="prw-next-btn">
                    <button type="button" className="flex items-center" onClick={() => {
                        navigate(-1)
                        dispatch(decrement())
                    }}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
                    <button type="button" className="flex items-center active" onClick={clickNextHandler}><h3>Next</h3><i className="icon-next-arrow ml-3"></i></button>
                </div>
            </div>
        </div>
    )
}

export default EventPersonalDetails