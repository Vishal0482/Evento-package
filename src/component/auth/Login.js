import React, { useEffect, useState } from 'react';

// import "../assets/icon/font/style.css";
// import '../../assest/css/landing-page/bootstrap.min.css';
// import "../../assest/css/landing-page/style1.css";

import logo from "../../assest/svg/logo.svg";
import googlelogo from "../../assest/images/landing-page/google.png";
import facebooklogo from "../../assest/images/landing-page/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from '../../config';
import axios from 'axios';

function Login() {
	const navigate = useNavigate();
  	const token = localStorage.getItem("Token") || null;
  	console.log(token);

	useEffect(()=>{
		if(token != null) return navigate("../../dashboard")
	},[])

	const [userData, setUserData] = useState({ emailOrPhone: "", password: "" });
	const [error, setError] = useState(false);

	const setFormField = (field, value) => {
		setUserData({ ...userData, [field]: value })
	}


	const handleSubmit = async () => {
		console.log('userData', userData);

		try {
			const response = await axios.post(baseUrl+'/api/login', { username: userData.emailOrPhone, password: userData.password });
			console.log('response', response);
			if (response.data?.isSuccess == true) {
				setError(false);
				localStorage.clear();
				localStorage.setItem("Token", response.data.data.token);
				localStorage.setItem("UserId", response.data.data.userId);
				console.log("Token", response.data.data.token);
				navigate("../../dashboard");
			}
		} catch (e) {
			console.log(e);
			setError(true);
		}
	}

	return (
		<div className="main">
			<div className="login-page">
				<div className="logo">
					<img src={logo} alt="logo" onClick={() => navigate("/")}/>
				</div>
				<div className="form-holder">
					<div className="form-main">
						<div className="form-title">
							<h1>Welcome Back!</h1>
							<p>Log in with your data that you entered during your registration</p>
						</div>
						<div className="form">
							{error && <span style={{ color: "red" }}>Username or Password incorrect</span>}
							<form action="" method="post" >
								<div className="ps-1">
									<label htmlFor="">Email or Phone number</label>
									<input type="text" name="" value={userData.emailOrPhone} onChange={(e) => { setFormField('emailOrPhone', e.target.value) }} required/>
								</div>
								<div className="ps-1">
									<label htmlFor="">Password</label>
									<input type="password" name="" value={userData.password} onChange={(e) => { setFormField('password', e.target.value) }} required/>
								</div>

								<Link to="../forgatepassword"> Forget Password?</Link>
								<button type="button" onClick={handleSubmit}>LOGIN NOW</button>
							</form>
						</div>
						<div className="btn-hr">
							<p>or</p>
						</div>
						<div className="social-holder">
							<a href="https://www.google.com/" className="social-btn btn1">
								<img src={googlelogo} alt="goooglelogo" />
								<p>Google</p>
							</a>
							<a href="https://www.google.com/" className="social-btn btn2">
								<img src={facebooklogo} alt="facebooklogo" />
								<p>Facebook</p>
							</a>
						</div>
						<div className="botm-t">
							<p>
								Are You new? <Link to="../register">Registrater Now</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
