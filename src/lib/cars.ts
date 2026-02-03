export interface PricingTier {
  days: number;
  km: number;
  price: number;
}

export interface Car {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  rating: number;
  hp: string;
  image: string;
  description: string;
  // Technical specs
  maxSpeed: string;
  torque: string;
  acceleration: string;
  engine: string;
  model: string;
  // Highlights
  highlights: string[];
  // Pricing structure
  weekdayPricing: PricingTier[];
  weekendPricing: PricingTier[];
  longTermPricing: PricingTier[];
  extraKmPrice: number;
  deposit: number;
  minAge: number;
}

export const cars: Car[] = [
  { 
    id: 1,
    name: 'Lamborghini Huracán LP-610', 
    slug: 'lamborghini-huracan-evo',
    category: 'Supercar', 
    price: 800, 
    rating: 5.0, 
    hp: '640 PS',
    image: '/images/lamborghini-huracan.jpg',
    description: 'Brachialer V10 Sound ohne OPF - Neuer LP-640 EVO Motor verbaut.',
    maxSpeed: '330 km/h',
    torque: '600 NM',
    acceleration: '2.9 Sek',
    engine: 'V10',
    model: 'Black Coupe',
    highlights: [
      'Novitech Tiefverlegung + Lift',
      'Rennsportabgasanlage ohne OPF',
      'Rückfahrkamera - Tempomat etc.'
    ],
    weekdayPricing: [
      { days: 1, km: 250, price: 800 },
      { days: 3, km: 500, price: 2200 },
    ],
    weekendPricing: [
      { days: 1, km: 250, price: 900 },
      { days: 3, km: 500, price: 2400 },
    ],
    longTermPricing: [
      { days: 7, km: 1500, price: 5000 },
      { days: 14, km: 3000, price: 8000 },
      { days: 28, km: 5000, price: 13000 },
    ],
    extraKmPrice: 2.5,
    deposit: 5000,
    minAge: 23,
  },
  { 
    id: 2,
    name: 'Mercedes-Benz C63S AMG', 
    slug: 'mercedes-c63s-amg',
    category: 'Sports Sedan', 
    price: 300, 
    rating: 5.0, 
    hp: '510 PS',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&h=400&fit=crop',
    description: 'Explosiver V8 Sound trotz OPF - Vollausgestattete 5-Sitzer Limousine.',
    maxSpeed: '290 km/h',
    torque: '700 NM',
    acceleration: '3.9 Sek',
    engine: 'V8',
    model: 'White Sedan',
    highlights: [
      'AMG Performance Abgasanlage',
      'Full AMG Carbon Exterieur Paket',
      'Letzter C63S V8 in Facelift Version'
    ],
    weekdayPricing: [
      { days: 1, km: 250, price: 300 },
      { days: 3, km: 500, price: 800 },
    ],
    weekendPricing: [
      { days: 1, km: 250, price: 350 },
      { days: 3, km: 500, price: 900 },
    ],
    longTermPricing: [
      { days: 7, km: 1500, price: 1700 },
      { days: 14, km: 3000, price: 3200 },
      { days: 28, km: 5000, price: 5800 },
    ],
    extraKmPrice: 2.5,
    deposit: 2500,
    minAge: 23,
  },
];

export const getCarBySlug = (slug: string): Car | undefined => {
  return cars.find(car => car.slug === slug);
};
