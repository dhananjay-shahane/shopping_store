import React from 'react';
import { PageView } from '../types';
import { CATEGORIES } from '../constants';
import { FadeIn } from '../components/FadeIn';

interface CollectionsProps {
  navigateTo: (view: PageView) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ navigateTo }) => {
  return (
    <div className="bg-white min-h-screen pb-20">

      {/* Updated Header */}
      <div className="bg-[#FCE4DC] py-16 text-center mb-12">
        <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">
          ALL COLLECTIONS
        </h1>
      </div>

      <div className="container mx-auto px-4">

        {/* SHOP BY CATEGORY */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center uppercase tracking-widest">
          Shop By Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <FadeIn key={cat.id} delay={idx * 60}>
              <div
                className="group cursor-pointer text-center"
                onClick={() => navigateTo(cat.page)}
              >
                <div className="aspect-square rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-pink-300 transition-all mb-4 mx-auto max-w-[200px]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-sm md:text-base font-bold text-gray-800 uppercase tracking-widest group-hover:text-pink-500 transition-colors">
                  {cat.name}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
};
