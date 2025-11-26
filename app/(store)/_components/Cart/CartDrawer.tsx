"use client";

import React from 'react';
import { X, Minus, Plus, CreditCard } from 'lucide-react';
import { useCart } from '@/app/_shared/context/CartContext';

export const CartDrawer = () => {
  const { isCartOpen, setCartOpen, cart, removeFromCart, updateCartQuantity, cartTotal, clearCart } = useCart();

  const handlePayment = () => {
    alert("Razorpay Payment would trigger here in production.");
    clearCart();
  };

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]" onClick={() => setCartOpen(false)} />
      )}
      
      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-light text-gray-900">Shopping Cart</h2>
          <button onClick={() => setCartOpen(false)} className="p-2 text-gray-500 hover:text-red-500"><X size={24} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-gray-500">Your cart is empty.</p>
              <button onClick={() => setCartOpen(false)} className="bg-gray-100 px-6 py-2 rounded text-sm font-medium">Continue Shopping</button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-28 bg-gray-50 rounded-sm overflow-hidden shrink-0">
                    <img src={item.product.image} className="w-full h-full object-cover" alt={item.product.name}/>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="font-medium text-sm text-gray-900">{item.product.name}</h4>
                        <button onClick={() => removeFromCart(item.id)}><X size={16} className="text-gray-400 hover:text-red-500"/></button>
                      </div>
                      <p className="text-xs text-gray-500">{item.size} / {item.type}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex border rounded-sm">
                        <button onClick={() => updateCartQuantity(item.id, -1)} className="px-2 py-1"><Minus size={12}/></button>
                        <span className="px-2 text-xs py-1">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, 1)} className="px-2 py-1"><Plus size={12}/></button>
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
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold">Rs. {cartTotal.toLocaleString()}</span>
            </div>
            <button onClick={handlePayment} className="w-full bg-black text-white py-4 font-bold uppercase text-xs tracking-widest hover:bg-gray-800 transition-colors flex justify-center items-center gap-2">
              <CreditCard size={16}/> Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
