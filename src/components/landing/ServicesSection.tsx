import { Wrench, Shield, Battery, Gauge, Droplets, Settings } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Tyre Services',
    description: 'Tyre change, balancing, alignment, and puncture repair at your doorstep.',
  },
  {
    icon: Droplets,
    title: 'Oil & Fluids',
    description: 'Complete oil change, brake fluid, coolant, and transmission fluid services.',
  },
  {
    icon: Battery,
    title: 'Battery Service',
    description: 'Battery testing, jump-start, replacement, and disposal handled professionally.',
  },
  {
    icon: Shield,
    title: 'Full Inspection',
    description: 'Comprehensive vehicle health check with detailed digital reports.',
  },
  {
    icon: Gauge,
    title: 'Performance Tune',
    description: 'Engine diagnostics, performance optimization, and ECU tuning.',
  },
  {
    icon: Settings,
    title: 'General Repairs',
    description: 'Brake pads, suspension, AC service, and all mechanical repairs.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="section-heading mt-4 mb-6">
            Complete Car Care,{' '}
            <span className="text-gradient">Anytime</span>
          </h2>
          <p className="section-subheading mx-auto">
            Professional services delivered to your location. No more waiting at garages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#download" className="btn-secondary inline-flex items-center gap-2">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
