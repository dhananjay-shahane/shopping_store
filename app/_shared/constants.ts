import { Category, FAQItem, Product, Testimonial } from './types';

export const BOUQUET_FLOWERS: Product[] = [
  {
    id: 'f1',
    name: 'The Van Gogh flower(starry night)',
    price: 550,
    originalPrice: 650,
    category: 'Phool',
    image: 'https://picsum.photos/seed/vangoghflower/400/500',
    description: 'Beautiful blue daisy inspired by Van Gogh starry night.',
    isNew: true,
    hasVariants: false,
  },
  {
    id: 'f2',
    name: 'Sunflower',
    price: 300,
    category: 'Phool',
    image: 'https://picsum.photos/seed/sunflowercrochet/400/500',
    description: 'Handcrafted crochet sunflower with vibrant colors.',
    hasVariants: false,
  },
  {
    id: 'f3',
    name: 'Tulip',
    price: 300,
    category: 'Phool',
    image: 'https://picsum.photos/seed/tulipcrochet/400/500',
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
    image: 'https://picsum.photos/seed/rosebranch/400/500',
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
    image: 'https://picsum.photos/seed/xllily/400/500',
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
    name: 'DIY Flower Bouquet Kit',
    price: 850,
    category: 'Phool (Make your Own bouquet)',
    image: 'https://picsum.photos/seed/phoolkit/400/600',
    description: 'Build your own bouquet with premium artificial flowers.',
    isNew: true,
  },
  {
    id: '2',
    name: 'Classic Rose Bouquet',
    price: 1500,
    category: 'Bouquet',
    image: 'https://picsum.photos/seed/bouquetclassic/400/600',
    description: 'Handmade artificial rose bouquet wrapped beautifully.',
    isNew: true,
  },
  {
    id: '3',
    name: 'Cute Bear Plushie',
    price: 650,
    category: 'Plushies',
    image: 'https://picsum.photos/seed/plushbear/400/600',
    description: 'Soft and cuddly mini teddy bear plush.',
  },
  {
    id: '4',
    name: 'Decorative Ceramic Pot',
    price: 950,
    category: 'Pots',
    image: 'https://picsum.photos/seed/potdecor/400/600',
    description: 'Hand-painted ceramic pot for plants or decor.',
  },
  {
    id: '5',
    name: 'Floral Embroidered Bag',
    price: 1200,
    category: 'Bags',
    image: 'https://picsum.photos/seed/bagembroidered/400/600',
    description: 'Handcrafted bag with beautiful floral embroidery.',
    isNew: true,
  },
  {
    id: '6',
    name: 'Wooden Home Decor Set',
    price: 1800,
    category: 'Home decor accessories',
    image: 'https://picsum.photos/seed/homedecor/400/600',
    description: 'Aesthetic decor pieces for home ambiance.',
  },
  {
    id: '7',
    name: 'Pink Flower Arrangement',
    price: 1100,
    category: 'Flower Arrangements',
    image: 'https://picsum.photos/seed/arrangement/400/600',
    description: 'Beautiful ready-made flower arrangement.',
  },
  {
    id: '8',
    name: 'Cute Toy Car Set',
    price: 750,
    category: 'Kids toys',
    image: 'https://picsum.photos/seed/kidtoy/400/600',
    description: 'Colorful toy car set for kids aged 3+.',
  },
  {
    id: '9',
    name: 'Heart Keychain',
    price: 199,
    category: 'Keychains and Car hangings',
    image: 'https://picsum.photos/seed/keychainheart/400/600',
    description: 'Handmade resin heart keychain with glitter.',
  },
  {
    id: '10',
    name: 'Valentine Gift Box',
    price: 999,
    category: 'Valentines',
    image: 'https://picsum.photos/seed/valentinebox/400/600',
    description: 'Romantic gift box with flowers & message card.',
    isNew: true,
  },
  {
    id: '11',
    name: 'Pink Hair Bow Clip',
    price: 150,
    category: 'Hair accessories',
    image: 'https://picsum.photos/seed/hairbowpink/400/600',
    description: 'Cute hair bow clip for girls.',
  },
  {
    id: '12',
    name: 'Phool ki Tokri Basket',
    price: 499,
    category: 'Phool ki Tokri',
    image: 'https://picsum.photos/seed/tokri/400/600',
    description: 'Handmade tokri with flowers for gifting.',
  },
  {
    id: '13',
    name: 'Fluffy Throw Blanket',
    price: 1800,
    category: 'Flower bouquet Throws / blankets',
    image: 'https://picsum.photos/seed/blanketthrow/400/600',
    description: 'Soft and cozy throw blanket with floral patterns.',
    isNew: true,
  }
];

export const CATEGORIES: Category[] = [
  { id: 'c1', name: 'Phool ( Make your Own bouquet )', image: 'https://picsum.photos/seed/phoolcat/400/400' },
  { id: 'c2', name: 'Bouquet', image: 'https://picsum.photos/seed/bouquetcat/400/400' },
  { id: 'c3', name: 'Plushies', image: 'https://picsum.photos/seed/plushiescat/400/400' },
  { id: 'c4', name: 'Pots', image: 'https://picsum.photos/seed/potscat/400/400' },
  { id: 'c5', name: 'Bags', image: 'https://picsum.photos/seed/bagscat/400/400' },
  { id: 'c6', name: 'Home decor accessories', image: 'https://picsum.photos/seed/homedecorcat/400/400' },
  { id: 'c7', name: 'Flower Arrangements', image: 'https://picsum.photos/seed/flowerarrangecat/400/400' },
  { id: 'c8', name: 'Kids toys', image: 'https://picsum.photos/seed/kidstoyscat/400/400' },
  { id: 'c9', name: 'Keychains and Car hangings', image: 'https://picsum.photos/seed/keychaincat/400/400' },
];

export const FAQS: FAQItem[] = [
  { question: "What makes Suidhaga unique?", answer: "We combine traditional embroidery with modern, playful themes for children." },
  { question: "Does Suidhaga handle custom designs?", answer: "Yes, we accept custom orders for special occasions. Please contact us directly." },
  { question: "What sizes does Suidhaga come in?", answer: "We cater to children from ages 1 to 12 years." },
  { question: "Why need to pay 50% in advance?", answer: "Since many items are made to order, an advance ensures material reservation." },
  { question: "How long does shipping take?", answer: "Standard shipping takes 5-7 business days across the country." },
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
      { isUser: false, text: "purchase 💗 i hope it makes you smile:)" },
      { isUser: true, text: "Welcome 💖✨" },
      { isUser: true, image: "https://picsum.photos/seed/review1/300/400" },
      { isUser: true, text: "Hey received the order today. It's beautiful beyond what I had imagined. ✨ I just loved it!! Thank you so much for all your hard work & dedication. 🤍🌻" },
      { isUser: false, text: "Thankyouu so much🎀 this really means a lot. Im so glad you liked it 🎀 keep supporting <3" }
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
      { isUser: false, text: "Thankyou for your order 🫶❤️" },
      { isUser: true, image: "https://picsum.photos/seed/review2/300/400" },
      { isUser: true, text: "hyyy Thank You so much ❤️ Bouquet are very beautiful ❤️" },
      { isUser: true, text: "ohk" }
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
      { isUser: true, image: "https://picsum.photos/seed/review3/300/400" },
      { isUser: true, text: "It's really beautiful.... Thank you so much for this one.. Keep it up 🤍🌻" },
      { isUser: false, text: "thankyouu so much🎀 this really means a lot. Im so glad you liked it 🎀 keep supporting <3" }
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
      { isUser: true, text: "Hey i received the package. Thanks a lot it's so beautifull" },
      { isUser: false, text: "Thankyouuu🥰" },
      { isUser: true, image: "https://picsum.photos/seed/review4/300/400" },
      { isUser: true, text: "Once again thanks for this beautiful 🥹❤️ Best gift i would ever got for myself" }
    ]
  }
];
