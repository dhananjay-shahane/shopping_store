// pages/OurStory.tsx

import React from 'react';
import { PageView } from '../types';

export const OurStory: React.FC = () => (
  <div className="bg-white min-h-screen">
     {/* Section 1: Meet the Face */}
     <div className="bg-[#FCE4DC] py-12">
        <div className="text-center mb-8">
           <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900">MEET THE FACE BEHIND THE FLOWERS</h2>
        </div>
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-5xl mx-auto">
              <div className="w-full md:w-1/2">
                 <img src="https://picsum.photos/seed/founder/600/700" alt="Founder" className="w-full h-auto object-cover shadow-lg" />
              </div>
              <div className="w-full md:w-1/2 text-left space-y-4">
                 <h3 className="text-xl font-bold text-gray-900">Mahek Satyen Choksi</h3>
                 <p className="text-sm text-gray-700 leading-relaxed">
                   Hi I am Mahek, the founder of Phooldhaage. In an era where modern technology often overshadows traditional crafts, I'm a young entrepreneur that is revitalizing the timeless art of crochet while carrying forward a cherished family legacy.
                 </p>
                 <p className="text-sm text-gray-700 leading-relaxed">
                   I'm a dynamic 27-year-old who represents the fourth generation of a family deeply rooted in the crochet tradition. My journey embodies a unique blend of heritage and innovation, as I've merged our passion and skill of an age-old technique with contemporary designs to carve out my niche in the creative world.
                 </p>
              </div>
           </div>
        </div>
     </div>

     {/* Section 2: About Us */}
     <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
           <h2 className="text-3xl text-[#1a1a1a] font-normal uppercase tracking-wide mb-8">ABOUT US</h2>
           <div className="space-y-6 text-sm text-gray-600 leading-loose">
              <p>
                Welcome to Phooldhaage, where tradition meets creativity. We are a passionate business dedicated to preserving and celebrating India's rich heritage of crochet artistry. Based in Surat, we work with skilled women artisans whose expertise and creativity breathe life into each handcrafted piece.
              </p>
              <p>
                Our mission is two-fold: to sustain the timeless craft of crochet and to empower the talented women who practice it. By providing fair wages and a supportive work environment, we ensure that our artisans can thrive while keeping their craft alive for future generations.
              </p>
              <p>
                Every item in our collection tells a story of dedication and skill, blending traditional techniques with contemporary designs. From intricate weaves to vibrant home decor, our products are a testament to the enduring beauty of Indian handicrafts.
              </p>
              <p className="font-medium">
                Join us on this journey to support sustainable fashion and celebrate artisanal excellence. At Phooldhaage we are committed to making a difference, one stitch at a time.
              </p>
           </div>
        </div>
     </div>

     {/* Section 3: Our Artisans */}
     <div className="bg-[#FCE4DC] py-20">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                 <img src="https://picsum.photos/seed/artisans/600/600" alt="Artisans" className="w-full h-auto shadow-xl" />
              </div>
              <div className="w-full md:w-1/2">
                 <h2 className="text-3xl text-[#1a1a1a] font-normal uppercase tracking-wide mb-6">OUR ARTISANS</h2>
                 <p className="text-sm text-gray-700 leading-relaxed mb-8">
                   At the heart of our business are the talented women artisans who bring our crochet flowers to life. Each piece is handcrafted with love and skill, reflecting their rich cultural heritage and dedication to sustainable craftsmanship. By supporting our artisans, you're not only acquiring unique, beautiful creations but also empowering local communities and fostering a brighter future.
                 </p>
                 <button className="inline-block bg-[#1a1a1a] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                    EXPLORE OUR COLLECTION
                 </button>
              </div>
           </div>
        </div>
     </div>
  </div>
);