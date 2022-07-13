import "./assest/css/fonts.css";
import "./assest/css/style.css";
import "./assest/css/moon-icon.css";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import SideBar from './component/SideBar';
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

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <SideBar> 
          <Routes className="main flex min-h-screen w-full">
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