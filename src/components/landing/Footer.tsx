import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import DusseldorfTowerIcon from './DusseldorfTowerIcon';

const Footer = () => {
  const footerLinks = {
    Services: ['Reifenwechsel', 'Öl-Service', 'Batterie', 'Inspektion', 'Reparaturen'],
    'Hood Rent': ['Flotte Durchstöbern', 'Preise', 'Standorte', 'Business Vermietung'],
    Unternehmen: ['Über Uns', 'Karriere', 'Presse', 'Partner'],
    Support: ['Hilfe Center', 'Kontakt', 'Sicherheit', 'AGB', 'Datenschutz'],
  };

  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <DusseldorfTowerIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-gta text-xl tracking-wider text-gradient">HOOD RENT</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Deine komplette Auto-Lösung. Services, Luxusvermietung und alles dazwischen.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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
            Hood Rent ist eine eingetragene Marke. Düsseldorf, Deutschland.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
