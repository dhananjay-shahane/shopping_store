"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Order, CartItem, ShippingAddress, OrderTimeline } from '../types';

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'timeline' | 'createdAt' | 'updatedAt'>) => Order;
  getOrder: (id: string) => Order | undefined;
  updateOrderStatus: (id: string, status: Order['status']) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('suidhaga_orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('suidhaga_orders', JSON.stringify(orders));
  }, [orders]);

  const generateOrderId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `ORD-${timestamp}-${random}`.toUpperCase();
  };

  const createInitialTimeline = (): OrderTimeline[] => {
    const now = new Date().toISOString();
    return [
      {
        status: 'Order Placed',
        date: now,
        description: 'Your order has been placed successfully',
        completed: true
      },
      {
        status: 'Payment Confirmed',
        date: now,
        description: 'Payment has been received',
        completed: true
      },
      {
        status: 'Processing',
        date: '',
        description: 'Your order is being prepared',
        completed: false
      },
      {
        status: 'Shipped',
        date: '',
        description: 'Your order has been shipped',
        completed: false
      },
      {
        status: 'Delivered',
        date: '',
        description: 'Your order has been delivered',
        completed: false
      }
    ];
  };

  const addOrder = (orderData: Omit<Order, 'id' | 'timeline' | 'createdAt' | 'updatedAt'>): Order => {
    const now = new Date().toISOString();
    const newOrder: Order = {
      ...orderData,
      id: generateOrderId(),
      timeline: createInitialTimeline(),
      createdAt: now,
      updatedAt: now
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  const getOrder = (id: string): Order | undefined => {
    return orders.find(order => order.id === id);
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders(prev => prev.map(order => {
      if (order.id === id) {
        const now = new Date().toISOString();
        const updatedTimeline = order.timeline.map(item => {
          if (status === 'processing' && item.status === 'Processing') {
            return { ...item, completed: true, date: now };
          }
          if (status === 'shipped' && (item.status === 'Processing' || item.status === 'Shipped')) {
            return { ...item, completed: true, date: item.date || now };
          }
          if (status === 'delivered') {
            return { ...item, completed: true, date: item.date || now };
          }
          return item;
        });
        return { ...order, status, timeline: updatedTimeline, updatedAt: now };
      }
      return order;
    }));
  };

  return (
    <OrderContext.Provider value={{
      orders,
      addOrder,
      getOrder,
      updateOrderStatus
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
