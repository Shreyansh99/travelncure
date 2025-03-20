import React, { useState, useEffect, useNavigate } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //   const navigate = useNavigate();

  // Handle navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Login", to: "/login" },
    { name: "Register", to: "/register" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
            className="text-2xl font-display font-bold tracking-tight z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Travel n Cure
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <Link to={link.to}>
              <motion.div
                key={link.name}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                {link.name}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:block"
        >
          <Button 
            className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/30"
            onClick={() => window.location.href = '#contact'}
          >
            Get Started
          </Button>
        </motion.div> */}

        {/* Mobile Menu Button */}
        <div className="md:hidden z-10">
          <button
            className="p-2 text-foreground focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 bg-current transition-all duration-300 ease-in-out",
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                )}
              />
              <span
                className={cn(
                  "block h-0.5 bg-current transition-all duration-300 ease-in-out",
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 bg-current transition-all duration-300 ease-in-out",
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out flex flex-col justify-center items-center gap-8",
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {navLinks.map((link) => (
            <Link to={link.to}>
              <div
                key={link.name}
                
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </div>
            </Link>
          ))}
          {/* <Button
            className="mt-4 rounded-full px-6"
            onClick={() => {
              setMobileMenuOpen(false);
              window.location.href = "#contact";
            }}
          >
            Get Started
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
