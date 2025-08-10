import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function TopNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary w-full h-[101.62px] flex items-center justify-between px-6 sm:px-10 md:px-[20px] lg:px-[40px] relative z-50">
      {/* Logo */}
      <div className="flex items-center h-full">
        <img
          src={logo}
          alt="Logo"
          className="w-[150px] sm:w-[200px] md:w-[226px] h-auto object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 font-inter text-white font-medium text-[14px] tracking-normal">
        <a href="#services">SERVICES</a>
        <a href="#about">ABOUT US</a>
        <a href="#contact">CONTACT US</a>
        <a href="#careers">CAREERS</a>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center w-full justify-end">
        <button
          className="text-white w-full text-right pr-6"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="text-3xl">&#9776;</span> {/* Hamburger icon */}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-white flex flex-col pt-10 px-5"
          style={{ zIndex: 9999 }}
        >
          {/* Top bar with HOME and close "X" */}
          <div className="flex items-center justify-between max-w-[335px] w-full mx-auto mb-9 relative">
            {/* HOME Text */}
            <span
              className="font-inter font-medium text-[14px] text-black cursor-default"
              style={{ lineHeight: '28px' }}
            >
              HOME
            </span>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="text-black font-bold text-[28px]"
              style={{ lineHeight: '28px', width: '28px', height: '28px' }}
            >
              &#10005;
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-[36px] max-w-[335px] w-full mx-auto">
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="font-inter font-medium text-[14px] text-black"
            >
              SERVICES
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="font-inter font-medium text-[14px] text-black"
            >
              ABOUT US
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-inter font-medium text-[14px] text-black"
            >
              CONTACT US
            </a>
            <a
              href="#careers"
              onClick={() => setIsMenuOpen(false)}
              className="font-inter font-medium text-[14px] text-black"
            >
              CAREERS
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
