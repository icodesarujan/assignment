import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import hero from '../assets/hero.png';
import image from '../assets/image.png';
import image2 from '../assets/image2.png';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 778);
  const [heroBoxHeight, setHeroBoxHeight] = useState(0);
  const heroBoxRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 778);
    }
    window.addEventListener('resize', handleResize);

    function measureHeroBox() {
      if (heroBoxRef.current) {
        setHeroBoxHeight(heroBoxRef.current.offsetHeight);
      }
    }
    measureHeroBox();
    window.addEventListener('resize', measureHeroBox);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', measureHeroBox);
    };
  }, [isMobile]);

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px]">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />

        {/* Hero Text Box */}
        <div
          ref={heroBoxRef}
          className={`${
            isMobile
              ? 'relative w-full max-w-full bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79] px-5 py-6 text-white flex flex-col justify-between'
              : 'absolute bottom-4 sm:bottom-10 left-4 sm:left-[60px] lg:left-[80px] w-[calc(100%-2rem)] sm:w-[630px] bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79] px-5 py-6 text-white flex flex-col justify-between'
          }`}
          style={{
            borderRadius: 0,
            transition: 'all 0.5s ease-in-out',
          }}
        >
          <h1
            className="font-inter font-bold tracking-[-0.02em] max-w-full
            text-[20px] leading-[28px] sm:text-[32px] sm:leading-[40px] lg:text-[48px] lg:leading-[56px]"
          >
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <div className="mt-4 sm:mt-6">
            <Button text="GET FREE CONSULTATION" />
          </div>
        </div>
      </div>

      {/* Spacer div: only show when hero box is shifted down (mobile) */}
      {isMobile && (
        <div
          style={{
            height: heroBoxHeight,
            transition: 'height 0.5s ease-in-out',
          }}
        />
      )}

      {/* Sections container */}
      <div>
        {/* Web & Mobile App Development */}
        <section
          id="services"
          className="max-w-[1440px] mx-auto mt-[80px] px-4 sm:px-6 md:px-0"
        >
          <div className="flex flex-col md:flex-row items-start text-center md:text-left">
            {/* Image Container */}
            <div
              className="order-1 md:order-1 md:ml-[40px] lg:ml-[188px] 
                         w-[260px] sm:w-[300px] md:w-[414px] 
                         mx-auto md:mx-0 flex-shrink-0 self-start
                         md:-mt-[113.5px]"
            >
              <img
                src={image2}
                alt="Web & Mobile App Development"
                className="w-full h-auto object-contain block"
              />
            </div>

            {/* Text Container */}
            <div
              className="order-2 md:order-2 mt-0 md:mt-0 
                         md:ml-[40px] lg:ml-[40px] 
                         max-w-full md:max-w-[460px] lg:max-w-[542px]
                         mr-4 sm:mr-8 md:mr-10 lg:mr-[40px]
                         text-center md:text-left
                         flex flex-col items-center md:items-start
                         px-4 md:px-0"
              style={{
                maxWidth:
                  window.innerWidth >= 768 && window.innerWidth <= 922
                    ? '420px'
                    : undefined,
              }}
            >
              <h2
                className="text-primary font-poppins font-semibold"
                style={{
                  fontSize: '27px',
                  lineHeight: '33px',
                  letterSpacing: '0.4px',
                }}
              >
                Web & Mobile App Development
              </h2>
              <p className="mt-[20px] text-text font-inter font-normal text-[15px] sm:text-[16px] leading-[1.5] max-w-full">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <div className="mt-[20px] w-full md:w-auto">
                <Button text="LEARN MORE" width={129} />
              </div>
            </div>
          </div>
        </section>

        {/* Digital Strategy Consulting */}
        <section className="max-w-[1440px] mx-auto mt-[80px] px-4 sm:px-6 md:px-0">
          <div className="flex flex-col md:flex-row items-start text-center md:text-left">
            {/* Image Container */}
            <div
              className="order-1 md:order-2 md:mr-[40px] lg:mr-[188px] 
                         w-[260px] sm:w-[300px] md:w-[414px] 
                         mx-auto md:mx-0 flex-shrink-0 self-start
                         md:-mt-[105px]"
            >
              <img
                src={image}
                alt="Digital Strategy Consulting"
                className="w-full h-auto object-contain block"
              />
            </div>

            {/* Text Container */}
            <div
              className="order-2 md:order-1 mt-0 md:mt-0 
                         md:ml-[40px] lg:ml-[188px] max-w-full md:max-w-[460px] lg:max-w-[542px] 
                         mx-auto md:mx-0
                         mr-4 sm:mr-8 md:mr-10 lg:mr-[40px]
                         text-center md:text-left
                         flex flex-col items-center md:items-start
                         px-4 md:px-0"
              style={{
                maxWidth:
                  window.innerWidth >= 768 && window.innerWidth <= 922
                    ? '420px'
                    : undefined,
              }}
            >
              <h2
                className="text-primary font-poppins font-semibold"
                style={{
                  fontSize: '27px',
                  lineHeight: '33px',
                  letterSpacing: '0.4px',
                }}
              >
                Digital Strategy Consulting
              </h2>
              <p className="mt-[20px] text-text font-inter font-normal text-[15px] sm:text-[16px] leading-[1.5] max-w-full">
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <div className="mt-[20px] w-full md:w-auto">
                <Button text="LEARN MORE" width={129} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
