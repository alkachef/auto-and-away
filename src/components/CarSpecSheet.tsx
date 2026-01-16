import { Car } from '@/lib/cars';
import { Gauge, Zap, Timer, Settings, Car as CarIcon, Volume2, Eye, Crown, TrendingUp, Heart } from 'lucide-react';

interface CarSpecSheetProps {
  car: Car;
}

const CarSpecSheet = ({ car }: CarSpecSheetProps) => {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      {/* Header with checkered pattern */}
      <div className="relative bg-gradient-to-b from-background to-card p-6 border-b border-border">
        <div className="absolute top-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(90deg,hsl(var(--foreground))_0px,hsl(var(--foreground))_10px,transparent_10px,transparent_20px)] opacity-20" />
        
        <div className="text-center mt-2">
          <p className="text-primary font-semibold text-sm tracking-widest mb-2">LUAY CARS PRÄSENTIERT:</p>
          <h2 className="font-display font-bold text-2xl md:text-3xl">{car.name}</h2>
        </div>
      </div>

      {/* Specs Grid */}
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="text-center">
            <Gauge className="w-5 h-5 mx-auto text-primary mb-1" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Max. Speed</p>
            <p className="font-bold text-sm">{car.maxSpeed}</p>
          </div>
          <div className="text-center">
            <Zap className="w-5 h-5 mx-auto text-primary mb-1" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Drehmoment</p>
            <p className="font-bold text-sm">{car.torque}</p>
          </div>
          <div className="text-center">
            <Settings className="w-5 h-5 mx-auto text-primary mb-1" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Leistung</p>
            <p className="font-bold text-sm">{car.hp} - {car.engine}</p>
          </div>
          <div className="text-center">
            <Timer className="w-5 h-5 mx-auto text-primary mb-1" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider">0-100 km/h</p>
            <p className="font-bold text-sm">{car.acceleration}</p>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <CarIcon className="w-5 h-5 mx-auto text-primary mb-1" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Modell</p>
            <p className="font-bold text-sm">{car.model}</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-secondary/30 rounded-xl p-4 mb-6">
          <ul className="space-y-1">
            {car.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="text-primary">•</span> {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Tables */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Weekday Pricing */}
          <div className="bg-secondary/30 rounded-xl p-4">
            <h4 className="font-bold text-sm text-center mb-3 border-b border-border pb-2 uppercase tracking-wider">Montag - Donnerstag</h4>
            <div className="space-y-2">
              {car.weekdayPricing.map((tier, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{tier.days} Tag{tier.days > 1 ? 'e' : ''} - {tier.km}KM</span>
                  <span className="font-bold text-primary">{tier.price}€</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekend Pricing */}
          <div className="bg-secondary/30 rounded-xl p-4">
            <h4 className="font-bold text-sm text-center mb-3 border-b border-border pb-2 uppercase tracking-wider">Freitag - Sonntag</h4>
            <div className="space-y-2">
              {car.weekendPricing.map((tier, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{tier.days} Tag{tier.days > 1 ? 'e' : ''} - {tier.km}KM</span>
                  <span className="font-bold text-primary">{tier.price}€</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Long Term Pricing */}
        <div className="bg-secondary/30 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-sm text-center mb-3 border-b border-border pb-2 uppercase tracking-wider">Langzeitmiete</h4>
          <div className="space-y-2">
            {car.longTermPricing.map((tier, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="font-semibold">{tier.days} Tage</span>
                <span>{tier.km}KM</span>
                <span className="font-bold text-primary">{tier.price.toLocaleString('de-DE')}€</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Info */}
        <div className="text-center space-y-2 text-sm text-muted-foreground border-t border-border pt-4">
          <p>- Mehr Kilometer: Pro KM <span className="text-primary font-semibold">{car.extraKmPrice.toFixed(2).replace('.', ',')}€</span> -</p>
          <p>[Fahrzeugübergabe erst ab {car.minAge} Jahren]</p>
          <p className="text-primary font-semibold">{car.deposit.toLocaleString('de-DE')}€ KAUTION ODER FAHRZEUG + PAPIERE</p>
        </div>

        {/* Rating Icons */}
        <div className="grid grid-cols-5 gap-2 mt-6 pt-4 border-t border-border">
          {[
            { label: 'Sound', icon: Volume2 },
            { label: 'Optik', icon: Eye },
            { label: 'Präsenz', icon: Crown },
            { label: 'Performance', icon: TrendingUp },
            { label: 'Adrenalin', icon: Heart },
          ].map(({ label, icon: Icon }) => (
            <div key={label} className="text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
              <Icon className="w-5 h-5 mx-auto text-primary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarSpecSheet;