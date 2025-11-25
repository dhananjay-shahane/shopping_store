
"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus } from 'lucide-react';
import { RazorpayPayment } from '@/components/RazorpayPayment';

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity, cartTotal, clearCart } = useCart();

  const handlePaymentSuccess = () => {
    alert('Payment Successful! Thank you for your order.');
    clearCart();
  };

  const handlePaymentFailure = (error: any) => {
    alert(`Payment Failed: ${error.description || 'Something went wrong.'}`);
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="bg-[#FCE4DC] py-16 text-center mb-12">
         <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">YOUR SHOPPING CART</h1>
      </div>

      <div className="container mx-auto px-4">
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-lg">
            <p className="text-gray-500 mb-6">Your cart is currently empty.</p>
            <Link href="/shop" className="inline-block bg-black text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items */}
            <div className="flex-1 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 border-b border-gray-100 pb-6">
                  <div className="w-24 h-32 bg-gray-100 rounded-sm overflow-hidden shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">Size: {item.size} | Type: {item.type}</p>
                        {item.embroideryName && <p className="text-xs text-pink-500 mt-1">+ Embroidery</p>}
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                        <X size={20} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-gray-200 rounded-sm">
                        <button onClick={() => updateCartQuantity(item.id, -1)} className="p-2 hover:bg-gray-50"><Minus size={14}/></button>
                        <span className="px-4 py-1 text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, 1)} className="p-2 hover:bg-gray-50"><Plus size={14}/></button>
                      </div>
                      <p className="font-bold text-gray-900">Rs. {(item.product.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="w-full lg:w-96 bg-gray-50 p-8 h-fit rounded-sm">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="flex justify-between mb-4 text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-6 text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-500 italic">Calculated at checkout</span>
              </div>
              <div className="border-t border-gray-200 pt-4 mb-6 flex justify-between">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-lg">Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <Link href="/checkout" className="block w-full bg-black text-white text-center py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-colors">
                Proceed to Checkout
              </Link>
              
              <div className="mt-4">
                 <p className="text-xs text-center text-gray-400 mb-2">Or pay instantly</p>
                 <RazorpayPayment amount={cartTotal} onSuccess={handlePaymentSuccess} onFailure={handlePaymentFailure} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
