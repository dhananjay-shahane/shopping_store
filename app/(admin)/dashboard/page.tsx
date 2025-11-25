import React from 'react';
import { PRODUCTS } from '@/lib/data';

export default function Dashboard() {
  return (
    <div>
       <h2 className="text-2xl font-bold mb-6">Overview</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded shadow-sm">
             <h3 className="text-gray-500 text-sm">Total Products</h3>
             <p className="text-3xl font-bold text-gray-800">{PRODUCTS.length}</p>
          </div>
          <div className="bg-white p-6 rounded shadow-sm">
             <h3 className="text-gray-500 text-sm">Orders</h3>
             <p className="text-3xl font-bold text-gray-800">12</p>
          </div>
          <div className="bg-white p-6 rounded shadow-sm">
             <h3 className="text-gray-500 text-sm">Revenue</h3>
             <p className="text-3xl font-bold text-gray-800">Rs. 45,000</p>
          </div>
       </div>

       <div className="bg-white rounded shadow-sm overflow-hidden">
          <table className="w-full text-left">
             <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
                <tr>
                   <th className="p-4">Product</th>
                   <th className="p-4">Price</th>
                   <th className="p-4">Category</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-gray-100">
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