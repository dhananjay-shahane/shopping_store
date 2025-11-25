
"use client";

import React from 'react';
import { TestimonialSlider } from '@/components/TestimonialSlider';

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
       <div className="bg-[#FCE4DC] py-16 text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">CUSTOMER LOVE</h1>
       </div>
       
       <div className="container mx-auto px-4 text-center mb-16">
          <p className="text-gray-500 max-w-2xl mx-auto">See what parents across the country are saying about their Sui Dhaga experience.</p>
       </div>
       
       <div className="mb-20">
          <TestimonialSlider />
       </div>

       <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
               <img key={i} src={`https://picsum.photos/seed/cust${i}/400/400`} className="w-full h-full object-cover rounded-sm hover:opacity-90 transition-opacity" alt={`Customer ${i}`}/>
             ))}
          </div>
       </div>
    </div>
  );
}
