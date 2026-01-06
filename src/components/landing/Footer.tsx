import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const footerLinks = {
    'Flotte': ['Lamborghini', 'Ferrari', 'Porsche', 'Bentley', 'McLaren', 'Rolls-Royce'],
    'Service': ['Buchung', 'Lieferung', 'Concierge', 'Events', 'Hochzeiten'],
    'Rechtliches': ['AGB', 'Datenschutz', 'Impressum', 'Mietbedingungen'],
  };

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Hood Rent Logo" 
                className="h-14 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Exklusive Supercar-Vermietung in Düsseldorf. 
              Erlebe Luxusfahrzeuge der Extraklasse.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+491234567890" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+49 123 456 7890</span>
              </a>
              <a href="mailto:info@hoodrent.de" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@hoodrent.de</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Düsseldorf, Deutschland</span>
              </div>
            </div>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-10 h-10 rounded-lg bg-secondary justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Hood Rent. Alle Rechte vorbehalten.
          </p>
          <p className="text-muted-foreground text-sm">
            Premium Supercar-Vermietung · Düsseldorf, Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
