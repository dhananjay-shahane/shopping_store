
"use client";

import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/constants';
import { FadeIn } from '@/components/FadeIn';

export default function CollectionsPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-[#FCE4DC] py-16 text-center mb-12">
        <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">ALL COLLECTIONS</h1>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FadeIn delay={0}>
            <Link href="/category/Plushies" className="block relative aspect-[16/9] group overflow-hidden cursor-pointer rounded-lg">
              <img src="https://picsum.photos/seed/boyscoll/800/600" alt="Boys" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                 <h2 className="text-3xl md:text-4xl text-white font-bold uppercase tracking-widest">Boys</h2>
              </div>
            </Link>
          </FadeIn>
          <FadeIn delay={100}>
            <Link href="/category/Bouquet" className="block relative aspect-[16/9] group overflow-hidden cursor-pointer rounded-lg">
              <img src="https://picsum.photos/seed/girlscoll/800/600" alt="Girls" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                 <h2 className="text-3xl md:text-4xl text-white font-bold uppercase tracking-widest">Girls</h2>
              </div>
            </Link>
          </FadeIn>
        </div>

        {/* Theme Collections */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center uppercase tracking-widest">Shop By Theme</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <FadeIn key={cat.id} delay={idx * 50}>
              <Link href={`/category/${cat.name.toLowerCase()}`} className="group cursor-pointer text-center block">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-pink-200 transition-all mb-4 mx-auto max-w-[200px]">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-800 uppercase tracking-widest group-hover:text-pink-500 transition-colors">
                  {cat.name}
                </h3>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
