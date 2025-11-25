
"use client";

import React from 'react';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/Product/ProductCard';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="bg-[#FCE4DC] py-16 text-center mb-12">
         <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">PRODUCTS</h1>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} />
           ))}
        </div>
      </div>
    </div>
  );
}
