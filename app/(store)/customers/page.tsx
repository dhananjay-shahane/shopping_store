"use client";

import React from 'react';
import { TestimonialSlider } from '../_components/UI/TestimonialSlider';

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
       <div className="bg-accent py-16 text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-foreground font-normal tracking-wide uppercase">CUSTOMER LOVE</h1>
       </div>
       
       <div className="container mx-auto px-4 text-center mb-16">
          <p className="text-neutral-500 max-w-2xl mx-auto">See what parents across the country are saying about their Sui Dhaga experience.</p>
       </div>
       
       <div className="mb-20">
          <TestimonialSlider />
       </div>

       <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               '/images/products/crochet_flower_bouqu_3b4a27c4.jpg',
               '/images/products/crochet_rose_flower__b3d2bb80.jpg',
               '/images/products/crochet_sunflower_ha_470a6b18.jpg',
               '/images/products/crochet_lily_flower__cfbf45a0.jpg',
               '/images/products/crochet_flower_bouqu_0db0fe72.jpg',
               '/images/products/crochet_tulip_flower_d600607c.jpg',
               '/images/products/crochet_plushie_toy__da4b85af.jpg',
               '/images/products/flower_arrangement_p_f02bb313.jpg',
             ].map((img, i) => (
               <img key={i} src={img} className="w-full aspect-square object-cover rounded-sm hover:opacity-90 transition-opacity" alt={`Customer photo ${i + 1}`}/>
             ))}
          </div>
       </div>
    </div>
  );
}