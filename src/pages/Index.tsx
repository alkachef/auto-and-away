import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import FleetSection from '@/components/landing/FleetSection';
import HowItWorks from '@/components/landing/HowItWorks';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FleetSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
