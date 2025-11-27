"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FadeIn } from "../UI/FadeIn";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-neutral-100 pt-16 pb-8 text-foreground">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <FadeIn delay={0} className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold tracking-tighter">
                <span className="text-secondary">SUI</span>
                <span className="text-primary-400 ml-1">DHAGA</span>
              </div>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Handcrafted with love for the little ones. Combining tradition
              with modern comfort to make every moment special.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-background transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-background transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-background transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-foreground">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>
                <Link
                  href="/category/phool"
                  className="hover:text-primary transition-colors"
                >
                  Phool (Make your Own bouquet)
                </Link>
              </li>
              <li>
                <Link
                  href="/category/bouquet"
                  className="hover:text-primary transition-colors"
                >
                  Bouquet
                </Link>
              </li>
              <li>
                <Link
                  href="/category/plushies"
                  className="hover:text-primary transition-colors"
                >
                  Plushies
                </Link>
              </li>
              <li>
                <Link
                  href="/category/pots"
                  className="hover:text-primary transition-colors"
                >
                  Pots
                </Link>
              </li>
              <li>
                <Link
                  href="/category/bags"
                  className="hover:text-primary transition-colors"
                >
                  Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/category/home-decor"
                  className="hover:text-primary transition-colors"
                >
                  Home decor accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/category/flower-arrangements"
                  className="hover:text-primary transition-colors"
                >
                  Flower Arrangements
                </Link>
              </li>
              <li>
                <Link
                  href="/category/toys"
                  className="hover:text-primary transition-colors"
                >
                  Kids toys
                </Link>
              </li>
              <li>
                <Link
                  href="/category/keychains"
                  className="hover:text-primary transition-colors"
                >
                  Keychains and Car hangings
                </Link>
              </li>
              <li>
                <Link
                  href="/category/valentines"
                  className="hover:text-primary transition-colors"
                >
                  Valentines
                </Link>
              </li>
              <li>
                <Link
                  href="/category/hair-accessories"
                  className="hover:text-primary transition-colors"
                >
                  Hair accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/category/tokri"
                  className="hover:text-primary transition-colors"
                >
                  Phool ki Tokri
                </Link>
              </li>
              <li>
                <Link
                  href="/category/blankets"
                  className="hover:text-primary transition-colors"
                >
                  Flower bouquet Throws / blankets
                </Link>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={200}>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-foreground">
              Information
            </h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>
                <Link
                  href="/studio"
                  className="hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={300}>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-foreground">
              Newsletter
            </h4>
            <p className="text-neutral-500 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-primary rounded-sm"
              />
              <button
                type="button"
                className="bg-foreground text-background px-4 py-3 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors rounded-sm shadow-md"
              >
                Subscribe
              </button>
            </form>
          </FadeIn>
        </div>

        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-xs">
            © 2025 Sui Dhaga. All Rights Reserved.
          </p>
          <div className="flex gap-2">
            <div className="h-6 w-10 bg-neutral-100 rounded"></div>
            <div className="h-6 w-10 bg-neutral-100 rounded"></div>
            <div className="h-6 w-10 bg-neutral-100 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
