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
}

export const cars: Car[] = [
  { 
    id: 1,
    name: 'Lamborghini Huracán EVO', 
    slug: 'lamborghini-huracan-evo',
    category: 'Supercar', 
    price: 1290, 
    rating: 5.0, 
    hp: '640 PS',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
    description: 'Der Huracán EVO ist die Evolution des erfolgreichsten V10-Supersportwagens von Lamborghini.',
  },
  { 
    id: 2,
    name: 'Ferrari 488 GTB', 
    slug: 'ferrari-488-gtb',
    category: 'Supercar', 
    price: 1190, 
    rating: 5.0, 
    hp: '670 PS',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop',
    description: 'Der 488 GTB verkörpert die Essenz von Ferrari: Geschwindigkeit, Eleganz und purer Fahrspaß.',
  },
  { 
    id: 3,
    name: 'Porsche 911 GT3', 
    slug: 'porsche-911-gt3',
    category: 'Sports GT', 
    price: 890, 
    rating: 4.9, 
    hp: '510 PS',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop',
    description: 'Der 911 GT3 ist die Rennstrecken-Version des legendären Porsche 911.',
  },
  { 
    id: 4,
    name: 'Bentley Continental GT', 
    slug: 'bentley-continental-gt',
    category: 'Grand Tourer', 
    price: 790, 
    rating: 4.9, 
    hp: '659 PS',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&h=400&fit=crop',
    description: 'Der Continental GT definiert den ultimativen Grand Tourer mit britischer Handwerkskunst.',
  },
  { 
    id: 5,
    name: 'McLaren 720S', 
    slug: 'mclaren-720s',
    category: 'Supercar', 
    price: 1390, 
    rating: 5.0, 
    hp: '720 PS',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&h=400&fit=crop',
    description: 'Der 720S ist McLarens Meisterwerk der Aerodynamik und Performance.',
  },
  { 
    id: 6,
    name: 'Rolls-Royce Ghost', 
    slug: 'rolls-royce-ghost',
    category: 'Ultra Luxury', 
    price: 990, 
    rating: 5.0, 
    hp: '571 PS',
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&h=400&fit=crop',
    description: 'Der Ghost bietet unvergleichlichen Luxus und die berühmte Rolls-Royce Eleganz.',
  },
];

export const getCarBySlug = (slug: string): Car | undefined => {
  return cars.find(car => car.slug === slug);
};
