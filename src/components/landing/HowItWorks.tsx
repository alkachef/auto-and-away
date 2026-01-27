import { Car, CalendarCheck, Key, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Car,
    step: '01',
    title: 'Supercar Wählen',
    description: 'Entdecke unsere exklusive Flotte und wähle deinen Traumwagen.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Datum Reservieren',
    description: 'Prüfe die Verfügbarkeit und buche deinen Wunschtermin online.',
  },
  {
    icon: Key,
    step: '03',
    title: 'Schlüssel Abholen',
    description: 'Hole dein Fahrzeug ab oder lass es direkt zu dir liefern.',
  },
  {
    icon: Sparkles,
    step: '04',
    title: 'Erlebnis Genießen',
    description: 'Genieße pure Fahrfreude und unvergessliche Momente.',
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
            In 4 Schritten zum{' '}
            <span className="text-gradient">Supercar</span>
          </h2>
          <p className="section-subheading mx-auto">
            Von der Auswahl bis zur Übergabe – einfacher geht's nicht.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}

              <div className="text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary shadow-glow mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Step indicator */}
                <div className="text-accent font-display font-bold text-sm mb-2">
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
