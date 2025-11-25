
import React, { useState } from 'react';
import { ChevronDown, Check, Minus, Plus, Send } from 'lucide-react';
import { Product, PageView, CartItem } from '../types';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailProps {
  product: Product;
  addToCart: (item: CartItem) => void;
  navigateTo: (view: PageView) => void;
  setCartOpen: (open: boolean) => void;
  relatedProducts: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ 
  product, 
  addToCart, 
  navigateTo, 
  setCartOpen, 
  relatedProducts,
  onProductClick
}) => {
  const [selectedSize, setSelectedSize] = useState('Newborn');
  const [selectedType, setSelectedType] = useState('Kurta');
  const [quantity, setQuantity] = useState(1);
  const [addEmbroidery, setAddEmbroidery] = useState(false);
  
  const sizes = ['Newborn', '0-3 M', '3-6 M', '6-12 M', '1-2 Y', '2-3 Y', '3-4 Y', '4-5 Y', '5-6 Y'];
  
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
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-xs uppercase tracking-widest text-gray-500 mb-8">
         <span className="cursor-pointer hover:text-pink-500" onClick={() => navigateTo(PageView.HOME)}>Home</span> / 
         <span className="text-gray-900 mx-1">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Images Grid */}
        <div className="w-full lg:w-3/5">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Main large image */}
             <div className="md:col-span-2 aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
             </div>
             {/* Sub images (simulated with same image for now) */}
             <div className="aspect-square bg-gray-100 overflow-hidden rounded-sm">
                <img src={product.image} alt="Detail 1" className="w-full h-full object-cover hover:scale-110 transition-transform"/>
             </div>
             <div className="aspect-square bg-gray-100 overflow-hidden rounded-sm">
                <img src={product.image} alt="Detail 2" className="w-full h-full object-cover hover:scale-110 transition-transform"/>
             </div>
             <div className="aspect-square bg-gray-100 overflow-hidden rounded-sm">
                <img src={product.image} alt="Detail 3" className="w-full h-full object-cover hover:scale-110 transition-transform"/>
             </div>
             <div className="aspect-square bg-gray-100 overflow-hidden rounded-sm">
                <img src={product.image} alt="Detail 4" className="w-full h-full object-cover hover:scale-110 transition-transform"/>
             </div>
           </div>
        </div>

        {/* Details */}
        <div className="w-full lg:w-2/5 sticky top-24 self-start">
           <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">PHOOLDHAAGE</h4>
           <h1 className="text-4xl text-gray-900 font-light mb-4">{product.name}</h1>
           <p className="text-xl text-gray-800 font-medium mb-6">Rs. {product.price.toLocaleString()}.00</p>
           
           <p className="text-gray-500 text-sm leading-relaxed mb-8 border-b border-gray-100 pb-8">
             {product.description} Soft, durable fabric. Perfect for lively days or festive occasions. Cheerful and eye-catching.
           </p>

           <div className="space-y-6">
              {/* Size */}
              <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Size</label>
                 <div className="relative">
                   <select 
                      value={selectedSize} 
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-sm appearance-none bg-white focus:outline-none focus:border-pink-500 text-sm"
                   >
                     {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                   </select>
                   <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={16}/>
                 </div>
              </div>

              {/* Type */}
              <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Type</label>
                 <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedType('Kurta')}
                      className={`px-6 py-2 border text-sm transition-all ${selectedType === 'Kurta' ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-300 hover:border-gray-800'}`}
                    >
                      Kurta
                    </button>
                    <button 
                      onClick={() => setSelectedType('Kurta & Pajama')}
                      className={`px-6 py-2 border text-sm transition-all ${selectedType === 'Kurta & Pajama' ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-300 hover:border-gray-800'}`}
                    >
                      Kurta & Pajama
                    </button>
                 </div>
              </div>

              {/* Embroidery Option */}
              <div className="flex items-center gap-3 py-2">
                 <div 
                   className={`w-5 h-5 border rounded cursor-pointer flex items-center justify-center transition-colors ${addEmbroidery ? 'bg-pink-500 border-pink-500' : 'border-gray-300'}`}
                   onClick={() => setAddEmbroidery(!addEmbroidery)}
                 >
                   {addEmbroidery && <Check size={14} className="text-white"/>}
                 </div>
                 <label className="text-sm text-gray-600 cursor-pointer select-none" onClick={() => setAddEmbroidery(!addEmbroidery)}>
                   Add Embroidery Name - PKR 500
                 </label>
              </div>

              {/* Quantity */}
              <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Quantity</label>
                 <div className="flex w-32 items-center border border-gray-300 rounded-sm">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                      <Minus size={14} />
                    </button>
                    <input type="text" readOnly value={quantity} className="flex-1 text-center text-white text-sm font-medium w-full focus:outline-none" />
                    <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                      <Plus size={14} />
                    </button>
                 </div>
              </div>
              
              <div className="text-[10px] text-gray-500 font-bold tracking-widest pt-2">
                 50% DEPOSIT REQUIRED. DELIVERY WITHIN 10 DAYS.
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                 <button 
                   onClick={handleAddToCart}
                   className="w-full py-4 border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                 >
                   Add to cart
                 </button>
                 <button 
                   onClick={() => { handleAddToCart(); setCartOpen(true); }}
                   className="w-full py-4 bg-gray-200 text-gray-900 text-xs font-bold uppercase tracking-widest hover:bg-gray-300 transition-all"
                 >
                   Buy it now
                 </button>
                 
                 <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-500 mt-2">
                   <Send size={16} /> Share
                 </button>
              </div>
           </div>
        </div>

        
      </div>
      {/* Similar Items */}
        <div className="mt-24 pt-12 border-t border-gray-100">
           <h3 className="text-2xl text-gray-900 mb-8">You may also like</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((p, idx) => (
                 <ProductCard key={p.id} product={p} delay={idx * 100} onClick={onProductClick} />
              ))}
           </div>
        </div>
    </div>
  );
};
