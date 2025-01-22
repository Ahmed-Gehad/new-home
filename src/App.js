import React from 'react';
import './App.css';
import Navv from './Components/Navv';
import HomePage from './Pages/HomePage';
import Footerr from './Components/Footerr';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import PropertiePage from './Pages/PropertiePage';
import HouesDetiles1 from './Pages/HouesDetiles1';
import HouesDetiles2 from './Pages/HouesDetiles2';
import HouesDetiles3 from './Pages/HouesDetiles3';


function App() {
  return (
    <div>
      <Navv />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pages/AboutPage' element={<AboutPage />} />
        <Route path='/pages/ContactPage' element={<ContactPage />} />
        <Route path='/pages/PropertiePage' element={<PropertiePage/>} />
        <Route path='/pages/HouesDetiles1' element={<HouesDetiles1/>} />
        <Route path='/pages/HouesDetiles2' element={<HouesDetiles2/>} />
        <Route path='/pages/HouesDetiles3' element={<HouesDetiles3/>} />

      </Routes>

      <Footerr />
    </div>
  );
}

export default App;
