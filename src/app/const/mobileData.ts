
import { IMobile } from '../model/mobile.interface';

export let mobileProducts: Array<IMobile> = [
  {
    id: 1,
    name: 'iPhone 13',
    brand: 'Apple',
    price: 999,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600',
    isAvailable: true,
    rating: 4.9,
    noOfItems: 50,
    features: [
      'A15 Bionic chip',
      'Super Retina XDR display',
      'Dual-camera system',
      '5G connectivity',
      'MagSafe charging'
    ]
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    brand: 'Samsung',
    price: 899,
    image: '',
    isAvailable: false,
    rating: 4.5,
    noOfItems: 20,
    features: [
      'Exynos 2100 processor',
      '120Hz AMOLED display',
      'Triple-camera setup',
      '8K video recording',
      'Wireless PowerShare'
    ]
  },
  {
    id: 3,
    name: 'Google Pixel 6',
    brand: 'Google',
    price: 799,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    isAvailable: true,
    rating: 3.9,
    noOfItems: 30,
    features: [
      'Google Tensor chip',
      'OLED display',
      'Dual-camera system',
      'Android experience',
      'Fast charging'
    ]
  },
  {
    id: 4,
    name: 'OnePlus 9 Pro',
    brand: 'OnePlus',
    price: 699,
    image: '',
    isAvailable: false,
    rating: 2.9,
    noOfItems: 15,
    features: [
      'Snapdragon 888 processor',
      'AMOLED display',
      'Hasselblad camera',
      'Warp charging',
      '5G connectivity'
    ]
  },
  {
    id: 5,
    name: 'Vivo V29',
    brand: 'Vivo',
    price: 599,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
    isAvailable: true,
    rating: 4.3,
    noOfItems: 45,
    features: [
      'Snapdragon processor',
      'AMOLED display',
      '50MP front camera',
      'Fast charging',
      '5G connectivity'
    ]
  },
  {
    id: 6,
    name: 'Oppo Reno 8',
    brand: 'Oppo',
    price: 549,
    image: '',
    isAvailable: true,
    rating: 4.1,
    noOfItems: 35,
    features: [
      'MediaTek Dimensity processor',
      'AMOLED display',
      '50MP camera',
      'AI photography',
      'Fast charging'
    ]
  },
  {
    id: 7,
    name: 'Redmi Note 12',
    brand: 'Xiaomi',
    price: 299,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600',
    isAvailable: true,
    rating: 4.0,
    noOfItems: 60,
    features: [
      'Snapdragon processor',
      '120Hz AMOLED display',
      'Triple-camera setup',
      '5000mAh battery',
      'Fast charging'
    ]
  },
  {
    id: 8,
    name: 'Realme GT Neo',
    brand: 'Realme',
    price: 449,
    image: '',
    isAvailable: false,
    rating: 3.5,
    noOfItems: 25,
    features: [
      'Dimensity processor',
      'AMOLED display',
      'Gaming performance',
      'Fast charging',
      '5G connectivity'
    ]
  },
  {
    id: 9,
    name: 'Nothing Phone 2',
    brand: 'Nothing',
    price: 699,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    isAvailable: true,
    rating: 4.7,
    noOfItems: 40,
    features: [
      'Snapdragon processor',
      'Glyph interface',
      'OLED display',
      'Dual-camera system',
      'Wireless charging'
    ]
  },
  {
    id: 10,
    name: 'Motorola Edge 40',
    brand: 'Motorola',
    price: 399,
    image: '',
    isAvailable: true,
    rating: 3.8,
    noOfItems: 18,
    features: [
      'MediaTek Dimensity processor',
      'pOLED display',
      '50MP camera',
      '68W TurboPower charging',
      '5G connectivity'
    ]
  }
];
