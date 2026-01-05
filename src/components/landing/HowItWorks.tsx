import { Download, MapPin, CalendarCheck, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Download,
    step: '01',
    title: 'App Herunterladen',
    description: 'Hole dir Hood Rent im App Store oder Google Play in Sekunden.',
  },
  {
    icon: MapPin,
    step: '02',
    title: 'Service Wählen',
    description: 'Wähle aus Auto-Services oder durchstöbere unsere Luxusflotte.',
  },
  {
    icon: CalendarCheck,
    step: '03',
    title: 'Buchen & Planen',
    description: 'Wähle dein Wunschdatum, Uhrzeit und Standort.',
  },
  {
    icon: Sparkles,
    step: '04',
    title: 'Genießen',
    description: 'Lehn dich zurück während wir alles für dich erledigen.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            So Geht's
          </span>
          <h2 className="section-heading mt-4 mb-6">
            Einfach wie{' '}
            <span className="text-gradient">1-2-3-4</span>
          </h2>
          <p className="section-subheading mx-auto">
            Der Start dauert weniger als eine Minute. So funktioniert's.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary shadow-glow mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Step indicator */}
                <div className="text-primary font-display font-bold text-sm mb-2">
                  Schritt {item.step}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
