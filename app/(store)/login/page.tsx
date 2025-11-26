"use client";

import React, { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-accent py-16 text-center mb-12">
         <h1 className="text-4xl md:text-5xl text-foreground font-normal tracking-wide uppercase">LOGIN / REGISTER</h1>
      </div>

      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-background border border-neutral-100 rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col">
           <div className="flex border-b border-neutral-100">
             <button 
               onClick={() => setIsLogin(true)}
               className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-colors ${isLogin ? 'bg-background text-primary border-b-2 border-primary' : 'bg-neutral-50 text-neutral-500 hover:text-neutral-700'}`}
             >
               Login
             </button>
             <button 
               onClick={() => setIsLogin(false)}
               className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-colors ${!isLogin ? 'bg-background text-primary border-b-2 border-primary' : 'bg-neutral-50 text-neutral-500 hover:text-neutral-700'}`}
             >
               Register
             </button>
           </div>

           <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                 <h2 className="text-2xl font-light text-foreground mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                 <p className="text-neutral-500 text-sm">{isLogin ? 'Please enter your details' : 'Join our community today'}</p>
              </div>

              <form className="space-y-5">
                 {!isLogin && (
                   <div>
                     <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">Full Name</label>
                     <input type="text" className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-primary" placeholder="John Doe" />
                   </div>
                 )}
                 <div>
                   <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">Email</label>
                   <input type="email" className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-primary" placeholder="hello@example.com" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">Password</label>
                   <input type="password" className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-primary" placeholder="••••••••" />
                 </div>

                 <button className="w-full bg-foreground text-background py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-neutral-800 transition-all shadow-lg mt-4">
                   {isLogin ? 'Sign In' : 'Sign Up'}
                 </button>
              </form>

              {isLogin && (
                <div className="text-center mt-6">
                   <a href="#" className="text-xs text-neutral-500 hover:text-primary hover:underline">Forgot password?</a>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}