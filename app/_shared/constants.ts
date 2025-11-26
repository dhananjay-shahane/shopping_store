import { Category, FAQItem, Product, Testimonial } from './types';

export const BOUQUET_FLOWERS: Product[] = [
  {
    id: 'f1',
    name: 'The Van Gogh flower(starry night)',
    price: 550,
    originalPrice: 650,
    category: 'Phool',
    image: '/images/products/crochet_flower_bouqu_3b4a27c4.jpg',
    description: 'Beautiful blue daisy inspired by Van Gogh starry night.',
    isNew: true,
    hasVariants: false,
  },
  {
    id: 'f2',
    name: 'Sunflower',
    price: 300,
    category: 'Phool',
    image: '/images/products/crochet_sunflower_ha_470a6b18.jpg',
    description: 'Handcrafted crochet sunflower with vibrant colors.',
    hasVariants: false,
  },
  {
    id: 'f3',
    name: 'Tulip',
    price: 300,
    category: 'Phool',
    image: '/images/products/crochet_tulip_flower_d600607c.jpg',
    description: 'Colorful tulip flowers in various shades.',
    hasVariants: true,
    colors: [
      { name: 'Pink tulip', color: '#F472B6' },
      { name: 'Yellow tulip', color: '#FBBF24' },
      { name: 'Blue tulip', color: '#93C5FD' },
      { name: 'Purple tulip', color: '#C4B5FD' },
    ],
  },
  {
    id: 'f4',
    name: 'Rose Branch',
    price: 480,
    category: 'Phool',
    image: '/images/products/crochet_rose_flower__b3d2bb80.jpg',
    description: 'Beautiful crochet rose branch with multiple blooms.',
    hasVariants: true,
    colors: [
      { name: 'Red rose branch', color: '#DC2626' },
      { name: 'Pink rose branch', color: '#F472B6' },
      { name: 'Yellow rose branch', color: '#FBBF24' },
      { name: 'Purple rose branch', color: '#C4B5FD' },
    ],
  },
  {
    id: 'f5',
    name: 'XL Lily',
    price: 450,
    category: 'Phool',
    image: '/images/products/crochet_lily_flower__cfbf45a0.jpg',
    description: 'Extra large lily flower for statement arrangements.',
    hasVariants: true,
    colors: [
      { name: 'White lily', color: '#FFFFFF' },
      { name: 'Pink lily', color: '#F9A8D4' },
      { name: 'Orange lily', color: '#FB923C' },
    ],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'DIY Crochet Flower Bouquet Kit',
    price: 850,
    category: 'Phool (Make your Own bouquet)',
    image: '/images/products/crochet_flower_bouqu_0db0fe72.jpg',
    description: 'Create your own beautiful crochet flower bouquet with this complete DIY kit. Includes yarn, hooks, and step-by-step instructions.',
    isNew: true,
  },
  {
    id: '2',
    name: 'Classic Rose Crochet Bouquet',
    price: 1500,
    category: 'Bouquet',
    image: '/images/products/crochet_rose_flower__0e5519ba.jpg',
    description: 'Handmade crochet rose bouquet that lasts forever. Perfect for gifts and home decor.',
    isNew: true,
  },
  {
    id: '3',
    name: 'Cute Amigurumi Bear Plushie',
    price: 650,
    category: 'Plushies',
    image: '/images/products/crochet_plushie_toy__da4b85af.jpg',
    description: 'Soft and cuddly handmade crochet teddy bear. Safe for children and perfect for gifting.',
  },
  {
    id: '4',
    name: 'Decorative Ceramic Flower Pot',
    price: 950,
    category: 'Pots',
    image: '/images/products/ceramic_flower_pot_d_13f13055.jpg',
    description: 'Hand-painted ceramic pot perfect for displaying your crochet flowers or real plants.',
  },
  {
    id: '5',
    name: 'Handmade Crochet Tote Bag',
    price: 1200,
    category: 'Bags',
    image: '/images/products/handmade_crochet_bag_d0404505.jpg',
    description: 'Stylish handcrafted crochet bag with beautiful floral patterns. Perfect for everyday use.',
    isNew: true,
  },
  {
    id: '6',
    name: 'Handmade Home Decor Set',
    price: 1800,
    category: 'Home decor accessories',
    image: '/images/products/handmade_home_decor__d9fa4a1e.jpg',
    description: 'Beautiful handcrafted decor pieces to add warmth to your home.',
  },
  {
    id: '7',
    name: 'Pink Flower Arrangement',
    price: 1100,
    category: 'Flower Arrangements',
    image: '/images/products/flower_arrangement_p_f02bb313.jpg',
    description: 'Beautiful ready-made crochet flower arrangement in soft pink tones.',
  },
  {
    id: '8',
    name: 'Handmade Kids Toy Set',
    price: 750,
    category: 'Kids toys',
    image: '/images/products/handmade_kids_toys_c_821ef3ca.jpg',
    description: 'Colorful handmade toys safe for children. Perfect gift for little ones.',
  },
  {
    id: '9',
    name: 'Crochet Heart Keychain',
    price: 199,
    category: 'Keychains and Car hangings',
    image: '/images/products/crochet_keychain_han_a913d7ec.jpg',
    description: 'Adorable handmade crochet heart keychain. Great for bags, keys, or car mirrors.',
  },
  {
    id: '10',
    name: 'Valentine Crochet Gift Box',
    price: 999,
    category: 'Valentines',
    image: '/images/products/handmade_gift_box_fl_f06981ac.jpg',
    description: 'Romantic gift box with handmade crochet flowers and message card. Perfect for your loved one.',
    isNew: true,
  },
  {
    id: '11',
    name: 'Floral Hair Bow Clip',
    price: 150,
    category: 'Hair accessories',
    image: '/images/products/handmade_flower_hair_6a7e89c6.jpg',
    description: 'Cute handmade hair bow clip with floral design. Perfect for girls of all ages.',
  },
  {
    id: '12',
    name: 'Phool ki Tokri Basket',
    price: 499,
    category: 'Phool ki Tokri',
    image: '/images/products/flower_basket_gift_a_b950cc6e.jpg',
    description: 'Beautiful handmade flower basket perfect for gifting on special occasions.',
  },
  {
    id: '13',
    name: 'Crochet Throw Blanket',
    price: 1800,
    category: 'Flower bouquet Throws / blankets',
    image: '/images/products/crochet_blanket_thro_fbc50302.jpg',
    description: 'Soft and cozy handmade crochet throw blanket with beautiful floral patterns.',
    isNew: true,
  }
];

export const CATEGORIES: Category[] = [
  { id: 'c1', name: 'Phool ( Make your Own bouquet )', image: '/images/products/crochet_flower_bouqu_a44aff12.jpg' },
  { id: 'c2', name: 'Bouquet', image: '/images/products/crochet_rose_flower__03a67ba3.jpg' },
  { id: 'c3', name: 'Plushies', image: '/images/products/crochet_plushie_toy__9982db6b.jpg' },
  { id: 'c4', name: 'Pots', image: '/images/products/ceramic_flower_pot_d_097ab9b9.jpg' },
  { id: 'c5', name: 'Bags', image: '/images/products/handmade_crochet_bag_30b3627f.jpg' },
  { id: 'c6', name: 'Home decor accessories', image: '/images/products/handmade_home_decor__286d8497.jpg' },
  { id: 'c7', name: 'Flower Arrangements', image: '/images/products/flower_arrangement_p_200089e2.jpg' },
  { id: 'c8', name: 'Kids toys', image: '/images/products/handmade_kids_toys_c_f061371c.jpg' },
  { id: 'c9', name: 'Keychains and Car hangings', image: '/images/products/crochet_keychain_han_3c2dfc9c.jpg' },
];

export const FAQS: FAQItem[] = [
  { question: "What makes Suidhaga unique?", answer: "We specialize in handcrafted crochet flowers, bouquets, and gifts that last forever. Each piece is made with love and attention to detail by our skilled artisans." },
  { question: "Does Suidhaga handle custom designs?", answer: "Yes, we accept custom orders for special occasions like weddings, birthdays, and anniversaries. Please contact us with your requirements." },
  { question: "How long do crochet flowers last?", answer: "Our crochet flowers are made to last a lifetime! Unlike real flowers, they never wilt and require minimal care." },
  { question: "Why need to pay 50% in advance?", answer: "Since all items are handmade to order, an advance payment helps us purchase quality materials and dedicate time to craft your perfect piece." },
  { question: "How long does shipping take?", answer: "Standard shipping takes 5-7 business days across India. Custom orders may take 10-15 days depending on complexity." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: "T A N U",
    handle: "tanuflorinaaa",
    avatar: "https://ui-avatars.com/api/?name=Tanu&background=0D8ABC&color=fff",
    platform: "instagram",
    time: "5:36 PM",
    messages: [
      { isUser: false, text: "Thank you for your purchase! Hope it makes you smile :)" },
      { isUser: true, text: "Welcome!" },
      { isUser: true, image: "/images/products/crochet_flower_bouqu_b5ac2a93.jpg" },
      { isUser: true, text: "Hey received the order today. It's beautiful beyond what I had imagined. I just loved it!! Thank you so much for all your hard work & dedication." },
      { isUser: false, text: "Thank you so much! This really means a lot. I'm so glad you liked it. Keep supporting!" }
    ]
  },
  {
    id: 't2',
    author: "Ambika.29",
    handle: "ambika_mundhra",
    avatar: "https://ui-avatars.com/api/?name=Ambika&background=pink&color=fff",
    platform: "instagram",
    time: "12:24 PM",
    messages: [
      { isUser: false, text: "Thank you for your order!" },
      { isUser: true, image: "/images/products/crochet_rose_flower__b3d2bb80.jpg" },
      { isUser: true, text: "Hey! Thank You so much! The bouquet is very beautiful!" },
      { isUser: true, text: "Will order again soon!" }
    ]
  },
  {
    id: 't3',
    author: "prolaymondal...",
    handle: "prolay_m",
    avatar: "https://ui-avatars.com/api/?name=Prolay&background=random&color=fff",
    platform: "instagram",
    time: "Yesterday at 4:47 PM",
    messages: [
      { isUser: true, image: "/images/products/crochet_sunflower_ha_0af63177.jpg" },
      { isUser: true, text: "It's really beautiful.... Thank you so much for this one.. Keep it up!" },
      { isUser: false, text: "Thank you so much! This really means a lot. I'm so glad you liked it. Keep supporting!" }
    ]
  },
  {
    id: 't4',
    author: "CHAITHRA",
    handle: "_chaithraa.gowda",
    avatar: "https://ui-avatars.com/api/?name=Chaithra&background=red&color=fff",
    platform: "instagram",
    time: "17:03",
    messages: [
      { isUser: true, text: "I don't know about that But the message have came like that" },
      { isUser: true, text: "Hey i received the package. Thanks a lot it's so beautiful" },
      { isUser: false, text: "Thank you!" },
      { isUser: true, image: "/images/products/crochet_lily_flower__7f4866f7.jpg" },
      { isUser: true, text: "Once again thanks for this beautiful piece! Best gift I would ever got for myself" }
    ]
  }
];
