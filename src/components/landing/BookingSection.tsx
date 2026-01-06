import { useState } from 'react';
import { Calendar, Car, Clock, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const cars = [
  { id: 1, name: 'Lamborghini Huracán EVO', price: 1290 },
  { id: 2, name: 'Ferrari 488 GTB', price: 1190 },
  { id: 3, name: 'Porsche 911 GT3', price: 890 },
  { id: 4, name: 'Bentley Continental GT', price: 790 },
  { id: 5, name: 'McLaren 720S', price: 1390 },
  { id: 6, name: 'Rolls-Royce Ghost', price: 990 },
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
    
    // Random availability simulation
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

const BookingSection = () => {
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
    
    // Adjust for Monday start (0 = Monday)
    const startDay = firstDay === 0 ? 6 : firstDay - 1;
    
    const days = [];
    
    // Empty cells for days before the first
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    
    // Days of the month
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

  return (
    <section id="booking" className="py-24 bg-gradient-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Buchung
          </span>
          <h2 className="section-heading mt-4 mb-6">
            Wähle Deinen{' '}
            <span className="text-gradient">Traumwagen</span>
          </h2>
          <p className="section-subheading mx-auto">
            Überprüfe die Verfügbarkeit und sichere dir deinen Wunschtermin in wenigen Klicks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1: Select Car */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs text-primary font-semibold">SCHRITT 1</span>
                <h3 className="font-display font-bold">Fahrzeug wählen</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              {cars.map((car) => (
                <button
                  key={car.id}
                  onClick={() => {
                    setSelectedCar(car.id);
                    setSelectedDate(null);
                    setSelectedTime(null);
                  }}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    selectedCar === car.id 
                      ? 'bg-primary/20 border-primary border-2' 
                      : 'bg-secondary/50 border border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{car.name}</span>
                    {selectedCar === car.id && (
                      <CheckCircle className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <span className="text-primary font-bold">€{car.price}/Tag</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Date */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs text-primary font-semibold">SCHRITT 2</span>
                <h3 className="font-display font-bold">Datum wählen</h3>
              </div>
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
                const isAvailable = slotData?.available && selectedCar;
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

          {/* Step 3: Select Time & Confirm */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs text-primary font-semibold">SCHRITT 3</span>
                <h3 className="font-display font-bold">Uhrzeit & Bestätigen</h3>
              </div>
            </div>
            
            {selectedDate && slots[selectedDate]?.slots.length > 0 ? (
              <>
                <p className="text-sm text-muted-foreground mb-4">
                  Verfügbare Abholzeiten am {new Date(selectedDate).toLocaleDateString('de-DE')}:
                </p>
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
                
                {/* Summary */}
                {selectedTime && selectedCarData && (
                  <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                    <h4 className="font-semibold mb-2">Zusammenfassung</h4>
                    <div className="space-y-1 text-sm">
                      <p><span className="text-muted-foreground">Fahrzeug:</span> {selectedCarData.name}</p>
                      <p><span className="text-muted-foreground">Datum:</span> {new Date(selectedDate).toLocaleDateString('de-DE')}</p>
                      <p><span className="text-muted-foreground">Abholung:</span> {selectedTime} Uhr</p>
                      <p className="pt-2 border-t border-border mt-2">
                        <span className="text-muted-foreground">Tagespreis:</span>{' '}
                        <span className="text-primary font-bold text-lg">€{selectedCarData.price}</span>
                      </p>
                    </div>
                  </div>
                )}
                
                <button 
                  disabled={!selectedTime}
                  className={`w-full btn-primary ${!selectedTime ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Anfrage Senden
                </button>
              </>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Wähle zuerst ein Fahrzeug und Datum aus, um verfügbare Zeiten zu sehen.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
