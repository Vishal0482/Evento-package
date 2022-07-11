import "./assest/css/fonts.css";
import "./assest/css/style.css";
import "./assest/css/moon-icon.css";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import SideBar from './component/SideBar';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <SideBar> 
          <Routes className="main flex min-h-screen w-full">
            {/* <Route exact path="/dashboard/notification" element={<Notification />} />     */}
          </Routes>
          </SideBar>
        </BrowserRouter>
    </div>
  );
}

export default App;