import { useState } from 'react';
import { Star, Calendar, ChevronLeft, ChevronRight, Clock, CheckCircle, Phone } from 'lucide-react';

const cars = [
  { 
    id: 1,
    name: 'Lamborghini Huracán EVO', 
    category: 'Supercar', 
    price: 1290, 
    rating: 5.0, 
    hp: '640 PS',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
  },
  { 
    id: 2,
    name: 'Ferrari 488 GTB', 
    category: 'Supercar', 
    price: 1190, 
    rating: 5.0, 
    hp: '670 PS',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop',
  },
  { 
    id: 3,
    name: 'Porsche 911 GT3', 
    category: 'Sports GT', 
    price: 890, 
    rating: 4.9, 
    hp: '510 PS',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop',
  },
  { 
    id: 4,
    name: 'Bentley Continental GT', 
    category: 'Grand Tourer', 
    price: 790, 
    rating: 4.9, 
    hp: '659 PS',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&h=400&fit=crop',
  },
  { 
    id: 5,
    name: 'McLaren 720S', 
    category: 'Supercar', 
    price: 1390, 
    rating: 5.0, 
    hp: '720 PS',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&h=400&fit=crop',
  },
  { 
    id: 6,
    name: 'Rolls-Royce Ghost', 
    category: 'Ultra Luxury', 
    price: 990, 
    rating: 5.0, 
    hp: '571 PS',
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&h=400&fit=crop',
  },
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

const FleetSection = () => {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const slots = generateSlots(currentMonth.getFullYear(), currentMonth.getMonth());
  
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

  const selectedCarData = cars.find(c => c.id === selectedCar);

  const handleBooking = () => {
    if (selectedCarData && selectedDate && selectedTime) {
      const message = `Hallo, ich möchte den ${selectedCarData.name} am ${new Date(selectedDate).toLocaleDateString('de-DE')} um ${selectedTime} Uhr mieten.`;
      window.open(`https://wa.me/491234567890?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <section id="fleet" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Unsere Flotte
          </span>
          <h2 className="section-heading mt-4 mb-4">
            Wähle Dein{' '}
            <span className="text-gradient">Traumauto</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Klicke auf ein Fahrzeug, wähle dein Datum und buche direkt.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cars.map((car) => (
            <button
              key={car.id}
              onClick={() => {
                setSelectedCar(car.id);
                setSelectedDate(null);
                setSelectedTime(null);
              }}
              className={`glass rounded-2xl overflow-hidden text-left group transition-all duration-500 hover:-translate-y-2 ${
                selectedCar === car.id 
                  ? 'ring-2 ring-primary shadow-glow' 
                  : 'hover:border-primary/40 hover:shadow-glow'
              }`}
            >
              {/* Car Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary">{car.hp}</span>
                </div>
                {selectedCar === car.id && (
                  <div className="absolute top-4 left-4 bg-primary rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                )}
              </div>
              
              {/* Car Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-primary/80 font-medium uppercase tracking-wider">{car.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                    <span className="text-sm font-semibold">{car.rating}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {car.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-2xl text-primary">€{car.price}</span>
                    <span className="text-sm text-muted-foreground">/Tag</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Booking Panel - shows when car is selected */}
        {selectedCar && (
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={selectedCarData?.image} 
                alt={selectedCarData?.name}
                className="w-20 h-14 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-display font-bold text-xl">{selectedCarData?.name}</h3>
                <p className="text-primary font-bold">€{selectedCarData?.price}/Tag</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calendar */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Datum wählen</h4>
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
                        onClick={() => isAvailable && setSelectedDate(dateStr)}
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
              </div>

              {/* Time Selection & Booking */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Uhrzeit wählen</h4>
                </div>
                
                {selectedDate && slots[selectedDate]?.slots.length > 0 ? (
                  <>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {slots[selectedDate].slots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-xl text-center transition-all ${
                            selectedTime === time
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary/50 hover:bg-primary/20 border border-border'
                          }`}
                        >
                          <span className="font-bold">{time}</span>
                          <span className="text-xs block opacity-70">Uhr</span>
                        </button>
                      ))}
                    </div>
                    
                    {/* Summary & Book Button */}
                    {selectedTime && (
                      <div className="space-y-4">
                        <div className="bg-secondary/50 rounded-xl p-4">
                          <p className="text-sm text-muted-foreground mb-1">Deine Auswahl:</p>
                          <p className="font-semibold">
                            {new Date(selectedDate).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })} um {selectedTime} Uhr
                          </p>
                        </div>
                        
                        <button 
                          onClick={handleBooking}
                          className="w-full btn-primary flex items-center justify-center gap-2"
                        >
                          <Phone className="w-5 h-5" />
                          Jetzt per WhatsApp buchen
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calendar className="w-10 h-10 mx-auto mb-3 opacity-50" />
                    <p className="text-sm">Wähle ein verfügbares Datum aus dem Kalender.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FleetSection;
