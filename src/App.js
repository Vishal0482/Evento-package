import './App.css';
import "./assest/css/style.css";
import "./assest/css/fonts.css";
import "./assest/css/moon-icon.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import SideBar from './component/SideBar';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SideBar />} />
            <Route path="/dashboard" element={<SideBar />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
