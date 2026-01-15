import heroCar from '@/assets/hero-car.jpg';
import { Car } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Luxus Supercar"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-slide-up opacity-0">
            <Car className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Premium Supercars in Düsseldorf</span>
          </div>

          {/* Headline */}
          <h1 className="font-gta text-5xl md:text-7xl tracking-wider mb-4 animate-slide-up opacity-0 delay-100">
            <span className="text-gradient">LuayCars</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-slide-up opacity-0 delay-200">
            Dein Traumwagen wartet
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 animate-slide-up opacity-0 delay-300">
            {[
              { value: '15+', label: 'Supercars' },
              { value: '500+', label: 'Kunden' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-display font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
