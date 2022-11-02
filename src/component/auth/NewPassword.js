import React, { useEffect, useState } from "react";

import "../../assest/css/style.css";
// import "../assets/css/bootstrap.min.css";
// import "../assets/icon/font/style.css";

import logo from"../../assest/images/landing-page/evento packege.png"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";
// import { API_URL } from "../constants";

function NewPassword() {
	const location = useLocation()
	const navigate = useNavigate();
	const [pass, setPass] = useState("")
	const [cpass, setCpass] = useState("")
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// console.log(location.state);

	}, [])

	async function onSubmitHandler(e){
		e.preventDefault();
		let body = {
			email:"abc@example.com",
			password:pass,
			password2:cpass
		}
		if (cpass!==pass) {
			alert("confirm password and password is not matching")
			return
		}

		 try {
		   
			 const response = await axios.put(`${baseUrl}/forgotpassApi`,body, { headers: { "Content-Type": "application/json",} });
			// console.log(response);
			 if (response && response.data.data) {
				alert(response.data.message)
			 }
		 } catch (errCallingApi) {
			 alert("Error while resetting password")
			 console.log("errCallingApi", errCallingApi);
		 }
	 }

	return (
		<div class="main">
			<div class="login-page">
				<div class="logo height">
					<img src={logo} alt="logo" onClick={() => navigate("/")} />
				</div>
				<div class="form-holder">
					<div class="form-main">
						<div class="form-title">
							<h1>Enter new Password</h1>
							<p>Please enter a new password</p>
						</div>
						<div class="form f1">
							<form>
								<div class="new-ps-holder">
									<div class="sm-1 new-ps-1">
										<label for="">Password</label>
										<div class="c-pass">
											<input onChange={(e)=>setPass(e.target.value)} type={isVisible?"text":"password"} id="" name=""  />
											<i onClick={()=>setIsVisible(!isVisible)} class="icon-view"></i>
										</div>
									</div>
									<div class="sm-1 new-ps-1">
										<label for="">Confirm Password</label>
										<div class="c-pass">
											<input onChange={(e)=>setCpass(e.target.value)}   type={isVisible?"text":"password"} id="" name=""  />
											<i  onClick={()=>setIsVisible(!isVisible)} class="icon-view"></i>
										</div>
									</div>
								</div>

								<button type="submit" onClick={onSubmitHandler} class="form-btn1">SUBMIT A NEW PASSWORD</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewPassword
