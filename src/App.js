import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import Navigation from './Navigation';
import './App.css';


const App = () => (
  <Router>
    <div>
    
      <Navigation />
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>             
      <br /> {/* This is a line */}
      <hr /> {/* This is a horizontal line */}
      <h4 className="home-footer">Copyright © 2023 Theodora</h4>
    </div>
  </Router>
);

export default App;