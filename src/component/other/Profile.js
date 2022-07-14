import React from 'react'
import Advertisement from '../Advertisement';
import ProfileListItem from './ProfileListItem';

function Profile() {
    return (
        <div className="wrapper min-h-full flex flex-col">
            <div className="space-y-8 h-full">
                {/* <!-- advisement --> */}
                <Advertisement />
                {/* <!-- profile 1 --> */}
                <ProfileListItem type="Personal" />
                
                {/* <!-- profile 2 --> */}
                <ProfileListItem type="Business" />
            </div>
        </div>
    )
}

export default Profile;
