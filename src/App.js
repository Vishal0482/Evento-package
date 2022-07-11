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
    
          </Routes>
          </SideBar>
        </BrowserRouter>
    </div>
  );
}

export default App;