import React from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-primary w-full">
      <div className="max-w-[1440px] mx-auto pt-[40px] pr-[20px] sm:pr-[40px] lg:pr-[80px] pb-[20px] pl-[20px] sm:pl-[40px] lg:pl-[80px] text-white font-inter">
        {/* Footer Top */}
        <div className="footer-top flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Logo + Paragraph */}
          <div className="footer-description md:w-[413px] mb-0">
            <img
              src={logo}
              alt="Logo"
              className="w-[150px] sm:w-[200px] md:w-[226px] h-auto mb-[20px]"
            />
            <p className="text-[16px] leading-[1.5]">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </p>
          </div>

          {/* Our Technologies and Our Services */}
          <div
            className="
              footer-links
              flex flex-col gap-8
              mt-[60px]           /* 60px gap below logo block on mobile */
              md:mt-0            /* remove margin-top at md+ */
              md:flex-row        /* horizontal layout at md+ */
              md:gap-[79px]      /* horizontal gap between technologies and services */
            "
          >
            <div className="our-technologies">
              <h3 className="font-semibold text-[21px] mb-[12px]">
                Our Technologies
              </h3>
              <ul className="space-y-[12px] text-[14px] font-medium">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>

            <div className="our-services">
              <h3 className="font-semibold text-[21px] mb-[12px]">
                Our Services
              </h3>
              <ul className="space-y-[12px] text-[14px] font-medium">
                <li>Social media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-white w-[630px] mx-auto mt-10" />

        {/* Bottom Links */}
        <div className="flex justify-center items-center gap-4 text-white font-medium text-[14px] mt-2">
          <span className="cursor-pointer">Privacy Policy</span>
          <div className="border-l border-white h-4" />
          <span className="cursor-pointer">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
