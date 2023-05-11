import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Blog from './blog';
import Portfolio from './pages/portfolio.js';
import ContactUs from './pages/contactUs';
import Careers from './pages/careers';
import Blog_single from './pages/blog-single';

function App() {
  var domain="https://neon-9o9l.onrender.com";
  return (
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="careers" element={<Careers />} />
    </Routes>
  </BrowserRouter>

  );
}


export default App;
