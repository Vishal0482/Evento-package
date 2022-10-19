import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className="main">
			<div className="login-page">
				<div className="form-holder">
					<div className="form-main">
						<div className="form-title">
							<h1>Welcome Back!</h1>
							<p>Log in with your data that you entered during your registration</p>
						</div>
						<div className="form">
							{/* {errMsg && <span style={{ color: "red" }}>Username or Password incorrect</span>} */}
							<form action="" method="post" >
								<div className="ps-1">
									<label htmlFor="">Email or Phone number</label>
									{/* <input type="text" id="" name="" value={userData.emailOrPhone} onChange={(e) => { setFormField('emailOrPhone', e.target.value) }} /> */}
									<input type="text" id="" name="" />
								</div>
								<div className="ps-1">
									<label htmlFor="">Password</label>
									{/* <input type="password" id="" name="" value={userData.password} onChange={(e) => { setFormField('password', e.target.value) }} /> */}
									<input type="password" id="" name="" />
								</div>

								<Link to="/forgatepassword"> Forget Password?</Link>
								{/* <button type="button" onClick={handleSubmit}>LOGIN NOW</button> */}
								<button type="button" >LOGIN NOW</button>
							</form>
						</div>
						{/* <div className="btn-hr">
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
						</div> */}
						<div className="botm-t">
							<p>
								Are You new? <Link to="/register">Registrater Now</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Login