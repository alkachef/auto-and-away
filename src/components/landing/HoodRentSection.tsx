import { ArrowRight, Star, Clock, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Book in seconds, pick up in minutes',
  },
  {
    icon: Shield,
    title: 'Full Insurance',
    description: 'Comprehensive coverage included',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Roadside assistance anytime',
  },
];

const cars = [
  { name: 'Mercedes C-Class', category: 'Premium', price: '€89', rating: 4.9 },
  { name: 'BMW 3 Series', category: 'Premium', price: '€85', rating: 4.8 },
  { name: 'Audi A4', category: 'Premium', price: '€82', rating: 4.9 },
];

const HoodRentSection = () => {
  return (
    <section id="hoodrent" className="py-24 bg-gradient-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm">Hood Rent</span>
            </div>
            
            <h2 className="section-heading mb-6">
              Premium Rentals,{' '}
              <span className="text-gradient">Your Way</span>
            </h2>
            
            <p className="section-subheading mb-10">
              Access our fleet of premium vehicles for any occasion. From daily commutes 
              to weekend adventures, Hood Rent has the perfect car for you.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#download" className="btn-primary inline-flex items-center gap-2 group">
              Browse Fleet
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Content - Car Cards */}
          <div className="space-y-4">
            {cars.map((car, index) => (
              <div
                key={car.name}
                className="glass rounded-2xl p-5 flex items-center justify-between hover:border-primary/30 transition-all duration-300 hover:-translate-x-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{car.name}</h4>
                    <p className="text-sm text-muted-foreground">{car.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    {car.rating}
                  </div>
                  <div className="font-display font-bold text-lg">
                    {car.price}<span className="text-sm text-muted-foreground">/day</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-6 text-center border-dashed border-2 border-border">
              <p className="text-muted-foreground mb-2">And 500+ more vehicles</p>
              <a href="#download" className="text-primary font-semibold hover:underline">
                View Full Fleet →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoodRentSection;
