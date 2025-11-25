
"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/Product/ProductCard';

export default function CategoryPage() {
  const { slug } = useParams();
  const categoryName = typeof slug === 'string' ? slug.charAt(0).toUpperCase() + slug.slice(1) : '';
  
  const filteredProducts = PRODUCTS.filter(p => 
    p.category.toLowerCase() === (slug as string).toLowerCase() || 
    p.name.toLowerCase().includes((slug as string).toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pb-16">
       <div className="bg-[#FCE4DC] py-16 text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">{categoryName} COLLECTION</h1>
       </div>
       
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredProducts.map(p => (
               <ProductCard key={p.id} product={p}/>
            ))}
         </div>
         {filteredProducts.length === 0 && <p className="text-center text-gray-500 py-12">No products found for this category.</p>}
       </div>
    </div>
  );
}
