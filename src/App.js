import React from 'react';
import './App.css';
import Navv from './Components/Navv';
import HomePage from './Pages/HomePage';
import Footerr from './Components/Footerr';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';


function App() {
  return (
    <div>
      <Navv />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pages/AboutPage' element={<AboutPage />} />
        <Route path='/pages/ContactPage' element={<ContactPage />} />

      </Routes>

      <Footerr />
    </div>
  );
}

export default App;
