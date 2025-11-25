import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
             <h3 className="text-2xl font-bold mb-4"><span className="text-yellow-400">SUI</span><span className="text-pink-400">DHAGA</span></h3>
             <p className="text-gray-500 text-sm mb-6">Handcrafted with love for the little ones. Bringing joy through creativity and tradition.</p>
             <div className="flex gap-4">
                <Facebook size={18} className="text-gray-600 hover:text-pink-500 transition-colors cursor-pointer"/>
                <Instagram size={18} className="text-gray-600 hover:text-pink-500 transition-colors cursor-pointer"/>
                <Youtube size={18} className="text-gray-600 hover:text-pink-500 transition-colors cursor-pointer"/>
             </div>
          </div>
          
          {/* Updated Shop Categories */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
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
          </div>
          
          {/* Info Section */}
          <div>
             <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Info</h4>
             <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/studio" className="hover:text-pink-500 transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-pink-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-pink-500 transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-pink-500 transition-colors">Returns & Exchanges</Link></li>
             </ul>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-xs text-gray-400 mb-4">Subscribe for updates and exclusive offers.</p>
            <input type="email" placeholder="Enter your email" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm mb-2 rounded-sm focus:outline-none focus:border-pink-500 transition-colors" />
            <button className="bg-black text-white px-4 py-3 text-sm font-bold uppercase w-full rounded-sm hover:bg-gray-800 transition-colors">Subscribe</button>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Sui Dhaga. All Rights Reserved.</p>
          <div className="flex gap-2">
             <div className="h-5 w-8 bg-gray-100 rounded-sm"></div>
             <div className="h-5 w-8 bg-gray-100 rounded-sm"></div>
             <div className="h-5 w-8 bg-gray-100 rounded-sm"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}