
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
  isUser: boolean; // true for customer, false for store reply
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

export enum PageView {
  HOME = 'HOME',
  ADMIN = 'ADMIN',
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',
  OUR_STORY = 'OUR_STORY',
  CONTACT = 'CONTACT',
  LOGIN = 'LOGIN',
  CART = 'CART',
  COLLECTIONS = 'COLLECTIONS',
  SUB_COLLECTION = 'SUB_COLLECTION',
  SHOP = 'SHOP',
  Bouquet= 'Bouquet',
  Plushies = 'Plushies',
}

export interface CartItem {
  id: string; // Unique ID for the cart item (productID + variants)
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
