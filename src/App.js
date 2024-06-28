import Home from '../src/components/Home/home.jsx';
import Review from '../src/components/Review/review.jsx';
import AboutUs from '../src/components/AboutUs/aboutus.jsx';
import ContactUs from '../src/components/ContactUs/contactus.jsx';
import OurTeam from '../src/components/AboutUs/ourteam.jsx';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="scroll-smooth">
        <Home/>
        <Review/>
        <AboutUs/>
        <ContactUs/>
      </div>
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/review" element={<Review />} />
    //     <Route path="/about-us" element={<AboutUs />} />
    //     <Route path="/contact-us" element={<ContactUs />} />
    //   </Routes>
    // </Router>
  );
}

export default App;