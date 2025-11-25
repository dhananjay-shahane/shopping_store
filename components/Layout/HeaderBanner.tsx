"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeaderBanner() {
  const announcements = [
    "Make your own bouquet",
    "Free shipping above 1099",
    "New Collection Live Now"
  ];
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
  const prev = () => setCurrentAnnouncement((prev) => (prev - 1 + announcements.length) % announcements.length);

  return (
    <div className="bg-[#FCE4DC] h-12 flex justify-center items-center px-4 relative z-50 shrink-0 text-[#1a1a1a]">
      <button 
        onClick={prev} 
        className="absolute left-4 md:left-8 p-1 hover:opacity-60 transition-opacity text-gray-800"
        aria-label="Previous"
      >
        <ChevronLeft size={16} strokeWidth={1.5}/>
      </button>
      
      <span key={currentAnnouncement} className="text-[15px] tracking-wide animate-in fade-in duration-500 font-normal">
        {announcements[currentAnnouncement]}
      </span>
      
      <button 
        onClick={next} 
        className="absolute right-4 md:right-8 p-1 hover:opacity-60 transition-opacity text-gray-800"
        aria-label="Next"
      >
        <ChevronRight size={16} strokeWidth={1.5}/>
      </button>
    </div>
  );
}