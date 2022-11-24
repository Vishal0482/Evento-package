import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";
import BgImage from "./BgImage";
import { toast, ToastContainer } from "react-toastify";
import { param } from "jquery";

function NewPassword() {
	const parmas = useParams();
	const username = parmas.username;
	const navigate = useNavigate();
	const [pass, setPass] = useState("");
	const [cpass, setCpass] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	const onSubmitHandler = async(e) => {
		e.preventDefault();
		const reqObj = {
			phone_no: username,
			password: pass,
		}
		if (cpass!==pass) {
			toast.warn("confirm password and password is not matching");
			return
		}
		console.log(reqObj)
		 try {
			const response = await axios.post(`${baseUrl}/organizer/register/changepassword`, reqObj);
			if (response.data?.IsSuccess) {
				toast.success(response.data?.Message);
				setTimeout(() => {
					navigate("../login");
				}, 500);
			} else {
				toast.error(response.data?.Message);
			}
		 } catch (err) {
			toast.error("Error while resetting password");
			console.log(err);
		 }
	 }

	return (
		<div className="flex min-h-screen overflow-hidden">
		<div className="flex w-full flex-wrap bg-white">
		  <BgImage />
		  <div className="w-full relative lg:w-1/2 flex px-4 overflow-y-auto py-5">
			<div className="max-w-md w-full m-auto">
			  <h1>Enter new Password</h1>
			  <p className="sm:text-lg xl:text-xl text-quicksilver font-normal sm:pt-3.5">Please enter a new password</p>
			  <div className="w-full pt-7 sm:pt-10">
				<form className="space-y-5">
				  <div className="relative">
					<label htmlFor="" className="input-titel">Password</label>
					<input name="Phone Number" className="input_box pr-10" onChange={(e)=>setPass(e.target.value)} type="password" />
					{/* <input name="Phone Number" className="input_box pr-10" onChange={(e)=>setPass(e.target.value)} type={isVisible?"text":"password"} /> */}
					{/* <span className={isVisible ? "icon-eye text-xl opacity-50 absolute right-3 bottom-3 cursor-pointer" : "icon-pass-hide text-xl opacity-50 absolute right-3 bottom-3 cursor-pointer"} onClick={()=>setIsVisible(!isVisible)}></span> */}
				  </div>
				  <div className="relative">
					<label htmlFor="" className="input-titel">Confirm Password</label>
					<input name="Phone Number" className="input_box pr-10" onChange={(e)=>setCpass(e.target.value)} type={isVisible?"text":"password"} />
					<span className={isVisible ? 
						"icon-eye text-xl opacity-50 absolute right-3 bottom-3 cursor-pointer" : 
						"icon-pass-hide text-xl opacity-50 absolute right-3 bottom-3 cursor-pointer"} 
						onClick={()=>setIsVisible(!isVisible)}>
					</span>
				  </div>
				  <button className="btn-primary w-full py-[15px] uppercase" onClick={onSubmitHandler} >Submit a new password</button>
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

export default NewPassword
