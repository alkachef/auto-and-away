import heroCar from '@/assets/hero-car.jpg';
import { ArrowRight, Car } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Luxus Supercar"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-glow opacity-50 animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up opacity-0">
            <Car className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Premium Supercars in Düsseldorf</span>
          </div>

          {/* Headline */}
          <h1 className="section-heading mb-6 animate-slide-up opacity-0 delay-100">
            <span className="text-gradient">LuayCars</span>
            <br />
            <span className="text-2xl md:text-4xl font-medium text-muted-foreground">Dein Traumwagen wartet</span>
          </h1>

          {/* Subheadline */}
          <p className="section-subheading mx-auto mb-10 animate-slide-up opacity-0 delay-200">
            Ferrari, Lamborghini, Porsche & mehr – wähle dein Fahrzeug und fahre noch heute los.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0 delay-300">
            <a href="#fleet" className="btn-primary inline-flex items-center gap-2 group text-lg px-8 py-4">
              <Car className="w-5 h-5" />
              Jetzt Auto Wählen
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up opacity-0 delay-400">
            {[
              { value: '15+', label: 'Supercars' },
              { value: '500+', label: 'Zufriedene Kunden' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
