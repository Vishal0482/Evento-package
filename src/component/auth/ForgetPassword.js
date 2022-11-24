import React,{useState} from "react";
import axios from "axios";
import { baseUrl } from "../../config";
import { useNavigate } from "react-router-dom";
import BgImage from "./BgImage";
import { toast, ToastContainer } from "react-toastify";

function ForgatePassword() {
    const navigate = useNavigate();
    const [phoneNo, setPhoneNo] = useState("");
    console.log(phoneNo)
    const sendVerificationCode = async (e) => {
        e.preventDefault();
        try {
            if(phoneNo.length > 0 && phoneNo.length < 11) {
                const response = await axios.post(`${baseUrl}/organizer/register/forgotpassword`, {phone_no: phoneNo});
                // console.log(response);
                if(response.data?.IsSuccess) {
                    toast.success(response.data?.Message);
                    localStorage.setItem("key", response.data?.Data.key)
                    // false for navigating to new password page
                    setTimeout(() => {
                        navigate(`../verify/${phoneNo}/false`);
                    }, 500);
                }
                else {
                    toast.warn(response.data?.Message);
                }
            } 
        } catch (error) {
            toast.error("something Went wrong.");
            console.log(error);
        }
    }
   
    return (
        <div className="flex min-h-screen">
            <div className="flex w-full flex-wrap bg-white">
                <BgImage />
                <div className="w-full relative lg:w-1/2 flex px-4">
                    <div className="max-w-md w-full m-auto">
                        <h1 className="whitespace-nowrap">Forget Your Password?!</h1>
                        <p className="sm:text-lg xl:text-xl text-quicksilver font-normal sm:pt-3.5 xl:pr-8">Please enter your Phone number to Recive a Varification Code.</p>
                        <div className="w-full pt-7 sm:pt-10">
                            <form className="space-y-5">
                                <div>
                                    <label className="input-titel">Phone number</label>
                                    <input type="text" name="Email or Phone number" className="input_box" onChange={(e)=>setPhoneNo(e.target.value)} />
                                </div>
                                <button className="btn-primary w-full py-[15px] uppercase" onClick={sendVerificationCode}>Send Verification Code</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgatePassword
