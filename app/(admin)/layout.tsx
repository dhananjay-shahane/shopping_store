import React from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-100">
       <div className="bg-background shadow-md p-4 sticky top-0 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold text-neutral-800">Admin Dashboard</h1>
        <Link href="/" className="text-neutral-600 hover:text-error">
           Exit Admin
        </Link>
      </div>
      <div className="flex">
        <aside className="w-64 bg-background min-h-screen shadow-sm hidden md:block">
           <nav className="p-4 space-y-2">
             <Link href="/dashboard" className="block p-2 hover:bg-primary-50 text-neutral-700 font-medium rounded">Dashboard</Link>
             <Link href="/products" className="block p-2 hover:bg-primary-50 text-neutral-700 font-medium rounded">Products</Link>
             <Link href="/orders" className="block p-2 hover:bg-primary-50 text-neutral-700 font-medium rounded">Orders</Link>
           </nav>
        </aside>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}