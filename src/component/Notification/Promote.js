import React from 'react'
import { Link } from 'react-router-dom';
import Advertisement from '../Advertisement';
import BottomNavigation from '../BottomNavigation';

function Promote({children}) {
  return (
        <div className="wrapper min-h-full flex flex-col">
      <div className="space-y-8 h-full">
        {/* <!-- title-holder  --> */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <i className="icon-back-arrow mr-4 text-2xl"></i>
            <h1>Promote</h1>
          </Link>
        </div>
        {/* <!-- step-progress-bar  --> */}
        <div className="w-full overflow-hidden">
          <ul className="flex justify-between step-progress-holder">
            <li>
              <div>
                <span>01</span>
              </div>
              <h3>Select Business</h3>
            </li>
            <li>
              <div>
                <span>02</span>
              </div>
              <h3>Select Business</h3>
            </li>
            <li>
              <div>
                <span>03</span>
              </div>
              <h3>publish date & time</h3>
            </li>
            <li>
              <div>
                <span>04</span>
              </div>
              <h3>Notification Mode</h3>
            </li>
            <li>
              <div>
                <span>05</span>
              </div>
              <h3> Payment</h3>
            </li>
          </ul>
        </div>

        {children}
        
      </div>
      <div className="mt-auto">
        {/* <!-- advisement --> */}
        <Advertisement />
      </div>
      
      <BottomNavigation />
    </div>
  )
}

export default Promote;
