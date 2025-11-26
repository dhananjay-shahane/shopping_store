"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, ChevronUp, ChevronDown } from "lucide-react";
import { FAQS } from "@/app/_shared/constants";

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="bg-accent py-16 text-center mb-12">
        <h1 className="text-4xl md:text-5xl text-foreground font-normal tracking-wide uppercase">
          CONTACT US
        </h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-neutral-600 mb-6">
                Have a question about an order or a custom request? Fill out the
                form or reach us via:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-100 p-3 rounded-full text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 text-sm">
                      Our Studio
                    </h4>
                    <p className="text-neutral-500 text-sm">
                      123 Fashion Avenue, Creative District, Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neutral-100 p-3 rounded-full text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 text-sm">
                      Email Us
                    </h4>
                    <p className="text-neutral-500 text-sm">
                      hello@suidhaga.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neutral-100 p-3 rounded-full text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 text-sm">
                      Call Us
                    </h4>
                    <p className="text-neutral-500 text-sm">+92 300 1234567</p>
                    <p className="text-xs text-neutral-400">
                      Mon-Sat, 9am - 6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl shadow-lg border border-neutral-100 p-8 md:p-10">
            <h3 className="text-2xl font-light text-foreground mb-6">
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-700 mb-2">
                  Subject
                </label>
                <select className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:border-primary transition-colors">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Custom Order</option>
                  <option>Returns/Exchange</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:border-primary transition-colors"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button className="w-full bg-foreground text-background py-4 font-bold uppercase tracking-widest text-xs hover:bg-neutral-800 transition-all shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
