
"use client";

import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/app/_shared/context/CartContext';
import { PRODUCTS } from '@/app/_shared/constants';

const BouquetSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState('Yellow tulip');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const bouquetProducts = PRODUCTS.filter(p => p.category === 'Bouquet').slice(0, 5);

  const colors = [
    { name: 'Yellow tulip', color: '#F5C542' },
    { name: 'Red', color: '#DC2626' },
    { name: 'Brown 1', color: '#92400E' },
    { name: 'Brown 2', color: '#78350F' },
    { name: 'Brown 3', color: '#451A03' },
    { name: 'Pink 1', color: '#F472B6' },
    { name: 'Pink 2', color: '#EC4899' },
    { name: 'Pink 3', color: '#DB2777' },
    { name: 'Pink 4', color: '#BE185D' },
    { name: 'Navy', color: '#1E3A8A' },
  ];

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart({
        id: `${selectedProduct.id}-${Date.now()}`,
        product: selectedProduct,
        quantity,
        size: 'Standard',
        type: selectedColor,
      });
      setSelectedProduct(null);
      setQuantity(1);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Pink Header Section */}
        <div className="bg-[#E8C5C5] py-8 px-6 mb-8 rounded-sm">
          <h2 className="text-2xl md:text-3xl font-medium text-center text-neutral-800">
            Make your own bouquet
          </h2>
        </div>

        {/* Instructions */}
        <div className="mb-8 space-y-2 text-neutral-600 text-sm max-w-2xl">
          <p>1. Add your favourite flowers to the cart</p>
          <p>2. Add a choosing of your favourite sheet</p>
          <p>3. That's it! We'll prepare an exceptional bouquet for you!</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {bouquetProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-square bg-neutral-50 mb-3 overflow-hidden relative rounded-sm border border-neutral-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-foreground text-background px-2 py-1 text-[10px] font-semibold uppercase tracking-wider">
                    Sale
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1 text-foreground">{product.name}</h3>
                <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">PHOOLDHAGE</p>
                <div className="flex items-center gap-2 mb-3">
                  {product.isNew && (
                    <span className="text-xs text-neutral-400 line-through">Rs. {(product.price + 100).toLocaleString()}.00</span>
                  )}
                  <span className="text-sm font-semibold text-foreground">Rs. {product.price.toLocaleString()}.00</span>
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full border border-foreground py-2 text-xs font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 rounded-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-sm text-neutral-500 tabular-nums">1/3</span>
          <button className="p-2 hover:text-primary transition-colors" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="p-2 hover:text-primary transition-colors" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-foreground text-background px-10 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-sm rounded-sm">
            View all
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div 
              className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-in zoom-in-95 fade-in duration-200 shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full z-10 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="aspect-square bg-neutral-50 rounded-sm overflow-hidden">
                  <img 
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">PHOOLDHAGE</p>
                  <h2 className="text-3xl font-light mb-4 text-foreground">{selectedProduct.name}</h2>
                  
                  <div className="flex items-center gap-3 mb-6">
                    {selectedProduct.isNew && (
                      <span className="text-sm text-neutral-400 line-through">
                        Rs. {(selectedProduct.price + 100).toLocaleString()}.00
                      </span>
                    )}
                    <span className="text-xl font-semibold text-foreground">Rs. {selectedProduct.price.toLocaleString()}.00</span>
                  </div>

                  <p className="text-xs text-neutral-500 mb-6">
                    <span className="underline cursor-pointer hover:text-foreground">Shipping</span> calculated at checkout.
                  </p>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-3 text-foreground">
                      Color: {selectedColor}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`w-9 h-9 rounded-full border-2 transition-all ${
                            selectedColor === color.name 
                              ? 'border-foreground scale-110 shadow-md' 
                              : 'border-neutral-300 hover:border-neutral-400 hover:scale-105'
                          }`}
                          style={{ backgroundColor: color.color }}
                          title={color.name}
                          aria-label={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-3 text-foreground">Quantity</label>
                    <div className="flex items-center border border-neutral-300 w-36 rounded-sm overflow-hidden">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-12 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <input 
                        type="text" 
                        value={quantity}
                        readOnly
                        className="flex-1 text-center text-sm focus:outline-none bg-transparent"
                      />
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-12 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <button
                      onClick={handleAddToCart}
                      className="w-full border-2 border-foreground py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 rounded-sm"
                    >
                      Add to cart
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="w-full bg-foreground text-background py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-sm rounded-sm"
                    >
                      Choose options
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default BouquetSection;
