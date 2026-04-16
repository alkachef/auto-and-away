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
      <div className="relative flex items-center justify-center">
        <div
          className="absolute rounded-full transition-opacity duration-700"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(180,180,180,0.35) 0%, rgba(120,120,120,0.15) 30%, rgba(80,80,80,0.05) 60%, transparent 80%)',
            filter: 'blur(40px)',
            opacity: phase === 'fade-in' ? 0 : 1,
          }}
        />
        <img
          src={logo}
          alt="LuayCars"
          className="relative z-10 h-48 md:h-72 w-auto transition-opacity duration-700 brightness-200"
          style={{ opacity: phase === 'fade-in' ? 0 : 1 }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
