import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addLogin } from '../redux/createLogin'



const Login = () => {
	const navigator = useNavigate();
	const [login, setLogin] = useState({ email: "", password: "" });
	const [passVisible, setPassVisible] = useState(false);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const token = useSelector(state => state.createLogin?.token);


	const handelChange = (name, value) => {
		setLogin({ ...login, [name]: value })
	}
	const handelLogin = async (e) => {
		e.preventDefault();
		console.log(login);
		try {
			if (login.email !== "") {
				if (login.password !== "") {
					const response = await axios.post("http://64.227.167.195:8000/api/login", { username: login.email, password: login.password });
					console.log(response.data);
					if (response.data.isSuccess === true) {
						alert("login Success")
						dispatch(addLogin({ email: login.email, token: response.data.data.token }))
						navigator("/dashboard/event/id")
					} else {
						setError("Email And Password Not Valid")
					}
				}
				else {

					setError("password not Empty")
				}
			}
			else {
				setError("Email Address Required")

			}

		} catch (error) {
			console.log(error);
		}
	}
	if (!token)
		return (
			<div className="main">
				<div className="login-page">
					<div className="form-holder">
						<div className="form-main">
							<div className="form-title">
								<h1>Welcome Back!</h1>
								<p>Log in with your data that you entered during your registration</p>
							</div>
							{error && <span style={{ color: "red" }}>{error}</span>}
							<div className="form">
								<form action="" method="post" onSubmit={handelLogin}>
									<div className="ps-1">
										<label htmlFor="">Email or Phone number</label>
										<input type="email" name="email" value={login.email} onChange={(e) => { handelChange("email", e.target.value) }} />
										{/* {error && <span style={{ color: "red" }}>{error}</span>} */}
									</div>
									<div className="ps-1">
										<label htmlFor="">Password</label>
										<input type={(passVisible) ? "text" : "password"} name="password" value={login.password} onChange={(e) => { handelChange("password", e.target.value) }} />
										{/* {error && <span style={{ color: "red" }}>{error}</span>} */}
										<i onClick={() => setPassVisible(!passVisible)} className="icon-view"></i>
									</div>

									<Link to="/forgatepassword"> Forget Password?</Link>
									<button type="Submit">LOGIN NOW</button>
								</form>
							</div>
							<div className="botm-t">
								<p>
									Are You new? <Link to="/dashboard/register">Registrater Now</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)

	else {
		navigator("/dashboard/event/id")
	}
}

export default Login