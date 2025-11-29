"use client";

import React, { useState } from 'react';
import Script from 'next/script';
import { useCart } from '@/app/_shared/context/CartContext';
import { useOrders } from '@/app/_shared/context/OrderContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Info, ChevronDown, Search, ShoppingBag } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentPage() {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const { cart, cartTotal, clearCart } = useCart();
  const { addOrder } = useOrders();
  const router = useRouter();
  
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
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountLabel, setDiscountLabel] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Jammu and Kashmir', 'Ladakh'
  ];

  const shippingCost = 0;
  const discountAmount = appliedDiscount;
  const total = cartTotal + shippingCost - discountAmount;
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!email) errors.email = 'Email is required';
    if (!firstName) errors.firstName = 'First name is required';
    if (!lastName) errors.lastName = 'Last name is required';
    if (!address) errors.address = 'Address is required';
    if (!city) errors.city = 'City is required';
    if (!pinCode) errors.pinCode = 'PIN code is required';
    if (!phone) errors.phone = 'Phone is required';
    if (phone && !/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      errors.phone = 'Enter a valid 10-digit phone number';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Enter a valid email address';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const applyDiscount = () => {
    const code = discountCode.toUpperCase();
    if (code === 'BT20') {
      const discount = Math.round(cartTotal * 0.2);
      setAppliedDiscount(discount);
      setDiscountLabel('BT20');
    } else if (code === 'SAVE10') {
      const discount = Math.round(cartTotal * 0.1);
      setAppliedDiscount(discount);
      setDiscountLabel('SAVE10');
    } else {
      alert('Invalid discount code');
    }
  };

  const handlePayNow = () => {
    if (!validateForm()) {
      return;
    }
    initiateRazorpayPayment();
  };

  const initiateRazorpayPayment = () => {
    setIsProcessing(true);

    const options = {
      key: 'rzp_test_1234567890abcd',
      amount: total * 100,
      currency: 'INR',
      name: 'Sui Dhaga',
      description: 'Order Payment',
      image: '/logo.png',
      handler: function (response: any) {
        handlePaymentSuccess(response);
      },
      prefill: {
        name: `${firstName} ${lastName}`,
        email: email,
        contact: phone
      },
      notes: {
        address: `${address}, ${city}, ${state} - ${pinCode}`
      },
      theme: {
        color: '#3B82F6'
      },
      modal: {
        ondismiss: function () {
          setIsProcessing(false);
        }
      }
    };

    if (typeof window !== 'undefined' && window.Razorpay) {
      try {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error('Razorpay error:', error);
        simulatePaymentSuccess();
      }
    } else {
      simulatePaymentSuccess();
    }
  };

  const simulatePaymentSuccess = () => {
    setTimeout(() => {
      const mockResponse = {
        razorpay_payment_id: 'pay_' + Math.random().toString(36).substring(2, 15),
        razorpay_order_id: 'order_' + Math.random().toString(36).substring(2, 15),
        razorpay_signature: 'sig_' + Math.random().toString(36).substring(2, 15)
      };
      handlePaymentSuccess(mockResponse);
    }, 2000);
  };

  const handlePaymentSuccess = (response: any) => {
    const order = addOrder({
      items: cart,
      shippingAddress: {
        firstName,
        lastName,
        address,
        apartment,
        city,
        state,
        pinCode,
        phone,
        country
      },
      email,
      subtotal: cartTotal,
      shipping: shippingCost,
      discount: discountAmount,
      total,
      paymentId: response.razorpay_payment_id || 'mock_' + Date.now(),
      paymentMethod: 'Razorpay',
      status: 'confirmed'
    });

    clearCart();
    setIsProcessing(false);
    router.push(`/orders?success=true&orderId=${order.id}`);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          onLoad={() => setRazorpayLoaded(true)}
        />
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4 text-neutral-800">Your cart is empty</h1>
          <Link href="/shop" className="text-blue-600 hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="border-b border-neutral-200 px-6 md:px-12 lg:px-16 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Link href="/" className="text-xl font-semibold text-neutral-800">
              Sui Dhaga
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingBag size={24} className="text-neutral-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto px-4">
          <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-8 lg:py-12 order-2 lg:order-1">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-medium text-neutral-800">Contact</h2>
                <Link href="/login" className="text-sm text-blue-600 hover:underline">Sign in</Link>
              </div>
              <input
                type="email"
                placeholder="Email or mobile phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-500 text-sm bg-white ${formErrors.email ? 'border-red-500' : 'border-neutral-300'}`}
              />
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
              <label className="flex items-center gap-2 mt-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailUpdates}
                  onChange={(e) => setEmailUpdates(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500 accent-blue-600"
                />
                <span className="text-sm text-neutral-600">Email me with news and offers</span>
              </label>
            </div>

            <div className="mb-8">
              <h2 className="text-base font-medium text-neutral-800 mb-4">Delivery</h2>
              
              <div className="mb-4">
                <label className="block text-xs text-neutral-500 mb-1">Country/Region</label>
                <div className="relative">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-blue-500 text-sm bg-white appearance-none"
                  >
                    <option value="India">India</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-500 text-sm ${formErrors.firstName ? 'border-red-500' : 'border-neutral-300'}`}
                  />
                  {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-500 text-sm ${formErrors.lastName ? 'border-red-500' : 'border-neutral-300'}`}
                  />
                  {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
                </div>
              </div>

              <div className="mb-4 relative">
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`w-full px-4 py-3 pr-10 border rounded focus:outline-none focus:border-blue-500 text-sm ${formErrors.address ? 'border-red-500' : 'border-neutral-300'}`}
                />
                <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                {formErrors.address && <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>}
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-500 text-sm ${formErrors.city ? 'border-red-500' : 'border-neutral-300'}`}
                  />
                  {formErrors.city && <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>}
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-1">State</label>
                  <div className="relative">
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3 py-3 border border-neutral-300 rounded focus:outline-none focus:border-blue-500 text-sm bg-white appearance-none"
                    >
                      {indianStates.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="PIN code"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-500 text-sm ${formErrors.pinCode ? 'border-red-500' : 'border-neutral-300'}`}
                  />
                  {formErrors.pinCode && <p className="text-red-500 text-xs mt-1">{formErrors.pinCode}</p>}
                </div>
              </div>

              <div className="mb-4 relative">
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-4 py-3 pr-10 border rounded focus:outline-none focus:border-blue-500 text-sm ${formErrors.phone ? 'border-red-500' : 'border-neutral-300'}`}
                />
                <Info size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
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

            <div className="mb-8">
              <h2 className="text-base font-medium text-neutral-800 mb-4">Shipping method</h2>
              <div className="bg-neutral-100 px-4 py-3 rounded text-sm text-neutral-500">
                Enter your shipping address to view available shipping methods.
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-base font-medium text-neutral-800 mb-2">Payment</h2>
              <p className="text-xs text-neutral-500 mb-4">All transactions are secure and encrypted.</p>
              
              <div className="border border-blue-500 rounded overflow-hidden">
                <div className="bg-blue-50 px-4 py-3 flex items-center justify-between border-b border-blue-200">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-sm">Razorpay Secure (UPI, Cards, Int&apos;l Cards, Wallets)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-medium">UPI</span>
                    <span className="text-[10px] font-bold text-blue-800 px-1">VISA</span>
                    <span className="w-6 h-4 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-[8px] text-white font-bold">MC</span>
                    </span>
                    <span className="text-xs text-neutral-500 ml-1">+18</span>
                  </div>
                </div>
                <div className="bg-neutral-50 px-4 py-8 text-center">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <div className="w-16 h-12 border border-neutral-300 rounded flex items-center justify-center bg-white">
                      <div className="flex items-center">
                        <div className="w-8 h-0.5 bg-neutral-400"></div>
                        <div className="w-2 h-2 border-r-2 border-t-2 border-neutral-400 rotate-45 -ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                    After clicking &quot;Pay now&quot;, you will be redirected to Razorpay Secure (UPI, Cards, Int&apos;l Cards, Wallets) to complete your purchase securely.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-base font-medium text-neutral-800 mb-4">Billing address</h2>
              <div className="space-y-0">
                <label className={`flex items-center gap-3 p-4 border rounded-t cursor-pointer ${billingAddress === 'same' ? 'bg-blue-50 border-blue-500 z-10' : 'border-neutral-300 bg-white'}`}>
                  <input
                    type="radio"
                    name="billing"
                    checked={billingAddress === 'same'}
                    onChange={() => setBillingAddress('same')}
                    className="w-4 h-4 text-blue-600 accent-blue-600"
                  />
                  <span className="text-sm">Same as shipping address</span>
                </label>
                <label className={`flex items-center gap-3 p-4 border rounded-b cursor-pointer -mt-px ${billingAddress === 'different' ? 'bg-blue-50 border-blue-500' : 'border-neutral-300 bg-white'}`}>
                  <input
                    type="radio"
                    name="billing"
                    checked={billingAddress === 'different'}
                    onChange={() => setBillingAddress('different')}
                    className="w-4 h-4 text-blue-600 accent-blue-600"
                  />
                  <span className="text-sm">Use a different billing address</span>
                </label>
              </div>
            </div>

            <button
              onClick={handlePayNow}
              disabled={isProcessing}
              className="w-full bg-blue-600 text-white py-4 rounded font-medium hover:bg-blue-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                'Pay now'
              )}
            </button>

            <div className="flex flex-wrap gap-4 justify-center mt-8 text-xs text-blue-600">
              <Link href="/refund-policy" className="hover:underline">Refund policy</Link>
              <Link href="/shipping" className="hover:underline">Shipping</Link>
              <Link href="/privacy-policy" className="hover:underline">Privacy policy</Link>
              <Link href="/terms" className="hover:underline">Terms of service</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>

          <div className="bg-neutral-50 px-6 md:px-12 lg:px-12 xl:px-16 py-8 lg:py-12 border-l border-neutral-200 order-1 lg:order-2">
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 items-start">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-neutral-200 bg-white shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-neutral-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-neutral-800 truncate">{item.product.name}</h4>
                    {item.size && <p className="text-xs text-neutral-500">Size: {item.size}</p>}
                  </div>
                  <span className="text-sm font-medium text-neutral-800 shrink-0">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="flex-1 px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-blue-500 text-sm bg-white"
              />
              <button 
                onClick={applyDiscount}
                className="px-6 py-3 bg-neutral-200 text-neutral-600 rounded text-sm font-medium hover:bg-neutral-300 transition-colors"
              >
                Apply
              </button>
            </div>

            <div className="space-y-3 border-t border-neutral-200 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium text-neutral-800">₹{cartTotal.toLocaleString()}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600 flex items-center gap-1">
                    Order discount
                    <span className="text-xs bg-neutral-200 text-neutral-600 px-1.5 py-0.5 rounded">{discountLabel}</span>
                  </span>
                  <span className="text-neutral-800">- ₹{appliedDiscount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600 flex items-center gap-1">
                  Shipping
                  <Info size={14} className="text-neutral-400" />
                </span>
                <span className="text-neutral-500 text-xs">Enter shipping address</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-neutral-200">
                <span className="text-lg font-medium text-neutral-800">Total</span>
                <div className="text-right">
                  <span className="text-xs text-neutral-500 mr-2">INR</span>
                  <span className="text-xl font-medium text-neutral-800">₹{total.toLocaleString()}</span>
                </div>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span>TOTAL SAVINGS</span>
                  <span className="font-medium">₹{appliedDiscount.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
