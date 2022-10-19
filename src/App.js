import "./assest/css/fonts.css";
import "./assest/css/style.css";
import "./assest/css/moon-icon.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./component/SideBar";
import Notification from "./component/Notification/Notification";
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
import Login from "./component/Login";
import Register from "./component/Register";
import Otp from "./component/Otp";

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
import BuySpacePlan from "./component/events/BuySpacePlan";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<SideBar>
					<Routes className="main min-h-screen w-full">
						{/* Login  */}
						<Route exact path="/dashboard/login" element={<Login />} />
						<Route exact path="/dashboard/otp" element={<Otp />} />
						<Route exact path="/dashboard/register" element={<Register />} />

						{/* 5.1 Notification */}
						<Route exact path="/dashboard/notification" element={<Notification />} />
						<Route exact path="/dashboard/notification/history" element={<NotificationHistory />} />
						<Route exact path="/dashboard/notification/details" element={<NotificationDetails />} />
						<Route exact path="/dashboard/notification/promote" element={<Promote> </Promote>} />
						<Route exact path="/dashboard/notification/promote/select-business" element={<Promote>{" "}<SelectBusiness />{" "}</Promote>} />
						<Route exact path="/dashboard/notification/promote/all-user-plan" element={<Promote>{" "}<AllUserSelectPlan />{" "}</Promote>} />
						<Route exact path="/dashboard/notification/promote/personal-skill-business" element={<Promote>{" "}<PersonalSkillBusinessPromote />{" "}</Promote>} />
						<Route exact path="/dashboard/notification/promote/mode" element={<Promote>{" "}<NotificationMode />{" "}</Promote>} />
						<Route exact path="/dashboard/notification/promote/payment" element={<Promote>{" "}<NotificationPayment />{" "}</Promote>} />

						{/* 0.2.1 select who you are? */}
						<Route exact path="/dashboard/select-who-you-are" element={<SelectWhoYouAre />} />
						<Route exact path="/dashboard/event/:eventId" element={<DashboardEvent />} />
						<Route exact path="/dashboard/event/addplaces/:eventId" element={<EventAddPlaces />} />
						<Route exact path="/dashboard/event/aboutplace" element={<EventAboutPlace />} />
						<Route exact path="/dashboard/event/personaldetails" element={<EventPersonalDetails />} />
						<Route exact path="/dashboard/event/photosandvideos" element={<EventPhotosAndVideos />} />
						<Route exact path="/dashboard/event/buy-space-plan" element={<BuySpacePlan />} />
						<Route exact path="/dashboard/event/addservices" element={<EventAddServices />} />
						<Route exact path="/dashboard/event/capacity" element={<EventCapacity />} />
						<Route exact path="/dashboard/event/companydetails" element={<EventCompanyDetails />} />
						<Route exact path="/dashboard/event/termsandconditions" element={<EventTermsAndConditions />} />
						<Route exact path="/dashboard/event/discounts" element={<EventDiscounts />} />
						<Route exact path="/dashboard/event/calender" element={<EventCalender />} />

						{/* 0.3.1 personal skill business */}
						<Route exact path="/dashboard/personalskillbusiness/selectskill" element={<PSBSelectSkill />} />
						<Route exact path="/dashboard/personalskillbusiness/personaldetails" element={<PSBPersonalDetails />} />
						<Route exact path="/dashboard/personalskillbusiness/photosandvideos" element={<PSBPhotosAndVideos />} />
						<Route exact path="/dashboard/personalskillbusiness/addequipment" element={<PSBAddEquipment />} />
						<Route exact path="/dashboard/personalskillbusiness/othercost" element={<PSBOtherCost />} />
						<Route exact path="/dashboard/personalskillbusiness/companydetails" element={<PSBCompanyDetails />} />
						<Route exact path="/dashboard/personalskillbusiness/termsandconditions" element={<PSBTermsAndConditions />} />
						<Route exact path="/dashboard/personalskillbusiness/discounts" element={<PSBDiscounts />} />
						<Route exact path="/dashboard/personalskillbusiness/calender" element={<PSBCalender />} />

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
				</SideBar>
			</BrowserRouter>
		</div>
	);
}

export default App;
