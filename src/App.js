import "./assest/css/fonts.css";
import "./assest/css/style.css";
import "./assest/css/moon-icon.css";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import SideBar from './component/SideBar';
import Notification from './component/Notification/Notification';
import NotificationHistory from "./component/Notification/NotificationHistory";
import NotificationDetails from "./component/Notification/NotificationDetails";
import Promote from "./component/Notification/Promote";
import SelectBusiness from "./component/Notification/SelectBusiness";
import AllUserSelectPlan from "./component/Notification/AllUserSelectPlan";
import NotificationMode from "./component/Notification/NotificationMode";
import NotificationPayment from "./component/Notification/NotificationPayment";
import PersonalSkillBusinessPromote from "./component/Notification/PersonalSkillBusinessPromote";
import DashboardEvent from "./component/events/DashboardEvent";
import EventAddPlaces from "./component/events/EventAddPlaces";
import EventAboutPlace from "./component/events/EventAboutPlace";
import EventPersonalDetails from "./component/events/EventPersonalDetails";
import EventPhotosAndVideos from "./component/events/EventPhotosAndVideos";
import EventAddServices from "./component/events/EventAddServices";
import EventCapacity from "./component/events/EventCapacity";
import EventCompanyDetails from "./component/events/EventCompanyDetails";
import EventTermsAndConditions from "./component/events/EventTermsAndConditions";
import EventDiscounts from "./component/events/EventDiscounts";
import EventCalender from "./component/events/EventCalender";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <SideBar> 
          <Routes className="main flex min-h-screen w-full">
            <Route exact path="/dashboard/notification" element={<Notification />} />
            <Route exact path="/dashboard/notification/history" element={<NotificationHistory />} />
            <Route exact path="/dashboard/notification/details" element={<NotificationDetails />} />
            <Route exact path="/dashboard/notification/promote" element={<Promote> </Promote> } />
            <Route exact path="/dashboard/notification/promote/select-business" element={<Promote> <SelectBusiness /> </Promote> } />
            <Route exact path="/dashboard/notification/promote/all-user-plan" element={<Promote> <AllUserSelectPlan />  </Promote> } />
            <Route exact path="/dashboard/notification/promote/personal-skill-business" element={<Promote> <PersonalSkillBusinessPromote />  </Promote> } />
            <Route exact path="/dashboard/notification/promote/mode" element={<Promote> <NotificationMode />  </Promote> } />
            <Route exact path="/dashboard/notification/promote/payment" element={<Promote> <NotificationPayment />  </Promote> } />
            <Route exact path="/dashboard/event" element={<DashboardEvent />} />
            <Route
              exact
              path="/dashboard/event/addplaces"
              element={<EventAddPlaces />}
            />
            <Route exact path="/dashboard/event/aboutplace" element={<EventAboutPlace />} />
            <Route exact path="/dashboard/event/personaldetails" element={<EventPersonalDetails />} />
            <Route exact path="/dashboard/event/photosandvideos" element={<EventPhotosAndVideos />} />
            <Route exact path="/dashboard/event/addservices" element={<EventAddServices />} />
            <Route exact path="/dashboard/event/capacity" element={<EventCapacity />} />
            <Route exact path="/dashboard/event/companydetails" element={<EventCompanyDetails />} />
            <Route exact path="/dashboard/event/termsandconditions" element={<EventTermsAndConditions />} />
            <Route exact path="/dashboard/event/discounts" element={<EventDiscounts />} />
            <Route exact path="/dashboard/event/calender" element={<EventCalender />} />
          </Routes>
          </SideBar>
        </BrowserRouter>
    </div>
  );
}

export default App;