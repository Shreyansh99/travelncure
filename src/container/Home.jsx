import React from 'react';
import Hero from './Hero'
import WhyUs from './whyUs'
import Contact from '../components/Contact'
import Dept from '../components/DepartmentTab'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <WhyUs />
      <Dept />
      <Contact />
    </div>
  );
};

export default Home;