import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#53565a2a] py-8">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Travel N Cure. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
