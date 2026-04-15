import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<'fade-in' | 'visible' | 'fade-out'>('fade-in');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('visible'), 50);
    const t2 = setTimeout(() => setPhase('fade-out'), 1200);
    const t3 = setTimeout(() => onComplete(), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: phase === 'fade-out' ? 0 : 1 }}
    >
      <div
        className="rounded-full bg-[hsl(0,0%,85%)] p-8 md:p-12 transition-opacity duration-700 shadow-[0_0_80px_rgba(255,255,255,0.3)]"
        style={{ opacity: phase === 'fade-in' ? 0 : 1 }}
      >
        <img
          src={logo}
          alt="LuayCars"
          className="h-40 md:h-60 w-auto"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
