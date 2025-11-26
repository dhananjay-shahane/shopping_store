"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/app/_shared/context/CartContext';
import { X, Minus, Plus, CreditCard } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity, cartTotal, clearCart } = useCart();

  const handlePayment = () => {
    alert('Payment Successful! Thank you for your order.');
    clearCart();
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="bg-accent py-16 text-center mb-12">
         <h1 className="text-4xl md:text-5xl text-foreground font-normal tracking-wide uppercase">YOUR SHOPPING CART</h1>
      </div>

      <div className="container mx-auto px-4">
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-neutral-50 rounded-lg">
            <p className="text-neutral-500 mb-6">Your cart is currently empty.</p>
            <Link href="/shop" className="inline-block bg-foreground text-background px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-neutral-800 transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 border-b border-neutral-100 pb-6">
                  <div className="w-24 h-32 bg-neutral-100 rounded-sm overflow-hidden shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-foreground">{item.product.name}</h3>
                        <p className="text-sm text-neutral-500 mt-1">Size: {item.size} | Type: {item.type}</p>
                        {item.embroideryName && <p className="text-xs text-primary mt-1">+ Embroidery</p>}
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-error">
                        <X size={20} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-neutral-200 rounded-sm">
                        <button onClick={() => updateCartQuantity(item.id, -1)} className="p-2 hover:bg-neutral-50"><Minus size={14}/></button>
                        <span className="px-4 py-1 text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, 1)} className="p-2 hover:bg-neutral-50"><Plus size={14}/></button>
                      </div>
                      <p className="font-bold text-foreground">Rs. {(item.product.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-96 bg-neutral-50 p-8 h-fit rounded-sm">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="flex justify-between mb-4 text-sm">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium">Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-6 text-sm">
                <span className="text-neutral-600">Shipping</span>
                <span className="text-neutral-500 italic">Calculated at checkout</span>
              </div>
              <div className="border-t border-neutral-200 pt-4 mb-6 flex justify-between">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-lg">Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <button 
                onClick={handlePayment}
                className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-xs font-bold hover:bg-neutral-800 transition-colors flex justify-center items-center gap-2"
              >
                <CreditCard size={16}/> Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}