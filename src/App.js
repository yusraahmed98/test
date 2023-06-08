import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Blog from './blog';
import Portfolio from './pages/portfolio.js';
import ContactUs from './pages/contactUs';
import Careers from './pages/careers';
import OurPeople from './pages/OurPeople';
import Blog_single from './pages/blog-single';
import AboutUs from './pages/aboutUs';

function App() {
  var domain="https://neon-9o9l.onrender.com";
  return (
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="https://neon-9o9l.onrender.com/contactUs/add" element={<ContactUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="ourpeople" element={<OurPeople />} />
        <Route path="aboutUs" element={<AboutUs/>} />
    </Routes>
  </BrowserRouter>

  );
}


export default App;
