import React from 'react'
import Advertisement from '../Advertisement';
import DashboardEventAtteneeListItem from './DashboardEventAtteneeListItem';

function DashboardEventAttendee() {
    return (
        <div className="pt-7 lg:pt-10">
            {/* <!-- Attendee-Teb-Content   --> */}
            <div className="w-full space-y-7" id="attendee">
                <div className="w-full space-y-2.5">
                    <DashboardEventAtteneeListItem id={"#55841251"} name={"Reynaldo Franklin"} price={"$560.00"}  />
                    <DashboardEventAtteneeListItem id={"#23541251"} name={"Mark Jecno"} price={"$1250.00"}  />
                    <DashboardEventAtteneeListItem id={"#69852563"} name={"Joila balia"} price={"$900.00"}  />
                    <DashboardEventAtteneeListItem id={"#69552563"} name={"Mackenzie Holdern"} price={"$900.000"}  />
                </div>
                {/* <!-- calendar end --> */}
                <Advertisement />
            </div>
        </div>
    )
}

export default DashboardEventAttendee;
