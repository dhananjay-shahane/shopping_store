"use client";

import React, { useState } from 'react';
import { useCart } from '@/app/_shared/context/CartContext';
import Link from 'next/link';
import { Info } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [country, setCountry] = useState('India');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Maharashtra');
  const [pinCode, setPinCode] = useState('');
  const [phone, setPhone] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);
  const [textUpdates, setTextUpdates] = useState(false);
  const [billingAddress, setBillingAddress] = useState('same');
  const [discountCode, setDiscountCode] = useState('');

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-medium mb-4">Your cart is empty</h1>
          <Link href="/shop" className="text-blue-600 hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const handlePayment = () => {
    alert("Razorpay Payment will be triggered. Redirecting to Razorpay Secure (UPI, Cards, Int'l Cards, Wallets) to complete your purchase securely.");
    clearCart();
    window.location.href = "/";
  };

  const shippingCost = 0;
  const total = cartTotal + shippingCost;

  return (
    <div className="min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Form */}
        <div className="px-6 md:px-12 lg:px-16 py-8 lg:py-12 order-2 lg:order-1">
          {/* Contact Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-foreground">Contact</h2>
              <Link href="/login" className="text-sm text-blue-600 hover:underline">Sign in</Link>
            </div>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
            />
            <label className="flex items-center gap-2 mt-3 cursor-pointer">
              <input
                type="checkbox"
                checked={emailUpdates}
                onChange={(e) => setEmailUpdates(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-neutral-600">Email me with news and offers</span>
            </label>
          </div>

          {/* Delivery Section */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-foreground mb-4">Delivery</h2>
            
            <div className="mb-4">
              <label className="block text-xs text-neutral-500 mb-1">Country/Region</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm bg-white"
              >
                <option value="India">India</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
              />
              <div>
                <label className="block text-xs text-neutral-500 mb-1">State</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm bg-white"
                >
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="PIN code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm pr-10"
              />
              <Info size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-neutral-600">Save this information for next time</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={textUpdates}
                  onChange={(e) => setTextUpdates(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-neutral-600">Text me with news and offers</span>
              </label>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-foreground mb-4">Shipping method</h2>
            <div className="bg-neutral-100 px-4 py-3 rounded-md text-sm text-neutral-500">
              Enter your shipping address to view available shipping methods.
            </div>
          </div>

          {/* Payment Section */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-foreground mb-2">Payment</h2>
            <p className="text-xs text-neutral-500 mb-4">All transactions are secure and encrypted.</p>
            
            <div className="border border-blue-500 rounded-md overflow-hidden">
              <div className="bg-blue-50 px-4 py-3 flex items-center justify-between border-b border-blue-200">
                <span className="text-sm font-medium">Razorpay Secure (UPI, Cards, Int'l Cards, Wallets)</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded">UPI</span>
                  <span className="text-xs font-bold text-blue-800">VISA</span>
                  <span className="text-xs font-bold text-orange-500">mastercard</span>
                  <span className="text-xs text-neutral-500">+18</span>
                </div>
              </div>
              <div className="bg-neutral-50 px-4 py-8 text-center">
                <div className="w-16 h-12 mx-auto mb-4 border border-neutral-300 rounded flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-neutral-400"></div>
                </div>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                  After clicking "Pay now", you will be redirected to Razorpay Secure (UPI, Cards, Int'l Cards, Wallets) to complete your purchase securely.
                </p>
              </div>
            </div>
          </div>

          {/* Billing Address */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-foreground mb-4">Billing address</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-4 border border-neutral-300 rounded-md cursor-pointer bg-blue-50 border-blue-500">
                <input
                  type="radio"
                  name="billing"
                  checked={billingAddress === 'same'}
                  onChange={() => setBillingAddress('same')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-sm">Same as shipping address</span>
              </label>
              <label className="flex items-center gap-3 p-4 border border-neutral-300 rounded-md cursor-pointer hover:bg-neutral-50">
                <input
                  type="radio"
                  name="billing"
                  checked={billingAddress === 'different'}
                  onChange={() => setBillingAddress('different')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-sm">Use a different billing address</span>
              </label>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 text-white py-4 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm"
          >
            Pay now
          </button>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-4 justify-center mt-8 text-xs text-blue-600">
            <Link href="/refund-policy" className="hover:underline">Refund policy</Link>
            <Link href="/shipping" className="hover:underline">Shipping</Link>
            <Link href="/privacy-policy" className="hover:underline">Privacy policy</Link>
            <Link href="/terms" className="hover:underline">Terms of service</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-neutral-50 px-6 md:px-12 lg:px-16 py-8 lg:py-12 border-l border-neutral-200 order-1 lg:order-2">
          {/* Cart Items */}
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex gap-4 items-start">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-neutral-200 bg-white shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-neutral-500 text-white text-xs rounded-full flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground">{item.product.name}</h4>
                </div>
                <span className="text-sm font-medium">₹{(item.product.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>

          {/* Discount Code */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="flex-1 px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
            />
            <button className="px-6 py-3 bg-neutral-200 text-neutral-500 rounded-md text-sm font-medium hover:bg-neutral-300 transition-colors">
              Apply
            </button>
          </div>

          {/* Totals */}
          <div className="space-y-3 border-t border-neutral-200 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Subtotal</span>
              <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600 flex items-center gap-1">
                Shipping
                <Info size={14} className="text-neutral-400" />
              </span>
              <span className="text-neutral-500 text-xs">Enter shipping address</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-neutral-200">
              <span className="text-lg font-medium">Total</span>
              <div className="text-right">
                <span className="text-xs text-neutral-500 mr-2">INR</span>
                <span className="text-xl font-medium">₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
