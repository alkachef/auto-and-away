import { Wrench, Shield, Battery, Gauge, Droplets, Settings } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Reifen-Service',
    description: 'Reifenwechsel, Auswuchten, Spureinstellung und Pannenhilfe direkt vor Ort.',
  },
  {
    icon: Droplets,
    title: 'Öl & Flüssigkeiten',
    description: 'Kompletter Ölwechsel, Bremsflüssigkeit, Kühlmittel und Getriebeöl-Service.',
  },
  {
    icon: Battery,
    title: 'Batterie-Service',
    description: 'Batterietest, Starthilfe, Austausch und fachgerechte Entsorgung.',
  },
  {
    icon: Shield,
    title: 'Vollinspektion',
    description: 'Umfassender Fahrzeug-Check mit detailliertem digitalem Bericht.',
  },
  {
    icon: Gauge,
    title: 'Performance Tuning',
    description: 'Motordiagnose, Leistungsoptimierung und ECU-Tuning.',
  },
  {
    icon: Settings,
    title: 'Allgemeine Reparaturen',
    description: 'Bremsbeläge, Fahrwerk, Klimaservice und alle mechanischen Reparaturen.',
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
            Unsere Services
          </span>
          <h2 className="section-heading mt-4 mb-6">
            Komplette Autopflege,{' '}
            <span className="text-gradient">Jederzeit</span>
          </h2>
          <p className="section-subheading mx-auto">
            Professionelle Services direkt zu dir. Kein Warten mehr in der Werkstatt.
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
            Alle Services Anzeigen
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
