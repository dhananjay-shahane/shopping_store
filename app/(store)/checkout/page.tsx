"use client";

import React from 'react';
import { useCart } from '@/app/_shared/context/CartContext';
import Link from 'next/link';
import { CreditCard } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="bg-accent py-16 text-center mb-12">
           <h1 className="text-4xl md:text-5xl text-foreground font-normal tracking-wide uppercase">CHECKOUT</h1>
        </div>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/shop" className="text-primary hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const handleSuccess = () => {
    alert("Payment Successful! Order Placed.");
    clearCart();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="bg-accent py-16 text-center mb-12">
         <h1 className="text-4xl md:text-5xl text-foreground font-normal tracking-wide uppercase">CHECKOUT</h1>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full p-3 border border-neutral-200 rounded-sm focus:border-primary outline-none" />
              <input type="text" placeholder="Last Name" className="w-full p-3 border border-neutral-200 rounded-sm focus:border-primary outline-none" />
            </div>
            <input type="text" placeholder="Address" className="w-full p-3 border border-neutral-200 rounded-sm focus:border-primary outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="City" className="w-full p-3 border border-neutral-200 rounded-sm focus:border-primary outline-none" />
              <input type="text" placeholder="Postal Code" className="w-full p-3 border border-neutral-200 rounded-sm focus:border-primary outline-none" />
            </div>
            <input type="text" placeholder="Phone" className="w-full p-3 border border-neutral-200 rounded-sm focus:border-primary outline-none" />
          </div>

          <div className="bg-neutral-50 p-8 rounded-sm">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Your Order</h2>
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-neutral-600">{item.product.name} x {item.quantity}</span>
                  <span className="font-medium">Rs. {(item.product.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-neutral-200 pt-4 mb-8 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>Rs. {cartTotal.toLocaleString()}</span>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={handleSuccess}
                className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-xs font-bold hover:bg-neutral-800 transition-colors flex justify-center items-center gap-2"
              >
                <CreditCard size={16}/> Complete Purchase
              </button>
              <p className="text-xs text-center text-neutral-400">Secure Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}