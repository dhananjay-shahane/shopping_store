import React from 'react';
import { PRODUCTS } from '@/app/_shared/constants';
import ProductCard from '../_components/Product/ProductCard';

export default function BestsellerPage() {
  const bestsellers = PRODUCTS.filter(p => p.price > 3000);

  return (
    <div className="min-h-screen bg-background pb-16">
       <div className="bg-accent py-16 text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-foreground font-normal tracking-wide uppercase">BESTSELLERS</h1>
       </div>
       
       <div className="container mx-auto px-4">
         <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">Top Rated</span>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestsellers.map(p => (
               <ProductCard key={p.id} product={p} />
            ))}
         </div>
       </div>
    </div>
  );
}