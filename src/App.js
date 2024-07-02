import Home from '../src/components/Home/home.jsx';
import Review from '../src/components/Review/review.jsx';
import AboutUs from '../src/components/AboutUs/aboutus.jsx';
import ContactUs from '../src/components/ContactUs/contactus.jsx';
import { Helmet } from 'react-helmet';
import OurTeam from '../src/components/AboutUs/ourteam.jsx';
import React from 'react';
import Sour from '../src/img/sour.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maintenance from './components/Maintenance/Maintenance.jsx';
import Navbar from './components/Home/navbar.jsx';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Travel & Tour</title>
        <link rel="icon" href={Sour} />
      </Helmet>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <div id="Home">
              <Home />
            </div>
            <div id="Review">
              <Review />
            </div>
            <div id="AboutUs">
              <AboutUs />
            </div>
            <div id="ContactUs">
              <ContactUs />
            </div>
          </>
        } />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </Router>
  );
}

export default App;