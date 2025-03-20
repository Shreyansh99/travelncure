import React from 'react';
import Hero from './heroo'
import WhyUs from './about'
import ContactInfo from "../components/contactSection";
import Dept from '../components/departmentSec'
import HowItWorks from "./howItWork"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <WhyUs />
      <Dept />
      <HowItWorks />
      <ContactInfo />
    </div>
  );
};

export default Home;