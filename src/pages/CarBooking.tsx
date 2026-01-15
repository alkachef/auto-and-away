import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, Clock, Phone, CheckCircle, Baby, Shield, Fuel, Navigation } from 'lucide-react';
import { getCarBySlug } from '@/lib/cars';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const extras = [
  { id: 'kindersitz', name: 'Kindersitz', price: 25, icon: Baby, description: 'ISOFIX-Kindersitz für Kinder 9-36kg' },
  { id: 'vollkasko', name: 'Vollkasko ohne SB', price: 89, icon: Shield, description: 'Keine Selbstbeteiligung im Schadensfall' },
  { id: 'volltanken', name: 'Tankservice', price: 49, icon: Fuel, description: 'Rückgabe mit beliebigem Tankstand' },
  { id: 'navi', name: 'Navigation', price: 0, icon: Navigation, description: 'Premium-Navigation inklusive' },
];

// Generate available slots for demo purposes
const generateSlots = (year: number, month: number) => {
  const slots: { [key: string]: { available: boolean; slots: string[] } } = {};
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dateStr = date.toISOString().split('T')[0];
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
    
    const random = Math.random();
    if (isPast) {
      slots[dateStr] = { available: false, slots: [] };
    } else if (random > 0.7) {
      slots[dateStr] = { available: false, slots: [] };
    } else if (random > 0.3) {
      slots[dateStr] = { 
        available: true, 
        slots: isWeekend ? ['10:00', '14:00'] : ['09:00', '12:00', '15:00', '18:00'] 
      };
    } else {
      slots[dateStr] = { 
        available: true, 
        slots: ['10:00', '14:00', '18:00'] 
      };
    }
  }
  return slots;
};

const CarBooking = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const car = getCarBySlug(slug || '');
  
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['navi']);
  
  const slots = useMemo(() => 
    generateSlots(currentMonth.getFullYear(), currentMonth.getMonth()), 
    [currentMonth]
  );
  
  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 
                      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const dayNames = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  
  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = firstDay === 0 ? 6 : firstDay - 1;
    const days = [];
    
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
    setSelectedDate(null);
    setSelectedTime(null);
  };
  
  const getDateString = (day: number) => {
    return new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split('T')[0];
  };

  const toggleExtra = (extraId: string) => {
    if (extraId === 'navi') return; // Navigation is always included
    setSelectedExtras(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  const extrasTotal = extras
    .filter(e => selectedExtras.includes(e.id))
    .reduce((sum, e) => sum + e.price, 0);

  const totalPrice = (car?.price || 0) + extrasTotal;

  const handleBooking = () => {
    if (car && selectedDate && selectedTime) {
      const selectedExtraNames = extras
        .filter(e => selectedExtras.includes(e.id))
        .map(e => e.name)
        .join(', ');
      
      const message = `Hallo, ich möchte den ${car.name} am ${new Date(selectedDate).toLocaleDateString('de-DE')} um ${selectedTime} Uhr mieten.${selectedExtraNames ? ` Extras: ${selectedExtraNames}.` : ''} Gesamtpreis: €${totalPrice}/Tag.`;
      window.open(`https://wa.me/491234567890?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Fahrzeug nicht gefunden</h1>
          <Link to="/" className="btn-primary">Zurück zur Startseite</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Auswahl
          </Link>

          {/* Car Header */}
          <div className="glass rounded-2xl overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                  {car.category}
                </span>
                <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">
                  {car.name}
                </h1>
                <p className="text-muted-foreground mb-4">{car.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-display font-bold text-primary">€{car.price}</span>
                  <span className="text-muted-foreground">/Tag</span>
                  <span className="glass px-3 py-1 rounded-full text-sm font-semibold">{car.hp}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Date Selection */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="font-display font-bold text-lg">Datum wählen</h2>
              </div>
              
              {/* Calendar Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={() => navigateMonth('prev')}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-display font-bold">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </span>
                <button 
                  onClick={() => navigateMonth('next')}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Day Names */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map(day => (
                  <div key={day} className="text-center text-xs text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth().map((day, index) => {
                  if (day === null) {
                    return <div key={`empty-${index}`} className="aspect-square" />;
                  }
                  
                  const dateStr = getDateString(day);
                  const slotData = slots[dateStr];
                  const isAvailable = slotData?.available;
                  const isSelected = selectedDate === dateStr;
                  
                  return (
                    <button
                      key={day}
                      onClick={() => {
                        if (isAvailable) {
                          setSelectedDate(dateStr);
                          setSelectedTime(null);
                        }
                      }}
                      disabled={!isAvailable}
                      className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : isAvailable
                            ? 'bg-primary/10 text-foreground hover:bg-primary/20 border border-primary/30'
                            : 'bg-secondary/30 text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              
              {/* Legend */}
              <div className="flex items-center gap-4 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-primary/10 border border-primary/30" />
                  <span className="text-muted-foreground">Verfügbar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-secondary/30" />
                  <span className="text-muted-foreground">Belegt</span>
                </div>
              </div>
            </div>

            {/* Time Selection */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="font-display font-bold text-lg">Uhrzeit wählen</h2>
              </div>
              
              {selectedDate && slots[selectedDate]?.slots.length > 0 ? (
                <>
                  <p className="text-sm text-muted-foreground mb-4">
                    Verfügbare Abholzeiten am {new Date(selectedDate).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })}:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {slots[selectedDate].slots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-4 rounded-xl text-center transition-all ${
                          selectedTime === time
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary/50 hover:bg-primary/20 border border-border'
                        }`}
                      >
                        <span className="font-bold text-lg">{time}</span>
                        <span className="text-xs block opacity-70">Uhr</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Wähle zuerst ein Datum aus dem Kalender.</p>
                </div>
              )}
            </div>

            {/* Extras & Summary */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="font-display font-bold text-lg">Extras & Zusammenfassung</h2>
              </div>
              
              {/* Extras */}
              <div className="space-y-3 mb-6">
                {extras.map((extra) => {
                  const Icon = extra.icon;
                  const isSelected = selectedExtras.includes(extra.id);
                  const isIncluded = extra.price === 0;
                  
                  return (
                    <button
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      disabled={isIncluded}
                      className={`w-full p-4 rounded-xl text-left transition-all flex items-start gap-3 ${
                        isSelected 
                          ? 'bg-primary/20 border-2 border-primary' 
                          : 'bg-secondary/50 border border-border hover:border-primary/50'
                      } ${isIncluded ? 'cursor-default' : ''}`}
                    >
                      <Icon className={`w-5 h-5 mt-0.5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{extra.name}</span>
                          {isIncluded ? (
                            <span className="text-xs text-primary font-semibold">INKLUSIVE</span>
                          ) : (
                            <span className="font-bold text-primary">+€{extra.price}</span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{extra.description}</p>
                      </div>
                      {isSelected && !isIncluded && (
                        <CheckCircle className="w-5 h-5 text-primary" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Summary */}
              <div className="border-t border-border pt-4 mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Fahrzeug</span>
                  <span>€{car.price}</span>
                </div>
                {extrasTotal > 0 && (
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Extras</span>
                    <span>€{extrasTotal}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                  <span>Gesamt</span>
                  <span className="text-primary">€{totalPrice}/Tag</span>
                </div>
              </div>

              {/* Book Button */}
              <button 
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className={`w-full btn-primary flex items-center justify-center gap-2 ${
                  !selectedDate || !selectedTime ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Phone className="w-5 h-5" />
                Jetzt per WhatsApp buchen
              </button>
              
              {(!selectedDate || !selectedTime) && (
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Wähle Datum und Uhrzeit, um fortzufahren.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarBooking;
