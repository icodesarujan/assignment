import React from 'react';
import TopNavigation from './components/TopNavigation';
import HeroSection from './components/HeroSection';
import FAQ from './components/FAQItem';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-inter bg-white min-h-screen">
      <TopNavigation />

      {/* Hero Section (no margin-top here) */}
      <HeroSection />

      {/* FAQ Title */}
      <h2 className="text-primary font-inter font-semibold text-[22px] sm:text-[27px] leading-[33px] sm:leading-[38px] tracking-[0.4px] text-center mt-[80px] sm:mt-[100px]">
        Frequently asked questions
      </h2>

      {/* FAQ Section */}
      <div className="mx-auto mt-[20px] mb-[80px] flex flex-col items-center gap-[15px] sm:max-w-[100%] md:max-w-[800px] px-4 sm:px-6 lg:px-8">
        <FAQ
          defaultOpen={true}
          question="What is Webflow and why is it the best website builder?"
          answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
        />
        <FAQ
          question="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
          answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere"
        />
        <FAQ
          question="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
          answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere"
        />
      </div>

      <Footer />
    </div>
  );
}
