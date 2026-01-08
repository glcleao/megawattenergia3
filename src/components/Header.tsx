import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import megawattLogo from '@/assets/megawatt-logo.png';

const FORM_URL = "https://tally.so/r/vGe1qv";

const navLinks = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#testemunhos", label: "Testemunhos" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img 
              src={megawattLogo} 
              alt="MegaWatt Consulting" 
              className="h-8 sm:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary-hover transition-colors"
          >
            Enviar fatura e ver poupança
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary-hover transition-colors"
              >
                Enviar fatura e ver poupança
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
