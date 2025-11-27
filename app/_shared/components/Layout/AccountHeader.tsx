"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useAuth } from "@/app/_shared/context/AuthContext";

export default function AccountHeader() {
  const { user, isAuthenticated, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setUserMenuOpen(false);
    router.push('/');
  };

  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-semibold text-neutral-900">
            SUIDHAGA
          </Link>
          
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/shop"
              className="text-neutral-600 hover:text-neutral-900"
            >
              Shop
            </Link>
            <Link
              href="/orders"
              className={`text-neutral-600 hover:text-neutral-900 ${pathname === "/orders" ? "underline underline-offset-4" : ""}`}
            >
              Orders
            </Link>
          </nav>
        </div>

        {isAuthenticated && (
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-1 text-neutral-700 hover:text-neutral-900"
            >
              <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center">
                <User size={18} strokeWidth={1.5} />
              </div>
              {userMenuOpen ? (
                <ChevronUp size={14} strokeWidth={1.5} />
              ) : (
                <ChevronDown size={14} strokeWidth={1.5} />
              )}
            </button>
            
            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-neutral-200 rounded-lg shadow-xl z-50">
                <div className="p-4 border-b border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center">
                      <User size={20} className="text-neutral-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-neutral-900 truncate">{user?.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="py-2">
                  <Link
                    href="/profile"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/orders"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                  >
                    Orders
                  </Link>
                </div>
                
                <div className="border-t border-neutral-100 py-2">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
