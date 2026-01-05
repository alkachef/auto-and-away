import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DusseldorfTowerIcon from './DusseldorfTowerIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Luxusflotte', href: '#hoodrent' },
    { label: 'So Geht\'s', href: '#how-it-works' },
    { label: 'Download', href: '#download' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <DusseldorfTowerIcon className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-gta text-2xl tracking-wider text-gradient">HOOD RENT</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#download" className="btn-primary text-sm">
              App Holen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#download" className="btn-primary text-center text-sm mt-2">
                App Holen
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
