import React from 'react';
import Link from 'next/link';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import ProductCard from '@/components/Product/ProductCard';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[700px] bg-gray-100 flex items-center justify-center text-center px-4 overflow-hidden">
        <img src="https://picsum.photos/seed/kidsbanner1/1920/1080" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Hero"/>
        <div className="relative z-10 max-w-3xl">
           <span className="inline-block px-3 py-1 bg-white/30 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-4 rounded-full border border-white/40">New Collection</span>
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Explore our latest selections</h1>
           <Link href="/shop" className="inline-block bg-white text-gray-900 px-8 py-3 md:px-10 md:py-4 font-bold rounded-sm shadow-xl uppercase text-xs tracking-widest hover:bg-pink-500 hover:text-white transition-all">
             Shop Collection
           </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-light text-gray-900 mb-12">New Arrivals</h2>
           <div className="flex flex-wrap justify-center gap-8">
              {CATEGORIES.map(cat => (
                <Link key={cat.id} href={`/category/${cat.name.toLowerCase()}`} className="group flex flex-col items-center">
                   <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-pink-200 transition-all mb-4">
                      <img src={cat.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform"/>
                   </div>
                   <span className="text-xs font-bold uppercase tracking-widest">{cat.name}</span>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-light mb-12">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {PRODUCTS.slice(0, 4).map(p => (
                  <ProductCard key={p.id} product={p} />
               ))}
            </div>
            <div className="text-center mt-12">
               <Link href="/shop" className="border-b border-gray-900 pb-1 text-xs font-bold uppercase tracking-widest">View All</Link>
            </div>
         </div>
      </section>
    </>
  );
}