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


function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <SideBar> 
          <Routes className="main flex min-h-screen w-full">
            <Route exact path="/dashboard/notification" element={<Notification />} />
            <Route exact path="/dashboard/notification/history" element={<NotificationHistory />} />
            <Route exact path="/dashboard/notification/details" element={<NotificationDetails />} />
            <Route exact path="/dashboard/notification/promote" element={<Promote />} />
            {/* <Route exact path="/dashboard/notification/select-business" element={<SelectBusiness />} /> */}
          </Routes>
          </SideBar>
        </BrowserRouter>
    </div>
  );
}

export default App;