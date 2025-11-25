import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { PageView } from '../types';
import { FadeIn } from './FadeIn';

interface FooterProps {
  navigateTo: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => (
  <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-gray-800">
    <div className="container mx-auto px-4">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
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

        {/* Quick Links */}
     <FadeIn delay={100}>
  <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-900">
    Shop
  </h4>

  <ul className="space-y-3 text-sm text-gray-500">

    <li><button onClick={() => navigateTo('PHOOL')} className="hover:text-pink-500 transition-colors">Phool (Make your Own bouquet)</button></li>

    <li><button onClick={() => navigateTo('BOUQUET')} className="hover:text-pink-500 transition-colors">Bouquet</button></li>

    <li><button onClick={() => navigateTo('PLUSHIES')} className="hover:text-pink-500 transition-colors">Plushies</button></li>

    <li><button onClick={() => navigateTo('POTS')} className="hover:text-pink-500 transition-colors">Pots</button></li>

    <li><button onClick={() => navigateTo('BAGS')} className="hover:text-pink-500 transition-colors">Bags</button></li>

    <li><button onClick={() => navigateTo('HOME_DECOR')} className="hover:text-pink-500 transition-colors">Home decor accessories</button></li>

    <li><button onClick={() => navigateTo('FLOWER_ARR')} className="hover:text-pink-500 transition-colors">Flower Arrangements</button></li>

    <li><button onClick={() => navigateTo('KIDS_TOYS')} className="hover:text-pink-500 transition-colors">Kids toys</button></li>

    <li><button onClick={() => navigateTo('KEYCHAINS')} className="hover:text-pink-500 transition-colors">Keychains and Car hangings</button></li>

    <li><button onClick={() => navigateTo('VALENTINES')} className="hover:text-pink-500 transition-colors">Valentines</button></li>

    <li><button onClick={() => navigateTo('HAIR_ACCESSORIES')} className="hover:text-pink-500 transition-colors">Hair accessories</button></li>

    <li><button onClick={() => navigateTo('PHOOL_KI_TOKRI')} className="hover:text-pink-500 transition-colors">Phool ki Tokri</button></li>

    <li><button onClick={() => navigateTo('THROWS')} className="hover:text-pink-500 transition-colors">Flower bouquet Throws / blankets</button></li>

  </ul>
</FadeIn>


        {/* Information */}
        <FadeIn delay={200}>
           <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-900">Information</h4>
           <ul className="space-y-3 text-sm text-gray-500">
            <li><button onClick={() => navigateTo(PageView.OUR_STORY)} className="hover:text-pink-500 transition-colors">Our Story</button></li>
            <li><button onClick={() => navigateTo(PageView.CONTACT)} className="hover:text-pink-500 transition-colors">Contact Us</button></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Shipping Policy</a></li>
           </ul>
        </FadeIn>

        {/* Newsletter */}
        <FadeIn delay={300}>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-900">Newsletter</h4>
          <p className="text-gray-500 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="flex flex-col gap-2">
             <input type="email" placeholder="Enter your email" className="bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-pink-500 rounded-sm" />
             <button className="bg-black text-white px-4 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-sm shadow-md">Subscribe</button>
          </form>
        </FadeIn>
      </div>

      {/* Bottom Section */}
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
