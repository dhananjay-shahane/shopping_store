"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/_shared/context/AuthContext';
import { useEffect } from 'react';

export default function OrdersPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-6">Orders</h1>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center py-8">
            <h2 className="text-lg font-medium text-neutral-900 mb-2">No orders yet</h2>
            <p className="text-neutral-500 mb-4">Go to store to place an order.</p>
            <Link
              href="/shop"
              className="inline-block text-blue-600 hover:text-blue-700 font-medium"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-neutral-200 mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/refund" className="text-blue-600 hover:underline">Refund policy</Link>
            <Link href="/shipping" className="text-blue-600 hover:underline">Shipping</Link>
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy policy</Link>
            <Link href="/terms" className="text-blue-600 hover:underline">Terms of service</Link>
            <Link href="/contact" className="text-blue-600 hover:underline">Contact information</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
