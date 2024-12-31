

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homedash from '../Dashboard/Homedash';
import Home from '../Components/Home';
import AboutPage from '../Pages/Aboutpage';
import ServicesPage from '../Pages/Servicespage';
import Testimonial from '../Pages/Testimonial'
import Dashbanner from '../DashboardPages/dashbanner';
import Dashtestimonial from '../DashboardPages/dashtestimonial';


function Routers() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Homedash />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/dashbanner" element={<Dashbanner />} />
        <Route path="/dashtestimonial" element={<Dashtestimonial />} />

      </Routes>
    </>
  );
}

export default Routers;







