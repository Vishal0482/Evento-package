import "./assest/css/fonts.css";
// import "./assest/css/style.css";
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
import PSBSelectSkill from "./component/personal_skills_business/PSBSelectSkill";
import PSBPersonalDetails from "./component/personal_skills_business/PSBPersonalDetails";
import PSBPhotosAndVideos from "./component/personal_skills_business/PSBPhotosAndVideos";
import PSBAddEquipment from "./component/personal_skills_business/PSBAddServices";
import PSBOtherCost from "./component/personal_skills_business/PSBOtherCost";
import PSBCompanyDetails from "./component/personal_skills_business/PSBCompanyDetails";
import PSBTermsAndConditions from "./component/personal_skills_business/PSBTermsAndConditions";
import PSBDiscounts from "./component/personal_skills_business/PSBDiscounts";
import PSBCalender from "./component/personal_skills_business/PSBCalender";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
// import Otp from "./component/Otp";

import DashboardEventView from "./component/event-view/DashboardEventView";
import ReferToEarn from "./component/other/ReferToEarn";
import RedeemCoin from "./component/other/RedeemCoin";
import FAQ from "./component/other/FAQ";
import Chatbot from "./component/other/Chatbot";
import Gallery from "./component/other/Gallery";
import Invoice from "./component/other/Invoice";
import InvoiceHistory from "./component/other/InvoiceHistory";
import Profile from "./component/other/Profile";
import Booking from "./component/other/Booking";
import SelectWhoYouAre from "./component/events/SelectWhoYouAre";
// import BuySpacePlan from "./component/events/BuySpacePlan";
import LandingPage from "./component/landing_page/LandingPage";
import Otp from "./component/auth/Otp";
import ForgotPassword from "./component/auth/ForgetPassword";
import NewPassword from "./component/auth/NewPassword";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
        {/* <SideBar> */}
          <Routes className="main min-h-screen w-full">
            {/* Login  */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route exact path="/auth/verify" element={<Otp />} />
            <Route exact path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/auth/new-password" element={<NewPassword />} /> */}

            {/* 0.2.1 select who you are? */}
            <Route path="/dashboard" element={<SideBar> <SelectWhoYouAre/></SideBar>} />
            <Route path="/dashboard/event/:eventType" element={<SideBar> <DashboardEvent /></SideBar>} />
            <Route path="/dashboard/event/addplaces/:eventId" element={<SideBar> <EventAddPlaces /></SideBar>} />
            <Route path="/dashboard/event/aboutplace/:eventId" element={<SideBar> <EventAboutPlace /></SideBar>} />
            <Route path="/dashboard/event/personaldetails/:eventId/:userId" element={<SideBar> <EventPersonalDetails /></SideBar>} />
            <Route path="/dashboard/event/photosandvideos/:eventId/:userId" element={<SideBar> <EventPhotosAndVideos /></SideBar>} />
            {/* <Route exact path="/dashboard/event/buy-space-plan" element={<BuySpacePlan />} /> */}
            <Route path="/dashboard/event/addservices/:eventId/:userId" element={<SideBar> <EventAddServices /></SideBar>} />
            <Route path="/dashboard/event/capacity/:eventId/:userId" element={<SideBar> <EventCapacity /></SideBar>} />
            <Route path="/dashboard/event/companydetails/:eventId/:userId" element={<SideBar> <EventCompanyDetails /></SideBar>} />
            <Route path="/dashboard/event/termsandconditions/:eventId/:userId" element={<SideBar> <EventTermsAndConditions /></SideBar>} />
            <Route path="/dashboard/event/discounts/:eventId" element={<SideBar> <EventDiscounts /></SideBar>} />
            <Route path="/dashboard/event/calender/:eventId" element={<SideBar> <EventCalender /></SideBar>} />

            {/* 0.3.1 personal skill business */}
            <Route exact path="/dashboard/personalskillbusiness/selectskill" element={<PSBSelectSkill />}/>
            <Route exact path="/dashboard/personalskillbusiness/personaldetails" element={<PSBPersonalDetails/>}/>
            <Route exact path="/dashboard/personalskillbusiness/photosandvideos" element={<PSBPhotosAndVideos/>}/>
            <Route exact path="/dashboard/personalskillbusiness/addequipment" element={<PSBAddEquipment/>} />
            <Route exact path="/dashboard/personalskillbusiness/othercost" element={<PSBOtherCost/>} />
            <Route exact path="/dashboard/personalskillbusiness/companydetails" element={<PSBCompanyDetails/>} />
            <Route exact path="/dashboard/personalskillbusiness/termsandconditions" element={<PSBTermsAndConditions/>} />
            <Route exact path="/dashboard/personalskillbusiness/discounts" element={<PSBDiscounts/>} />
            <Route exact path="/dashboard/personalskillbusiness/calender" element={<PSBCalender/>} />
 
            {/* 5.1 Notification */}
            <Route path="/dashboard/notification" element={<Notification />} />
            <Route path="/dashboard/notification/history" element={<NotificationHistory />} />
            <Route path="/dashboard/notification/details" element={<NotificationDetails />} />
            <Route path="/dashboard/notification/promote" element={<Promote> </Promote> } />
            <Route path="/dashboard/notification/promote/select-business" element={<Promote> <SelectBusiness /> </Promote> } />
            <Route path="/dashboard/notification/promote/all-user-plan" element={<Promote> <AllUserSelectPlan />  </Promote> } />
            <Route path="/dashboard/notification/promote/personal-skill-business" element={<Promote> <PersonalSkillBusinessPromote />  </Promote> } />
            <Route path="/dashboard/notification/promote/mode" element={<Promote> <NotificationMode />  </Promote> } />
            <Route path="/dashboard/notification/promote/payment" element={<Promote> <NotificationPayment />  </Promote> } />

            {/* 2.1.1 event-view */}
            <Route exact path="/dashboard/event-view" element={<DashboardEventView />} />    
            <Route exact path="/dashboard/refer-to-earn" element={<ReferToEarn />} />    
            <Route exact path="/dashboard/redeem-coin" element={<RedeemCoin />} />    
            <Route exact path="/dashboard/faqs" element={<FAQ />} />    
            <Route exact path="/dashboard/chatbot" element={<Chatbot />} />    
            <Route exact path="/dashboard/gallery" element={<Gallery />} />    
            <Route exact path="/dashboard/invoice" element={<Invoice />} />    
            <Route exact path="/dashboard/invoice-history" element={<InvoiceHistory />} />    
            <Route exact path="/dashboard/profile" element={<Profile />} />    
            <Route exact path="/dashboard/booking" element={<Booking />} />    
          </Routes>
          {/* </SideBar> */}
        </BrowserRouter>
    </div>
  );
}

export default App;