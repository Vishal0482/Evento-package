import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import previewImage from "../../assest/images/image-preview.png"
import { baseUrl } from '../../config';

function PersonalProfile({type, token, details}) {
    const header = {
		'Authorization': `Token ${token}`,
	}
    const imageHeader = {
		'Authorization': `Token ${token}`,
        'Content-Type': 'multipart/form-data'
	}
    const [isDisable, setIsDisable] = useState(true);
    const [profileImage, setProfileImage] = useState(null);
    // console.log(profileImage);
    const initalState = {
        name : "",
        email: "",
        dob : "",
        address: "",
        country : "",
        about : "",
    }

    const [values, setValues] = useState(initalState);
    console.log(values)
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    useEffect(() => {
    //    setValues(details)
        setValues({
            name: details?.name,
            email: details?.email,
            dob: details?.dob,
            address: details?.address,
            country: details?.country,
            about: details?.about
        })
    }, [details])

    let initialRender = true;
    useEffect(() => {
        if(initialRender) {
            initialRender = false;
        } else {
            if(!isDisable) {
                toast.info("Edit Profile Enable.")
            } else {
                toast.info("Edit Profile Disable.")
            }
        }
    },[isDisable]);

    const addPersonalDetails = async() => {
        try {
            const response = await axios.post(`${baseUrl}/organizer/profile`, values, {headers: header});
            if(response.data.IsSuccess) {
                toast.success(response.data.Message);
            } else {
                toast.error(response.data.Message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong.");
        }
    }

    const addProfilePic = async(selected) => {
        const formData = new FormData();
        formData.append("file",selected);
        try {
            const response = await axios.post(`${baseUrl}/organizer/profile/profilepic`, formData, {headers: imageHeader});
            if(response.data.IsSuccess) {
                console.log(response)
                toast.success(response.data.Message);
            } else {
                toast.error(response.data.Message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong.");
        }
    }

    const photoChangeHandler = (event) => {
		const types = ['image/png', 'image/jpeg', 'image/jpg'];
		let selected = event.target.files[0];
		console.log("selected" , selected);
		try {
			if(selected && types.includes(selected.type)) {
				if(selected.size < (1*1024*1024)) {
                    setProfileImage(selected);
					addProfilePic(selected);
				}
				else {
					toast.warn("file size is greater than 1MB");
				}
			} else {
				toast.warn("please select image file with jpeg/png.");
			}
		} catch (error) {
			console.log(error);
            toast.error("Error while Selecting Image.");
		}
	}  

  return (
    <>
      {/* <!-- title-holder  --> */}
      <div className="flex justify-between items-center pt-4">
                    <h1>{type} profile</h1>
                    {isDisable && <button className="btn-primary small" onClick={() => setIsDisable(false) }>Edit Profile</button>}
                    {!isDisable && <div className='flex'>
                        <button className="btn-primary small mr-3" onClick={() => {addPersonalDetails();setIsDisable(true) }  }>Save</button>
                        <button className="btn-primary small" onClick={() => setIsDisable(true) }>Cancel</button>
                    </div>}
                </div>
                {/* <!-- profile image--> */}
                <div className="flex items-center">
                    <div className="">
                        <div className="w-44 h-44 rounded-full border-8 border-spiroDiscoBall relative mr-9">
                            <img src={profileImage ? URL.createObjectURL(profileImage) : details?.profile_pic ? details?.s3Url+details?.profile_pic : previewImage} alt="" className="w-full h-full object-cover rounded-full overflow-hidden" />
                            <div className="absolute bottom-0 right-0 flex justify-center items-center w-10 h-10 rounded-full bg-spiroDiscoBall z-10">
                                <i className="icon-camera"></i>
                                <input type="file" onChange={(e) => photoChangeHandler(e)}  className="opacity-0 absolute inset-0"/>
                                {/* <input type="file" onChange={(e) => !isDisable && photoChangeHandler(e)} disabled={isDisable} className="opacity-0 absolute inset-0"/> */}
                            </div>
                            
                        </div>
                    </div>
                    <div className="">
                        <h2>{details?.name}</h2>
                        <p className="text-xl font-bold text-japaneseIndigo pt-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                {/* <!-- form Edit  --> */}
                <div className="">
                    <div className="flex justify-between space-x-5 -mx-2">
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                            <span className="input-titel">Name</span>
                            <input type="text" className="input font-bold" name="name" value={values?.name} onChange={changeHandler} disabled={isDisable} />
                        </div>
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                            <span className="input-titel">Email</span>
                            <input type="text" className="input font-bold" name="email" value={values?.email} onChange={changeHandler} disabled={isDisable} />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-5 pt-3 -mx-2">
                        <div className="w-1/2 px-2">
                            <span className="input-titel">Phone Number</span>
                            <div className="flex items-center h-auto space-x-3 mt-1">
                                <div className="">
                                    {/* <select className="text-base text-japaneseIndigo bg-white rounded-md flex space-x-3 profile-arrow outline-0 whitespace-nowrap pl-5 pr-10 py-3.5 relative w-28">
                                        <option>+91</option>
                                        <option>+625</option>
                                        <option>+001</option>
                                    </select> */}
                                     <input type="text" className="text-base text-japaneseIndigo bg-white rounded-md flex space-x-3 profile-arrow outline-0 whitespace-nowrap pl-5 pr-10 py-3.5 relative w-28 font-bold" value={details?.country_code} disabled />
                                </div>
                                <div className="max-w-full w-full inputHolder">
                                    <input type="text" className="input font-bold" value={details?.phone_no} disabled />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                            <span className="input-titel">Address</span>
                            <input type="text" className="input font-bold" name="address" value={values?.address} onChange={changeHandler} disabled={isDisable} />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-5 pt-3 -mx-2">
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                            <span className="input-titel">Date Of Birth</span>
                            <input type="text" className="input font-bold" name="dob" placeholder='dd-mm-yyyy' value={values?.dob} onChange={changeHandler} disabled={isDisable} />
                        </div>
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                            <span className="input-titel">Country</span>
                            <input type="text" className="input font-bold" name="country" value={values?.country} onChange={changeHandler} disabled={isDisable}/>
                        </div>
                    </div>
                    <div className="w-full pt-3">
                        <span className="input-titel">About Me</span>
                        <textarea name="about" id="" cols="30" rows="5" value={values?.about} disabled={isDisable} onChange={changeHandler} 
                        className="font-bold outline-none flex items-center w-full bg-white resize-none p-2 px-3.5 rounded-md placeholder:font-bold placeholder:text-japaneseIndigo" ></textarea>
                    </div>
                </div>
    </>
  )
}

export default PersonalProfile;
