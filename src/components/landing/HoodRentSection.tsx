import { ArrowRight, Star, Crown, Shield, Gem } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'VIP Experience',
    description: 'White-glove service from pickup to return',
  },
  {
    icon: Shield,
    title: 'Elite Insurance',
    description: 'Premium coverage with zero deductible',
  },
  {
    icon: Gem,
    title: 'Concierge Support',
    description: 'Dedicated personal assistant 24/7',
  },
];

const cars = [
  { name: 'Rolls-Royce Ghost', category: 'Ultra Luxury', price: '€890', rating: 5.0, emoji: '🏎️' },
  { name: 'Bentley Continental GT', category: 'Grand Tourer', price: '€650', rating: 4.9, emoji: '✨' },
  { name: 'Lamborghini Huracán', category: 'Supercar', price: '€950', rating: 5.0, emoji: '⚡' },
  { name: 'Ferrari Roma', category: 'Sports GT', price: '€850', rating: 4.9, emoji: '🔥' },
];

const HoodRentSection = () => {
  return (
    <section id="hoodrent" className="py-32 bg-gradient-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 px-5 py-2.5 rounded-full mb-8">
              <Crown className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">Hood Rent Exclusive</span>
            </div>
            
            <h2 className="section-heading mb-6">
              Luxury Fleet,{' '}
              <span className="text-gradient">Elite Access</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Experience automotive excellence with our curated collection of the world's 
              most prestigious vehicles. Reserved exclusively for discerning clientele.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-12">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#download" className="btn-primary inline-flex items-center gap-3 group text-lg">
              <Crown className="w-5 h-5" />
              Access Exclusive Fleet
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Content - Luxury Car Cards */}
          <div className="space-y-5">
            {cars.map((car, index) => (
              <div
                key={car.name}
                className="glass-strong rounded-2xl p-6 flex items-center justify-between hover:border-primary/40 transition-all duration-500 hover:-translate-x-3 hover:shadow-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-card flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-colors">
                    <span className="text-3xl">{car.emoji}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{car.name}</h4>
                    <p className="text-sm text-primary/80 font-medium">{car.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5 text-sm mb-2 justify-end">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-foreground font-semibold">{car.rating}</span>
                  </div>
                  <div className="font-display font-bold text-2xl">
                    {car.price}<span className="text-sm text-muted-foreground font-normal">/day</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-8 text-center border-primary/20 border-dashed border-2 bg-gradient-to-b from-primary/5 to-transparent">
              <Crown className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-muted-foreground mb-3 text-lg">50+ Ultra-Luxury Vehicles</p>
              <a href="#download" className="text-primary font-semibold hover:underline text-lg inline-flex items-center gap-2">
                View Full Collection <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoodRentSection;
