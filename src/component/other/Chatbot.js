import React, { useState } from 'react'
import Advertisement from '../Advertisement';
import upload2Image from "../../assest/images/upload-2.png";
import ChatboatUserListItem from './ChatboatUserListItem';

function Chatbot() {
    const [input, setInput] = useState("");
    console.log(input);
    return (
        <div className="flex min-h-full wrapper">

            <div className="flex flex-wrap space-y-7 w-full">
                {/* <!-- advisement --> */}
                <Advertisement />
                {/* <!-- title-holder  --> */}
                <div className="space-y-6 w-full">
                    <h1 className="w-full">Chatbot</h1>
                    <div className="flex relative w-full h-[calc(100vh-200px)]">
                        <div className="w-full lg:w-8/12">
                            <div className="shadow-lg rounded-md overflow-hidden h-full">
                                {/* <!-- chat-titel  --> */}
                                <div className="p-5 py-3.5 bg-white flex items-center">
                                    <div>
                                        <div className="w-12 h-12 rounded-full overflow-hidden">
                                            <img src={upload2Image} alt="upload-2" />
                                        </div>
                                    </div>
                                    <div className="w-full pl-3.5">
                                        <h3 className="text-sm">Mark Jecno</h3>
                                        <span className="input-titel pb-0">markjecno@gmail.com</span>
                                    </div>
                                </div>
                                {/* <!-- chat-text  -->   */}
                                <div className="chat-holder">
                                    <div className="text-massage right-massage">
                                        <p>I need your help <span>2:55PM</span></p>
                                        <span className="arrow"></span>
                                    </div>
                                    <div className="text-massage left-massage">
                                        <p>Can you tell me exactly what you’re looking htmlfor? <span>3:35PM</span></p>
                                        <span className="arrow"></span>
                                    </div>
                                    <div className="line-main">
                                        <hr />
                                        <span>Today</span>
                                    </div>
                                </div>
                                {/* <!-- chat-input --> */}
                                <div className="p-5 bg-white flex items-center space-x-3">
                                    <a href="#">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#FFD93B"></path>
                                            <path d="M15.9998 26.2846C11.3208 26.2846 7.24381 23.1156 6.08581 18.5796C5.99481 18.2226 6.20981 17.8596 6.56681 17.7686C6.92181 17.6756 7.28581 17.8926 7.37681 18.2496C8.38481 22.1956 11.9298 24.9516 15.9988 24.9516C20.0678 24.9516 23.6138 22.1956 24.6208 18.2496C24.7108 17.8926 25.0738 17.6756 25.4318 17.7686C25.7888 17.8596 26.0038 18.2226 25.9128 18.5796C24.7558 23.1156 20.6788 26.2846 15.9998 26.2846Z" fill="#3E4347"></path>
                                            <path d="M31.9999 15.9999C31.9999 24.8399 24.8349 31.9999 15.9999 31.9999C10.9699 31.9999 6.47992 29.6799 3.54492 26.0449C6.28992 28.2649 9.78492 29.5899 13.5899 29.5899C22.4249 29.5899 29.5899 22.4299 29.5899 13.5899C29.5899 9.78492 28.2649 6.28992 26.0449 3.54492C29.6749 6.47992 31.9999 10.9699 31.9999 15.9999Z" fill="#F4C534"></path>
                                            <path d="M10.8333 16.6835C12.1876 16.6835 13.2853 15.3788 13.2853 13.7695C13.2853 12.1601 12.1876 10.8555 10.8333 10.8555C9.47915 10.8555 8.38135 12.1601 8.38135 13.7695C8.38135 15.3788 9.47915 16.6835 10.8333 16.6835Z" fill="#3E4347"></path>
                                            <path d="M11.9394 13.1425C11.7484 13.2925 11.4344 13.2185 11.2334 12.9745C11.0324 12.7305 11.0224 12.4035 11.2134 12.2535C11.4034 12.0965 11.7184 12.1705 11.9184 12.4145C12.1204 12.6655 12.1224 12.9865 11.9394 13.1425Z" fill="#5A5F63"></path>
                                            <path d="M21.1698 16.6835C22.524 16.6835 23.6218 15.3788 23.6218 13.7695C23.6218 12.1601 22.524 10.8555 21.1698 10.8555C19.8156 10.8555 18.7178 12.1601 18.7178 13.7695C18.7178 15.3788 19.8156 16.6835 21.1698 16.6835Z" fill="#3E4347"></path>
                                        </svg>
                                    </a>
                                    <label className="block w-full">
                                        <input type="text" placeholder="Type here..." className="w-full outline-none" onChange={(e) => setInput(e.target.value)} />
                                    </label>
                                    <a href="#" type="submit"><i className="icon-send text-2xl"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 pl-5">
                            <div className="bg-white py-5 2xl:py-7 rounded-md h-full">
                                <h3 className="pb-2.5 px-5 2xl:px-7">User List</h3>
                                <div className="user-container px-5 2xl:px-7">
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                    <ChatboatUserListItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>)
}

export default Chatbot;
