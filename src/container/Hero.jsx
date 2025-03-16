import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bgimg from "../assets/landing.jpg";
import heroVideo from "../assets/intro.mp4";

const Hero = () => {
  return (
    <section className="relative py-20 px-10 min-h-screen flex">
      <div className="absolute inset-0 z-0">
        <img
          src={bgimg}
          alt="backgroundLanding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 p-8 text-white flex items-center justify-center">
        <div className="container mx-auto text-left px-10">
          <h1 className="text-4xl font-bold mb-4">Your Health, Our Priority</h1>
          <p className="text-lg mb-8">
            Find the best medical treatments and destinations worldwide.
          </p>
          <div className="flex justify-start space-x-4">
            <Link to="/consultation">
              <Button size="lg">Book Consultation</Button>
            </Link>
          </div>
        </div>
        <div className=" ">
          <video
            src={heroVideo}
            controls
            className="rounded-lg shadow-lg shadow-black"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
