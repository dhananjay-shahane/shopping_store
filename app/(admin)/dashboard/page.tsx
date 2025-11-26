import React from 'react';
import { PRODUCTS } from '@/app/_shared/constants';

export default function Dashboard() {
  return (
    <div>
       <h2 className="text-2xl font-bold mb-6">Overview</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-background p-6 rounded shadow-sm">
             <h3 className="text-neutral-500 text-sm">Total Products</h3>
             <p className="text-3xl font-bold text-neutral-800">{PRODUCTS.length}</p>
          </div>
          <div className="bg-background p-6 rounded shadow-sm">
             <h3 className="text-neutral-500 text-sm">Orders</h3>
             <p className="text-3xl font-bold text-neutral-800">12</p>
          </div>
          <div className="bg-background p-6 rounded shadow-sm">
             <h3 className="text-neutral-500 text-sm">Revenue</h3>
             <p className="text-3xl font-bold text-neutral-800">Rs. 45,000</p>
          </div>
       </div>

       <div className="bg-background rounded shadow-sm overflow-hidden">
          <table className="w-full text-left">
             <thead className="bg-neutral-50 text-neutral-600 text-xs uppercase">
                <tr>
                   <th className="p-4">Product</th>
                   <th className="p-4">Price</th>
                   <th className="p-4">Category</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-neutral-100">
                {PRODUCTS.map(p => (
                   <tr key={p.id}>
                      <td className="p-4">{p.name}</td>
                      <td className="p-4">Rs. {p.price}</td>
                      <td className="p-4">{p.category}</td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>
  );
}