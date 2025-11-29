export interface ProductColor {
  name: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  isNew?: boolean;
  hasVariants?: boolean;
  colors?: ProductColor[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialMessage {
  isUser: boolean;
  text?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  platform: 'instagram' | 'whatsapp';
  time: string;
  messages: TestimonialMessage[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  size?: string;
  type?: string;
  color?: string;
  giftWrap?: boolean;
  customMessage?: string;
  embroideryName?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface OrderTimeline {
  status: string;
  date: string;
  description: string;
  completed: boolean;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  pinCode: string;
  phone: string;
  country: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  email: string;
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  paymentId: string;
  paymentMethod: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  timeline: OrderTimeline[];
  createdAt: string;
  updatedAt: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}
