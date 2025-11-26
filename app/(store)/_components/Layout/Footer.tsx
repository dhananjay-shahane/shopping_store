"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FadeIn } from '../UI/FadeIn';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <FadeIn delay={0} className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold tracking-tighter">
                <span className="text-yellow-400">SUI</span>
                <span className="text-pink-400 ml-1">DHAGA</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Handcrafted with love for the little ones. Combining tradition with modern comfort to make every moment special.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-all"><Facebook size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-all"><Instagram size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-all"><Youtube size={18}/></a>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-900">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/category/phool" className="hover:text-pink-500 transition-colors">Phool (Make your Own bouquet)</Link></li>
              <li><Link href="/category/bouquet" className="hover:text-pink-500 transition-colors">Bouquet</Link></li>
              <li><Link href="/category/plushies" className="hover:text-pink-500 transition-colors">Plushies</Link></li>
              <li><Link href="/category/pots" className="hover:text-pink-500 transition-colors">Pots</Link></li>
              <li><Link href="/category/bags" className="hover:text-pink-500 transition-colors">Bags</Link></li>
              <li><Link href="/category/home-decor" className="hover:text-pink-500 transition-colors">Home decor accessories</Link></li>
              <li><Link href="/category/flower-arrangements" className="hover:text-pink-500 transition-colors">Flower Arrangements</Link></li>
              <li><Link href="/category/toys" className="hover:text-pink-500 transition-colors">Kids toys</Link></li>
              <li><Link href="/category/keychains" className="hover:text-pink-500 transition-colors">Keychains and Car hangings</Link></li>
              <li><Link href="/category/valentines" className="hover:text-pink-500 transition-colors">Valentines</Link></li>
              <li><Link href="/category/hair-accessories" className="hover:text-pink-500 transition-colors">Hair accessories</Link></li>
              <li><Link href="/category/tokri" className="hover:text-pink-500 transition-colors">Phool ki Tokri</Link></li>
              <li><Link href="/category/blankets" className="hover:text-pink-500 transition-colors">Flower bouquet Throws / blankets</Link></li>
            </ul>
          </FadeIn>

          <FadeIn delay={200}>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-900">Information</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/studio" className="hover:text-pink-500 transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-pink-500 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Shipping Policy</a></li>
            </ul>
          </FadeIn>

          <FadeIn delay={300}>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-900">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Enter your email" className="bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-pink-500 rounded-sm" />
              <button type="button" className="bg-black text-white px-4 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-sm shadow-md">Subscribe</button>
            </form>
          </FadeIn>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">© 2025 Sui Dhaga. All Rights Reserved.</p>
          <div className="flex gap-2">
            <div className="h-6 w-10 bg-gray-100 rounded"></div>
            <div className="h-6 w-10 bg-gray-100 rounded"></div>
            <div className="h-6 w-10 bg-gray-100 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
