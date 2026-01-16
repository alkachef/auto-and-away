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
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
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
  { 
    id: 3,
    name: 'Porsche 911 GT3', 
    slug: 'porsche-911-gt3',
    category: 'Sports GT', 
    price: 650, 
    rating: 4.9, 
    hp: '510 PS',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop',
    description: 'Der 911 GT3 ist die Rennstrecken-Version des legendären Porsche 911.',
    maxSpeed: '318 km/h',
    torque: '470 NM',
    acceleration: '3.4 Sek',
    engine: 'Boxer 6',
    model: 'Racing Coupe',
    highlights: [
      'Motorsport-DNA für die Straße',
      'Hochdrehzahl-Saugmotor',
      'Aerodynamik-Paket'
    ],
    weekdayPricing: [
      { days: 1, km: 250, price: 650 },
      { days: 3, km: 500, price: 1800 },
    ],
    weekendPricing: [
      { days: 1, km: 250, price: 750 },
      { days: 3, km: 500, price: 2000 },
    ],
    longTermPricing: [
      { days: 7, km: 1500, price: 4000 },
      { days: 14, km: 3000, price: 7000 },
      { days: 28, km: 5000, price: 11000 },
    ],
    extraKmPrice: 2.5,
    deposit: 4000,
    minAge: 23,
  },
  { 
    id: 4,
    name: 'BMW M4 Competition', 
    slug: 'bmw-m4-competition',
    category: 'Sports Coupe', 
    price: 350, 
    rating: 4.9, 
    hp: '510 PS',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop',
    description: 'Aggressive Performance trifft auf bayerische Ingenieurskunst.',
    maxSpeed: '290 km/h',
    torque: '650 NM',
    acceleration: '3.9 Sek',
    engine: 'Reihen 6',
    model: 'Competition Coupe',
    highlights: [
      'M xDrive Allradantrieb',
      'M Carbon Exterieur Paket',
      'Akrapovic Abgasanlage'
    ],
    weekdayPricing: [
      { days: 1, km: 250, price: 350 },
      { days: 3, km: 500, price: 900 },
    ],
    weekendPricing: [
      { days: 1, km: 250, price: 400 },
      { days: 3, km: 500, price: 1000 },
    ],
    longTermPricing: [
      { days: 7, km: 1500, price: 2000 },
      { days: 14, km: 3000, price: 3800 },
      { days: 28, km: 5000, price: 6500 },
    ],
    extraKmPrice: 2.0,
    deposit: 3000,
    minAge: 23,
  },
  { 
    id: 5,
    name: 'McLaren 720S', 
    slug: 'mclaren-720s',
    category: 'Supercar', 
    price: 1200, 
    rating: 5.0, 
    hp: '720 PS',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&h=400&fit=crop',
    description: 'McLarens Meisterwerk der Aerodynamik und Performance.',
    maxSpeed: '341 km/h',
    torque: '770 NM',
    acceleration: '2.9 Sek',
    engine: 'V8 Twin-Turbo',
    model: 'Spider',
    highlights: [
      'Dihedral Türen',
      'Proactive Chassis Control',
      'Carbon Monocoque'
    ],
    weekdayPricing: [
      { days: 1, km: 250, price: 1200 },
      { days: 3, km: 500, price: 3200 },
    ],
    weekendPricing: [
      { days: 1, km: 250, price: 1400 },
      { days: 3, km: 500, price: 3600 },
    ],
    longTermPricing: [
      { days: 7, km: 1500, price: 7000 },
      { days: 14, km: 3000, price: 12000 },
      { days: 28, km: 5000, price: 20000 },
    ],
    extraKmPrice: 3.0,
    deposit: 10000,
    minAge: 25,
  },
  { 
    id: 6,
    name: 'Audi RS6 Avant', 
    slug: 'audi-rs6-avant',
    category: 'Super Wagon', 
    price: 400, 
    rating: 5.0, 
    hp: '600 PS',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
    description: 'Der ultimative Familien-Supersportwagen mit V8 Biturbo.',
    maxSpeed: '305 km/h',
    torque: '800 NM',
    acceleration: '3.6 Sek',
    engine: 'V8 Biturbo',
    model: 'Avant',
    highlights: [
      'Quattro Allradantrieb',
      'RS Dynamik Paket Plus',
      'Bang & Olufsen 3D Sound'
    ],
    weekdayPricing: [
      { days: 1, km: 250, price: 400 },
      { days: 3, km: 500, price: 1100 },
    ],
    weekendPricing: [
      { days: 1, km: 250, price: 450 },
      { days: 3, km: 500, price: 1200 },
    ],
    longTermPricing: [
      { days: 7, km: 1500, price: 2500 },
      { days: 14, km: 3000, price: 4500 },
      { days: 28, km: 5000, price: 8000 },
    ],
    extraKmPrice: 2.0,
    deposit: 3500,
    minAge: 23,
  },
];

export const getCarBySlug = (slug: string): Car | undefined => {
  return cars.find(car => car.slug === slug);
};
