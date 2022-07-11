import "./assest/css/fonts.css";
import "./assest/css/style.css";
import "./assest/css/moon-icon.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./component/SideBar";
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
