import React, { useState } from 'react';
import { Product } from '../types';
import { Plus, Trash2, Edit2, X, Check } from 'lucide-react';

interface AdminPanelProps {
  products: Product[];
  onAddProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ products, onAddProduct, onDeleteProduct, onClose }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: 'Boys',
    price: 0,
    description: '',
    image: 'https://picsum.photos/seed/new/400/600'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      onAddProduct({
        id: Date.now().toString(),
        name: newProduct.name,
        price: Number(newProduct.price),
        category: newProduct.category || 'Boys',
        description: newProduct.description || '',
        image: newProduct.image || 'https://picsum.photos/seed/new/400/600',
        isNew: true
      });
      setIsAdding(false);
      setNewProduct({ name: '', category: 'Boys', price: 0, description: '', image: 'https://picsum.photos/seed/new/400/600' });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-100 z-50 overflow-y-auto">
      <div className="bg-white shadow-md p-4 sticky top-0 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <button onClick={onClose} className="text-gray-600 hover:text-red-500 flex items-center gap-2">
          <X size={20} /> Exit Admin
        </button>
      </div>

      <div className="container mx-auto p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm">Total Products</h3>
            <p className="text-3xl font-bold text-gray-800">{products.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h3 className="text-gray-500 text-sm">Categories</h3>
            <p className="text-3xl font-bold text-gray-800">2</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h3 className="text-gray-500 text-sm">Pending Orders</h3>
            <p className="text-3xl font-bold text-gray-800">12</p>
          </div>
        </div>

        {/* Product Management */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Product Inventory</h2>
            <button 
              onClick={() => setIsAdding(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus size={18} /> Add Product
            </button>
          </div>

          {isAdding && (
            <div className="p-6 bg-gray-50 border-b border-gray-100">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Product Name" 
                  className="p-2 border rounded"
                  value={newProduct.name}
                  onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                  required
                />
                <input 
                  type="number" 
                  placeholder="Price" 
                  className="p-2 border rounded"
                  value={newProduct.price || ''}
                  onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})}
                  required
                />
                 <select 
                  className="p-2 border rounded"
                  value={newProduct.category}
                  onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                >
                  <option value="Boys">Boys</option>
                  <option value="Girls">Girls</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Image URL" 
                  className="p-2 border rounded"
                  value={newProduct.image}
                  onChange={e => setNewProduct({...newProduct, image: e.target.value})}
                />
                <textarea 
                  placeholder="Description" 
                  className="p-2 border rounded md:col-span-2"
                  value={newProduct.description}
                  onChange={e => setNewProduct({...newProduct, description: e.target.value})}
                />
                <div className="md:col-span-2 flex justify-end gap-2">
                  <button 
                    type="button" 
                    onClick={() => setIsAdding(false)} 
                    className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Save Product
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map(product => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full object-cover" />
                      <span className="font-medium text-gray-800">{product.name}</span>
                    </td>
                    <td className="p-4 text-gray-600">
                      <span className={`px-2 py-1 rounded text-xs ${product.category === 'Boys' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}`}>
                        {product.category}
                      </span>
                    </td>
                    <td className="p-4 text-gray-800">Rs. {product.price.toLocaleString()}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="text-blue-500 hover:bg-blue-50 p-2 rounded"><Edit2 size={16} /></button>
                        <button onClick={() => onDeleteProduct(product.id)} className="text-red-500 hover:bg-red-50 p-2 rounded"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
