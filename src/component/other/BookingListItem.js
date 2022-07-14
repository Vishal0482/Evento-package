import React from 'react'
import sweetLoveCatering2Image from "../../assest/images/sweet-love-catring-2.png";
import user3Image from "../../assest/images/user-3.png";

function BookingListItem() {
    return (
        <div className="w-full bg-white flex p-2.5 rounded-md">
            <div className="w-1/6">
                <img src={sweetLoveCatering2Image} alt="sweet-love-catering-2" className="w-auto h-full object-cover" />
            </div>
            <div className="w-full px-3">
                <div className="flex justify-between items-center pb-2">
                    <h2>Sweet Love Catering</h2>
                    <h2>250 INR</h2>
                </div>
                <div className="flex items-center space-x-2 pb-5 border-b">
                    <img src={user3Image} alt="user-3" className="w-9 h-9 object-cover" />
                    <p className="text-base text-quicksilver font-normal">Mobina Mirbagheri</p>
                </div>
                <div className="flex items-center pt-5 space-x-7">
                    <div>
                        <span className="text-xs text-quicksilver font-bold"><i className="icon-calendar2 pr-2"></i>Date</span>
                        <p className="text-base">July 23, 2021</p>
                    </div>
                    <div className="border-x px-7">
                        <span className="text-xs text-quicksilver font-bold"><i className="icon-light-fill-time pr-2"></i>Time</span>
                        <p className="text-base">04:00PM</p>
                    </div>
                    <div>
                        <span className="text-xs text-quicksilver font-bold"><i className="icon-location pr-2"></i>Location</span>
                        <p className="text-base">Vesu, Surat</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingListItem;
