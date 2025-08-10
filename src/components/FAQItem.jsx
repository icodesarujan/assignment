import React, { useState } from 'react';

export default function FAQ({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full bg-[#FAF8FF] px-5">
      <div
        onClick={() => setOpen(!open)}
        className={`flex justify-between items-start cursor-pointer select-none w-full py-[12px] font-inter text-[18px] sm:text-[22px] font-medium tracking-[0em] ${
          open ? 'text-primary' : 'text-black'
        }`}
      >
        <span>{question}</span>
        <span
          className={`ml-[20px] text-[18px] sm:text-[22px] ${
            open ? 'text-primary' : 'text-black'
          }`}
          style={{ lineHeight: '1.2', userSelect: 'none' }}
        >
          {open ? '−' : '+'}
        </span>
      </div>

      {open && (
        <p className="mt-[13px] mb-[10px] font-inter font-normal text-[16px] sm:text-[18px] leading-[30px] tracking-[0em] text-[#6F6C90] w-full text-left">
          {answer}
        </p>
      )}
    </div>
  );
}
