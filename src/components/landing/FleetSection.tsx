import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars } from '@/lib/cars';

const FleetSection = () => {
  return (
    <section id="fleet" className="py-16 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="section-heading mb-4">
            Wähle Dein{' '}
            <span className="text-gradient">Traumauto</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Klicke auf ein Fahrzeug, um es zu buchen.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Link
              key={car.id}
              to={`/buchen/${car.slug}`}
              className="glass rounded-2xl overflow-hidden text-left group transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow block"
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
                <h3 className="font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {car.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-2xl text-primary">€{car.price}</span>
                    <span className="text-sm text-muted-foreground">/Tag</span>
                  </div>
                  <span className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Buchen <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
