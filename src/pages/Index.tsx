import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import HoodRentSection from '@/components/landing/HoodRentSection';
import HowItWorks from '@/components/landing/HowItWorks';
import DownloadSection from '@/components/landing/DownloadSection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HoodRentSection />
        <HowItWorks />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
