import React from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-primary text-white font-inter">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-20 py-10">
        {/* Use flex on lg, grid on md for stacking behavior */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-8">
          {/* Logo + description */}
          <div className="md:max-w-[413px]">
            <img
              src={logo}
              alt="AT Digital"
              className="w-[150px] sm:w-[200px] md:w-[226px] h-auto mb-5"
            />
            <p className="text-[15px] sm:text-[16px] leading-[1.6]">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective — your
              business results.
            </p>
          </div>

          {/* Links container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[79px] lg:mt-0 md:ml-0">
            {/* Our Technologies */}
            <div className="text-left">
              <h3 className="font-semibold text-[20px] sm:text-[21px] mb-3">
                Our Technologies
              </h3>
              <ul className="space-y-3 text-[14px] font-medium">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="text-left">
              <h3 className="font-semibold text-[20px] sm:text-[21px] mb-3">
                Our Services
              </h3>
              <ul className="space-y-3 text-[14px] font-medium">
                <li>Social Media Marketing</li>
                <li>Web &amp; Mobile App Development</li>
                <li>Data &amp; Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-10 border-t border-white/60 w-full max-w-[630px] mx-auto" />

        {/* Bottom Links */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-[14px] font-medium">
          <button className="hover:underline">Privacy Policy</button>
          <span className="hidden sm:block w-px h-4 bg-white/60" />
          <button className="hover:underline">Terms &amp; Conditions</button>
        </div>
      </div>
    </footer>
  );
}
