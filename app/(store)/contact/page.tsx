
"use client";

import React, { useState } from 'react';
import { MapPin, Mail, Phone, ChevronUp, ChevronDown } from 'lucide-react';
import { FAQS } from '@/constants';

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="bg-[#FCE4DC] py-16 text-center mb-12">
        <h1 className="text-4xl md:text-5xl text-[#1a1a1a] font-normal tracking-wide uppercase">CONTACT US</h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
           {/* Contact Info */}
           <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-6">Have a question about an order or a custom request? Fill out the form or reach us via:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-pink-500"><MapPin size={20}/></div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">Our Studio</h4>
                      <p className="text-gray-500 text-sm">123 Fashion Avenue, Creative District, Lahore, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-pink-500"><Mail size={20}/></div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">Email Us</h4>
                      <p className="text-gray-500 text-sm">hello@suidhaga.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-pink-500"><Phone size={20}/></div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">Call Us</h4>
                      <p className="text-gray-500 text-sm">+92 300 1234567</p>
                      <p className="text-xs text-gray-400">Mon-Sat, 9am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-2">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 text-left transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-800">{faq.question}</span>
                        {openFaqIndex === idx ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                      </button>
                      {openFaqIndex === idx && (
                        <div className="p-4 bg-white text-sm text-gray-600 leading-relaxed border-t border-gray-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
           </div>

           {/* Contact Form */}
           <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Name</label>
                      <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-pink-500 transition-colors" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Email</label>
                      <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-pink-500 transition-colors" placeholder="your@email.com" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Subject</label>
                    <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-pink-500 transition-colors">
                       <option>General Inquiry</option>
                       <option>Order Status</option>
                       <option>Custom Order</option>
                       <option>Returns/Exchange</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Message</label>
                    <textarea rows={5} className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-pink-500 transition-colors" placeholder="How can we help?"></textarea>
                 </div>
                 <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-md">
                    Send Message
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
}
