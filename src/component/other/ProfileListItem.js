import React from 'react';
import user3Image from "../../assest/images/user-3.png";

function ProfileListItem({type}) {
  return (
    <>
      {/* <!-- title-holder  --> */}
      <div className="flex justify-between items-center pt-4">
                    <h1>{type} profile</h1>
                    <button className="btn-primary small">Edit Profile</button>
                </div>
                {/* <!-- profile image--> */}
                <div className="flex items-center">
                    <div className="">
                        <div className="w-44 h-44 rounded-full border-8 border-spiroDiscoBall relative mr-9">
                            <img src={user3Image} alt="" className="w-full h-full object-cover rounded-full overflow-hidden" />
                            <div className="absolute bottom-0 right-0 flex justify-center items-center w-10 h-10 rounded-full bg-spiroDiscoBall z-10"><i className="icon-camera"></i></div>
                        </div>
                    </div>
                    <div className="">
                        <h2>Mobina Mirbagheri</h2>
                        <p className="text-xl font-bold text-japaneseIndigo pt-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                {/* <!-- form Edit  --> */}
                <div className="">
                    <div className="flex justify-between space-x-5 -mx-2">
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                            <span className="input-titel">Name</span>
                            <input type="text" className="input font-bold" value="Mobina Mirbagheri" disabled />
                        </div>
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                            <span className="input-titel">Email</span>
                            <input type="text" className="input font-bold" value="mobinamirbagheri@gmail.com" disabled />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-5 pt-3 -mx-2">
                        <div className="w-1/2 px-2">
                            <span className="input-titel">Phone Number</span>
                            <div className="flex items-center h-auto space-x-3 mt-1">
                                <div className="">
                                    <select className="text-base text-japaneseIndigo bg-white rounded-md flex space-x-3 profile-arrow outline-0 whitespace-nowrap pl-5 pr-10 py-3.5 relative w-28">
                                        <option>+91</option>
                                        <option>+625</option>
                                        <option>+001</option>
                                    </select>
                                </div>
                                <div className="max-w-full w-full inputHolder">
                                    <input type="text" className="input font-bold" value="96325 85214" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                            <span className="input-titel">Address</span>
                            <input type="text" className="input font-bold" value="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar," disabled />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-5 pt-3 -mx-2">
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                            <span className="input-titel">Date Of Birth</span>
                            <input type="text" className="input font-bold" value="22 January 1975" disabled />
                        </div>
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                            <span className="input-titel">Country</span>
                            <input type="text" className="input font-bold" value="India" disabled />
                        </div>
                    </div>
                    <div className="w-full pt-3">
                        <span className="input-titel">About place</span>
                        <textarea name="" id="" cols="30" rows="5" className="outline-none flex items-center w-full bg-white resize-none p-2 px-3.5 rounded-md placeholder:font-bold placeholder:text-japaneseIndigo" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." disabled></textarea>
                    </div>
                </div>
    </>
  )
}

export default ProfileListItem;
