export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  isNew?: boolean;
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
  size: string;
  type: string;
  embroideryName?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}
