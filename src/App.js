import React from 'react';
import './App.css';
import Navv from './Components/Navv';
import HomePage from './Pages/HomePage';
import Footerr from './Components/Footerr';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';


function App() {
  return (
    <div>
      <Navv />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pages/AboutPage' element={<AboutPage />} />
       
      </Routes>
      
      <Footerr />
    </div>
  );
}

export default App;
