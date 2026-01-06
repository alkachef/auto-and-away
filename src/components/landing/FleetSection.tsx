import { Star, ArrowRight } from 'lucide-react';

const cars = [
  { 
    name: 'Lamborghini Huracán EVO', 
    category: 'Supercar', 
    price: '€1.290', 
    rating: 5.0, 
    hp: '640 PS',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
  },
  { 
    name: 'Ferrari 488 GTB', 
    category: 'Supercar', 
    price: '€1.190', 
    rating: 5.0, 
    hp: '670 PS',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop',
  },
  { 
    name: 'Porsche 911 GT3', 
    category: 'Sports GT', 
    price: '€890', 
    rating: 4.9, 
    hp: '510 PS',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop',
  },
  { 
    name: 'Bentley Continental GT', 
    category: 'Grand Tourer', 
    price: '€790', 
    rating: 4.9, 
    hp: '659 PS',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&h=400&fit=crop',
  },
  { 
    name: 'McLaren 720S', 
    category: 'Supercar', 
    price: '€1.390', 
    rating: 5.0, 
    hp: '720 PS',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&h=400&fit=crop',
  },
  { 
    name: 'Rolls-Royce Ghost', 
    category: 'Ultra Luxury', 
    price: '€990', 
    rating: 5.0, 
    hp: '571 PS',
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&h=400&fit=crop',
  },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Unsere Flotte
          </span>
          <h2 className="section-heading mt-4 mb-6">
            Exklusive{' '}
            <span className="text-gradient">Supercars</span>
          </h2>
          <p className="section-subheading mx-auto">
            Handverlesene Luxusfahrzeuge für unvergessliche Momente. 
            Jedes Fahrzeug wird vor der Übergabe perfekt aufbereitet.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div
              key={car.name}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Car Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary">{car.hp}</span>
                </div>
              </div>
              
              {/* Car Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-primary/80 font-medium uppercase tracking-wider">{car.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                    <span className="text-sm font-semibold">{car.rating}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg mb-4 group-hover:text-primary transition-colors">
                  {car.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-2xl">{car.price}</span>
                    <span className="text-sm text-muted-foreground">/Tag</span>
                  </div>
                  <a 
                    href="#booking" 
                    className="flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Buchen <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
