import "./assest/css/fonts.css";
import "./assest/css/moon-icon.css";
import './App.css';
import { Routes, Route} from "react-router-dom";
import SideBar from './component/SideBar';
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import LandingPage from "./component/landing_page/LandingPage";
import Otp from "./component/auth/Otp";
import ForgotPassword from "./component/auth/ForgetPassword";
import NewPassword from "./component/auth/NewPassword";

function App() {
  return (
    <div className="app">

      <Routes className="main min-h-screen w-full">
        <Route path="/"  >
          <Route index element={<LandingPage />} />
          <Route path="auth" >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verify/:username/:flag" element={<Otp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="new-password/:username" element={<NewPassword />} />
          </Route>
          <Route path="dashboard/*" element={<SideBar/>} />
          <Route path="*" element={<h1 style={{color: "red", margin: "50px"}}>404 | PAGE NOT FOUND</h1>} />
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;