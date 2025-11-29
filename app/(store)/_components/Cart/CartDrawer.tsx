"use client";

import React from 'react';
import Link from 'next/link';
import { X, Minus, Plus, CreditCard } from 'lucide-react';
import { useCart } from '@/app/_shared/context/CartContext';
import { useRouter } from 'next/navigation';

export const CartDrawer = () => {
  const { isCartOpen, setCartOpen, cart, removeFromCart, updateCartQuantity, cartTotal, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/payment');
  };

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-[60]" onClick={() => setCartOpen(false)} />
      )}
      
      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-background z-[70] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-neutral-100 flex justify-between items-center">
          <h2 className="text-xl font-light text-foreground">Shopping Cart</h2>
          <button onClick={() => setCartOpen(false)} className="p-2 text-neutral-500 hover:text-error"><X size={24} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-neutral-500">Your cart is empty.</p>
              <button onClick={() => setCartOpen(false)} className="bg-neutral-100 px-6 py-2 rounded text-sm font-medium">Continue Shopping</button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-28 bg-neutral-50 rounded-sm overflow-hidden shrink-0">
                    <img src={item.product.image} className="w-full h-full object-cover" alt={item.product.name}/>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="font-medium text-sm text-foreground">{item.product.name}</h4>
                        <button onClick={() => removeFromCart(item.id)}><X size={16} className="text-neutral-400 hover:text-error"/></button>
                      </div>
                      <p className="text-xs text-neutral-500">
                        {item.color && <span>{item.color}</span>}
                        {item.giftWrap && <span> | Gift Wrapped</span>}
                      </p>
                      {item.customMessage && (
                        <p className="text-xs text-neutral-400 italic">"{item.customMessage}"</p>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="inline-flex items-center border border-neutral-200 bg-white">
                        <button onClick={() => updateCartQuantity(item.id, -1)} className="w-7 h-7 flex items-center justify-center hover:bg-neutral-50 border-r border-neutral-200"><Minus size={12}/></button>
                        <span className="w-8 text-center text-xs">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, 1)} className="w-7 h-7 flex items-center justify-center hover:bg-neutral-50 border-l border-neutral-200"><Plus size={12}/></button>
                      </div>
                      <span className="text-sm font-medium">Rs. {(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-neutral-50 border-t border-neutral-100">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold">Rs. {cartTotal.toLocaleString()}</span>
            </div>
            <button onClick={handleCheckout} className="w-full bg-foreground text-background py-4 font-bold uppercase text-xs tracking-widest hover:bg-neutral-800 transition-colors flex justify-center items-center gap-2">
              <CreditCard size={16}/> Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};