import heroCar from '@/assets/hero-car.jpg';
import { ArrowRight, Wrench, Car } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Luxury sports car"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-glow opacity-50 animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Your Complete Car Solution</span>
          </div>

          {/* Headline */}
          <h1 className="section-heading mb-6 animate-slide-up opacity-0 delay-100">
            Everything Your Car Needs,{' '}
            <span className="text-gradient">One App</span>
          </h1>

          {/* Subheadline */}
          <p className="section-subheading mx-auto mb-10 animate-slide-up opacity-0 delay-200">
            From tyre changes to full maintenance, plus premium car rentals from Hood Rent. 
            Experience the future of car care and mobility.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0 delay-300">
            <a href="#services" className="btn-primary inline-flex items-center gap-2 group">
              <Wrench className="w-5 h-5" />
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#hoodrent" className="btn-secondary inline-flex items-center gap-2">
              <Car className="w-5 h-5" />
              Rent a Car
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up opacity-0 delay-400">
            {[
              { value: '50K+', label: 'Happy Customers' },
              { value: '200+', label: 'Service Partners' },
              { value: '500+', label: 'Cars Available' },
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
