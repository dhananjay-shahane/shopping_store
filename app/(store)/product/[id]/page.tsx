"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/app/_shared/constants';
import { useCart } from '@/app/_shared/context/CartContext';
import ProductCard from '../../_components/Product/ProductCard';
import { ChevronDown, Check, Minus, Plus, Send } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, setCartOpen } = useCart();
  
  const product = PRODUCTS.find(p => p.id === params.id);
  
  const [selectedSize, setSelectedSize] = useState('Newborn');
  const [selectedType, setSelectedType] = useState('Kurta');
  const [quantity, setQuantity] = useState(1);
  const [addEmbroidery, setAddEmbroidery] = useState(false);
  
  const sizes = ['Newborn', '0-3 M', '3-6 M', '6-12 M', '1-2 Y', '2-3 Y', '3-4 Y', '4-5 Y', '5-6 Y'];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button onClick={() => router.push('/shop')} className="text-primary hover:underline">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${Date.now()}`,
      product,
      quantity,
      size: selectedSize,
      type: selectedType,
      embroideryName: addEmbroidery ? 'Custom Name' : undefined
    });
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-8">
           <span className="cursor-pointer hover:text-primary" onClick={() => router.push('/')}>Home</span> / 
           <span className="cursor-pointer hover:text-primary mx-1" onClick={() => router.push(`/category/${product.category.toLowerCase()}`)}>{product.category}</span> / 
           <span className="text-foreground mx-1 font-medium">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-3/5">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="md:col-span-2 aspect-[4/5] bg-neutral-100 overflow-hidden rounded-sm group">
                 <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
               </div>
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="aspect-square bg-neutral-100 overflow-hidden rounded-sm group">
                    <img src={product.image} alt={`Detail ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                 </div>
               ))}
             </div>
          </div>

          <div className="w-full lg:w-2/5 sticky top-24 self-start">
             <h4 className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2">PHOOLDHAAGE</h4>
             <h1 className="text-3xl md:text-4xl text-foreground font-light mb-4">{product.name}</h1>
             <p className="text-xl text-neutral-800 font-medium mb-6">Rs. {product.price.toLocaleString()}.00</p>
             
             <p className="text-neutral-600 text-sm leading-relaxed mb-8 border-b border-neutral-100 pb-8">
               {product.description} Designed with comfort and style in mind, utilizing premium fabrics that are gentle on the skin.
             </p>

             <div className="space-y-6">
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest text-neutral-700 mb-2">Size</label>
                   <div className="relative">
                     <select 
                        value={selectedSize} 
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-full p-3 border border-neutral-300 rounded-sm appearance-none bg-background focus:outline-none focus:border-primary text-sm"
                     >
                       {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                     </select>
                     <ChevronDown className="absolute right-3 top-3 text-neutral-400 pointer-events-none" size={16}/>
                   </div>
                </div>

                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest text-neutral-700 mb-2">Type</label>
                   <div className="flex gap-3">
                      <button 
                        onClick={() => setSelectedType('Kurta')}
                        className={`px-6 py-2 border text-sm transition-all ${selectedType === 'Kurta' ? 'bg-foreground text-background border-foreground' : 'bg-background text-neutral-600 border-neutral-300 hover:border-neutral-800'}`}
                      >
                        Kurta
                      </button>
                      <button 
                        onClick={() => setSelectedType('Kurta & Pajama')}
                        className={`px-6 py-2 border text-sm transition-all ${selectedType === 'Kurta & Pajama' ? 'bg-foreground text-background border-foreground' : 'bg-background text-neutral-600 border-neutral-300 hover:border-neutral-800'}`}
                      >
                        Kurta & Pajama
                      </button>
                   </div>
                </div>

                <div className="flex items-center gap-3 py-2">
                   <div 
                     className={`w-5 h-5 border rounded cursor-pointer flex items-center justify-center transition-colors ${addEmbroidery ? 'bg-primary border-primary' : 'border-neutral-300'}`}
                     onClick={() => setAddEmbroidery(!addEmbroidery)}
                   >
                     {addEmbroidery && <Check size={14} className="text-background"/>}
                   </div>
                   <label className="text-sm text-neutral-600 cursor-pointer select-none" onClick={() => setAddEmbroidery(!addEmbroidery)}>
                     Add Embroidery Name - PKR 500
                   </label>
                </div>

                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest text-neutral-700 mb-2">Quantity</label>
                   <div className="inline-flex items-center border border-neutral-300 bg-white">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 border-r border-neutral-300">
                        <Minus size={14} />
                      </button>
                      <input type="text" readOnly value={quantity} className="w-12 text-center text-sm font-medium focus:outline-none h-10 bg-transparent" />
                      <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 border-l border-neutral-300">
                        <Plus size={14} />
                      </button>
                   </div>
                </div>
                
                <div className="text-[10px] text-neutral-500 font-bold tracking-widest pt-2">
                   50% DEPOSIT REQUIRED. DELIVERY WITHIN 10 DAYS.
                </div>

                <div className="flex flex-col gap-3 pt-4">
                   <button 
                     onClick={handleAddToCart}
                     className="w-full py-4 border border-foreground text-foreground text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
                   >
                     Add to cart
                   </button>
                   <button 
                     onClick={() => { handleAddToCart(); setCartOpen(true); }}
                     className="w-full py-4 bg-neutral-200 text-foreground text-xs font-bold uppercase tracking-widest hover:bg-neutral-300 transition-all"
                   >
                     Buy it now
                   </button>
                   
                   <button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-primary mt-2 justify-center">
                     <Send size={16} /> Share
                   </button>
                </div>
             </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-neutral-100">
             <h3 className="text-2xl text-foreground mb-8 font-light">You may also like</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((p, idx) => (
                   <ProductCard key={p.id} product={p} delay={idx * 100} />
                ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}