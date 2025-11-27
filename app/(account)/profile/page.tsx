"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/_shared/context/AuthContext';
import { Pencil, Info, Plus } from 'lucide-react';
import AccountHeader from '@/app/_shared/components/Layout/AccountHeader';
import AccountFooter from '@/app/_shared/components/Layout/AccountFooter';

interface Address {
  id: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export default function ProfilePage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [name, setName] = useState(user?.name || '');
  const [isEditingName, setIsEditingName] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (user?.name) {
      setName(user.name);
    }
  }, [user]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleSaveName = () => {
    setIsEditingName(false);
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const address: Address = {
      id: Date.now().toString(),
      ...newAddress
    };
    setAddresses([...addresses, address]);
    setShowAddAddress(false);
    setNewAddress({
      name: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      pincode: '',
      phone: ''
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <AccountHeader />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold text-neutral-900 mb-6">Profile</h1>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-neutral-500">Name</span>
              {!isEditingName && (
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Pencil size={14} />
                </button>
              )}
            </div>
            
            {isEditingName ? (
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleSaveName}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsEditingName(false);
                    setName(user?.name || '');
                  }}
                  className="px-4 py-2 border border-neutral-300 rounded hover:bg-neutral-50 text-sm"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <p className="text-neutral-900 mb-4">{name || ''}</p>
            )}

            <div className="mb-1">
              <span className="text-sm text-neutral-500">Email</span>
            </div>
            <p className="text-neutral-900">{user.email}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-base font-medium text-neutral-900">Addresses</h2>
              <button
                onClick={() => setShowAddAddress(true)}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                <Plus size={16} />
                Add
              </button>
            </div>

            {addresses.length === 0 && !showAddAddress && (
              <div className="flex items-center gap-2 bg-neutral-100 rounded p-4">
                <Info size={16} className="text-neutral-500" />
                <span className="text-neutral-600 text-sm">No addresses added</span>
              </div>
            )}

            {showAddAddress && (
              <form onSubmit={handleAddAddress} className="border border-neutral-200 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={newAddress.name}
                      onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                      className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={newAddress.phone}
                      onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                      className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-neutral-600 mb-1">Address Line 1</label>
                    <input
                      type="text"
                      value={newAddress.line1}
                      onChange={(e) => setNewAddress({...newAddress, line1: e.target.value})}
                      className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-neutral-600 mb-1">Address Line 2 (Optional)</label>
                    <input
                      type="text"
                      value={newAddress.line2}
                      onChange={(e) => setNewAddress({...newAddress, line2: e.target.value})}
                      className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">City</label>
                    <input
                      type="text"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                      className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">State</label>
                    <input
                      type="text"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                      className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Pincode</label>
                    <input
                      type="text"
                      value={newAddress.pincode}
                      onChange={(e) => setNewAddress({...newAddress, pincode: e.target.value})}
                      className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  >
                    Save Address
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddAddress(false)}
                    className="px-4 py-2 border border-neutral-300 rounded hover:bg-neutral-50 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {addresses.map((address) => (
              <div key={address.id} className="border border-neutral-200 rounded-lg p-4 mb-2">
                <p className="font-medium">{address.name}</p>
                <p className="text-sm text-neutral-600">{address.line1}</p>
                {address.line2 && <p className="text-sm text-neutral-600">{address.line2}</p>}
                <p className="text-sm text-neutral-600">{address.city}, {address.state} {address.pincode}</p>
                <p className="text-sm text-neutral-600">{address.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <AccountFooter />
    </div>
  );
}
