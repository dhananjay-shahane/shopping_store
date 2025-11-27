"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/_shared/context/AuthContext';
import AccountHeader from '@/app/_shared/components/Layout/AccountHeader';
import AccountFooter from '@/app/_shared/components/Layout/AccountFooter';

export default function OrdersPage() {
  const { isAuthenticated } = useAuth();
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
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <AccountHeader />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold text-neutral-900 mb-6">Orders</h1>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center py-8">
              <h2 className="text-lg font-medium text-neutral-900 mb-2">No orders yet</h2>
              <p className="text-neutral-500">Go to store to place an order.</p>
            </div>
          </div>
        </div>
      </main>

      <AccountFooter />
    </div>
  );
}
