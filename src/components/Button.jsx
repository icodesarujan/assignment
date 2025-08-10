import React from "react";

export default function Button({ text, onClick, className = "", width = 214, height = 38 }) {
  const widthClass = `w-[${width}px]`;
  const heightClass = `h-[${height}px]`;

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center ${widthClass} ${heightClass} bg-secondary text-white rounded-[4px] font-inter font-bold text-[14px] sm:text-[16px] tracking-[-0.02em] px-[20px] py-[12px] ${className}`}
    >
      {text}
    </button>
  );
}
