import React from 'react'
import BookingListItem from './BookingListItem';

function Booking() {
    return (
        <div className="wrapper min-h-full">

            <div className="space-y-8 h-full">
                {/* <!-- title-holder  --> */}
                <div className="flex justify-between items-center">
                    <h1>Booking</h1>
                </div>
            </div>
            {/* <!-- main-content  --> */}
            <div className="space-y-5">
                <BookingListItem />
                <BookingListItem />
                <BookingListItem />
            </div>
        </div>
    )
}

export default Booking;
