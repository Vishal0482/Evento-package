import React from 'react'
import user1Image from "../../assest/images/user-1.png";
import user2Image from "../../assest/images/user-2.png";
import Advertisement from '../Advertisement';
import DashboardEventReviewListItem from './DashboardEventReviewListItem';

function DashboardEventReview() {
  return (
    <div className="pt-7 lg:pt-10">
      {/* <!-- Reviews-Teb-Content   --> */}
      <div className="w-full space-y-7" id="reviews">
        <div className="w-full space-y-2">
          <DashboardEventReviewListItem userImage={user1Image} />
          <DashboardEventReviewListItem userImage={user2Image} />
        </div>
        {/* <!-- calendar end --> */}
        <Advertisement />
      </div>
    </div>
  )
}

export default DashboardEventReview;
