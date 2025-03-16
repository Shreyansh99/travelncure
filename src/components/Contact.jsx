import React from "react";
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-r py-40 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

        <p className="mb-4 text-2xl">
          Contact Address: Dharampur, Dehradun, Uttarakhand, India
        </p>
        <div className="flex justify-center space-x-8">
          <a href="tel:+918056005099" className="flex items-center space-x-2">
            <FaPhone className="text-xl" />
            <span>+91 99273 28682</span>
          </a>
          <a href="https://wa.me/919927328682" className="flex items-center space-x-2">
            <FaWhatsapp className="text-xl text-green-400" />
            <span>+91 99273 28682</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
