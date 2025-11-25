
"use client";

import React, { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-[#FCE4DC] py-16 text-center mb-12">
         <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">LOGIN / REGISTER</h1>
      </div>

      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col">
           {/* Header Switcher */}
           <div className="flex border-b border-gray-100">
             <button 
               onClick={() => setIsLogin(true)}
               className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-colors ${isLogin ? 'bg-white text-pink-500 border-b-2 border-pink-500' : 'bg-gray-50 text-gray-500 hover:text-gray-700'}`}
             >
               Login
             </button>
             <button 
               onClick={() => setIsLogin(false)}
               className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-colors ${!isLogin ? 'bg-white text-pink-500 border-b-2 border-pink-500' : 'bg-gray-50 text-gray-500 hover:text-gray-700'}`}
             >
               Register
             </button>
           </div>

           <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                 <h2 className="text-2xl font-light text-gray-900 mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                 <p className="text-gray-500 text-sm">{isLogin ? 'Please enter your details' : 'Join our community today'}</p>
              </div>

              <form className="space-y-5">
                 {!isLogin && (
                   <div>
                     <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Full Name</label>
                     <input type="text" className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-pink-500" placeholder="John Doe" />
                   </div>
                 )}
                 <div>
                   <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Email</label>
                   <input type="email" className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-pink-500" placeholder="hello@example.com" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Password</label>
                   <input type="password" className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-pink-500" placeholder="••••••••" />
                 </div>

                 <button className="w-full bg-black text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-lg mt-4">
                   {isLogin ? 'Sign In' : 'Sign Up'}
                 </button>
              </form>

              {isLogin && (
                <div className="text-center mt-6">
                   <a href="#" className="text-xs text-gray-500 hover:text-pink-500 hover:underline">Forgot password?</a>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
